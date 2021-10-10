import React from "react";
import { Link } from "react-router-dom";

import LayoutWrapper from "../../../components/LayoutWrapper/LayoutMargin";
import SectionDescCard from "../SectionDescCard";

const AboutUsSection = () => {
  return (
    <div className="bg-section-1 pt-6 py-16">
      <LayoutWrapper>
        <div className="lg:flex lg:justify-around lg:items-center">
          <div className="sm:bg-section-2 lg:w-6/12 xl:w-2/5 h-3/4 sm:shadow-md">
            <div className="bg-doctor4 bg-section-1 shadow-md sm:bg-transparent sm:shadow-none h-96 bg-contain bg-no-repeat bg-right-bottom md:bg-center xl:bg-center"></div>
          </div>

          <SectionDescCard
            heading={"About Us"}
            title={"Your health is our utmost priority"}
            desc={`Ikarely is a healthtech Company, specializing in delivery of
              optimal and quality healthcare services to client at their own
              comfort and utmost convenience. We are a digital health care
              company in Africa that is service oriented and works by connecting
              licensed nurses to patients that need basic health care services
              like, wound care, vaccination, chemotherapy, Intravenous fluid`}
          />
        </div>
      </LayoutWrapper>
    </div>
  );
};

export default AboutUsSection;
