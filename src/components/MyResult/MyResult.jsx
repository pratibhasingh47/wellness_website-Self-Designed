import React from 'react';
import './MyResult.scss';
import resultImage from '../../images/result.jpeg'; // Update the path according to your project structure

const MyResult = () => {
    return (
        <section className="my-result">
            <h1 className="my-result-title">My Personal Result</h1>
            <div className="my-result-container">
                <div className="my-result-left">
                    <img src={resultImage} alt="My Result" className="my-result-image" />
                </div>
                <div className="my-result-right">
                    <h2 className="my-result-heading">Before/After</h2>
                    <p className="my-result-description">
                        The transformation I have gone through is truly remarkable for me. My journey has taught me the importance of consistent effort and dedication.
                        This transformation has helped me to overcome many obstacles in my life. I am suffering from obesity with chances of having diabetes , depression,
                        public-speaking fear, many people taunt's me about my weight-issues. But as I started lossing my weight my confidence boost up and I started feeling blessed.
                        To change anything in life you had to take descision. First accept yourself and then try to change your life. Take an initiative to change yourself and become 
                        a better verison of yourself. If you want to lose/gain weight you can contact me now. The way I have created my result I will be pleased to help you out with the same.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MyResult;
