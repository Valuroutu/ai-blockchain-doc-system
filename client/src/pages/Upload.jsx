import { useState } from "react";

import axios from "axios";

import "../styles/Upload.css";

function Upload() {

    const [documentName,
        setDocumentName] =
        useState("");

    const [documentType,
        setDocumentType] =
        useState("Certificate");

    const [description,
        setDescription] =
        useState("");

    const [file, setFile] =
        useState(null);

    const [loading, setLoading] =
        useState(false);

    const [status, setStatus] =
        useState("");

    async function handleUpload() {

        if (!documentName) {

            alert(
              "Enter document name"
            );

            return;
        }

        if (!file) {

            alert(
              "Select file"
            );

            return;
        }

        try {

            setLoading(true);

            setStatus("");

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
                "description",
                description
            );

            formData.append(
                "walletAddress",
                "temporary-wallet"
            );

            const response =
                await axios.post(
                    "http://localhost:5000/upload",
                    formData
                );

            setStatus(
                response.data.aiStatus
            );

        } catch (error) {

            console.log(error);

            alert(
              "Upload failed"
            );

        } finally {

            setLoading(false);
        }
    }

    return (

        <div className="upload-page">

            <div className="upload-box">

                <h2>
                    Upload Document
                </h2>

                <input
                    type="text"

                    placeholder=
                    "Document Name"

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
                        Certificate
                    </option>

                    <option>
                        Resume
                    </option>

                    <option>
                        Identity Card
                    </option>

                </select>

                <textarea

                    placeholder=
                    "Description"

                    value={description}

                    onChange={(e) =>
                        setDescription(
                          e.target.value
                        )
                    }
                />

                <input
                    type="file"

                    onChange={(e) =>
                        setFile(
                          e.target.files[0]
                        )
                    }
                />

                <button
                    onClick={handleUpload}

                    disabled={loading}
                >

                    {
                        loading
                        ? "Verifying..."
                        : "Upload"
                    }

                </button>

                {
                    status &&
                    <h3 className="status-text">

                        AI Status:
                        {status}

                    </h3>
                }

            </div>

        </div>
    );
}

export default Upload;