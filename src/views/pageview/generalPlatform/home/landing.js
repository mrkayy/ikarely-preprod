import React from "react";
import { Link } from "react-router-dom";
import LayoutWrapper from "../../LayoutWrapper";

function Landing() {
  return (
    <>
      <div className="h-100 bg-gradient-to-r from-white via-primary-100 to-primary-200">
        <div className="w-full h-6/12">
          <div className="bg-doctor7 bg-no-repeat bg-cover bg-center sm:bg-top sm:bg-scroll xl:bg-fit">
            <div className="w-screen bg-opacity-80 sm:bg-opacity-50 bg-white">
              <LayoutWrapper>
                <div
                  className={
                    " grid place-items-center sm:block h-screen sm:h-5/6 sm:pt-28 md:pb-9 lg:pt-32 xl:pt-48 xl:pb-36"
                  }
                >
                  <div className="">
                    <div className="p-3 text-center rounded-full sm:w-72 md:w-80 lg:w-80 xl:w-96 bg-transparent sm:bg-primary-100 mb-6">
                      <p className="text-secondary font-bold text-base sm:text-sm lg:text-sm xl:text-base">
                        #1 Best Care For Your Good Health
                      </p>
                    </div>
                    <div
                      className={`
              xl:leading-tight
              lg:leading-8

              sm:w-8/12
              md:w-7/12
              lg:w-6/12
              xl:w-3/5

              lg:leading-tight
            text-typography-main
            text-center

            sm:text-left
            font-extrabold
            
            text-4xl
            sm:text-lx
            md:text-3xl
            lg:text-4xl
            xl:text-6xl
            
            px-8
            sm:px-0
            mb-6
            sm:mb-3
            `}
                    >
                      <p className="capitalize font-extrabold mb-1 sm:mb-2 lg:mb-6 break-normal tracking-tight leading-3/12">
                        Bringing Quality health Services to your Doorstep
                      </p>
                    </div>
                    <div className="mb-3">
                      <div className="md:leading-8 sm:w-6/12 md:w-7/12 lg:w-6/12 xl:w-5/12">
                        <p className="text-default px-8 sm:px-0 text-sm sm:text-sm lg:text-base text-justify font-extrabold sm:font-medium tracking-tight">
                          We are Uniquely designed for high-acuity patients in a
                          home setting. We’ve designed and made significant
                          investments in a scalable model that is enabled by
                          technology and a threefold business/clinical/tech
                          leadership team.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center sm:block mt-12 sm:mt-6 sm:mb-16">
                      <Link to="/service">
                        <button
                          type="button"
                          className="text-xs sm:text-sm px-6 py-3 bg-primary-accent lg:w-48 text-white rounded sm:text-sm "
                        >
                          Get Started
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </LayoutWrapper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
