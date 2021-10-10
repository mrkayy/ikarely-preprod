import React from "react";
import { Link } from "react-router-dom";

import LayoutWrapper from "../../../components/LayoutWrapper/LayoutMargin";
import SectionDescCard from "../SectionDescCard";

const BlogSection = () => {
  return (
    <div className="bg-section-1 pt-6 pb-24 sm:py-16">
      <LayoutWrapper>
        <div className="lg:flex lg:justify-around lg:items-center">
          <div className="sm:bg-section-2 lg:w-6/12 xl:w-2/5 h-3/4 sm:shadow-md">
            <div className="bg-doctor5 bg-section-1 shadow-md sm:bg-transparent sm:shadow-none h-96 bg-contain bg-no-repeat bg-right-bottom md:bg-center xl:bg-center">
              {/* <img
              src="../assets/images/doctor4.png"
              alt="doctor.jpg"
              className="h-96"
            /> */}
            </div>
          </div>
          <SectionDescCard
            heading={"Blogs"}
            title={"Clinical And Health Related Articles"}
            desc={`At Ikarely, We provide real and practical advice to help you
              prevent illness and cure ailments and stay healthy by providing
              advice on a full range of medical conditions and preventions
              through an abundance of articles on our blog.`}
          />
        </div>
      </LayoutWrapper>
    </div>
  );
};

export default BlogSection;
