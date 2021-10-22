import "./Footer.css";

import facebookIcon from "../../images/icon-facebook.svg";
import instagramIcon from "../../images/icon-instagram.svg";
import pinterestIcon from "../../images/icon-pinterest.svg";
import twitterIcon from "../../images/icon-twitter.svg";

function Footer() {
  return (
    <div className="footer">
      <h1 className="footer-header">sunnyside</h1>
      <div className="links">
        <p className="link">About</p>
        <p className="link">Services</p>
        <p className="link">Projects</p>
      </div>
      <div className="social-links">
        <img src={facebookIcon} alt="" />
        <img src={instagramIcon} alt="" />
        <img src={pinterestIcon} alt="" />
        <img src={twitterIcon} alt="" />
      </div>
    </div>
  );
}

export default Footer;
