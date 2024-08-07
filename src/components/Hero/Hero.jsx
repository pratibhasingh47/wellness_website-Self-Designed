import React, { useEffect, useState } from "react";
import "./Hero.css";

// Import images from the src/images directory
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";

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
                    <img src={image2} alt="Description of Image 2" />
                </div>
                <div className="circle circle3">
                    <img src={image3} alt="Description of Image 3" />
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
