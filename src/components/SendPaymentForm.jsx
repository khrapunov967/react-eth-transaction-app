import React, { useState, useContext } from "react";
import { ethers } from "ethers";
import { Context } from "../context";
import { gifUrls } from "../utils/constants";
import Loader from "./UI/Loader";

const SendPaymentForm = () => {

    const [payment, setPayment] = useState({
        receiver: "",
        amount: "",
        isPaymentProcessing: false
    });

    const {state, setState, getTruncatedEthAddress} = useContext(Context);

    const getCurrentDate = () => {
        const today = new Date();

        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); 
        const year = today.getFullYear();

        return `${day}.${month}.${year}`;
    };

    const getRandomGifUrl = () => {
        return gifUrls[Math.floor(Math.random()*gifUrls.length)];
    }

    const sendEthPayment = async (e) => {
        e.preventDefault();

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        setPayment({
            ...payment,
            isPaymentProcessing: true
        });

        try {
            await signer.sendTransaction({
                to: payment.receiver,
                value: ethers.utils.parseEther(payment.amount)
            });

            const newTransaction = {
                id: Date.now(),
                from: getTruncatedEthAddress(state.userAddress),
                to: getTruncatedEthAddress(payment.receiver),
                amount: payment.amount,
                date: getCurrentDate(),
                gif: getRandomGifUrl()
            };

            setState({
                ...state,
                transactions: [...state.transactions, newTransaction]
            });

        } catch (err) {
            console.log(err.name);

        } finally {
            setPayment({
                ...payment,
                receiver: "",
                amount: "",
                isPaymentProcessing: false
            });
        }
    };

    return (
        <form action="#" className="bg-[#131336] flex flex-col gap-2 p-4 rounded-lg shadow-lg w-full max-w-[400px]">
            <input 
                value={payment.receiver}
                onChange={(e) => setPayment({...payment, receiver: e.target.value})}
                type="text" 
                name="addressTo" 
                placeholder="Address To" 
                className="outline-none p-2 bg-[#1e1e4d] text-white rounded-md"
            />

            <input 
                value={payment.amount}
                onChange={(e) => setPayment({...payment, amount: e.target.value})}
                type="text" 
                name="amount" 
                placeholder="Amount (ETH)" 
                className="outline-none p-2 bg-[#1e1e4d] text-white rounded-md"
            />

            <button 
                className="flex justify-center mt-5 w-full h-[36px] border-solid border-[2px] border-[#1e1e4d] text-white py-1 rounded-[32px]"
                onClick={sendEthPayment}
            >
                {payment.isPaymentProcessing ? <Loader /> : "Send now"}
            </button>
        </form>
    );
};

export default SendPaymentForm;