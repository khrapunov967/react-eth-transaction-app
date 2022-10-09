import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import TransactionForm from "../../components/TransactionForm/TransactionForm";

const MainPage = ({userAddress, userBalance}) => {
    return (
        <section className="w-full flex flex-col items-center pt-7">
            <ProfileCard userAddress={userAddress} userBalance={userBalance}/>
            <TransactionForm userBalance={userBalance}/>
        </section>
    );
};

export default MainPage;