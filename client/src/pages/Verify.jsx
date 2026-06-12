import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { QRCodeCanvas } from "qrcode.react";

import "../styles/Verify.css";

function Verify() {


const { id } = useParams();

const [doc, setDoc] =
    useState(null);

const [authorized, setAuthorized] =
    useState(false);

const verifyUrl =
    `http://localhost:5173/verify/${id}`;

useEffect(() => {

    fetchDocument();

}, []);

async function fetchDocument() {

    try {

        const response =
            await axios.get(
                `http://localhost:5000/api/documents/${id}`
            );

        const documentData =
            response.data;

        const walletAddress =
            localStorage.getItem(
                "walletAddress"
            );

        if (
            walletAddress &&
            documentData.walletAddress === walletAddress
        ) {

            setAuthorized(true);
        }

        setDoc(
            documentData
        );

    } catch (error) {

        console.log(error);
    }
}

function downloadQR() {

    const canvas =
        window.document.getElementById(
            "qr-code"
        );

    const pngUrl =
        canvas.toDataURL(
            "image/png"
        );

    const downloadLink =
        window.document.createElement(
            "a"
        );

    downloadLink.href =
        pngUrl;

    downloadLink.download =
        "document-qr.png";

    downloadLink.click();
}

if (!doc) {

    return (
        <h2>
            Loading...
        </h2>
    );
}

if (!authorized) {

    return (
        <div className="verify-page">

            <div className="verify-card">

                <h1>
                    Access Denied
                </h1>

                <p>
                    You are not allowed
                    to view this document.
                </p>

            </div>

        </div>
    );
}

return (

    <div className="verify-page">

        <div className="verify-card">

            <h1>
                Verification Details
            </h1>

            <p>
                <strong>Document:</strong>
                {" "}
                {doc.documentName}
            </p>

            <p>
                <strong>Owner:</strong>
                {" "}
                {doc.ownerName}
            </p>

            <p>
                <strong>Document Type:</strong>
                {" "}
                {doc.detectedDocumentType}
            </p>

            <p>
                <strong>Status:</strong>
                {" "}
                {doc.aiStatus}
            </p>

            <p>
                <strong>Confidence:</strong>
                {" "}
                {doc.confidence}%
            </p>

            <p>
                <strong>Fraud Score:</strong>
                {" "}
                {doc.fraudScore}
            </p>

            <p>
                <strong>Account Number:</strong>
                {" "}
                {doc.accountNumber}
            </p>

            <p>
                <strong>IFSC:</strong>
                {" "}
                {doc.ifsc}
            </p>

            <p>
                <strong>IPFS CID:</strong>
                {" "}
                {doc.pinataCID}
            </p>

            <p>
                <strong>Blockchain Tx:</strong>
                {" "}
                {doc.blockchainTxHash}
            </p>

            <div className="qr-section">

                <h3>
                    Verification QR
                </h3>

                <QRCodeCanvas
                    id="qr-code"
                    value={verifyUrl}
                    size={220}
                />

                <p>
                    {verifyUrl}
                </p>

                <button
                    onClick={downloadQR}
                >
                    Download QR
                </button>

            </div>

            <a
                href={doc.pinataURL}
                target="_blank"
                rel="noreferrer"
            >
                <button>
                    View Document
                </button>
            </a>

        </div>

    </div>
);


}

export default Verify;
