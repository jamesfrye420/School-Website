import { faHouse, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import classes from '../styles/Footer.module.css';
const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer__address}>
        <h1>गायत्री संस्कृत माध्यमिक विद्यालय</h1>
        <span className={classes.footer_items}>
          <FontAwesomeIcon icon={faHouse} />
          <h2>पता:</h2>
          <h2>
            गायत्री संस्कृत माध्यमिक विद्यालय भटपुरवा बजदहिया पाईपुर बसखारी
            अंबेडकर नगर - 224137
          </h2>
        </span>
        <span className={classes.footer_items}>
          <FontAwesomeIcon icon={faPhone} />
          <h2 className={classes.last}>संपर्क सूत्र:</h2>
          <h2 className={classes.last}>+91 9936734038 /</h2>
          <h2 className={classes.last}>9936201769</h2>
        </span>
      </div>
      <div className={classes.footerinfo}>
        <h1>प्रधानाचार्य:</h1>
        <h2>अरविंद कुमार त्रिपाठी</h2>
        <h1>प्रबंधक:</h1>
        <h2>श्री कपिल देव उपाध्याय</h2>
      </div>
    </div>
  );
};

export default Footer;
