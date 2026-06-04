import { useState } from "react";
import axios from "axios";

import "../styles/Upload.css";

function Upload() {

    const [documentName, setDocumentName] =
        useState("");

    const [documentType, setDocumentType] =
        useState("Bank Passbook");

    const [file, setFile] =
        useState(null);

    const [loading, setLoading] =
        useState(false);

    const [result, setResult] =
        useState(null);

    async function handleUpload() {

        if (!documentName)
            return alert("Enter document name");

        if (!file)
            return alert("Select file");

        try {

            setLoading(true);

            const formData =
                new FormData();

            formData.append(
                "file",
                file
            );

            formData.append(
                "documentName",
                documentName
            );

            formData.append(
                "documentType",
                documentType
            );

            formData.append(
                "walletAddress",
                "temporary-wallet"
            );

            const response =
                await axios.post(
                    "http://localhost:5000/api/documents",
                    formData
                );

            setResult(
                response.data
            );

        } catch (error) {

            console.log(error);

            alert(
                "Upload Failed"
            );

        } finally {

            setLoading(false);
        }
    }

    return (

        <div className="upload-page">

            <div className="upload-box">

                <h2>
                    AI Document Verification
                </h2>

                <input
                    type="text"
                    placeholder="Document Name"
                    value={documentName}
                    onChange={(e) =>
                        setDocumentName(
                            e.target.value
                        )
                    }
                />

                <select
                    value={documentType}
                    onChange={(e) =>
                        setDocumentType(
                            e.target.value
                        )
                    }
                >

                    <option>
                        Bank Passbook
                    </option>

                    <option>
                        Aadhaar Card
                    </option>

                    <option>
                        PAN Card
                    </option>

                    <option>
                        Passport
                    </option>

                </select>

                <input
                    type="file"
                    onChange={(e) =>
                        setFile(
                            e.target.files[0]
                        )
                    }
                />

                {file && (

                    <p>
                        Selected:
                        {file.name}
                    </p>

                )}

                <button
                    onClick={
                        handleUpload
                    }
                    disabled={loading}
                >

                    {
                        loading
                            ? "Processing..."
                            : "Upload & Verify"
                    }

                </button>

            </div>

            {result && (

                <div className="result-box">

                    <h2>
                        Verification Result
                    </h2>

                    <p>
                        <strong>Status:</strong>
                        {" "}
                        {result.aiStatus}
                    </p>

                    <p>
                        <strong>Detected Type:</strong>
                        {" "}
                        {result.aiResponse.documentType}
                    </p>

                    <p>
                        <strong>Owner Name:</strong>
                        {" "}
                        {result.aiResponse.ownerName}
                    </p>

                    <p>
                        <strong>Account Number:</strong>
                        {" "}
                        {result.aiResponse.accountNumber}
                    </p>

                    <p>
                        <strong>IFSC:</strong>
                        {" "}
                        {result.aiResponse.ifsc}
                    </p>

                    <p>
                        <strong>Confidence:</strong>
                        {" "}
                        {result.aiResponse.confidence}%
                    </p>

                    <p>
                        <strong>Fraud Score:</strong>
                        {" "}
                        {result.aiResponse.fraudScore}
                    </p>

                    <p>
                        <strong>IPFS CID:</strong>
                        {" "}
                        {result.pinataCID}
                    </p>

                    {
                        result.blockchainTxHash && (

                            <p>
                                <strong>
                                    Blockchain Tx:
                                </strong>
                                {" "}
                                {result.blockchainTxHash}
                            </p>

                        )
                    }

                </div>

            )}

        </div>
    );
}

export default Upload;