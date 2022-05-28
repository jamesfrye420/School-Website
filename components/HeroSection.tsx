import React from 'react';
import classes from '../styles/HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <div className={classes.container}>
      <div>
        <h1>Logo</h1>
        <h2>Name</h2>
        <h3>Established</h3>
      </div>
      <div>
        <h1>Address line 1</h1>
        <h2>Address line 2</h2>
        <h3>Address Line 3</h3>
      </div>
    </div>
  );
};

export default HeroSection;
