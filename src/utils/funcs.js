export const refreshPage = () => {
    window.location.reload(false);
};

export const getTruncatedEthAddress = (ethAddress) => {
    return `${ethAddress.slice(0, 3)}...${ethAddress.slice(ethAddress.length - 3)}`
};