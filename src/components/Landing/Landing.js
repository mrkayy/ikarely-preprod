import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="h-screen bg-gradient-to-r from-white via-primary-100 to-primary-200">
        <div>
          {/* <div></div>
          <div className="w-full h-96 sm:h-300 md:h-400 lg:h-800 bg-doctor1 bg-no-repeat bg-right bg-contain"></div> */}
        </div>
        <div className={"h-screen lg:pt-32 lg:px-8 xl:pt-48 xl:pb-36 xl:px-20"}>
          <div
            className={`
          z-10
          sm:w-96 
          md:w-96
          
          lg:w-80
          xl:w-96

          sm:bg-primary-100 
          md:bg-primary-100 
          lg:bg-primary-100

          mb-8 
          p-3
          text-center 
          rounded-full
          `}
          >
            <p className="text-secondary font-bold lg:text-sm">
              #1 Best Care For Your Good Health
            </p>
          </div>
          <div
            className={`leading-loose
            lg:leading-tight 
            lg:w-5/12 
            xl:w-6/12
            text-primary-accent 
            text-left font-bold 
            text-lg 
            sm:text-lg
            md:text-xl
            lg:text-5xl
            `}
          >
            <p className="mb-1 md:mb-2 lg:mb-6 break-normal tracking-tight leading-3/12">
              Bringing Quality health Services to your Doorstep
            </p>
          </div>
          <div>
            <p className="text-xl md:text-sm lg:text-base md:text-justify leading-8 sm: md:w-8/12 lg:w-5/12">
              We are Uniquely designed for high-acuity patients in a home
              setting. We’ve designed and made significant investments in a
              scalable model that is enabled by technology and a threefold
              business/clinical/tech leadership team.
            </p>
          </div>
          <div>
            <Link to="/service">
              <button className="lg:mt-10 lg:px-6 lg:py-3 lg:bg-primary-accent lg:w-48 lg:text-white lg:rounded lg:text-5">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
