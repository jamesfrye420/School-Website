import React from 'react';
import classes from '../styles/Description.module.css';

export interface images {
  principal: string;
  manager: string;
  founder: string;
}

export const Description: React.FC<{ images: images }> = (props) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.container__element}>
          <h1>प्रधानाचार्य अरविंद कुमार त्रिपाठी</h1>
          <img src={props.images.principal} alt="principal" />
        </div>
        <div className={classes.container__element}>
          <h1>संस्थापक स्व राजेन्द्र प्रसाद त्रिपाठी</h1>
          <img src={props.images.founder} alt="founder" />
        </div>
        <div className={classes.container__element}>
          <h1>प्रबंधक श्री कपिल देव उपाध्याय</h1>
          <img
            className={classes.manager_image}
            src={props.images.manager}
            alt="manager"
          />
        </div>
      </div>
      <div className={classes.container__element__message}>
        <h3>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
          laudantium sequi, vel, nemo reprehenderit velit quaerat repudiandae
          facilis sit, corrupti reiciendis iusto laboriosam magni.
        </h3>
      </div>
    </>
  );
};

export default Description;
