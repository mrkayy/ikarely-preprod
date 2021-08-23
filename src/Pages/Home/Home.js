import React from "react";
import Landing from "../../Components/Landing/Landing";
import Section from "../../Components/Sections/Sections";
import WhyUs from "../../Components/Sections/WhyChooseUs/WhyUs";
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
      {/* <WhyUs /> */}
      <Section />
    </div>
  );
}

export default Home;
