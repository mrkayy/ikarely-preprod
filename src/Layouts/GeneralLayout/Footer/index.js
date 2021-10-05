import React from "react";
import { Link } from "react-router-dom";
// import "./footer_styles.css";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import footerImage from "../../../assets/images/iKarelyX.png";
// import Line from "../../../components/svg/Line";

import LayoutMargin from "../component/LayoutMargin";
function Footer() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="bg-primary-main w-full pt-8 sm:pt-14 text-white">
        <LayoutMargin>
          <div className="sm:flex sm:justify-between mb-16">
            <div className="flex-col justify-center mb-7 lg:mr-8">
              <div className="flex items-start mb-4">
                <img
                  src="../images/health-care-logo.png"
                  alt="logo.png"
                  className="w-10 sm:w-14"
                />
                <div>
                  <p className="text-lg md:text-base lg:text-xl font-semibold ml-3 tracking-tight">
                    Ikarely Health Limited
                  </p>

                  <p className="px-3 text-xs sm:text-xs md:sm:text-xs lg:text-sm">
                    Live Healthier, Live Better.
                  </p>
                </div>
              </div>

              <div className="text-xs">
                <div className="flex items-center justify-start mb-3">
                  <img
                    src={`images/${"Vector3.png"}`}
                    alt="location.jpg"
                    className="w-4 sm:w-6 md:w-4 lg:w-6 mr-3"
                  />
                  <span>Location@Ikarely, Nigeria</span>
                </div>
                <div className="flex items-center justify-start mb-3">
                  <img
                    src={`images/${"Vector.png"}`}
                    alt=""
                    className="w-4 sm:w-6 md:w-4 lg:w-6 mr-3"
                  />
                  <span>info@ikarely.com</span>
                </div>
                <div className="flex items-center justify-start mb-3">
                  <img
                    src={`images/${"Vector2.png"}`}
                    alt=""
                    className="w-4 sm:w-6 md:w-4 lg:w-6 mr-3"
                  />
                  <span>+23490115130</span>
                </div>
              </div>

              <div className="md:mt-8 md:block hidden sm:hidden lg:hidden">
                <h3 className="md:ont-bold md:mb-2 md:text-white md:text-sm">
                  Newsletter
                </h3>
                <p className=" md:w-56 text-center sm:text-left sm:tracking-wide mb-2 sm:mb-4 text-xs md:text-md">
                  Subscribe to our newsletter to get updates.
                </p>
                {/* add input text-box to collect subscribers */}
                <div className=""></div>
              </div>
            </div>

            <div className="text-left lg:mr-8">
              <h3 className="font-bold mb-4 text-white text-lg sm:text-xl md:text-sm lg:text-lg xl:text-xl">
                Our services
              </h3>
              <div className="no-underline grid grid-cols-1 gap-y-3">
                <Link to="/sevice" className="text-white text-xs md:text-md">
                  <p>Wound Care</p>
                </Link>
                <Link to="/sevice" className="text-white text-xs md:text-md">
                  <p>Doctor's Consultation</p>
                </Link>
                <Link to="/sevice" className="text-white text-xs md:text-md">
                  <p>Covid-19 Screening</p>
                </Link>
                <Link to="/sevice" className="text-white text-xs md:text-md">
                  <p>Geriatic Care</p>
                </Link>
                <Link to="/sevice" className="text-white text-xs md:text-md">
                  <p>Diabetes Care</p>
                </Link>
                <Link to="/sevice" className="text-white text-xs md:text-md">
                  <p>General Checkup</p>
                </Link>
                {/* <Link to="/sevice" className="text-white text-sm sm:text-md">
                  <p>Catherization</p>
                </Link> */}
                {/* <Link to="/sevice" className="text-white text-sm sm:text-md">
                  <p>Chemotherapy</p>
                </Link> */}
              </div>
            </div>

            <div className="text-left mt-8 sm:mt-0 lg:mr-8">
              <h3 className="font-bold mb-4 text-white text-lg sm:text-xl md:text-sm lg:text-lg xl:text-xl">
                Quick Links
              </h3>
              <div className="grid grid-cols-1 gap-y-3">
                <Link to="/" className="text-white text-xs md:text-md">
                  <p>Home</p>
                </Link>
                <Link to="/service" className="text-white text-xs md:text-md">
                  <p>Services</p>
                </Link>
                <Link to="/about" className="text-white text-xs md:text-md">
                  <p>About Us</p>
                </Link>
                <Link to="/contact" className="text-white text-xs md:text-md">
                  <p>Contact Us</p>
                </Link>
              </div>
            </div>

            <div className="mt-8 sm:mt-0 md:hidden lg:block">
              <h3 className="font-bold mb-4 text-center sm:text-left text-white text-lg sm:text-xl md:text-sm lg:text-xl">
                Newsletter
              </h3>
              <p className="text-center sm:text-left sm:tracking-wide mb-2 sm:mb-4 text-xs md:text-md">
                Subscribe to our newsletter to get updates.
              </p>
              {/* add input text-box to collect subscribers */}
              <div className=""></div>
            </div>
          </div>

          <div className="h-1 bg-gradient-to-r from-primary-main via-white to-primary-main "></div>
          <div className="text-center text-xs lg:text-sm text-white pt-8 pb-10">
            <h6>&copy;Ikarely Health Limited - All Reserved Rights 2021</h6>
          </div>
        </LayoutMargin>
      </div>
    </>
  );
}

export default Footer;
