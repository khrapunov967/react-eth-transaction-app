import React, {useReducer, useState} from "react";
// import { ethers } from "ethers";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import TransactionsHistorySection from "./components/TransactionsHistorySection";
import { Context } from "./context";


function App() {

  const [state, setState] = useState({
    userAddress: "",
    truncatedUserAddress: "",
    userBalance: null,
    transactions: []
  });

  const connectWallet = async (e) => {
    e.preventDefault();

    try {
      const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
      setState({
        ...state,
        userAddress: accounts[0]
      });

    } catch (error) {
      console.log(error.name)

    } finally {
      console.log("loading end")
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

  return (
    <Context.Provider value={{state, connectWallet}}>
      <div className="max-w-[1300px] my-0 mx-auto">
        <Header />
        <MainSection />
        <TransactionsHistorySection />
      </div>
    </Context.Provider>
  );
}

export default App;
