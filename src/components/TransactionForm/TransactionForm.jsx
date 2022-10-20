import { ethers } from "ethers";
import React, {useState} from "react";
import Title from "../Title/Title";
import Loader from "../UI/Loader/Loader";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";

const TransactionForm = ({transactions, setTransactions, setSuccessNotificationData, setErrorNotificationData}) => {

    const [receiverAddress, setReceiverAddress] = useState("");
    const [amount, setAmount] = useState("");
    const [isPaymentLoading, setIsPaymentLoading] = useState(false);


    const getCurrentDate = () => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); 
        const year = today.getFullYear();

        return `${day}.${month}.${year}`;
    }


    const getErrorMessage = (errorType) => {

        switch(errorType) {
            case "ACTION_REJECTED":
                return "Payment Denied";
            
            case "UNSUPPORTED_OPERATION":
                return "Metamask is not connected!"
                
            default:
                return "Invalid Address And/Or Amount"
        };
    };

    
    const sendEthPayment = async (receiverAddress, amount) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        setIsPaymentLoading(true);
        
        try {
            await signer.sendTransaction({
                to: receiverAddress,
                value: ethers.utils.parseEther(amount)
            });

            const newTransactionItem = {
                id: Date.now(), 
                receiver: receiverAddress, 
                amount: amount, 
                date: getCurrentDate()
            };

            setTransactions([...transactions, newTransactionItem]);         

            setSuccessNotificationData({
                isVisible: true,
                message: "Payment Was Successful"
            });
            
        } catch (e) {
            const errorMessage = getErrorMessage(e.code);
            console.log(e.code);

            setErrorNotificationData({
                isVisible: true, 
                message: errorMessage
            });

        } finally {
            setIsPaymentLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center gap-2 w-full border-solid border-2 p-2 rounded-lg mb-5 border-slate-100 shadow-lg">
            <Title 
                className={"text-2xl font-bold mb-4"} 
                titleName={"Send ETH payment"}
            />
            
            <MyInput 
                placeholder={"Address"} 
                value={receiverAddress}
                onChange={(e) => setReceiverAddress(e.target.value)}
                className={`
                    w-full
                    outline-none 
                    shadow-md
                    border-solid border-2 border-slate-100 rounded-md 
                    text-lg 
                    focus:border-slate-200
                    p-2
                    duration-150`}
            />

            <MyInput 
                placeholder={"Amount"} 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className={`
                    w-full 
                    transition-border
                    duration-150
                    ease-linear
                    outline-none 
                    shadow-md
                    border-solid border-2 rounded-md 
                    text-lg 
                    p-2
                    border-slate-100 focus:border-slate-200`}
            />

            <MyButton
                disabled={false} 
                onClick={() => sendEthPayment(receiverAddress, amount)}
                buttonName={isPaymentLoading ? <Loader mainColor={"#fff"} secondaryColor={"#f0f0f0"}/> : "Send ETH"} 
                className={`
                    w-full
                    text-white 
                    rounded-lg 
                    border-solid border-2
                    py-2
                    flex justify-center
                    bg-indigo-600 border-indigo-400 hover:bg-indigo-500 
                    transition ease-in-out
                    mt-5`}
            />
        </div>
    );
}

export default TransactionForm;