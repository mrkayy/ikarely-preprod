import React from "react";
import { Link } from "react-router-dom";
import "./footer_styles.css";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import FacebookIcon from "@material-ui/icons/Facebook";
import footerImage from "../../../assets/images/iKarelyX.png";

function Footer() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="footer">
        <div className="footer__contacts">
          <img src={footerImage} alt="logo.png"/>
          <p className="logo__tag">Live Healthier, Live Better.</p>

          <div className="iconandinfo">
            <img src={`images/${"Vector3.png"}`} alt="" />{" "}
            <span>Location@Ikarely, Nigeria</span>
          </div>
          <div className="iconandinfo">
            <img src={`images/${"Vector.png"}`} alt="" />{" "}
            <span>info@ikarely.com</span>
          </div>
          <div className="iconandinfo">
            <img src={`images/${"Vector2.png"}`} alt="" />{" "}
            <span>+23490115130</span>
          </div>
        </div>

        <div className="our__services">
          <h3 className="footer__linkhead">Our services</h3>
          <ul className="footer__links">
            <li>Wound Care</li>
            <li>Vaccination</li>
            <li>Geriatic Care</li>
            <li>Dental Care</li>
            <li>General Checkup</li>
            <li>Catherization</li>
            <li>Chemotherapy</li>
            <li>Dental Care</li>
          </ul>
        </div>
        <div className="quick__links">
          <h3 className="footer__linkhead">quick links</h3>
          <ul className="footer__links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/service">Services</Link>
            </li>
            <li>
              <Link to="about">About Us</Link>
            </li>
            <li>
              <Link to="contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* <div className="newsletter">
        <h3 className="footer__linkhead">newsletter</h3>
          <p className="newletter__word">
          Subscribe to our newsletter to get updates.
          </p>
          <input type="text" className="newsletter" />
        </div> */}
      </div>

      <div className="copyrights__section">
        <h6>&copy;Ikarely - All Reserved Rights 2021</h6>
      </div>
    </>
  );
}

export default Footer;
