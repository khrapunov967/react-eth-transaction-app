import React from "react";
import Header from "../components/Header";
import MainSection from "../components/MainSection"
import TransactionsHistorySection from "../components/TransactionsHistorySection";
import { useScrollPosition } from "../hooks/useScrollPosition";

const MainPage = () => {

    const scrollPosition = useScrollPosition();

    return (
        <section className="w-full pb-[50px] min-h-screen bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 my-0 mx-auto">
            <div className={"w-full sticky top-0 z-20 transition-all duration-300 " + `${+scrollPosition > 95 ? "sticky shadow-lg bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900" : ""}`}>
                <Header />
            </div>

            <MainSection />

            <TransactionsHistorySection />
        </section>
    );
};

export default MainPage;