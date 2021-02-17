import React from "react";
import "./WhyUs.css";

function WhyUs() {
  const whyus__options = [
    {
      icon: "empathy.svg",
      title: "Empathy",
      word:
        "We see satisfaction in the eyes of our clients, we stand in their shoes and we immerse ourselves in their experiences. Hence, we do all we can within our reach to deliver the best health care experience to our clients",
    },
    {
      icon: "creativity.svg",
      title: "Innovation",
      word:
        "We work with highly innovative and creative youths with powerful ideas to change the narrative of health care system in Africa. We believe Innovation and iteration is key in driving the change we seek.",
    },
    {
      icon: "integrity.svg",
      title: "Integrity",
      word:
        "We believe in truthfulness and we adopt it in all our operations. We promote transparency and accountability.",
    },
  ];
  return (
    <div className="why__us">
      <h3 className="head">Why Choose Us ?</h3>
      <h1 className="main__header">Our Core Values</h1>

      <div className="whyus__options">
        {whyus__options.map(({ icon, title, word }) => {
          return (
            <div className="whyus__option">
              <div className="whyus__icon">
                <img src={`images/icons/${icon}`} alt=""/>
              </div>
              <h2 className="whyus__title">{title}</h2>
              <p className="whyus__word">{word}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WhyUs;
