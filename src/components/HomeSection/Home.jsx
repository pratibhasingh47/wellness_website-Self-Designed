import React from "react";
import "./Home.css";

// Import images from the src/images directory
import image1 from "../../images/img1.jpg";

const Home = () => {
    return (
        <section className="home">
            <div className="home-container">
                {/* <div className="portrait portrait1">
                    <img src={image1} alt="Portrait 1" />
                </div> */}
                <div className="home-content">
                    <h2>Introduction</h2>
                    <p>
                        Welcome to our wellness coaching website. We believe in
                        a holistic approach to wellness that encompasses the
                        mind, body, and spirit. Our mission is to help you
                        achieve optimal health and well-being through
                        personalized coaching and support.
                    </p>
                </div>
                <div className="portrait portrait2">
                    <img src={image1} alt="Portrait 2" />
                </div>
            </div>
        </section>
    );
};

export default Home;
