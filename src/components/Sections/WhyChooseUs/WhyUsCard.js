import React from "react";
import PropTypes from "prop-types";

function WhyUsCard({ icon, title, word }) {
  return (
    <div className="bg-white w-10/12 sm:w-11/12 xl:w-10/12  shadow-2xl rounded-3xl p-8 sm:-7 xl:p-8">
      <div className="max-w-full h-60 sm:h-64  md:h-80 xl:h-96 flex-column items-stretch">
        <div className="mb-10 sm:mb-16">
          <div className="">
            <div className="bg-primary-100 h-16 w-16 rounded-md transform -rotate-12">
              <div className="bg-primary-100 h-16 w-16 rounded-md transform rotate-12 grid place-items-center">
                <p className="text-xs sm:text-sm">{icon}</p>
                {/* <img src={`images/icons/${icon}`} alt={icon} /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="my-3">
          <h2 className="text-xl text-typography-light font-bold tracking-tight xl:tracking-wider">
            {title}
          </h2>
        </div>
        <div className="">
          <p
            className={`text-typography-extralight text-xs xl:text-base font-font-light
              sm:tracking-tight  text-justify xl:tracking-normal xl:leading-6`}
          >
            {word}
          </p>
        </div>
      </div>
    </div>
  );
}

WhyUsCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  word: PropTypes.string.isRequired,
};

export default WhyUsCard;
