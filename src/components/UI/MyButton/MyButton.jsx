import React from "react";

const MyButton = ({className, buttonName, onClick, disabled}) => {
    return (
        <button 
            className={className} 
            onClick={onClick} 
            disabled={disabled}
        >{buttonName}</button>
    );
};

export default MyButton;