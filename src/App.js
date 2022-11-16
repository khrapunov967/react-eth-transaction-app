import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ethers } from "ethers";
import { Context } from "./context";
import { getTruncatedEthAddress, refreshPage } from "./utils/funcs";
import FirestoreService from "./API/FirestoreService";
import MainPage from "./pages/MainPage";


function App() {

  const [state, setState] = useState({
    userAddress: "",
    userBalance: null,
    transactions: [],
    isWalletConnecting: false
  });

  
  const getTransactionsFromDB = () => {
    FirestoreService.getTransactions()
      .then(value => setState({
        ...state,
        transactions: value
      }));
  };


  const connectWallet = async (e) => {
    e.preventDefault();

    setState({
      ...state,
      isWalletConnecting: true
    });

    try {
      const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
      setState({
        ...state,
        userAddress: accounts[0]
      });

    } catch (error) {
      console.log(error.name)

    } finally {
      setState({
        ...state,
        isWalletConnecting: false
      })

      refreshPage()
    }
  };


  useEffect(() => {
    (async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.listAccounts();

        return accounts[0];
        
      } catch (e) {
        return "";
      }

    })().then(address => setState({
      ...state,
      userAddress: address
    }));

  }, []);
  
  getTransactionsFromDB();
  
  return (
    <Context.Provider value={{state, setState, connectWallet, getTruncatedEthAddress}}>
      <Routes>
        <Route path="/" element={<MainPage />}/>
      </Routes>
    </Context.Provider>
  );
}

export default App;
