import React from "react";
import CustomModal from "../../../../layouts/portalLayout";
import PageViewWrapper from "../../../../utils/GaWrapper";
import Register from "./view";

function RegisterPageView(props) {
  console.log(props.location.pathname);
  const path = props.location.pathname;

  return (
    <PageViewWrapper pageDesc={"Register a User"} page={path}>
      <Register props={props} />
    </PageViewWrapper>
  );
}

export default RegisterPageView;
