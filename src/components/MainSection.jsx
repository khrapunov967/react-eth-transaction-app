import React, { useContext } from "react";
import { Context } from "../context";
import EthereumCard from "./EthereumCard";
import SendPaymentForm from "./SendPaymentForm";
import BlueRoundedButton from "./UI/BlueRoundedButton";
import Loader from "./UI/Loader";

const MainSection = () => {

    const {state, connectWallet} = useContext(Context);

    return (
        <main className="w-full flex px-[25px] mb-[80px] justify-between max-md-screen:justify-center">
            <section className="max-w-[450px] max-md-screen:hidden">
                <h2 className="text-white text-[54px] font-bold leading-tight mb-5">Send ETH secure and rapidly</h2>
                
                <p className="text-white opacity-50 mb-3">Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p>

                <BlueRoundedButton 
                    title={state.isWalletConnecting ? <Loader /> : "Let's get started"}
                    onClick={connectWallet}
                    isVisible={state.userAddress ? false : true}
                    extraStyles={"w-full max-w-[180px] max-h-[36px]"}
                />
            </section>

            <section className="w-full flex flex-col items-center gap-4">
                <EthereumCard />

                <SendPaymentForm />
            </section>
        </main>
    );
};

export default MainSection;