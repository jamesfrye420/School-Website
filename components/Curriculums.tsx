import React from 'react';

export interface curriculums {
  description: string;
  image: string;
}

export const Curriculums: React.FC<{ curriculums: curriculums }> = (props) => {
  return (
    <div>
      <h1>{props.curriculums.description}</h1>
      <img src={props.curriculums.image} alt={props.curriculums.description} />
    </div>
  );
};

export default Curriculums;
