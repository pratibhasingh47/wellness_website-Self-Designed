import React, { useState } from "react";
import Header from "./components//Header/Header";
import "./App.css"; // Make sure to update this file as well
import Hero from "./components/Hero/Hero";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="App">
            <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <Hero></Hero>
        </div>
    );
}

export default App;
