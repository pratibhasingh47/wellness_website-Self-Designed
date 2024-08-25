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
                        Please be aware of the following important information before proceeding. Ensure you follow all guidelines and take necessary precautions. Your safety and well-being are our top priority.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Caution;
