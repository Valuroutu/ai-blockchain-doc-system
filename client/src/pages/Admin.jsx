import { useEffect, useState } from "react";
import axios from "axios";

import "../styles/Admin.css";

function Admin() {

    const [documents, setDocuments] =
        useState([]);

    const adminWallet =
    import.meta.env.VITE_ADMIN_WALLET;

    const connectedWallet =
        localStorage.getItem(
            "walletAddress"
        );

    useEffect(() => {

        if (
            connectedWallet &&
            connectedWallet.toLowerCase() ===
            adminWallet.toLowerCase()
        ) {

            fetchDocuments();
        }

    }, []);

    console.log("Connected Wallet:", connectedWallet);
console.log("Admin Wallet:", adminWallet);
console.log(
    connectedWallet?.toLowerCase() ===
    adminWallet?.toLowerCase()
);

    async function fetchDocuments() {

        try {

            const response =
                await axios.get(
                    "http://localhost:5000/api/documents/admin/documents",
                    {
                        headers: {
                            "wallet-address":
                                connectedWallet
                        }
                    }
                );

            setDocuments(
                response.data
            );

        } catch (error) {

            console.log(error);

            alert(
                error?.response?.data?.message ||
                "Failed to load admin data"
            );
        }
    }

    if (
        !connectedWallet ||
        connectedWallet.toLowerCase() !==
        adminWallet.toLowerCase()
    ) {

        return (

            <div className="admin-dashboard">

                <h1>
                    Access Denied
                </h1>

                <p>
                    Only Admin can access this page.
                </p>

            </div>
        );
    }

    const approved =
        documents.filter(
            doc =>
            doc.aiStatus === "approved"
        ).length;

    const rejected =
        documents.filter(
            doc =>
            doc.aiStatus === "rejected"
        ).length;

    const fraudAlerts =
        documents.filter(
            doc =>
            doc.fraudScore > 50
        ).length;

    return (

        <div className="admin-dashboard">

            <h1>
                Admin Dashboard
            </h1>

            <div className="admin-stats">

                <div className="admin-card">
                    <h2>
                        {documents.length}
                    </h2>
                    <p>
                        Total Documents
                    </p>
                </div>

                <div className="admin-card">
                    <h2>
                        {approved}
                    </h2>
                    <p>
                        Approved
                    </p>
                </div>

                <div className="admin-card">
                    <h2>
                        {rejected}
                    </h2>
                    <p>
                        Rejected
                    </p>
                </div>

                <div className="admin-card">
                    <h2>
                        {fraudAlerts}
                    </h2>
                    <p>
                        Fraud Alerts
                    </p>
                </div>

            </div>

            <table className="admin-table">

                <thead>

                    <tr>

                        <th>
                            Document
                        </th>

                        <th>
                            Owner
                        </th>

                        <th>
                            Status
                        </th>

                        <th>
                            Confidence
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {
                        documents.map(
                            (doc) => (

                            <tr
                                key={doc._id}
                            >

                                <td>
                                    {doc.documentName}
                                </td>

                                <td>
                                    {doc.ownerName}
                                </td>

                                <td>
                                    {doc.aiStatus}
                                </td>

                                <td>
                                    {doc.confidence}%
                                </td>

                            </tr>
                        ))
                    }

                </tbody>

            </table>

        </div>
    );
}

export default Admin;