import React from "react";

const Title = ({titleName, ...props}) => {
    return (
        <p {...props}>{titleName}</p>
    );
};

export default Title;