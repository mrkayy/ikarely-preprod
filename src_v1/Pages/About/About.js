import React, { useEffect } from "react";
import PageLanding from "../../components/PageLanding/PageLanding";
import Teams from "../../components/Sections/Teams/Teams";
import WhyUs from "../../components/Sections/WhyChooseUs/WhyUs";
// import "./About.css";
import LayoutMargin from "../../components/LayoutWrapper/LayoutMargin";
import ArticleSection from "../../components/Sections/ArticleSection/ArticleSection";

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

      <LayoutMargin>
        <div className="md:flex md:justify-between md:items-center">
          <div className="md:w-full lg:w-2/5 xl:w-6/12 ">
            <ArticleSection
              heading="Your Health Is Our utmost Priority"
              desc={`Ikarely is a healthtech Company, specializing in delivery of optimal
            and quality healthcare services to client at their own comfort and
            utmost convenience. We are a digital health care company in Africa
            that is service oriented and works by connecting licensed nurses to
            patients that need basic health care services like, wound care,
            vaccination, chemotherapy, Intravenous fluid infusion,
            catheterization to mention a few. We are reducing the demand for
            hospitalization and admission for basic health care services that
            can be delivered to people at their own comfort, which will also
            reduce the work load of healthcare workers and increase access to
            quality care.`}
            />
          </div>
          <div className="hidden mb:block sm:hidden lg:block sm:bg-section-2 lg:w-6/12 xl:w-2/5 h-3/4 sm:shadow-md">
            <div className="bg-homecare bg-section-1 shadow-md sm:bg-transparent sm:shadow-none h-96 bg-cover bg-no-repeat bg-center"></div>
          </div>
        </div>
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
      </LayoutMargin>
      <div className="bg-section-1 pt-6 pb-24 sm:py-16 lg:py-3">
        <WhyUs />
      </div>
      {/* <Teams /> */}
    </div>
  );
};

export default About;
