import { GIF_URLS } from "./constants"

export const refreshPage = () => {
    window.location.reload(false);
};

export const getTruncatedEthAddress = (ethAddress) => {
    return `${ethAddress.slice(0, 3)}...${ethAddress.slice(ethAddress.length - 3)}`
};

export const getCurrentDate = () => {
    const today = new Date();

    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const year = today.getFullYear();

    return `${day}.${month}.${year}`;
};

export const getRandomGifUrl = () => {
    return GIF_URLS[Math.floor(Math.random()*GIF_URLS.length)];
};