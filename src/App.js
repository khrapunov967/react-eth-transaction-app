import React from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import TransactionsHistorySection from "./components/TransactionsHistorySection";


function App() {
  return (
    <div className="max-w-[1440px] my-0 mx-auto">
      <Header />
      <MainSection />
      <TransactionsHistorySection />
    </div>
  );
}

export default App;
