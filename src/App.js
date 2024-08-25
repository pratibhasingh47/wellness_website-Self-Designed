import React, { useState } from "react";
import Header from "./components//Header/Header";
import "./App.css"; // Make sure to update this file as well
import Hero from "./components/Hero/Hero";
import Home from "./components/HomeSection/Home";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="App">
            <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <Hero></Hero>
            <Home></Home>
        </div>
    );
}

export default App;
