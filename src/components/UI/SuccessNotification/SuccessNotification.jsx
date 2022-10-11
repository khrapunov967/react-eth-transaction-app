import React from "react";

const SuccessNotification = ({msg}) => {
    return (
        <div className="fixed z-10 p-2 bg-green-400 opacity-70 right-5 w-fit rounded-md">
            <p className="text-white">{msg}</p>

            {/* <div className="">
                <svg className="text-white" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 320L192 192M192 320l128-128"/></svg>
            </div> */}
        </div>
    );
};

export default SuccessNotification;