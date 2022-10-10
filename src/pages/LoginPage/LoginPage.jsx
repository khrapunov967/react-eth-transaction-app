import React from "react";
import Title from "../../components/Title/Title";
import MyButton from "../../components/UI/MyButton/MyButton";
import Loader from "../../components/UI/Loader/Loader";

const LoginPage = ({connectMetamaskWallet, isLoading}) => {

    return (
        <section className="w-full h-full flex flex-col justify-center items-center">
            <Title 
                titleName={"Fast and convinient ETH transactions."} 
                className={"text-4xl font-bold mb-10"}
            />
            
            <MyButton 
                className={`
                    bg-indigo-600 
                    text-white 
                    rounded-lg 
                    border-solid border-2 border-indigo-400 
                    px-4 py-2 
                    hover:bg-indigo-500 
                    transition ease-in-out`
                }
                buttonName={isLoading ? <Loader /> :"Login with Metamask"}
                onClick={connectMetamaskWallet}
            />
        </section>
    );
};

export default LoginPage;