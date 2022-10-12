import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";

function App() {

  const [userAddress, setUserAddress] = useState("");
  const [userBalance, setUserBalance] = useState("");

  const [isLoginLoading, setIsLoginLoading] = useState(false);

  const [transactions, setTransactions] = useState(JSON.parse(localStorage.getItem("transactions")) ?? []);

  useEffect(() => {
    // ADD UPDATE CURRENT BALANCE FUNCTIONALITY
    setUserAddress(localStorage.getItem("userAddress") ?? "");
    setUserBalance(localStorage.getItem("userBalance") ?? "");
  }, []);


  const connectWallet = async (e) => {
    e.preventDefault();
    setIsLoginLoading(true);
    
    try {
      const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
      accountChangedHandler(accounts[0]);

    } catch (error) {
      console.log(error);

    } finally {
      setIsLoginLoading(false);
    }
  }

  const getCurrentBalance = async (address) => {
    const balance = await window.ethereum.request({method: "eth_getBalance", params: [address, "latest"]});
    const convertedBalance = ethers.utils.formatEther(balance);

    return convertedBalance;
  }

  const accountChangedHandler = async (accountAddress) => {
    setUserAddress(accountAddress);
    localStorage.setItem("userAddress", accountAddress);

    const balance = await getCurrentBalance(accountAddress);

    setUserBalance(balance);
    localStorage.setItem("userBalance", balance)
  };

  return (
    <div className="wrapper">
      {(userAddress) ? 
        <MainPage 
          userAddress={userAddress} 
          userBalance={userBalance} 
          setUserBalance={setUserBalance}
          getCurrentBalance={getCurrentBalance}
          transactions={transactions} 
          setTransactions={setTransactions}
        /> : 
        <LoginPage 
          connectWallet={connectWallet} 
          isLoginLoading={isLoginLoading}
        />
      }
    </div>
  );
}

export default App;
