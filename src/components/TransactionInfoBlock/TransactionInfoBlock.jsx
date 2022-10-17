import React from "react";

const TransactionInfoBlock = ({transaction}) => {
    return (
        <div className="flex w-11/12 items-center gap-10 border-solid border-2 rounded-lg p-1 border-slate-100 shadow-md">
            <div className="">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="30px" height="30px"><path fill="#9fa8da" d="M11 24L25 2 39 24 25 32z"/><path fill="#7986cb" d="M25 2L39 24 25 32z"/><path fill="#9fa8da" d="M11 27L25 35 39 27 25 46z"/><path fill="#7986cb" d="M25 35L39 27 25 46zM11 24L25 18 39 24 25 32z"/><path fill="#5c6bc0" d="M25 18L39 24 25 32z"/></svg>
            </div>

            <div className="flex flex-col">
                <p>To: {transaction.receiver}</p>
                <p className="flex gap-1 items-center">Amount: {<span className="text-green-400">{transaction.amount}</span>}</p>
            </div>
        </div>
    );
};

export default TransactionInfoBlock;