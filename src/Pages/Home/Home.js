import React from "react";

import Landing from "../../components/Sections/Landing/Landing";
import Section from "../../components/Sections/Sections";
// import "./Home.css";
import ReactGA from "react-ga4";

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
