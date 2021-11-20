import React from "react";
import PageViewWrapper from "../../../../utils/GaWrapper";
import Subscription from "./view";

function SubscriptionPageView(props) {
  console.log(props.location.pathname);
  const path = props.location.pathname;

  return (
    <PageViewWrapper pageDesc={"ContactUs..."} page={path}>
      <Subscription props={props} />
    </PageViewWrapper>
  );
}

export default SubscriptionPageView;
