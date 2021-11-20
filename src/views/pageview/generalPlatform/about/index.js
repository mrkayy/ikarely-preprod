import React from "react";
import PageViewWrapper from "../../utils/GaWrapper";
import AboutUs from "./view";

function AboutUsPageView(props) {
  console.log(props.location.pathname);
  const path = props.location.pathname;

  return (
    <PageViewWrapper pageDesc={"About Us Ikarely..."} page={path}>
      <AboutUs />
    </PageViewWrapper>
  );
}

export default AboutUsPageView;
