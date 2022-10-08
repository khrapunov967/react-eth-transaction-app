import React from "react";

const MyButton = ({className, buttonName, onClick}) => {
    return (
        <button className={className} onClick={onClick}>{buttonName}</button>
    );
};

export default MyButton;