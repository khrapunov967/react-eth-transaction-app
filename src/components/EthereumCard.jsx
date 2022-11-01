import React, { useContext } from "react";
import EthereumImage from "../assets/images/ethereum.svg"
import { Context } from "../context";

const EthereumCard = () => {

    const {state, getTruncatedEthAddress} = useContext(Context);
    
    return (
        <div className="cursor-pointer flex flex-col justify-between w-full max-w-[300px] h-[160px] rounded-lg shadow-lg p-3 bg-gradient-to-tl from-green-700 via-purple-500 to-[#1e1e4d] transiton-all duration-150 ease-linear hover:translate-y-[-2px]">
            <div className="w-full flex">
                <img 
                    src={EthereumImage} 
                    alt="Eth" 
                    className="w-[38px] h-[38px] border-solid border-[1px] border-white p-2 rounded-full"
                />
            </div>

            <div className="w-full flex flex-col gap-2">
                <p className="text-white font-semibold">
                    {state.userAddress ? getTruncatedEthAddress(state.userAddress) : "..."}
                </p>
                <p className="text-white font-semibold">Ethereum</p>
            </div>
        </div>
    );
};

export default EthereumCard;