



// just checks to see if metamask is installed
export const checkWallet = async () => {
    const metamask = window.ethereum;

    if (!metamask) {
        console.log('Make sure you have metamask!');
        return;
    } else {
        console.log('Metamask (injected wallet) detected', metamask);
    }
}

export const connectWallet = async () => {
    try {
        const metamask = window.ethereum;

        if (!metamask) {
            alert("Metamask not found. Please get it from the Chrome webstore");
            return;
        }

        const accounts = await metamask.request({ method: "eth_requestAccounts" });

        console.log("connected with: ", accounts[0]);

        // setCurrentAccount(accounts[0])
        // replace with storing this in redux

        return accounts[0]

    } catch (e) {
        console.log(e)
    }
}