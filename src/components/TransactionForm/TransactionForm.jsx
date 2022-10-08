import React from "react";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";

const TransactionForm = () => {
    return (
        <div className="flex flex-col gap-2 w-96">
            <MyInput 
                placeholder={"Address"} 
                className={"outline-none border-solid border-2 border-stone-200 rounded-md w-full text-lg p-2"}
            />

            <MyInput 
                placeholder={"Amount"} 
                className={"outline-none border-solid border-2 border-stone-200 rounded-md w-full text-lg p-2"}
            />

            <MyButton 
                buttonName={"Send"} 
                className={`
                    bg-indigo-600 
                    text-white 
                    rounded-lg 
                    border-solid border-2 border-indigo-400 
                    px-4 py-2 
                    hover:bg-indigo-500 
                    transition ease-in-out
                    mt-5`
                }
            />
        </div>
    );
}

export default TransactionForm;