import React, { useState, useContext } from "react";
import { Context } from "../context";
import BlueRoundedButton from "./UI/BlueRoundedButton";
import LogoImage from "../assets/images/logo.svg";
import Loader from "./UI/Loader";
import BurgerMenuButton from "./UI/BurgerMenuButton";
import CloseButton from "./UI/CloseButton";

const Header = () => {

    const {state, connectWallet, getTruncatedEthAddress} = useContext(Context);

    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

    return (
        <header className="w-full flex justify-between items-center py-2 px-5 mb-[80px]">

            <div className="flex gap-3 items-center cursor-pointer">
                <img src={LogoImage} alt="Logo Image" width={"47px"} height={"47px"}/>
                <p className="text-white font-semibold text-2xl hidden sm:block">Krypter.io</p>
            </div>

            <nav className="">
                <ul className={`max-md-screen:animate-slideleft flex flex-row items-center gap-[35px] max-md-screen:justify-end max-md-screen:flex-col-reverse max-md-screen:items-start max-md-screen:absolute max-md-screen:top-0 max-md-screen:right-0 max-md-screen:bg-[#07071a] max-md-screen:p-3 max-md-screen:w-[200px] max-md-screen:gap-7 max-md-screen:h-screen max-md-screen:z-10 ${isMobileMenuVisible ? "" : "max-md-screen:hidden"}`}>
                    <li><a href="#" className="text-white transition-all duration-150 ease-linear hover:text-gray-200">Market</a></li>
                    <li><a href="#" className="text-white transition-all duration-150 ease-linear hover:text-gray-200">Exchange</a></li>
                    <li><a href="#" className="text-white transition-all duration-150 ease-linear hover:text-gray-200">Wallets</a></li>
                    <li>
                        <BlueRoundedButton 
                            title={
                                state.isWalletConnecting ? <Loader /> :
                                state.userAddress ? getTruncatedEthAddress(state.userAddress) : "Login"
                            }
                            onClick={connectWallet}
                            isVisible={true}
                            extraStyles={"w-[98px] max-h-[36px]"}
                        />
                    </li>

                    <CloseButton 
                        className={"cursor-pointer md:hidden block z-20 text-white absolute top-3 right-3"}
                        onClick={() => setIsMobileMenuVisible(false)}
                    />
                </ul>

            </nav>

            <BurgerMenuButton 
                className={"text-white cursor-pointer block md:hidden"}
                onClick={() => setIsMobileMenuVisible(true)}
            />
        </header>
    );
};

export default Header;