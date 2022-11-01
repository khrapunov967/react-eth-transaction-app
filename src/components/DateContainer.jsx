import React from "react";

const DateContainer = ({date}) => {
    return (
        <div className="rounded-[32px] bg-black w-1/2 p-3 flex justify-center shadow-lg">
            <p className="text-blue-300 font-bold">{date}</p>
        </div>
    );
};

export default DateContainer;