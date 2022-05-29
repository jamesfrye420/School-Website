import React from 'react';
import classes from '../styles/HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <img src="Logo.png" alt="logo" />
        <h2>गायत्री संस्कृत माध्यमिक विद्यालय</h2>
        <h4>स्थापना वर्ष 1980 .81</h4>
        <h4>संस्थापक स्वर्गीय राजेंद्र प्रसाद त्रिपाठी</h4>
      </div>
      <div className={classes.right}>
        <h2>गायत्री संस्कृत माध्यमिक विद्यालय, </h2>
        <h2>भटपुरवा बजदहिया पाईपुर बसखारी अंबेडकर नगर</h2>
      </div>
    </div>
  );
};

export default HeroSection;
