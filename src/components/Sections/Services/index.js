import React from "react";
import { Link } from "react-router-dom";

import LayoutWrapper from "../../../components/LayoutWrapper/LayoutMargin";

const SercvicesSection = () => {
  return (
    <LayoutWrapper>
      <div className="pt-6 pb-24 sm:py-24">
        <div className="lg:flex lg:justify-around lg:items-center">
          <div className="block sm:hidden md:block lg:hidden sm:bg-section-2 md:w-full lg:w-6/12 xl:w-2/5 h-3/4 sm:shadow-md ">
            <div className="bg-doctor6 bg-section-1 shadow-md sm:bg-transparent sm:shadow-none h-96 bg-contain md:bg-cover bg-no-repeat bg-right-bottom md:bg-center xl:bg-center"></div>
          </div>

          <div className="mt-6 md:w-full lg:w-2/5 xl:w-2/5">
            <h3 className="text-2xl font-bold text-typography-emphasis my-3 px-6 py-3 sm:px-0 sm:py-0">
              Services
            </h3>
            <h2 className="xl:text-3xl font-bold tracking-tight px-6 sm:px-0">
              Medical care with clinical services
            </h2>
            <p className="text-justify xl:text-base text-typography-light my-6 leading-6 tracking-tight sm:leading-8 px-6 sm:px-0">
              We believe there is no better time to decongest hospitals
              especially in Africa where there is the disproportionate
              patient-to-doctor ratio with facilities that are either
              unavailable or dysfunctional. It’s an incredibly exciting moment
              for healthcare to take advantage of digital technology and the
              growing number of internet-enabled mobile phones in Africa.
            </p>

            <div className="px-6 sm:px-0">
              <Link to="/service">
                <button className="w-3/6 sm:w-40 lg:w-5/12text-sm rounded text-white bg-button-primary hover:shadow-md hover:bg-white hover:text-typography-main p-3">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          <div className="hidden mb:block sm:hidden lg:block sm:bg-section-2 lg:w-6/12 xl:w-2/5 h-3/4 sm:shadow-md">
            <div className="bg-doctor6 bg-section-1 shadow-md sm:bg-transparent sm:shadow-none h-96 bg-contain bg-no-repeat bg-right-bottom md:bg-center xl:bg-center"></div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default SercvicesSection;
