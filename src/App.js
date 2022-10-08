import React, {useState} from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";

function App() {

  const [userAddress, setUserAddress] = useState("");

  const connectMetamaskWallet = async (e) => {
    e.preventDefault();
    const response = await window.ethereum.send("eth_requestAccounts");
    setUserAddress(response.result[0]);
  }

  return (
    <div className="wrapper">
      {!!userAddress ? <MainPage userAddress={userAddress}/> : <LoginPage connectMetamaskWallet={connectMetamaskWallet} />}
    </div>
  );
}

export default App;
