import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import TransactionsHistorySection from "../../components/TransactionsHistorySection/TransactionsHistorySection";
import SuccessNotification from "../../components/UI/SuccessNotification/SuccessNotification";

const MainPage = ({userAddress, userBalance, transactions, setTransactions}) => {
    return (
        <section className="w-full flex flex-col items-center pt-5">
            <SuccessNotification msg={"Success"}/>
            <ProfileCard userAddress={userAddress} userBalance={userBalance} />
            <TransactionForm userBalance={userBalance} transactions={transactions} setTransactions={setTransactions}/>
            <TransactionsHistorySection transactions={transactions}/>
        </section>
    );
};

export default MainPage;