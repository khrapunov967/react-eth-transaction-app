import React, { useContext } from "react";
import { Context } from "../context";
import TransactionsHistoryItem from "./TransactionsHistoryItem";

const TransactionsHistorySection = () => {

    const {state} = useContext(Context);

    return (    
        <section className="animate-slideup w-full max-w-[1600px] my-0 mx-auto flex flex-col items-center px-5">
            <h2 className="text-white text-[44px] mb-10 text-center">
                Latest Transactions
            </h2>

            <section className="w-full flex flex-wrap gap-[32px] justify-center">
                {
                    state.transactions.map(transaction => <TransactionsHistoryItem transaction={transaction} key={transaction.id}/>)
                }
            </section>
        </section>
    );
};

export default TransactionsHistorySection;