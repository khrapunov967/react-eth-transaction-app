import React from "react";
import EthereumCard from "./EthereumCard";
import SendPaymentForm from "./SendPaymentForm";
import BlueRoundedButton from "./UI/BlueRoundedButton";

const MainSection = () => {
    return (
        <main className="w-full flex px-[45px] justify-between mb-[80px]">
            <section className="max-w-[450px]">
                <h2 className="text-white text-[54px] font-bold leading-tight mb-5">Send ETH secure and rapidly</h2>
                <p className="text-white opacity-50 mb-3">Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p>
                <BlueRoundedButton title={"Let's get started"}/>
            </section>

            <section className="flex flex-col items-center gap-4">
                <EthereumCard />
                <SendPaymentForm />
            </section>
        </main>
    );
};

export default MainSection;