import React, { useState } from "react";
import { Link } from "react-scroll";
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
                            <Link
                                to="home"
                                smooth={true}
                                duration={500}
                                offset={-50}
                                onClick={toggleNav}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="services"
                                smooth={true}
                                duration={1000}
                                offset={-50}
                                onClick={toggleNav}
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="testimonials"
                                smooth={true}
                                duration={2000}
                                offset={-50}
                                onClick={toggleNav}
                            >
                                Testimonials
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={2000}
                                offset={-50}
                                onClick={toggleNav}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
