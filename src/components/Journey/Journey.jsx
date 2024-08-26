import React from 'react';
import './Journey.scss';
import journeyImage1 from '../../images//JourneyPics/J1.jpg';
import journeyImage2 from '../../images//JourneyPics/J2.jpg';
import journeyImage3 from '../../images//JourneyPics/J3.jpg';
import journeyImage4 from '../../images//JourneyPics/J4.jpg';
import journeyImage5 from '../../images//JourneyPics/J5.jpeg';
import journeyImage6 from '../../images//JourneyPics/J6.jpg';
import journeyImage7 from '../../images//JourneyPics/J7.jpg';
import journeyImage8 from '../../images//JourneyPics/J8.jpg';
import journeyImage9 from '../../images//JourneyPics/J9.jpg';
import journeyImage10 from '../../images//JourneyPics/J10.jpeg';
import journeyImage11 from '../../images//JourneyPics/J11.jpg';
// import journeyImage12 from '../../images//JourneyPics/J12.jpg';
import journeyImage13 from '../../images//JourneyPics/J13.jpg';
import journeyImage14 from '../../images//JourneyPics/J14.jpg';
// import journeyImage15 from '../../images//JourneyPics/J15.jpg';
import journeyImage16 from '../../images//JourneyPics/J16.jpg';
import journeyImage17 from '../../images//JourneyPics/J17.jpg';
import journeyImage18 from '../../images//JourneyPics/J18.jpg';
import journeyImage19 from '../../images//JourneyPics/J19.jpg';
import journeyImage20 from '../../images//JourneyPics/J20.jpg';
import journeyImage21 from '../../images//JourneyPics/J21.jpg';
// import journeyImage22 from '../../images//JourneyPics/J22.jpg';
import journeyImage23 from '../../images//JourneyPics/J23.jpg';

const journeyData = [
    { id: 7, imgSrc: journeyImage7, description: 'Started my Journey' },
    { id: 9, imgSrc: journeyImage9, description: 'Following System' },
    { id: 11, imgSrc: journeyImage11, description: 'Adventures' },
    { id: 8, imgSrc: journeyImage8, description: 'Self-Confidence' },
    { id: 6, imgSrc: journeyImage6, description: 'With leaders' },
    { id: 1, imgSrc: journeyImage1, description: 'Appreciation' },
    { id: 23, imgSrc: journeyImage23, description: 'Dedicated hard-work' },
    { id: 13, imgSrc: journeyImage13, description: 'Amazing Transformation' },
    { id: 14, imgSrc: journeyImage14, description: 'With Leaders' },
    { id: 16, imgSrc: journeyImage16, description: 'Vacation' },
    { id: 17, imgSrc: journeyImage17, description: 'Healthy Commmunity' },
    { id: 18, imgSrc: journeyImage18, description: 'With Top-Leaders' },
    { id: 19, imgSrc: journeyImage19, description: 'With Top-Leaders' },
    { id: 10, imgSrc: journeyImage10, description: 'Founder of Herbalife (Biggest Training)' },  
    { id: 2, imgSrc: journeyImage2, description: 'With Top-Leaders' },
    { id: 3, imgSrc: journeyImage3, description: 'With Top-Leaders' },
    { id: 4, imgSrc: journeyImage4, description: 'With Top-Leaders' },
    { id: 5, imgSrc: journeyImage5, description: 'Vacation ' },
    { id: 20, imgSrc: journeyImage20, description: 'With Top-Leaders' },
    { id: 21, imgSrc: journeyImage21, description: 'Training' },
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
