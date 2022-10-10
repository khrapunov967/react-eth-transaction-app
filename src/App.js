import React, {useState} from "react";
import { ethers } from "ethers";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";

function App() {

  const [userAddress, setUserAddress] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  const connectMetamaskWallet = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
      accountChangedHandler(accounts[0]);

    } catch (error) {
      console.log(error);

    } finally {
      setIsLoading(false);
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
        (userAddress) ? <MainPage userAddress={userAddress} userBalance={userBalance}/> : 
        <LoginPage connectMetamaskWallet={connectMetamaskWallet} isLoading={isLoading}/>
      }
    </div>
  );
}

export default App;
