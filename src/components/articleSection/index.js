import React from "react";
import PropTypes from "prop-types";

function ArticleSection({ heading, title, desc, desc2 }) {
  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold text-typography-emphasis my-3 px-6 py-3 sm:px-0 sm:py-0">
        {heading && heading}
      </h3>
      <h2 className="text-lg sm:text-xl xl:text-3xl font-bold tracking-tight px-6 sm:px-0 capitalize">
        {title && title}
      </h2>
      <article className="text-justify text-xs sm:text-sm xl:text-base text-typography-light my-6 leading-5 sm:leading-6 tracking-tight lg:leading-relaxed px-6 sm:px-0">
        {desc && desc}
      </article>
    </div>
  );
}

ArticleSection.propTypes = {
  heading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default ArticleSection;
