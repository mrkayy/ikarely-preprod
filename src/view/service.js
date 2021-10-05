import React from "react";
import PageViewWrapper from "../shared/GaWrapper";
import Services from "../Pages/Service/Service";

function ServicesPageView(props) {
  console.log(props.location.pathname);
  const path = props.location.pathname;

  return (
    <PageViewWrapper pageDesc={"Our Services..."} page={path}>
      <Services />
    </PageViewWrapper>
  );
}

export default ServicesPageView;
