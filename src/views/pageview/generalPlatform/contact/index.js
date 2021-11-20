
import React from "react";
import PageViewWrapper from "../shared/GaWrapper";
import ContactUs from "./view";

function ContactPageView(props) {
  console.log(props.location.pathname);
  const path = props.location.pathname;

  return (
    <PageViewWrapper pageDesc={"ContactUs..."} page={path}>
      <ContactUs />
    </PageViewWrapper>
  );
}

export default ContactPageView;
