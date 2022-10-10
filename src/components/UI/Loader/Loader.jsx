import React from "react";
import { Oval } from "react-loader-spinner";
import cl from "./Loader.module.css";

const Loader = () => {
    return (
        <Oval 
            height={18}
            width={20} 
            color="#fff"
            secondaryColor="#f0f0f0"
            strokeWidth={4}
            strokeWidthSecondary={4}
            wrapperClass={cl.loader}
        />
    );
};

export default Loader;