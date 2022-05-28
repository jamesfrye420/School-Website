import React from 'react';
import classes from '../styles/HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <h1>Logo</h1>
        <h2>गायत्री संस्कृत माध्यमिक विद्यालय</h2>
        <h4>स्थापना वर्ष 1980 .81</h4>
      </div>
      <div className={classes.right}>
        <h2>गायत्री संस्कृत माध्यमिक विद्यालय, </h2>
        <h2>भटपुरवा बजदहिया पाईपुर बसखारी अंबेडकर नगर</h2>
      </div>
    </div>
  );
};

export default HeroSection;
