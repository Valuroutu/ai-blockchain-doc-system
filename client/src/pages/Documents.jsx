import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../styles/Documents.css";

function Documents() {


const [documents, setDocuments] =
    useState([]);

const [search, setSearch] =
    useState("");

const [statusFilter, setStatusFilter] =
    useState("all");

const [loading, setLoading] =
    useState(true);

const navigate =
    useNavigate();

useEffect(() => {

    fetchDocuments();

}, []);

async function fetchDocuments() {

    try {

        const walletAddress =
            localStorage.getItem(
                "walletAddress"
            );

        if (!walletAddress) {

            alert(
                "Connect Wallet First"
            );

            setLoading(false);

            return;
        }

        const response =
            await axios.get(
                `http://localhost:5000/api/documents?walletAddress=${walletAddress}`
            );

        setDocuments(
            response.data
        );

    } catch (error) {

        console.log(error);

    } finally {

        setLoading(false);
    }
}

const filteredDocuments =
    documents.filter((doc) => {

        const searchMatch =

            doc.documentName
            ?.toLowerCase()
            .includes(
                search.toLowerCase()
            )

            ||

            doc.ownerName
            ?.toLowerCase()
            .includes(
                search.toLowerCase()
            );

        const statusMatch =

            statusFilter === "all"

            ||

            doc.aiStatus ===
            statusFilter;

        return (
            searchMatch &&
            statusMatch
        );
    });

if (loading) {

    return (
        <h2>
            Loading Documents...
        </h2>
    );
}

return (

    <div className="documents-page">

        <h1>
            My Documents
        </h1>

        <h3>
            Total Documents:
            {" "}
            {filteredDocuments.length}
        </h3>

        <div className="search-section">

            <input
                type="text"
                placeholder="Search by Document or Owner"
                value={search}
                onChange={(e) =>
                    setSearch(
                        e.target.value
                    )
                }
            />

            <select
                value={statusFilter}
                onChange={(e) =>
                    setStatusFilter(
                        e.target.value
                    )
                }
            >

                <option value="all">
                    All Status
                </option>

                <option value="approved">
                    Approved
                </option>

                <option value="rejected">
                    Rejected
                </option>

            </select>

        </div>

        <div className="documents-grid">

            {
                filteredDocuments.length === 0 ? (

                    <h2>
                        No Documents Found
                    </h2>

                ) : (

                    filteredDocuments.map(
                        (doc) => (

                        <div
                            key={doc._id}
                            className="document-card"
                        >

                            <h2>
                                {doc.documentName}
                            </h2>

                            <p>
                                <strong>
                                    Owner:
                                </strong>
                                {" "}
                                {doc.ownerName}
                            </p>

                            <p>
                                <strong>
                                    Status:
                                </strong>
                                {" "}
                                {doc.aiStatus}
                            </p>

                            <p>
                                <strong>
                                    Type:
                                </strong>
                                {" "}
                                {doc.detectedDocumentType}
                            </p>

                            <p>
                                <strong>
                                    Confidence:
                                </strong>
                                {" "}
                                {doc.confidence}%
                            </p>

                            <button
                                onClick={() =>
                                    navigate(
                                        `/verify/${doc._id}`
                                    )
                                }
                            >
                                View Details
                            </button>

                        </div>
                    ))
                )
            }

        </div>

    </div>
);

}

export default Documents;
