import React from "react";
import BlueRoundedButton from "./UI/BlueRoundedButton";
import LogoImage from "../assets/images/logo.svg";

const Header = () => {
    return (
        <header className="w-full flex justify-between items-center border-solid border-2 border-white py-2 px-5">

            <div className="flex gap-3 items-center">
                <img src={LogoImage} alt="Logo Image" width={"47px"} height={"47px"}/>
                <p className="text-white font-semibold text-2xl">Krypter.io</p>
            </div>

            <nav>
                <ul className="flex items-center gap-7">
                    <li><a href="#" className="text-white">Market</a></li>
                    <li><a href="#" className="text-white">Exchange</a></li>
                    <li><a href="#" className="text-white">Wallets</a></li>
                    <li><BlueRoundedButton title={"Login"}/></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;