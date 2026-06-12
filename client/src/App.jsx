import {
BrowserRouter,
Routes,
Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Documents from "./pages/Documents";
import Verify from "./pages/Verify";
import Admin from "./pages/Admin";

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

            <Route
                path="/verify/:id"
                element={<Verify />}
            />

            <Route
                path="/admin"
                element={<Admin />}
            />

        </Routes>

    </BrowserRouter>
);

}

export default App;
