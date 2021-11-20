import React from "react";
import PageViewWrapper from "../../../../utils/GaWrapper";
import Home from "./view";
function HomePageView(props) {
  console.log(props.location.pathname);
  const path = props.location.pathname;

  return (
    <PageViewWrapper pageDesc={"Welcome to Ikarely..."} page={path}>
      <Home />
    </PageViewWrapper>
  );
}

export default HomePageView;
