import { ethers } from "ethers";
import React from "react";
import { useState } from "react";

const SendPaymentForm = () => {

    const [paymentState, setPaymentState] = useState({
        receiver: "",
        amount: null,
        isPaymentProcessing: false
    });

    const sendEthPayment = async (e) => {
        e.preventDefault();

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        try {
            await signer.sendTransaction({
                to: paymentState.receiver,
                value: ethers.utils.parseEther(paymentState.amount)
            });

            // add transaction info to array
        } catch (err) {
            console.log(err.name);

        } finally {
            // end loading
        }
    };

    return (
        <form action="#" className="bg-[#131336] flex flex-col gap-2 p-4 rounded-lg shadow-lg w-[400px]">
            <input 
                value={paymentState.receiver}
                onChange={(e) => setPaymentState({...paymentState, receiver: e.target.value})}
                type="text" 
                name="addressTo" 
                placeholder="Address To" 
                className="outline-none p-2 bg-[#1e1e4d] text-white rounded-md"
            />

            <input 
                value={paymentState.amount}
                onChange={(e) => setPaymentState({...paymentState, amount: e.target.value})}
                type="text" 
                name="amount" 
                placeholder="Amount (ETH)" 
                className="outline-none p-2 bg-[#1e1e4d] text-white rounded-md"
            />
            <input type="text" name="addressTo" placeholder="Keyword for GIF" className="outline-none p-2 bg-[#1e1e4d] text-white rounded-md"/>

            <button 
                className="mt-5 w-full border-solid border-[2px] border-[#1e1e4d] text-white py-1 rounded-[32px]"
                onClick={sendEthPayment}
            >
                Send now
            </button>
        </form>
    );
};

export default SendPaymentForm;