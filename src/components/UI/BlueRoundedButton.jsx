import React from "react";

const BlueRoundedButton = ({title}) => {
    return (
        <button 
            className="border-none rounded-[32px] bg-[#3671E9] text-white leading-none pt-2 px-7 pb-3"
        >
            {title}
        </button>
    );
};

export default BlueRoundedButton;