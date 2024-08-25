import React, { useState } from "react";
import "./Header.scss";
import herbalifeLogo from '../../images/herbalife-logo.png'; // Adjust path if necessary

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-left">
                    <img
                        src={herbalifeLogo}
                        alt="Herbalife Logo"
                        className="logo"
                    />
                    <h1 className="header-title">Wellness Coach</h1>
                </div>
                <div className="menu-icon" onClick={toggleNav}>
                    &#9776;
                </div>
                <nav className={`header-nav ${navOpen ? "open" : ""}`}>
                    <ul>
                        <li>
                            <a href="#home">Home</a>
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
            </div>
        </header>
    );
};

export default Header;
