import React from "react";
import PageLanding from "../../components/PageLanding/PageLanding";
import "./Service.css";

function Service() {
  const services = [
    {
      icon: "wound.svg",
      title: "Woundcare",
      word:
        "Why go through the stress of going to and waiting in the hospital when dealing with wounds is enough stress on its own. We offer wound dressing services for patients with minor burns, pressure ulcer, diabetic foot and any other form of wounds at your utmost convenience.",
    },
    {
      icon: "injection.svg",
      title: "vaccination",
      word:
        "At ikarely, we believe you don't have to stay on a long queue in the hospital to receive vaccination. We simply help reduce the stress by providing vaccination from deadly diseases like, hepatitis, typhoid, polio etc at the comfort of your home. ",
    },
    {
      icon: "Catherization.svg",
      title: "Geriatric care",
      word:
        "Elderly people don't always have to be hospitalized for minor health concerns that can be delivered to them at home. We provide care for the Elderly, from general checkup to catheterization and lots more.",
    },
    {
      icon: "Chemotography.svg",
      title: "Chemotography",
      word:
        "We offer home chemotherapy psychological support for people living with cancer. ",
    },
    {
      icon: "teeth-checkup.svg",
      title: "dental care",
      word:
        "We provide a wide range of dental services etc dental cleanings, Fillings, root canals, and extractions. Imagine the comfort of having a dentist come to your home for your dental care, that's exactly what we are offering you.",
    },
    {
      icon: "healthcare.svg",
      title: "General Check up",
      word:
        "You can request for our professional service for individual and family general check ups like Blood pressure, weight check, glucose check, malaria/HIV test, Body Mass Index (BMI) all at your convenience.",
    },
  ];


  return (
    <div className="services">
     
     <PageLanding image='health-service.jpg' title='What we offer'/>

      <div className="each__section">
        <div className="right__part">
          <h5>services</h5>
          <h1>Get the best medical aid at home</h1>
          <p className="section__word">
          We believe there is no better time to decongest hospitals especially in Africa where there is the disproportionate patient-to-doctor ratio with facilities that are either unavailable or dysfunctional. It’s an incredibly exciting moment for healthcare to take advantage of digital technology and the growing number of internet-enabled mobile phones in Africa. 

We are simply providing access to the very best prevention and treatment options at a fraction of the cost without necessarily leaving the comfort of your room. 

With iKarely you’re getting the best and quality health care services just at your finger tip.
          </p>

          {/* <button className="eachsection__btn">
                        read more
                    </button> */}
        </div>
        <div className="left__part">
          <img src="images/appointment.jpg" alt="" />
        </div>
      </div>

      <div className="services__section">
        <div className="service__headers">
          <h4 className="services__head">Our Services</h4>
          <h1 className="services__mainheader">Health Services we offer</h1>
        </div>

        <div className="service__lists">
          {services.map(({ icon, title, word }) => {
            return (
              <div className="service__list">
                <div className="list__icon">
                  <img src={`images/icons/${icon}`} alt="" />
                </div>
                <h4 className="list__title">{title}</h4>
                <p className="list__word">{word}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Service;
