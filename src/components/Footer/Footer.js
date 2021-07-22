import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

function Footer() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="footer">
        <div className="footer__news">
          <h4>Ikarely Health Service</h4>
          <p>{`{company moto}`}</p>
          <form onSubmit={handleFormSubmit}>
            <div className="footer__newsletter">
              <input
                required
                type="email"
                name="news_letter"
                placeholder="enter email address"
                className="newsletter__form"
              />
              <label>
                Enter your email address to subscribe to our news letter.
              </label>
              <button type="submit" className="footer__btn">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="footer__links">
          <div className="footer__link__content">
            <h5>Contact Us</h5>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                />
              </svg>
              <h6>
                <a href="tel:+2348000000000">
                  <span>(+234) </span>08000000000
                </a>
              </h6>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                />
              </svg>
              <h6>
                {/* <span>(+234) </span> */}
                <a href="mailto:info@ikarely.com">info@ikarely.com</a>
              </h6>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h6>{`{ikarely office address...}`}</h6>
            </div>
            {/* <div className="footer__link__socials">
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
            </div> */}
          </div>
          <div className="footer__link__content">
            <h5>Quick Links</h5>
            <div>
              <h6>
                <Link to="/service">Services</Link>
              </h6>
            </div>
            <div>
              <h6>
                <Link to="/about">About Us</Link>
              </h6>
            </div>
            <div>
              <h6>
                <Link to="/contact">Contact Us</Link>
              </h6>
            </div>
            {/* <div>
              <h6>
                <Link to="/blogs">
                  Pages
                </Link>
              </h6>
            </div> */}
          </div>
          <div className="footer__link__content">
            <h5>Services</h5>
            <div>
              <h6>
                <Link to="/service">General Check-Up</Link>
              </h6>
            </div>
            <div>
              <h6>
                <Link to="/service">Wound Care</Link>
              </h6>
            </div>
            <div>
              <h6>
                <Link to="/service">Vaccination</Link>
              </h6>
            </div>
            <div>
              <h6>
                <Link to="/service">Geriatric Care</Link>
              </h6>
            </div>
            <div>
              <h6>
                <Link to="/service">Dental Care</Link>
              </h6>
            </div>
            {/* <div>
              <h6>
                <Link to="/services">
                  Pages
                </Link>
              </h6>
            </div> */}
          </div>
          <div className="footer__link__content">
            <h5>Latest News</h5>
          </div>
        </div>
      </div>
      <div className="footer__rights">
        <h6>&copy;Ikarely - All Reserved Rights 2021</h6>
      </div>
    </>
  );
}

export default Footer;
