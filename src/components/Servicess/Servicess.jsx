import React, { useState } from 'react';
import './Servicess.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faPerson, faUsers, faRepeat, faClock, faBookOpen, faUtensils } from '@fortawesome/free-solid-svg-icons';

const Service = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id='services' className="service">
            <div className="service-heading">
                <h2>Our Services</h2>
                <p>We offer a wide range of services to meet your needs and help you achieve your goals.</p>
            </div>
            <div className="accordion-container">
                {services.map((service, index) => (
                    <div
                        className={`accordion ${activeIndex === index ? 'active' : ''}`}
                        key={index}
                        onClick={() => toggleAccordion(index)}
                    >
                        <div className="accordion-header">
                            <FontAwesomeIcon icon={service.icon} />
                            <h3>{service.title}</h3>
                        </div>
                        <div className="accordion-content">
                            <p>{service.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const services = [
    {
        title: 'Weight Management',
        icon: faPerson,
        content: 'Weight management is crucial for overall health and well-being. Maintaining a healthy weight reduces the risk of chronic diseases such as diabetes, heart disease, and hypertension. It improves energy levels, enhances mobility, and supports mental health by boosting self-esteem and reducing stress. Effective weight management also promotes balanced nutrition and a healthier lifestyle, leading to better quality of life.',
    },
    {
        title: 'Personal One-to-One Session',
        icon: faHandshake,
        content: ' Experience tailored wellness support with our personal one-to-one sessions. Work directly with a dedicated coach to address your unique needs, set goals, and develop a customized plan. Receive personalized guidance, education, and feedback throughout your journey. Enjoy a supportive and confidential environment where your individual progress is the focus of every session.',
    },
    {
        title: '24/7 Services',
        icon: faClock,
        content: 'Our wellness services are available around the clock to support your journey anytime, anywhere. Access expert guidance, resources, and assistance whenever you need it. Whether you have questions, need motivation, or require immediate support, our 24/7 services ensure you have continuous access to the help you need for achieving your wellness goals.',
    },
    {
        title: 'Community Support/Guidance',
        icon: faUsers,
        content: 'Join our wellness community for continuous support and guidance. Connect with like-minded individuals who share similar goals and challenges. Participate in group discussions, receive motivational feedback, and benefit from collective knowledge. Our community fosters a supportive environment where you can find encouragement, share experiences, and achieve your wellness objectives together.',
    },
    {
        title: 'Meal-Plan',
        icon: faUtensils,
        content: 'Our meal-planning service offers customized nutrition plans tailored to your goals and preferences. Receive expertly designed meal suggestions that promote healthy eating and support weight management. Enjoy convenience and variety with meal plans that align with your lifestyle. Regular updates and adjustments ensure your plan evolves with your progress for optimal results.',
    },
    {
        title: 'Education',
        icon: faBookOpen,
        content: 'Gain valuable knowledge through our wellness education programs. Learn about nutrition, fitness, and healthy living practices that empower you to make informed decisions. Access resources, attend workshops, and receive expert insights to enhance your understanding and skills. Our education initiatives support your journey by providing the information needed for long-term wellness success.',
    },
    {
        title: 'Follow Up / Checkup:',
        icon: faRepeat,
        content: 'Benefit from regular follow-ups and checkups to monitor your progress and ensure you stay on track with your wellness goals. Our team provides ongoing support, reviews your achievements, and adjusts plans as needed. These check-ins offer an opportunity to address challenges, celebrate successes, and maintain motivation throughout your wellness journey.',
    },
];

export default Service;
