import React from "react";
import DateContainer from "./DateContainer";

const TransactionsHistoryItem = ({transaction}) => {
    return (
        <div className="flex flex-col bg-gray-900 shadow-lg rounded-lg px-4 pt-7">
            <div className="mb-3">
                <p className="text-white text-[17px]">From: {transaction.from}</p>
                <p className="text-white text-[17px]">To: {transaction.to}</p>
                <p className="text-white text-[17px]">Amount: {transaction.amount} ETH</p>
            </div>

            <img src={transaction.gif} className="w-[300px] h-[300px] rounded-lg"/>

            <div className="w-full flex justify-center relative z-10 top-[-25px]">
                <DateContainer date={transaction.date}/>
            </div>
        </div>
    );
};

export default TransactionsHistoryItem;