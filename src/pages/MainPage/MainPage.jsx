import React, {useState} from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import TransactionsHistorySection from "../../components/TransactionsHistorySection/TransactionsHistorySection";
import SuccessNotification from "../../components/UI/SuccessNotification/SuccessNotification";

const MainPage = ({userAddress, userBalance, transactions, setTransactions}) => {

    const [isSuccessMsgVisible, setIsSuccessMsgVisible] = useState(false);

    return (
        <section className="w-full flex flex-col items-center pt-5">
            <SuccessNotification 
                msg={"Success"} 
                isVisible={isSuccessMsgVisible} 
                setIsVisible={setIsSuccessMsgVisible}
            />

            <ProfileCard 
                userAddress={userAddress} 
                userBalance={userBalance} 
            />

            <TransactionForm 
                userBalance={userBalance} 
                transactions={transactions} 
                setTransactions={setTransactions}
                setIsSuccessMsgVisible={setIsSuccessMsgVisible}
            />

            <TransactionsHistorySection 
                transactions={transactions}
            />
        </section>
    );
};

export default MainPage;