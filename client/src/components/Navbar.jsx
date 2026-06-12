import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import {
    connectWallet
} from "../utils/connectWallet";

import "../styles/Navbar.css";

function Navbar() {

    const [wallet, setWallet] =
        useState("");

    const adminWallet =
        "YOUR_METAMASK_WALLET_ADDRESS";

    useEffect(() => {

        const savedWallet =
            localStorage.getItem(
                "walletAddress"
            );

        if (savedWallet) {

            setWallet(
                savedWallet
            );
        }

    }, []);

    async function handleConnect() {

        try {

            const signer =
                await connectWallet();

            if (!signer) return;

            const address =
                await signer.getAddress();

            localStorage.setItem(
                "walletAddress",
                address
            );

            setWallet(
                address
            );

        } catch (error) {

            console.log(error);

            alert(
                "Wallet connection failed"
            );
        }
    }

    return (

        <div className="navbar">

            <h1 className="logo">
                BlockDocs
            </h1>

            <div className="nav-links">

                <Link to="/">
                    Dashboard
                </Link>

                <Link to="/upload">
                    Upload
                </Link>

                <Link to="/documents">
                    My Documents
                </Link>

                {
                    wallet &&
                    wallet.toLowerCase() ===
                    adminWallet.toLowerCase() && (

                        <Link to="/admin">
                            Admin
                        </Link>

                    )
                }

                <button
                    className="wallet-btn"
                    onClick={handleConnect}
                >

                    {
                        wallet
                        ? wallet.slice(0, 6)
                          + "..."
                          + wallet.slice(-4)
                        : "Connect Wallet"
                    }

                </button>

            </div>

        </div>
    );
}

export default Navbar;