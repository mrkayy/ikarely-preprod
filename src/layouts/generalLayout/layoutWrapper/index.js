import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import Overlay from "../overlay";
import NavBar from "../navbar";
import Footer from "../footer";

// all pages are passed in as children props to the PageContainer component
const LayoutWrapper = ({ children }) => {
  const [slide, setSlide] = useState(false);

  const showMenu = () => {
    setSlide(!slide);
  };

  return (
    <>
      <div className="">
        <Overlay slide={slide} showMenu={showMenu} setSlide={setSlide} />
        <NavBar showMenu={showMenu} />
        <div className="mx-auto">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default observer(LayoutWrapper);
