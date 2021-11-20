import React from "react";
import PageViewWrapper from "../shared/GaWrapper";
import AutoPageScrollWrapper from "../shared/AutoPageScrollWrapper";
import Services from "../Pages/Service/Service";

function ServicesPageView(props) {
  console.log(props.location.pathname);
  const path = props.location.pathname;

  return (
    <PageViewWrapper pageDesc={"Our Services..."} page={path}>
      <AutoPageScrollWrapper>
        <Services />
      </AutoPageScrollWrapper>
    </PageViewWrapper>
  );
}

export default ServicesPageView;
