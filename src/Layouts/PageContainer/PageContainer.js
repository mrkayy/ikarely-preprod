import React, { useState } from "react";
import Overlay from "../../components/Overlay/Overlay";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";

// all pages are passed in as children props to the PageContainer component
const PageContainer = ({ children, user }) => {
  const [slide, setSlide] = useState(false);
  // console.log({ user });

  const showMenu = (slide) => {
    setSlide(!slide);
  };

  return (
    <>
      <Overlay slide={slide} showMenu={showMenu} setSlide={setSlide} />
      <NavBar slide={slide} user={user} showMenu={showMenu} />
      {children}
      <Footer />
    </>
  );
};

export default PageContainer;
