import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Documents from "./pages/Documents";

function App() {

    return (

        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/upload"
                    element={<Upload />}
                />

                <Route
                    path="/documents"
                    element={<Documents />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;