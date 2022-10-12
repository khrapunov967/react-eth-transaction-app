import React, {useState, useEffect} from "react";
import { ethers } from "ethers";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import TransactionsHistorySection from "../../components/TransactionsHistorySection/TransactionsHistorySection";
import ErrorNotification from "../../components/UI/ErrorNotification/ErrorNotification";
import SuccessNotification from "../../components/UI/SuccessNotification/SuccessNotification";

const MainPage = ({userAddress, userBalance, setUserAddress, getCurrentBalance, setUserBalance, transactions, setTransactions}) => {

    const [isSuccessMsgVisible, setIsSuccessMsgVisible] = useState(false);
    const [errorInfo, setErrorInfo] = useState({
        isVisible: false,
        message: ""
    });

    useEffect(() => {
        (async (address) => {
          const balance = await window.ethereum.request({method: "eth_getBalance", params: [address, "latest"]});
          const convertedBalance = ethers.utils.formatEther(balance);
      
          return convertedBalance;
        })(userAddress).then(value => setUserBalance(value));
    
        localStorage.setItem("userBalance", userBalance);
    
        setUserAddress(localStorage.getItem("userAddress") ?? "");
        setTransactions(JSON.parse(localStorage.getItem("transactions")) ?? []);
      }, []);

    return (
        <section className="w-full flex flex-col items-center pt-5">
            <SuccessNotification 
                msg={"Success"} 
                isVisible={isSuccessMsgVisible} 
                setIsVisible={setIsSuccessMsgVisible}
            />

            <ErrorNotification 
                msg={errorInfo.message}
                errorInfo={errorInfo}
                setErrorInfo={setErrorInfo}
            />

            <ProfileCard 
                userAddress={userAddress} 
                userBalance={userBalance} 
            />

            <TransactionForm 
                userAddress={userAddress}
                userBalance={userBalance} 
                setUserBalance={setUserBalance}
                getCurrentBalance={getCurrentBalance}
                transactions={transactions} 
                setTransactions={setTransactions}
                setIsSuccessMsgVisible={setIsSuccessMsgVisible}
                setErrorInfo={setErrorInfo}
            />

            <TransactionsHistorySection 
                transactions={transactions}
            />
        </section>
    );
};

export default MainPage;