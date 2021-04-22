import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img src="images/logo.png" alt="" />
        <p className="terms">
          <li>
            <Link to="#">Terms and Policies</Link>
          </li>
        </p>
        <p className="copyright">&copy; iKarely 2021</p>

        <div className="footer__middle">
          <ul>
            <h3 className="subscribe___header">Quicklinks</h3>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="#">FAQs</Link>
            </li>
            <li>
              <Link to="#">Partners</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__right">
        <div className="subscribe__form">
          <h3 className="subscribe___header">Subscribe to Newsletter</h3>
          <div className="subscribe__input">
            <input type="text" placeholder="Your Email" />
            <button className="footer__btn">
              <Link to="#">Subscribe</Link>
            </button>
          </div>

          <div className="footer__right">
            <h3 className="subscribe___header">Contact us</h3>
            <div className="footer__middle">
              <ul>
                <li>
                  <a href="tel:+2348035418437">08035418437,</a>{" "}
                  <a href="tel:+2349063870220"> 09063870220</a>
                </li>
                <li>
                  <a href="mailto:info@ikarely.com">info@ikarely.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__right">
            <h3 className="subscribe___header">Address</h3>
            <div className="footer__middle">
              <ul>
                <li>1-5 Oba Akinjobi Way, GRA, Ikaja, Lagos, Nigeria.</li>
              </ul>
            </div>
          </div>
          <div className="footer__right">
            <h3 className="subscribe___header">Socials</h3>
            <div className="footer__middle">
              <ul>
                <li>
                  <a href="https://twitter.com/ikarelylimited?s=21">Twitter</a>{" "}
                  <a href="tel:+2349063870220"></a>
                </li>
                <li>
                  <a href="https://instagram.com/ikarelylimited?igshid=1cnrk25ti9ngl">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
