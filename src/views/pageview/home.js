import React, { useEffect } from "react";
import PageViewWrapper from "../../utils/GaWrapper";
import Home from "../pages/Home/Home";
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