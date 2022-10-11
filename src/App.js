import React, {useState} from "react";
import { ethers } from "ethers";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";

function App() {

  const [userAddress, setUserAddress] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [transactions, setTransactions] = useState([
    {id: 1, receiver: "0x2a1135e669a5f16b46daafb718f6aa4f3818b81aOO", amount: "0.01"},
    {id: 2, receiver: "0x2a1135e669a5f16b46daafb718f6aa4f3818b81a", amount: "0.2"},
    {id: 3, receiver: "0x2a1135e669a5f16b46daafb718f6aa4f3818b81a", amount: "0.015"},
  ]);


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

  const accountChangedHandler = async (accountAddress) => {
    setUserAddress(accountAddress);
    const balance = await window.ethereum.request({method: "eth_getBalance", params: [accountAddress, "latest"]});
    setUserBalance(ethers.utils.formatEther(balance));
  };

  return (
    <div className="wrapper">
      {
        (userAddress) ? <MainPage userAddress={userAddress} userBalance={userBalance} transactions={transactions} setTransactions={setTransactions}/> : 
        <LoginPage connectWallet={connectWallet} isLoginLoading={isLoginLoading}/>
      }
    </div>
  );
}

export default App;
