import React, { useState, useContext } from "react";
import {observer} from 'mobx-react'
import Overlay from "../../components/Overlay/Overlay";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";

// all pages are passed in as children props to the PageContainer component
const PageContainer = ({ children }) => {
  const [slide, setSlide] = useState(false);
  const showMenu = (slide) => {
    setSlide(!slide);
  };

  return (
    <>
      <div>
        <Overlay slide={slide} showMenu={showMenu} setSlide={setSlide} />
        <NavBar slide={slide} showMenu={showMenu} />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default observer(PageContainer);
