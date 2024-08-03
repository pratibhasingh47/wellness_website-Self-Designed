import React, { useState } from "react";
import "./Header.css";

const Header = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                <h1 className="header-title">Wellness Coach</h1>
                <nav className={`header-nav ${isOpen ? "open" : ""}`}>
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#testimonials">Testimonials</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="menu-icon" onClick={toggleMenu}>
                    ☰
                </div>
            </div>
        </header>
    );
};

export default Header;
