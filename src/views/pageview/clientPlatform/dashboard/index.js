import React from "react";
import PageViewWrapper from "../../../../utils/GaWrapper";
import Dashboard from "./view";

function DashboardPageView(props) {
  console.log(props.location);
  const path = props.location.pathname;

  return (
    <PageViewWrapper pageDesc={"User Dashboard"} page={path}>
      <Dashboard props={props} />
    </PageViewWrapper>
  );
}

export default DashboardPageView;
