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
                        The transformation I have gone through is truly remarkable. My journey has taught me the importance of consistent effort and dedication. Here's a look at the before and after of my personal wellness transformation.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MyResult;
