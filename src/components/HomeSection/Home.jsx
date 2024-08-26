import React from "react";
import "./Home.scss";

// Import images from the src/images directory
import intro from "../../images/intro.jpg";

const Home = () => {
    return (
        <section id="home" className="home">
            <div className="home-container">
                {/* <div className="portrait portrait1">
                    <img src={image1} alt="Portrait 1" />
                </div> */}
                <div className="home-content">
                    <h2>Introduction</h2>
                    <p>
                        My name is Geetagya Singh. I am from Udaipur Rajasthan. I am a Wellness-Coach
                        helping and guiding people towards their weight-management. I am student by background
                        completing my graduation from Udaipur. I have keen interest in helping people to correct their
                        lifestyle. As lifestyle is the most important part of our life, it is mandatory to maintain a healthy lifestyle.
                        I am associated with Herbalife Nutrition Company. I am a independent distributor.
                        By joining with this company my lifestyle change drastically , the product provide an immense amazing result.
                        I am so glad that I am part of these company.Our mission is to help people in
                        achieving  healthy-lifestyle and well-being through
                        personalized coaching and support.
                    </p>
                </div>
                <div className="portrait portrait2">
                    <img src={intro} alt="Portrait 2" />
                </div>
            </div>
        </section>
    );
};

export default Home;
