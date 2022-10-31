import React from "react";
import EthereumCard from "./components/EthereumCard";
import Header from "./components/Header";


function App() {
  return (
    <div className="max-w-[1440px] my-0 mx-auto mb-[20px]">
      <Header />
      <EthereumCard />
    </div>
  );
}

export default App;
