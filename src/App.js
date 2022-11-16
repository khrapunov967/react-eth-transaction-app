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
    transactions: [],
    isWalletConnecting: false
  });


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
      const transactions = await FirestoreService.getTransactions();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.listAccounts();

      return {
        userAddress: accounts[0] ?? "",
        transactions: transactions ?? []
      };

    })().then(({userAddress, transactions}) => setState({
      ...state,
      userAddress,
      transactions
    }));
    
  }, []);
  
  return (
    <Context.Provider value={{state, setState, connectWallet, getTruncatedEthAddress}}>
      <Routes>
        <Route path="/" element={<MainPage />}/>
      </Routes>
    </Context.Provider>
  );
}

export default App;
