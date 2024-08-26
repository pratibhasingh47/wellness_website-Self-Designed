import React from 'react';
import './Testimonial.scss';
import PIC1 from '../../images/PHOTO 1.png';
import PIC2 from '../../images/PHOTO 2.png';
import PIC3 from '../../images/PHOTO 3.png';
import PIC4 from '../../images/PHOTO 4.png';
import PIC5 from '../../images/PHOTO 5.png';
import PIC6 from '../../images/PHOTO 6.jpg';
import PIC7 from '../../images/PHOTO 7.png';
import PIC8 from '../../images/PHOTO 8.png';
import PIC9 from '../../images/PHOTO 9.jpg';

const testimonials = [
    { name: 'Mr. Tribhuvan Tiwari', imgSrc: PIC1 },
    { name: 'Mr. Chiman Singh Chundawat', imgSrc: PIC4 },
    { name: 'Mr. Hari Singh Chundawat', imgSrc: PIC3 },
    { name: 'Mr. Ratan Singh Chundawat', imgSrc: PIC5 },
    { name: 'Mr. Pranav Nanavati', imgSrc: PIC7 },
    { name: 'Mrs. Pushplata Singh', imgSrc: PIC2 },
    { name: 'David Lee', imgSrc: PIC6 },
    { name: 'James Taylor', imgSrc: PIC8 },
    { name: 'Mrs. Premlata Choudhary', imgSrc: PIC9 },
];

const Testimonial = () => {
    return (
        <section className="testimonial">
            <h1 className="testimonial-heading">Testimonials</h1>
            <div className="testimonial-footer">
                <p className="testimonial-footer-text">
                    Our clients' feedback is crucial in helping us improve our services. We are dedicated to providing top-notch service and appreciate the insights shared by our valued clients.
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
