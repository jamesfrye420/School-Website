// import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { faHouse, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import classes from '../styles/Footer.module.css';
const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer__address}>
        <h1>Gayatri Sankrit Vidyalaya</h1>
        <span className={classes.footer_items}>
          <FontAwesomeIcon icon={faHouse} />
          <h2>Address:</h2>
          <h2>
            गायत्री संस्कृत माध्यमिक विद्यालय भटपुरवा बजदहिया पाईपुर बसखारी
            अंबेडकर नगर
          </h2>
        </span>
        <span className={classes.footer_items}>
          <FontAwesomeIcon icon={faPhone} />
          <h2 className={classes.last}>Contact Us:</h2>
          <h2 className={classes.last}>00000000000</h2>
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
