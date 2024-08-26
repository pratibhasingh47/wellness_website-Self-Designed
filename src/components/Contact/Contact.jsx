import React from 'react';
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-left">
                    <h1 className="contact-heading">Get in Touch ! </h1>
                    <p className="contact-description">
                        If wou have any query regarding anything. You can contact me anytime or else you 
                        can fill this form. I will be pleased to guide you. Feel free to reach out.
                    </p>
                    <p className="contact-phone">
                        <strong>Phone:</strong> +91 7690828419
                    </p>
                    <div className="contact-socials">
                        <a href="https://facebook.com/yourtextid" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} /> @geetagyasingh
                        </a>
                        <a href="https://instagram.com/yourtextid" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} /> @geetagyasingh
                        </a>
                    </div>
                </div>
                <div className="contact-right">
                    <form className="contact-form">
                        <label>
                            <span>Name</span>
                            <input className="input" type="text" placeholder="" required />
                        </label>
                        <label>
                            <span>Address</span>
                            <input className="input" type="text" placeholder="" required />
                        </label>
                        <label>
                            <span>Valid Email</span>
                            <input className="input" type="email" placeholder="" required />
                        </label>
                        <label>
                            <span>Contact No.</span>
                            <input className="input" type="text" placeholder="" required />
                        </label>
                        <label>
                            <span>Goal (optional)</span>
                            <input className="input" type="text" placeholder="" />
                        </label>
                        <button className="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
