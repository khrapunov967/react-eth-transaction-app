import React from "react";
import TransactionsHistoryItem from "./TransactionsHistoryItem";

const TransactionsHistorySection = () => {
    return (    
        <section className="w-full flex flex-col items-center mb-[50px] px-5">
            <h2 className="text-white text-[44px] mb-10">Transactions History</h2>

            <section className="w-full flex flex-wrap gap-[32px] justify-center">
                <TransactionsHistoryItem />
                <TransactionsHistoryItem />
                <TransactionsHistoryItem />
                <TransactionsHistoryItem />
                <TransactionsHistoryItem />
                <TransactionsHistoryItem />
                <TransactionsHistoryItem />
                <TransactionsHistoryItem />
                <TransactionsHistoryItem />
            </section>
        </section>
    );
};

export default TransactionsHistorySection;