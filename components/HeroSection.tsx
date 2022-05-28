import React from 'react';
import classes from '../styles/HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <h1>Logo</h1>
        <h2>Gayatri Sanskrit Vidyalaya</h2>
        <h4>Established</h4>
      </div>
      <div>
        <h2>Address line 1</h2>
        <h3>Address line 2</h3>
        <h3>Address Line 3</h3>
      </div>
    </div>
  );
};

export default HeroSection;
