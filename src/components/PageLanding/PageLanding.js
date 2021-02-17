import React from "react";
import "./PageLanding.css";

function PageLanding({image, title}) {
  return (
    <div
      className="page__landing"
      style={{
        backgroundImage: `url(images/${image})`
      }}
    >
        <div className="pageland__overlay">

       
      <h1 className="page__title">{title}</h1>
      </div>
    </div>
  );
}

export default PageLanding;
