import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Laranja from "./components/Laranja/Laranja";
 
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        exact
                        path="/about"
                        element={<Laranja />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}
 
export default App;