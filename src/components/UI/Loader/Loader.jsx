import React from "react";
import { Oval } from "react-loader-spinner";
import cl from "./Loader.module.css";

const Loader = ({mainColor, secondaryColor}) => {
    return (
        <Oval 
            height={18}
            width={20} 
            color={mainColor}
            secondaryColor={secondaryColor}
            strokeWidth={4}
            strokeWidthSecondary={4}
            wrapperClass={cl.loader}
        />
    );
};

export default Loader;