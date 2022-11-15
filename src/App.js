import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Context } from "./context";
import { getTruncatedEthAddress, refreshPage } from "./utils/funcs";
import FirestoreService from "./API/FirestoreService";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import TransactionsHistorySection from "./components/TransactionsHistorySection";


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
      <div className="w-full min-h-screen bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 my-0 mx-auto">
        <div className="w-full sticky top-0 shadow-lg z-20">
          <Header />
        </div>
        <MainSection />
        <TransactionsHistorySection />
      </div>
    </Context.Provider>
  );
}

export default App;
