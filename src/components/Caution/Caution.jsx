import React from 'react';
import './Caution.scss';
import caution from '../../images/caution.jpg';

const Caution = () => {
    return (
        <section className="caution">
            <div className="caution-container">
                <div className="caution-left">
                    <img src={caution} alt='' className="caution-img" />
                </div>
                <div className="caution-right">
                    <h2 className="caution-heading">Important Caution</h2>
                    <p className="caution-content">
                        Please be aware of the following important information before provided. Ensure you take right supplements.
                        Herbalife Nutrition is not an e-commerce company. It does not sell it's products/supplements in any e-commerce
                        website like amazon,flipkart,etc. Those product can harm you and are misleading. This is the caution notice provided 
                        by Herbalife to distributors. You can go through it.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Caution;
