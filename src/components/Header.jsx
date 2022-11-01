import React, { useContext } from "react";
import BlueRoundedButton from "./UI/BlueRoundedButton";
import LogoImage from "../assets/images/logo.svg";
import { Context } from "../context";

const Header = () => {

    const {connectWallet} = useContext(Context);

    return (
        <header className="w-full flex justify-between items-center py-2 px-5 mb-[80px]">

            <div className="flex gap-3 items-center cursor-pointer">
                <img src={LogoImage} alt="Logo Image" width={"47px"} height={"47px"}/>
                <p className="text-white font-semibold text-2xl">Krypter.io</p>
            </div>

            <nav>
                <ul className="flex items-center gap-7">
                    <li><a href="#" className="text-white transition-all duration-150 ease-linear hover:text-gray-200">Market</a></li>
                    <li><a href="#" className="text-white transition-all duration-150 ease-linear hover:text-gray-200">Exchange</a></li>
                    <li><a href="#" className="text-white transition-all duration-150 ease-linear hover:text-gray-200">Wallets</a></li>
                    <li>
                        <BlueRoundedButton 
                            title={"Login"}
                            onClick={connectWallet}
                        />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;