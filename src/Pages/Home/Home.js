import React from "react";
import Landing from "../../components/Landing/Landing";
import Section from "../../components/Sections/Sections";
import WhyUs from "../../components/WhyChooseUs/WhyUs";
import './Home.css'

const Home = () => {
  
  React.useEffect(() => {
    autoScroll();
  }, []);

  const autoScroll = () => {
    return window.scrollTo(0, 0);
  };

  return (
    <div className='home'>
      <Landing />
      <Section />
      <WhyUs />
    </div>
  );
}

export default Home;
