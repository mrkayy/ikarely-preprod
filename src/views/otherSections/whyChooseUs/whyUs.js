import React from "react";
import LayoutWrapper from "../../../components/layoutWrapper";
import WhyUsCard from "./whyUsCard";

function WhyUs() {
  const whyus__options = [
    {
      icon: "bg-empathy",
      title: "Empathy",
      word: "We see satisfaction in the eyes of our clients, we stand in their shoes and we immerse ourselves in their experiences. Hence, we do all we can within our reach to deliver the best health care experience to our clients",
    },
    {
      icon: "bg-creativity",
      title: "Innovation",
      word: "We work with highly innovative and creative youths with powerful ideas to change the narrative of health care system in Africa. We believe Innovation and iteration is key in driving the change we seek.",
    },
    {
      icon: "bg-integrity",
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
          <div className="w-72 sm:w-10/12 md:w-6/12 lg:w-2/6 xl:w-3/6 2xl:w-2/6 my-3 mx-auto sm:mx-0 ">
            <h3 className="text-typography-light text-2xl xl:text-5xl font-extrabold text-center xl:text-left xl:leading-tight xl:tracking-tight">
              WHY CHOOSE US FOR{" "}
              <span className="text-typography-main">YOUR HEALTH CARE ?</span>
            </h3>
          </div>
          <div className="mx-auto sm:mx-0 w-10/12 sm:w-10/12 md:w-7/12 xl:w-3/6 lg:w-7/12">
            <p className="text-xs md:text-sm xl:text-xl text-typography-light text-justify xl:text-left font-light leading-5 tracking-tight sm:tracking-normal sm:leading-tight xl:leading-relaxed">
              We are a healthtech Company, specializing in delivery of optimal
              and quality healthcare services to client at their own comfort and
              utmost convenience.
            </p>
          </div>
        </div>

        <div className="mb-20 sm:mb-32">
          <div className="max-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 justify-items-center mt-4">
            {whyus__options.map(({ icon, title, word }, index) => {
              return (
                <WhyUsCard key={index} title={title} word={word} icon={icon} />
              );
            })}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}

export default WhyUs;
