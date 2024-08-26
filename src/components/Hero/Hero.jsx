import React, { useEffect, useState } from "react";
import "./Hero.scss";

// import image1 from "../../images/img1.jpg";
import illness1 from '../../images/sickness.jpg';
import wellness from '../../images/wellness.png';
import wellness2 from '../../images/wellness2.webp';
import { Link } from "react-scroll";

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section className={`hero ${isLoaded ? "loaded" : ""}`}>
            <div className="hero-left">
                <div className="circle circle1">
                    <img src={illness1} alt="" />
                </div>
                <div className="circle circle2">
                    <img src={wellness} alt="" />
                </div>
                <div className="circle circle3">
                    <img src={wellness2} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <span>
                    <h1>Illness Wellness ??</h1>
                </span>
                <h2>What will you choose...</h2>
                <p>
                    {" "}
                    In our present life , everyone is suffering from disease like BP , Stress , Obsesity, Diabetes , Constipation ,etc.
                    We all have to eradicate these problems and should focus on wellness rather than focusing on medical disease.
                    The primary cause of all these problems is unhealthy eating.
                    Our diet should contain a proper proportion of proteins , Vitamins, Minerals , carbohydrates and fats.
                    Though wellness is more than being free from illness, it is a
                    dynamic process of change and growth. A state of complete
                    physical, mental, and social well-being, and not merely the
                    absence of disease or infirmity.
                </p>
                <Link
                    to="contact"
                    smooth={true}
                    duration={2000}
                    className="contact-button"
                >
                    Contact Now
                </Link>
            </div>
        </section>
    );
};

export default Hero;
