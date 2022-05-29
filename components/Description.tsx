import React from 'react';
import classes from '../styles/Description.module.css';

export interface images {
  principal: string;
  manager: string;
}

export const Description: React.FC<{ images: images }> = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.container__element}>
        <h1>प्रधानाचार्य अरविंद कुमार त्रिपाठी</h1>
        <img src={props.images.principal} alt="principal" />
      </div>
      <div className={classes.container__element}>
        <h1>प्रबंधक श्री कपिल देव उपाध्याय</h1>
        <img src={props.images.manager} alt="manager" />
      </div>
    </div>
  );
};

export default Description;
