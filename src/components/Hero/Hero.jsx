import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className={`hero ${isLoaded ? 'loaded' : ''}`}>
      <div className="hero-left">
        <div className="circle circle1">
          <img src="URL_TO_IMAGE_1" alt="Image 1" />
        </div>
        <div className="circle circle2">
          <img src="URL_TO_IMAGE_2" alt="Image 2" />
        </div>
        <div className="circle circle3">
          <img src="URL_TO_IMAGE_3" alt="Image 3" />
        </div>
      </div>
      <div className="hero-right">
        <h1>Illness/Wellness??</h1>
        <h2>What will you choose...</h2>
      </div>
    </section>
  );
};

export default Hero;
