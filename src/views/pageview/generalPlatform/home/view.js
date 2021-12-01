import React from "react";

import Landing from "./landing";
import Section from "./sections";
import ReactGA from "react-ga4";

import CustomModal from "../../../../layouts/portalLayout";

const Home = () => {
  React.useEffect(() => {
    ReactGA.send({ hitType: "landing_page", page: "/" });
  }, []);
  React.useEffect(() => {
    autoScroll();
  }, []);

  const autoScroll = () => {
    return window.scrollTo(0, 0);
  };

  return (
    <div className="">
      <Landing />
      <Section />
    </div>
  );
};

export default Home;