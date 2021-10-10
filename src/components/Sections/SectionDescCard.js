import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function SectionDescCard({ heading, title, desc }) {
  return (
    <div className="mt-6 md:w-full lg:w-2/5 xl:w-2/5">
      <h3 className="text-2xl font-bold text-typography-emphasis my-3 px-6 py-3 sm:px-0 sm:py-0">
        {heading}
      </h3>
      <h2 className="text-lg sm:text-xl xl:text-3xl font-bold tracking-tight px-6 sm:px-0 capitalize">
        {title}
      </h2>
      <p className="text-justify text-xs sm:text-sm xl:text-base text-typography-light my-6 leading-5 sm:leading-6 tracking-tight lg:leading-relaxed px-6 sm:px-0">
        {desc}
      </p>

      <div className="px-6 sm:px-0">
        {/* TODO: link button to blog page when avaliable */}

        <Link to="/">
          <button
            type="button"
            className="w-3/6 sm:w-40 lg:w-5/12 text-xs sm:text-sm rounded text-white bg-button-primary hover:shadow-md hover:bg-white hover:text-typography-main p-3"
          >
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}

SectionDescCard.propTypes = {
  heading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default SectionDescCard;
