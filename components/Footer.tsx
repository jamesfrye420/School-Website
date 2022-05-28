import { CallMissedSharp } from '@material-ui/icons';
import React from 'react';
import classes from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div>
        <h1>Contact Us:</h1>
        <h2>Ph:00000000000</h2>
        <h2>Address</h2>
      </div>
      <div>
        <h1>Principal</h1>
        <h2>Vice Principal</h2>
      </div>
    </div>
  );
};

export default Footer;
