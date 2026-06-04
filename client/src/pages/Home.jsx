import "../styles/Home.css";

function Home() {

    return (

        <div className="dashboard">

            <div className="hero">

                <h1>
                    AI + Blockchain Document Storage
                </h1>

                <p>
                    Secure • Verified • Decentralized
                </p>

            </div>

            <div className="stats">

                <div className="card">
                    <h2>25</h2>
                    <p>Total Documents</p>
                </div>

                <div className="card">
                    <h2>20</h2>
                    <p>Approved</p>
                </div>

                <div className="card">
                    <h2>3</h2>
                    <p>Review Required</p>
                </div>

                <div className="card">
                    <h2>2</h2>
                    <p>Rejected</p>
                </div>

            </div>

            <div className="recent-docs">

                <h2>
                    Recent Verifications
                </h2>

                <table>

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td>
                                SBI Passbook
                            </td>
                            <td>
                                Bank Passbook
                            </td>
                            <td>
                                ✅ Approved
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Aadhaar Card
                            </td>
                            <td>
                                Aadhaar
                            </td>
                            <td>
                                ✅ Approved
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default Home;