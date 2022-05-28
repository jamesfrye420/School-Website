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
        <FontAwesomeIcon  icon={faHouse}/>
        <h3>Address:</h3>
        <h3>गायत्री संस्कृत माध्यमिक विद्यालय भटपुरवा बजदहिया पाईपुर बसखारी अंबेडकर नगर</h3>
        </span>
        <span className={classes.footer_items}>
        <FontAwesomeIcon icon={faPhone} />
        <h3 className={classes.last}>Contact Us:</h3>
        <h3 className={classes.last}>00000000000</h3>
        </span>
      </div>
      <div className={classes.footerinfo}>
        <h1>प्रधानाचार्य:</h1>
        <h3>अरविंद कुमार त्रिपाठी</h3>
        <h1>प्रबंधक:</h1>
        <h3>श्री कपिल देव उपाध्याय</h3>
      </div>
    </div>
  );
};

export default Footer;
