import React from "react";
import EthereumImage from "../assets/images/ethereum.svg"

const EthereumCard = () => {
    return (
        <div className="flex flex-col justify-between w-[300px] h-[160px] rounded-lg shadow-lg p-3 bg-gradient-to-tl from-green-400 via-red-200 to-blue-400">
            <div className="w-full flex">
                <img 
                    src={EthereumImage} 
                    alt="Eth" 
                    className="w-[38px] h-[38px] border-solid border-[1px] border-white p-2 rounded-full"
                />
            </div>

            <div className="w-full flex flex-col gap-2">
                <p className="text-white font-bold">...</p>
                <p className="text-white font-semibold">Ethereum</p>
            </div>
        </div>
    );
};

export default EthereumCard;