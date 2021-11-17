import React from "react";
import PageViewWrapper from "../shared/GaWrapper";
import Home from "../Pages/Home/Home";

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
