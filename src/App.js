import React, {useState} from "react";
import { ethers } from "ethers";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";

function App() {

  const [userAddress, setUserAddress] = useState(null);
  const [userBalance, setUserBalance] = useState(null);


  const connectMetamaskWallet = async (e) => {
    e.preventDefault();
    const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
    // console.log(accounts);
    accountChangedHandler(accounts[0]);
  }

  const accountChangedHandler = async (accountAddress) => {
    setUserAddress(accountAddress);
    const balance = await window.ethereum.request({method: "eth_getBalance", params: [accountAddress, "latest"]});
    setUserBalance(ethers.utils.formatEther(balance));
  };

  return (
    <div className="wrapper">
      {
        (userAddress) ? <MainPage userAddress={userAddress} userBalance={userBalance}/>
                      : <LoginPage connectMetamaskWallet={connectMetamaskWallet} />
      }
    </div>
  );
}

export default App;
