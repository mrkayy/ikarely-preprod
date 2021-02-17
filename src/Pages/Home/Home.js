import React from "react";
import Landing from "../../components/Landing/Landing";
import Section from "../../components/Sections/Sections";
import WhyUs from "../../components/WhyChooseUs/WhyUs";
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <Landing />
      <Section />
      <WhyUs />
    </div>
  );
}

export default Home;
