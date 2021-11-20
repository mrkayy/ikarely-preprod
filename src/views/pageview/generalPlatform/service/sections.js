import React from "react";
import { Link } from "react-router-dom";

import LayoutWrapper from "../../../../components/LayoutWrapper";
import SectionDescCard from "../../../otherSections/sectionDescCard";

const SercvicesSection = () => {
  return (
    <LayoutWrapper>
      <div className="pt-6 pb-24 sm:py-24">
        <div className="lg:flex lg:justify-around lg:items-center">
          <div className="block sm:hidden md:block lg:hidden sm:bg-section-2 md:w-full lg:w-6/12 xl:w-2/5 h-3/4 sm:shadow-md ">
            <div className="bg-doctor6 bg-section-1 shadow-md sm:bg-transparent sm:shadow-none h-96 bg-contain md:bg-cover bg-no-repeat bg-right-bottom md:bg-center xl:bg-center"></div>
          </div>

          <SectionDescCard
            heading={"Services"}
            title={"Medical care with clinical services"}
            desc={`We believe there is no better time to decongest hospitals
              especially in Africa where there is the disproportionate
              patient-to-doctor ratio with facilities that are either
              unavailable or dysfunctional. It’s an incredibly exciting moment
              for healthcare to take advantage of digital technology and the
              growing number of internet-enabled mobile phones in Africa.`}
          />
          <div className="hidden mb:block sm:hidden lg:block sm:bg-section-2 lg:w-6/12 xl:w-2/5 h-3/4 sm:shadow-md">
            <div className="bg-doctor6 bg-section-1 shadow-md sm:bg-transparent sm:shadow-none h-96 bg-contain bg-no-repeat bg-right-bottom md:bg-center xl:bg-center"></div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default SercvicesSection;
