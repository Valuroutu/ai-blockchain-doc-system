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
                        Blockchain Certificate
                    </h2>

                    <p>
                        CID: Qm123...
                    </p>

                    <button>
                        View
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Documents;