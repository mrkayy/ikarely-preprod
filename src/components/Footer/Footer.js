import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

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
        {/* removed social links and add it as a nav-link */}
        <ul className="socialmedia__icons">
          <li>
            <a href="https://instagram.com/ikarelylimited?igshid=1cnrk25ti9ngl">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/ikarelylimited?s=21">
              <TwitterIcon />
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__middle">
        <h3 className="subscribe___header">Quicklinks</h3>
        <ul>
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
      {/* <div className="footer__middle">
        <h3 className="subscribe___header">Our Socials</h3>
        <ul className="">
          <li>
            <a href="https://instagram.com/ikarelylimited?igshid=1cnrk25ti9ngl">
              <InstagramIcon /> Instagram
            </a>
          </li>
          <li>
            <a href="https://twitter.com/ikarelylimited?s=21">
              <TwitterIcon /> Twitter
            </a>
          </li>
        </ul>
      </div> */}

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
                  <a href="tel:+2348035418437">08035418437,</a>{' '}
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
                <li>1-5 Oba Akinjobi Way, GRA, Ikeja, Lagos, Nigeria.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
