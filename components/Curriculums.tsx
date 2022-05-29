import React from 'react';
import classes from '../styles/Curriculums.module.css';
export interface curriculums {
  description: string;
  image: string;
}

export const Curriculums: React.FC<{ curriculums: curriculums }> = (props) => {
  return (
    <div className={classes.treeimage}>
      <h1>{props.curriculums.description}</h1>
      <img
        className={classes.img}
        src={props.curriculums.image}
        alt={props.curriculums.description}
      />
    </div>
  );
};

export default Curriculums;
