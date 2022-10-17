import React from "react";
import "./SuccessNotification.css";

const SuccessNotification = ({successNotificationData, setSuccessNotificationData}) => {
    return (
        <div className={`success-msg ${successNotificationData.isVisible ? "" : "hidden"} fixed flex justify-between z-10 px-2 py-4 bg-green-300 right-5 w-full max-w-xs rounded-md`}>
            <p className="text-white">{successNotificationData.message}</p>

            <div className="w-6 h-6 cursor-pointer" onClick={() => setSuccessNotificationData({...successNotificationData, isVisible: false})}>
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 320L192 192M192 320l128-128"/></svg>
            </div>
        </div>
    );
};

export default SuccessNotification;