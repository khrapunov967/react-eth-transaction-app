import React from "react";
import DateContainer from "./DateContainer";

const TransactionsHistoryItem = () => {
    return (
        <div className="flex flex-col bg-gray-900 shadow-lg rounded-lg px-4 pt-7">
            <div className="mb-3">
                <p className="text-white text-[17px]">From: 0x2A1...b81a</p>
                <p className="text-white text-[17px]">To: 0x2A1...b81a</p>
                <p className="text-white text-[17px]">Amount: 1.5 ETH</p>
            </div>

            <img src="https://media.giphy.com/media/QnU6mOrBbElaIQz4Fe/giphy.gif" className="w-[300px] h-[300px] rounded-lg"/>

            <div className="w-full flex justify-center relative z-10 top-[-25px]">
                <DateContainer />
            </div>
        </div>
    );
};

export default TransactionsHistoryItem;