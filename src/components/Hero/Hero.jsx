import React, { useEffect, useState } from "react";
import "./Hero.css";

// Import images from the src/images directory
import image1 from "../../images/img1.jpg";
import { Link } from 'react-scroll';


const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section className={`hero ${isLoaded ? "loaded" : ""}`}>
            <div className="hero-left">
                <div className="circle circle1">
                    <img src={image1} alt="Description of Image 1" />
                </div>
                <div className="circle circle2">
                    <img src={image1} alt="Description of Image 2" />
                </div>
                <div className="circle circle3">
                    <img src={image1} alt="Description of Image 3" />
                </div>
            </div>
            <div className="hero-right">
                <span>
                    <h1>Illness Wellness ??</h1>
                </span>
                <h2>What will you choose...</h2>
                <p>
                    {" "}
                    Wellness is more than being free from illness, it is a
                    dynamic process of change and growth. A state of complete
                    physical, mental, and social well-being, and not merely the
                    absence of disease or infirmity. Illness = a disease or
                    period of sickness affecting the body or mind.
                </p>
                <Link
                    to="contact"
                    smooth={true}
                    duration={1000}
                    className="contact-button"
                >
                    Contact
                </Link>
            </div>
        </section>
    );
};

export default Hero;
