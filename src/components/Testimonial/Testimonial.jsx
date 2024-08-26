import React from 'react';
import './Testimonial.scss';
import PIC1 from '../../images/PHOTO 1.png';
import PIC2 from '../../images/PHOTO 2.png';
import PIC3 from '../../images/PHOTO 3.png';
import PIC4 from '../../images/PHOTO 4.png';
import PIC5 from '../../images/PHOTO 5.png';
import PIC6 from '../../images/PHOTO 6.png';
import PIC7 from '../../images/PHOTO 7.png';
import PIC8 from '../../images/PHOTO 8.png';
import PIC9 from '../../images/PHOTO 9.jpg';

const testimonials = [
    { name: 'Tribhuvan Tiwari', imgSrc: PIC1 },
    { name: 'Chiman Singh Chundawat', imgSrc: PIC4 },
    { name: 'Hari Singh Chundawat', imgSrc: PIC3 },
    { name: 'Ratan Singh Chundawat', imgSrc: PIC5 },
    { name: 'Pranav Nanavati', imgSrc: PIC7 },
    { name: 'Pushplata Singh', imgSrc: PIC2 },
    { name: 'Sugandha Pawar', imgSrc: PIC6 },
    { name: 'Nandkishore Gola', imgSrc: PIC8 },
    { name: 'Premlata Choudhary', imgSrc: PIC9 },
];

const Testimonial = () => {
    return (
        <section className="testimonial">
            <h1 className="testimonial-heading">Testimonials</h1>
            <div className="testimonial-footer">
                <p className="testimonial-footer-text">
                    We are dedicated to providing a best result to our people. There are many people's who are associated and are the part of this community.
                    These are some testimonial
                </p>
            </div>
            <div className="testimonial-content">
                <div className="testimonial-cards">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="testimonial-img-container">
                                <img src={testimonial.imgSrc} alt={testimonial.name} className="testimonial-img" />
                            </div>
                            <p className="testimonial-name">{testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
