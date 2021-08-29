import React, { useEffect } from "react";
import PageLanding from "../../components/PageLanding/PageLanding";
import Teams from "../../components/Sections/Teams/Teams";
import WhyUs from "../../components/Sections/WhyChooseUs/WhyUs";
import "./About.css";

const About = () => {
  useEffect(() => {
    autoScroll();
  }, []);

  const autoScroll = () => {
    return window.scrollTo(0, 0);
  };

  return (
    <div className="about">
      <PageLanding image="easy-access.jpg" title="About us" />

      <div className="each__section">
        <div className="left__part">
          <img src="images/health-service.jpg" alt="health.png" />
        </div>
        <div className="right__part">
          <h2>Your Health Is Our utmost Priority</h2>
          <p className="section__word">
            ikarely is a healthtech Company, specializing in delivery of optimal
            and quality healthcare services to client at their own comfort and
            utmost convenience. We are a digital health care company in Africa
            that is service oriented and works by connecting licensed nurses to
            patients that need basic health care services like, wound care,
            vaccination, chemotherapy, Intravenous fluid infusion,
            catheterization to mention a few. We are reducing the demand for
            hospitalization and admission for basic health care services that
            can be delivered to people at their own comfort, which will also
            reduce the work load of healthcare workers and increase access to
            quality care.
          </p>
          <p className="section__word">
            Healthcare delivery in a developing country like Nigeria can prove
            to be very challenging. Lack of infrastructure is one of the major
            problems the Nigerian health sector faces, as various patients end
            up not being admitted due to lack of sufficient bed space, this is a
            common phenomenon in Nigeria, and also, in some cases patients with
            urgent need for immediate delivery of care are left to wait
            standing, most times unattended to as a result of lack of space or
            health care personnel. We are on a mission to increasing
            accessibility to quality healthcare delivery with convenience.
          </p>
        </div>
      </div>
      <WhyUs />
      <Teams />
    </div>
  );
};

export default About;
