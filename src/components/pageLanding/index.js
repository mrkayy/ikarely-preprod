import React from "react";
import "./pageLanding.css";

// component header and page title.
function PageLanding({ image, title }) {
  return (
    <>
      <div
        className={`bg-center bg-no-repeat bg-cover xl:bg-fit ${image} page__landing shadow-lg mb-8`}
        // style={{
        //   backgroundImage: `url(./images/${image})`,
        // }}
      >
        <div className="bg-white h-full bg-opacity-60">
          <div className="grid place-items-center h-full">
            <h2 className="text-secondary uppercase text-center xl:font-extrabold text-5xl xl:text-6xl">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageLanding;
