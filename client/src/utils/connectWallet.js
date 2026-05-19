import { BrowserProvider }
from "ethers";

export async function connectWallet() {

    try {

        if (!window.ethereum) {

            alert(
              "Install MetaMask"
            );

            return null;
        }

        const provider =
            new BrowserProvider(
                window.ethereum
            );

        await provider.send(
            "eth_requestAccounts",
            []
        );

        const signer =
            await provider.getSigner();

        return signer;

    } catch (error) {

        console.log(error);

        return null;
    }
}