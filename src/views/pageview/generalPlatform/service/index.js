import React from "react";
import PageViewWrapper from "../../../../utils/GaWrapper";
import AutoPageScrollWrapper from "../../../../utils/AutoPageScrollWrapper";
import Services from "./view";
import LoadingIndicator from "../../../../utils/loadingIndicator";
import { useAlert } from "react-alert";

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
