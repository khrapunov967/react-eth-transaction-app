import React from "react";

const SendPaymentForm = () => {
    return (
        <form action="#" className="bg-[#131336] flex flex-col gap-2 p-4 rounded-lg shadow-lg w-[350px]">
            <input type="text" name="addressTo" placeholder="Address To" className="outline-none p-2 bg-[#1e1e4d] text-white rounded-md"/>
            <input type="text" name="addressTo" placeholder="Amount (ETH)" className="outline-none p-2 bg-[#1e1e4d] text-white rounded-md"/>
            <input type="text" name="addressTo" placeholder="Keyword for GIF" className="outline-none p-2 bg-[#1e1e4d] text-white rounded-md"/>

            <button className="mt-5 w-full border-solid border-[2px] border-[#1e1e4d] text-white py-1 rounded-[32px]">Send now</button>
        </form>
    );
};

export default SendPaymentForm;