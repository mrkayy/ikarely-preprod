import React from "react";
import PageViewWrapper from "../../../../utils/GaWrapper";
import SignIn from "./view";

function SigninPageView(props) {
  console.log(props.location.pathname);
  const path = props.location.pathname;

  return (
    <PageViewWrapper pageDesc={"Signin a User"} page={path}>
      <SignIn props={props} />
    </PageViewWrapper>
  );
}

export default SigninPageView;
