import "../styles/Documents.css";

function Documents() {

    return (

        <div className="documents-page">

            <h1>
                Uploaded Documents
            </h1>

            <div className="documents-grid">

                <div className="document-card">

                    <h2>
                        SBI Passbook
                    </h2>

                    <p>
                        Owner:
                        VALUROUTU SANTOSH KUMAR
                    </p>

                    <p>
                        Status:
                        Approved
                    </p>

                    <p>
                        CID:
                        QmTc6s5...
                    </p>

                    <button>
                        View Details
                    </button>

                </div>

                <div className="document-card">

                    <h2>
                        Aadhaar Card
                    </h2>

                    <p>
                        Owner:
                        Example User
                    </p>

                    <p>
                        Status:
                        Approved
                    </p>

                    <p>
                        CID:
                        QmABC123...
                    </p>

                    <button>
                        View Details
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Documents;