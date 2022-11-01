import React from "react";

const BlueRoundedButton = ({title, isVisible, extraStyles, ...props}) => {
    return (
        <button 
            className={!isVisible ? "hidden" : `flex justify-center border-none rounded-[32px] bg-[#3671E9] text-white leading-none pt-2 px-7 pb-3 hover:bg-[#3467cc] transition-all ease-linear duration-150 ${extraStyles}`}
            {...props}
        >
            {title}
        </button>
    );
};

export default BlueRoundedButton;