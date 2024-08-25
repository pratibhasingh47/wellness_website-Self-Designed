import React from 'react';
import './Testimonial.scss';
import image1 from "../../images/img1.jpg";

const testimonials = [
    { name: 'John Doe', imgSrc: image1 },
    { name: 'Jane Smith', imgSrc: image1 },
    { name: 'Emily Johnson', imgSrc: image1 },
    { name: 'Michael Brown', imgSrc: image1 },
    { name: 'Sara Wilson', imgSrc: image1 },
    { name: 'David Lee', imgSrc: image1 },
    { name: 'Laura Martinez', imgSrc: image1 },
    { name: 'James Taylor', imgSrc: image1 },
    { name: 'Olivia Anderson', imgSrc: image1 },
];

const Testimonial = () => {
    return (
        <section className="testimonial">
            <h1 className="testimonial-heading">Testimonials</h1>
            <div className="testimonial-footer">
                <p className="testimonial-footer-text">
                    Our clients’ feedback is crucial in helping us improve our services. We are dedicated to providing top-notch service and appreciate the insights shared by our valued clients.
                </p>
            </div>
            <div className="testimonial-content">
                <div className="testimonial-cards">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <img src={testimonial.imgSrc} alt={testimonial.name} className="testimonial-img" />
                            <p className="testimonial-name">{testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
