import React from "react";
import { Link } from "react-router-dom";

import LayoutWrapper from "../../../components/LayoutWrapper/LayoutMargin";

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

          <div className="mt-6 md:w-full lg:w-2/5 xl:w-2/5">
            <h3 className="text-2xl font-bold text-typography-emphasis my-3 px-6 py-3 sm:px-0 sm:py-0">
              Blogs
            </h3>
            <h2 className="xl:text-3xl font-bold tracking-tight px-6 sm:px-0">
              Clinical And Health Related Articles
            </h2>
            <p className="text-justify xl:text-base text-typography-light my-6 leading-6 tracking-tight sm:leading-8 px-6 sm:px-0">
              At Ikarely, We provide real and practical advice to help you
              prevent illness and cure ailments and stay healthy by providing
              advice on a full range of medical conditions and preventions
              through an abundance of articles on our blog.
            </p>

            <div className="px-6 sm:px-0">
              {/* TODO: link button to blog page when avaliable */}

              <Link to="/">
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

export default BlogSection;
