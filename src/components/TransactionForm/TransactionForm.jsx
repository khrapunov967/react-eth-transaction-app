import { ethers } from "ethers";
import React, {useState} from "react";
import Title from "../Title/Title";
import Loader from "../UI/Loader/Loader";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";

const TransactionForm = ({userAddress, userBalance, setUserBalance, getCurrentBalance, transactions, setTransactions, setIsSuccessMsgVisible, setErrorInfo}) => {

    const [receiverAddress, setReceiverAddress] = useState("");
    const [amount, setAmount] = useState("");
    const [isPaymentLoading, setIsPaymentLoading] = useState(false);

    const sendEthPayment = async (receiverAddress, amount) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        setIsPaymentLoading(true);
        
        try {
            await signer.sendTransaction({
                to: receiverAddress,
                value: ethers.utils.parseEther(amount)
            });

            localStorage.setItem("transactions", JSON.stringify([...transactions, {id: Date.now(), receiver: receiverAddress, amount: amount}]))            
            setTransactions(JSON.parse(localStorage.getItem("transactions")));
            setIsSuccessMsgVisible(true);
            
            const currUserBalance = await getCurrentBalance(userAddress);
            setUserBalance(currUserBalance);

            localStorage.setItem("userBalance", userBalance);
            
        } catch (error) {
            setErrorInfo({isVisible: true, message: "Invalid Data"})
            console.log(error)

        } finally {
            setIsPaymentLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center gap-2 w-full border-solid border-2 p-2 rounded-lg mb-5 border-slate-100 shadow-md">
            <Title 
                className={"text-2xl font-bold mb-4"} 
                titleName={"Send ETH payment"}
            />
            
            <MyInput 
                placeholder={"Address"} 
                value={receiverAddress}
                onChange={(e) => setReceiverAddress(e.target.value)}
                className={`
                    outline-none 
                    shadow-md
                    border-solid border-2 border-slate-100 rounded-md 
                    w-full 
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
                    transition-border
                    duration-150
                    ease-linear
                    outline-none 
                    shadow-md
                    border-solid border-2 rounded-md 
                    w-full 
                    text-lg 
                    p-2
                    border-slate-100 focus:border-slate-200`
                }
            />

            <MyButton
                disabled={false} 
                onClick={() => sendEthPayment(receiverAddress, amount)}
                buttonName={isPaymentLoading ? <Loader /> : "Send ETH"} 
                className={`
                    text-white 
                    rounded-lg 
                    border-solid border-2
                    px-4 py-2
                    w-full
                    flex justify-center
                    bg-indigo-600 border-indigo-400 hover:bg-indigo-500 
                    transition ease-in-out
                    mt-5`
                }
            />
        </div>
    );
}

export default TransactionForm;