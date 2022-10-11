import React from "react";

const ProfileCard = ({userAddress, userBalance}) => {
    return (
        <div className="flex items-center border-solid border-2 p-2 gap-5 mb-5 rounded-lg border-slate-100 shadow-md">
            <div className="w-10 h-10 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#9fa8da" d="M11 24L25 2 39 24 25 32z"/><path fill="#7986cb" d="M25 2L39 24 25 32z"/><path fill="#9fa8da" d="M11 27L25 35 39 27 25 46z"/><path fill="#7986cb" d="M25 35L39 27 25 46zM11 24L25 18 39 24 25 32z"/><path fill="#5c6bc0" d="M25 18L39 24 25 32z"/></svg>
            </div>

            <div>
                <div className="flex gap-2 items-center">
                    <p className="text-lg">Current Address:</p>
                    <p className="text-lg">{userAddress}</p>
                </div>

                <div className={`flex gap-2 items-center`}>
                    <p className="text-lg">Current Balance:</p>
                    <p className="text-green-400 text-lg">{userBalance}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;