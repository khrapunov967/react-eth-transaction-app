import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import TransactionsHistorySection from "./components/TransactionsHistorySection";
import { Context } from "./context";


function App() {

  const [state, setState] = useState({
    userAddress: "",
    userBalance: null,
    transactions: [],
    isWalletConnecting: false
  });

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
    }
  }

  // const accountChangedHandler = async (accountAddress) => {
  //   setUserAddress(accountAddress);

  //   const balance = await getCurrentBalance(accountAddress);
  //   setUserBalance(balance);
  // };

  // const getCurrentBalance = async (address) => {
  //   const balance = await window.ethereum.request({method: "eth_getBalance", params: [address, "latest"]});
  //   const convertedBalance = ethers.utils.formatEther(balance);

  //   return convertedBalance;
  // };

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

  return (
    <Context.Provider value={{state, connectWallet, getTruncatedEthAddress}}>
      <div className="max-w-[1300px] my-0 mx-auto">
        <Header />
        <MainSection />
        <TransactionsHistorySection />
      </div>
    </Context.Provider>
  );
}

export default App;
