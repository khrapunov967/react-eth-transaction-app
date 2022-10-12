import React from "react";
import Title from "../Title/Title";
import TransactionInfoBlock from "../TransactionInfoBlock/TransactionInfoBlock";

const TransactionsHistorySection = ({transactions}) => {
    return (
        <div className="w-full flex flex-col gap-3 items-center border-solid rounded-lg border-2 shadow-md mb-5 border-slate-100 px-2 pt-2 pb-4">
            <Title 
                titleName={"Transactions  History"} 
                className={"text-2xl font-bold mb-4"}
            />

            {   
                transactions.length ? transactions.map(transaction => <TransactionInfoBlock transaction={transaction} key={transaction.id}/>)
                : <p className="opacity-70">No Transactions Yet</p>
            }
        </div>
    );
};

export default TransactionsHistorySection;