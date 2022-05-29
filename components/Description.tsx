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
        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore debitis harum adipisci sit ducimus beatae commodi dolore nostrum earum. Impedit repellat quo illo rem veritatis, quaerat delectus cum a possimus reiciendis animi in harum asperiores dolorem autem sequi at fuga error sunt dolores numquam neque accusamus id dignissimos? Quam, itaque facilis. Obcaecati consequatur illum cum enim similique doloribus placeat, consectetur, labore voluptate exercitationem mollitia beatae ad suscipit ipsa incidunt, maiores amet impedit! Mollitia maiores voluptate ducimus?</h3>
      </div>
      <div className={classes.container__element}>
        <h1>प्रबंधक श्री कपिल देव उपाध्याय</h1>
        <img className={classes.manager_image} src={props.images.manager} alt="manager" />
      </div>
    </div>
  );
};

export default Description;
