import React from 'react';
import './Journey.scss';
import journeyImage1 from '../../images/J1.jpg';
import journeyImage2 from '../../images/J2.jpg';
import journeyImage3 from '../../images/J3.jpg';
import journeyImage4 from '../../images/J4.jpg';
import journeyImage5 from '../../images/J5.jpg';
import journeyImage6 from '../../images/J6.jpg';

const journeyData = [
    { id: 1, imgSrc: journeyImage1, description: 'Started the journey in 2020' },
    { id: 2, imgSrc: journeyImage2, description: 'First milestone achieved' },
    { id: 3, imgSrc: journeyImage3, description: 'Expanded the reach' },
    { id: 4, imgSrc: journeyImage4, description: 'Reached 100k followers' },
    { id: 5, imgSrc: journeyImage5, description: 'Reached 100k followers' },
    { id: 6, imgSrc: journeyImage6, description: 'Reached 100k followers' },
    // Add more images and descriptions here
];

const Journey = () => {
    return (
        <section className="journey">
            <h1 className="journey-heading">Journey</h1>
            <p className="journey-description">Explore the milestones and achievements throughout our incredible journey.</p>
            <div className="journey-content">
                {journeyData.map((item) => (
                    <div key={item.id} className="journey-card">
                        <img src={item.imgSrc} alt={item.description} className="journey-image" />
                        <p className="journey-text">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Journey;
