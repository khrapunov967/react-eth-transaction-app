import React, {useState, useEffect} from "react";
import { ethers } from "ethers";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import TransactionsHistorySection from "../../components/TransactionsHistorySection/TransactionsHistorySection";
import ErrorNotification from "../../components/UI/ErrorNotification/ErrorNotification";
import SuccessNotification from "../../components/UI/SuccessNotification/SuccessNotification";
import Loader from "../../components/UI/Loader/Loader";

const MainPage = ({userAddress, userBalance, getCurrentBalance, setUserBalance, transactions, setTransactions}) => {

    const [successNotificationData, setSuccessNotificationData] = useState({
        isVisible: false,
        message: ""
    });

    const [errorNotificationData, setErrorNotificationData] = useState({
        isVisible: false,
        message: ""
    });

    const [isBalanceLoading, setIsBalanceLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setIsBalanceLoading(true);

            const currentBalance = await getCurrentBalance(userAddress);
            return currentBalance;
        })().then(value => {
            setUserBalance(value);
            setIsBalanceLoading(false);
        })
      }, []);

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions));
    }, [transactions]);

    return (
        <section className="w-full flex flex-col items-center pt-5">
            <SuccessNotification 
                successNotificationData={successNotificationData}
                setSuccessNotificationData={setSuccessNotificationData}
            />

            <ErrorNotification 
                errorNotificationData={errorNotificationData}
                setErrorNotificationData={setErrorNotificationData}
            />

            <ProfileCard 
                userAddress={userAddress} 
                userBalance={isBalanceLoading ? <Loader mainColor={"blue"} secondaryColor={"white"}/> : userBalance} 
            />

            <TransactionForm 
                transactions={transactions} 
                setTransactions={setTransactions}
                setSuccessNotificationData={setSuccessNotificationData}
                setErrorNotificationData={setErrorNotificationData}
            />

            <TransactionsHistorySection 
                transactions={transactions}
            />
        </section>
    );
};

export default MainPage;