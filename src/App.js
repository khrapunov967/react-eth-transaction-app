import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Context } from "./context";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import TransactionsHistorySection from "./components/TransactionsHistorySection";


function App() {

  const [state, setState] = useState({
    userAddress: "",
    userBalance: null,
    transactions: JSON.parse(localStorage.getItem("transactions")) || [],
    isWalletConnecting: false
  });
  

  const refreshPage = () => {
    window.location.reload(false);
  }


  const getTruncatedEthAddress = (ethAddress) => {
    return `${ethAddress.slice(0, 3)}...${ethAddress.slice(ethAddress.length - 3)}`
  }


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


  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions))
  }, [state.transactions])

  return (
    <Context.Provider value={{state, setState, connectWallet, getTruncatedEthAddress}}>
      <div className="max-w-[1300px] my-0 mx-auto">
        <Header />
        <MainSection />
        <TransactionsHistorySection />
      </div>
    </Context.Provider>
  );
}

export default App;
