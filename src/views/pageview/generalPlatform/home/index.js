import React from "react";
import PageViewWrapper from "../../../../utils/GaWrapper";
import Home from "./view";

function HomePageView(props) {
  const path = props.location.pathname

  return (
    <PageViewWrapper pageDesc={"Welcome to Ikarely..."} page={path}>
      <Home />
    </PageViewWrapper>
  );
}

export default HomePageView;
