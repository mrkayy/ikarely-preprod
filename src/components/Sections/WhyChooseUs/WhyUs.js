import React from "react";
import "./WhyUs.css";
import LayoutWrapper from "../../../components/LayoutWrapper/LayoutMargin";

function WhyUs() {
  const whyus__options = [
    {
      icon: "empathy.svg",
      title: "Empathy",
      word: "We see satisfaction in the eyes of our clients, we stand in their shoes and we immerse ourselves in their experiences. Hence, we do all we can within our reach to deliver the best health care experience to our clients",
    },
    {
      icon: "creativity.svg",
      title: "Innovation",
      word: "We work with highly innovative and creative youths with powerful ideas to change the narrative of health care system in Africa. We believe Innovation and iteration is key in driving the change we seek.",
    },
    {
      icon: "integrity.svg",
      title: "Integrity",
      word: "We believe in truthfulness and we adopt it in all our operations. We promote transparency and accountability.",
    },
  ];

  // display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  // grid-gap: 20px;
  // justify-content: space-between;
  // align-items: center;
  // margin-top: 30px;
  // margin-bottom: 50px;

  // grid place-items-center gap-y-6 sm:gap-x-3

  return (
    <LayoutWrapper>
      <div className="mt-6 sm:mt-8">
        <div className="mb-8 sm:my-16 xl:my-24 sm:flex sm:justify-between xl:justify-around items-center">
          <div className="w-72 sm:w-10/12 md:w-7/12 lg:w-2/6 xl:w-3/6 2xl:w-2/6 my-3 mx-auto sm:mx-0 ">
            <h3 className="text-typography-light text-2xl xl:text-5xl font-extrabold text-center xl:text-left xl:leading-tight xl:tracking-tight">
              WHY CHOOSE US FOR{" "}
              <span className="text-typography-modrate">
                YOUR HEALTH CARE ?
              </span>
            </h3>
          </div>
          <div className="mx-auto sm:mx-0 w-10/12 sm:w-10/12 md:w-7/12 xl:w-3/6 lg:w-7/12">
            <p className="md:text-sm xl:text-xl text-typography-light text-justify xl:text-left font-light leading-6  sm:leading-tight xl:leading-relaxed">
              We are a healthtech Company, specializing in delivery of optimal
              and quality healthcare services to client at their own comfort and
              utmost convenience.
            </p>
          </div>
        </div>

        <div className="mb-32">
          <div className="max-w-full grid grid-cols-1 justify-items-center justify-self-start sm:grid-cols-2 lg:grid-cols-3 justify-start gap-y-12 mt-4">
            {whyus__options.map(({ icon, title, word }, index) => {
              return (
                <div
                  className="bg-white w-11/12 xl:w-10/12  shadow-2xl rounded-3xl p-7 xl:p-8"
                  key={index}
                >
                  <div className="max-w-full h-full h-96 flex-column items-stretch">
                    <div className="mb-16">
                      <div className="">
                        <div className="bg-primary-100 h-16 w-16 rounded-md transform -rotate-12">
                          <div className="bg-primary-100 h-16 w-16 rounded-md transform rotate-12 grid place-items-center">
                            <p>icon</p>
                            {/* <img src={`images/icons/${icon}`} alt="" /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-3">
                      <h2 className="text-xl text-typography-light font-bold tracking-tight xl:tracking-wider">
                        {title}
                      </h2>
                    </div>
                    <div className="">
                      <p
                        className={`text-typography-extralight xl:text-base font-font-light ${
                          index == "3"
                            ? "sm:tracking-tighter"
                            : "sm:tracking-tight"
                        }  text-justify xl:tracking-normal xl:leading-6`}
                      >
                        {word}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}

export default WhyUs;
