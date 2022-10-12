import React, {useState} from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import TransactionsHistorySection from "../../components/TransactionsHistorySection/TransactionsHistorySection";
import ErrorNotification from "../../components/UI/ErrorNotification/ErrorNotification";
import SuccessNotification from "../../components/UI/SuccessNotification/SuccessNotification";

const MainPage = ({userAddress, userBalance, getCurrentBalance, setUserBalance, transactions, setTransactions}) => {

    const [isSuccessMsgVisible, setIsSuccessMsgVisible] = useState(false);
    const [errorInfo, setErrorInfo] = useState({
        isVisible: false,
        message: ""
    });

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