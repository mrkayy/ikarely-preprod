import React from "react";
import { Link } from "react-router-dom";

import LayoutWrapper from "../../../components/LayoutWrapper/LayoutMargin";

const AboutUsSection = () => {
  return (
    <div className="bg-section-1 pt-6 pb-24 sm:py-16">
      <LayoutWrapper>
        <div className="lg:flex lg:justify-around lg:items-center">
          <div className="sm:bg-section-2 lg:w-6/12 xl:w-2/5 h-3/4 sm:shadow-md">
            <div className="bg-doctor4 bg-section-1 shadow-md sm:bg-transparent sm:shadow-none h-96 bg-contain bg-no-repeat bg-right-bottom md:bg-center xl:bg-center"></div>
          </div>

          <div className="mt-6 md:w-full lg:w-2/5 xl:w-2/5">
            <h3 className="text-2xl font-bold text-typography-emphasis my-3 px-6 py-3 sm:px-0 sm:py-0">
              About Us
            </h3>
            <h2 className="xl:text-3xl font-bold tracking-tight px-6 sm:px-0">
              Your health is our utmost priority
            </h2>
            <p className="text-justify xl:text-base text-typography-light my-6 leading-6 tracking-tight sm:leading-8 lg:leading-relaxed px-6 sm:px-0">
              Ikarely is a healthtech Company, specializing in delivery of
              optimal and quality healthcare services to client at their own
              comfort and utmost convenience. We are a digital health care
              company in Africa that is service oriented and works by connecting
              licensed nurses to patients that need basic health care services
              like, wound care, vaccination, chemotherapy, Intravenous fluid
              infusion, catheterization to mention a few.
            </p>
            <div className="px-6 sm:px-0">
              <Link to="/about">
                <button className="w-3/6 sm:w-40 lg:w-5/12text-sm rounded text-white bg-button-primary hover:shadow-md hover:bg-white hover:text-typography-main p-3">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
};

export default AboutUsSection;
