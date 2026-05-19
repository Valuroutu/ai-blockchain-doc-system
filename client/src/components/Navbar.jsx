import { Link } from "react-router-dom";

import { useState } from "react";

import {
    connectWallet
} from "../utils/connectWallet";

import "../styles/Navbar.css";

function Navbar() {

    const [wallet, setWallet] =
        useState("");

    async function handleConnect() {

        try {

            const signer =
                await connectWallet();

            if (!signer) return;

            const address =
                await signer.getAddress();

            setWallet(address);

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
                    Home
                </Link>

                <Link to="/upload">
                    Upload
                </Link>

                <Link to="/documents">
                    Documents
                </Link>

                <button
                    className="wallet-btn"
                    onClick={handleConnect}
                >

                    {
                        wallet
                        ? wallet.slice(0,6)
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