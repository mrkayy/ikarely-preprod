import React, { useEffect } from "react";
import PageLanding from "../../../../components/pageLanding";
// import Teams from "../../components/Sections/Teams/Teams";
import WhyUs from "../../../otherSections/whyChooseUs/whyUs";
import LayoutMargin from "../../../../components/layoutWrapper";
import ArticleSection from "./sections";

const About = () => {
  useEffect(() => {
    autoScroll();
  }, []);

  const autoScroll = () => {
    return window.scrollTo(0, 0);
  };

  return (
    <div className="about">
      <PageLanding image={"bg-doctor6"} title={"About us"} />

      <div className="">
        <ArticleSection
          desc={`
            Healthcare delivery in a developing country like Nigeria can prove
            to be very challenging. Lack of infrastructure is one of the major
            problems the Nigerian health sector faces, as various patients end
            up not being admitted due to lack of sufficient bed space, this is a
            common phenomenon in Nigeria, and also, in some cases patients with
            urgent need for immediate delivery of care are left to wait
            standing, most times unattended to as a result of lack of space or
            health care personnel. We are on a mission to increasing
            accessibility to quality healthcare delivery with convenience.`}
        />
      </div>
      {/* <LayoutMargin> */}
      <div className="mb-16 pt-6 pb-24 sm:py-16 lg:py-3">
        <WhyUs />
      </div>
      {/* </LayoutMargin> */}
    </div>
  );
};

export default About;
