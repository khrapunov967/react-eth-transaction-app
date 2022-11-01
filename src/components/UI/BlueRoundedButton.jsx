import React from "react";

const BlueRoundedButton = ({title, ...props}) => {
    return (
        <button 
            className="border-none rounded-[32px] bg-[#3671E9] text-white leading-none pt-2 px-7 pb-3 hover:bg-[#3467cc] transition-all ease-linear duration-150"
            {...props}
        >
            {title}
        </button>
    );
};

export default BlueRoundedButton;