import React from "react";
import "./PageLanding.css";

// component header and page title.
function PageLanding({ image, title }) {
  const style = `h-3/5
    bg-no-repeat
    bg-center
    bg-cover
    bg-doctor2`;
  return (
    <>
      <div
        className="page__landing"
        style={{
          backgroundImage: `url(./images/${image})`,
        }}
      >
        <div className="pageland__overlay">
          <h2 className="text-secondary uppercase xl:font-bolder lg:text-4xl xl:text-6xl">
            {title}
          </h2>
        </div>
      </div>
    </>
  );
}

export default PageLanding;
