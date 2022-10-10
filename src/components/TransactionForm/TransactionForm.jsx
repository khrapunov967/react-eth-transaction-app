import React, {useState} from "react";
import Title from "../Title/Title";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";

const TransactionForm = ({userBalance}) => {

    const [amount, setAmount] = useState("");

    return (
        <div className="flex flex-col items-center gap-2 w-full border-solid border-2 p-2 rounded-lg">
            <Title className={"text-2xl font-bold mb-4"} titleName={"Send ETH"}/>
            
            <MyInput 
                placeholder={"Address"} 
                className={`
                    outline-none 
                    border-solid border-2 border-stone-200 rounded-md 
                    w-full 
                    text-lg 
                    p-2
                    focus:shadow-md
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
                    border-solid border-2 rounded-md 
                    w-full 
                    text-lg 
                    p-2
                    focus:shadow-md
                    ${(+amount > userBalance) ? "border-red-400 text-red-400" : "border-stone-200"}`
                }
            />

            <MyButton
                disabled={(+amount > userBalance) ? true : false} 
                buttonName={"Send"} 
                className={`
                    text-white 
                    rounded-lg 
                    border-solid border-2
                    px-4 py-2
                    w-full
                    ${+amount > userBalance ? 
                        "bg-gray-400 border-gray-300 cursor-no-drop opacity-6" : 
                        "bg-indigo-600 border-indigo-400 hover:bg-indigo-500"
                    }  
                    transition ease-in-out
                    mt-5`
                }
            />
        </div>
    );
}

export default TransactionForm;