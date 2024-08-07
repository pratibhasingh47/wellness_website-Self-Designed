import React, { useEffect, useState } from "react";
import "./Hero.css";

// Import images from the src/images directory
import image1 from "../../images/img1.jpg";

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
                <h1>Illness/Wellness??</h1>
                <h2>What will you choose...</h2>
            </div>
        </section>
    );
};

export default Hero;
