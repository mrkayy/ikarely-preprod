import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PageLanding from "../../components/PageLanding/PageLanding";
import ServiceStore from "./../../controllers/stores_v1/Services";
import AuthStore from "./../../controllers/stores_v1/AuthStore";
import { observer } from "mobx-react";
import { useAlert } from "react-alert";
import ArticleSection from "../../components/Sections/ArticleSection/ArticleSection";

import LayoutMargin from "../../components/LayoutWrapper/LayoutMargin";

// import SectionDescCard from "../../components/Sections/SectionDescCard";

const Service = () => {
  const [openModal, setOpenModal] = useState(false);

  const servicecontext = useContext(ServiceStore);

  const authContext = useContext(AuthStore);

  const { currUser } = authContext;

  const alert = useAlert();
  const services = [
    {
      id: 1,
      icon: "bg-injection",
      title: "Dr Consultation",
      word: "With ikarely you don't have to go through the stress of going to and wait for hours in the hospital to get timely consultation, treatment and Drug prescription for your health needs",
      type: "by_request",
    },
    {
      id: 2,
      icon: "bg-wound",
      title: "Wound Care",
      word: "Why go through the stress of going to and waiting in the hospital when dealing with wounds is enough stress on its own. We offer wound dressing services for patients with minor burns, pressure ulcer, diabetic foot and any other form of wounds at your utmost convenience.",
      type: "by_request",
    },
    // {
    //   id: 3,
    //   icon: "injection.svg",
    //   title: "Vaccination",
    //   word: "Elderly people don't always have to be hospitalized for minor health concerns that can be delivered to them at home. We provide care for the Elderly, from general checkup to catheterization and lots more.",
    //   type: "by_subscription",
    // },
    {
      id: 4,
      icon: "bg-catherization",
      title: "Covid19 Screening",
      word: "Get you Covid 19 test done without leaving the comfort of your home. We provide home sample collection and immediate result within 24hrs",
      type: "by_subscription",
    },
    // {
    // id: 1,
    // icon: 'Chemotography.svg',
    //   title: 'Chemotography',
    // params: 'chemotherapy',
    //   word:
    //     'We offer home chemotherapy psychological support for people living with cancer. ',
    // },
    {
      id: 5,
      icon: "bg-healthcare",
      title: "Geriatic Care",
      params: "geriatic_care",
      word: "Elderly people don't always have to be hospitalized for minor health concerns that can be delivered to them at home. We provide care for the Elderly, from general checkup to catheterization and lots more.",
      type: "by_subscription",
    },

    {
      id: 6,
      icon: "bg-healthcare",
      title: "General Checkup",
      params: "general_checkup",
      word: "You can request for our professional service forindividual and family general checkups like Bloodpressure, weightcheck, glucosecheck, malaria/HIVtest, BodyMassInde(BMI) all at your convenience",
      type: "by_subscription",
    },
    // {
    //   id: 7,
    //   icon: "Catherization.svg",
    //   title: "Pregnacare",
    //   params: "pregnacare",
    //   word: "Elderly people don't always have to be hospitalized for minor health concerns that can be delivered to them at home. We provide care for the Elderly, from general checkup to catheterization and lots more.",
    //   type: "by_subscription",
    // },
    {
      id: 8,
      icon: "bg-healthcare",
      title: "Diabetes Care",
      params: "diabetes",
      word: "Managing Diabetes is easier with ikarely, we provide in home Doctor management, Glucose check, Drug refil, strip refil to help you avoid unnecessary queues at clinics and pharmacies.",
      type: "by_subscription",
    },
  ];
  const {
    reqError,
    reqSuccess,
    reqErrMessage,
    reqSuccessMessage,
    resetActions,
  } = servicecontext;

  const options = {
    reqError,
  };

  const btnSwitch = !currUser ? (
    <Link to="/signin">
      <button type="button" className="makerequest__btn">
        Get Started
      </button>
    </Link>
  ) : (
    <button
      className="makerequest__btn"
      onClick={() => setOpenModal(!openModal)}
    >
      Make Request
    </button>
  );

  // const subBtnSwitch = !currUser ? (
  //   <Link to="/signin">
  //     <button type="button" className="makerequest__btn">
  //       Get Started
  //     </button>
  //   </Link>
  // ) : (
  //   <button type="button" className="makerequest__btn">
  //     Subscribe to Service
  //   </button>
  // );

  useEffect(() => {
    if (reqError) {
      alert.error(reqErrMessage, options);
      ////console.log({ reqErrMessage });
    }
    if (reqSuccess) {
      alert.success(reqSuccessMessage, options);
      ////console.log({ reqSuccessMessage });
      setOpenModal(false);
    }
    return () => {
      resetActions();
    };
  }, [reqErrMessage, reqSuccessMessage]);

  return (
    <div className="">
      <PageLanding image={"bg-doctor3"} title="OUR SERVICES" />
      <LayoutMargin>
        <div className="md:flex md:justify-between md:items-center">
          <div className="md:w-full lg:w-2/5 xl:w-6/12 ">
            <ArticleSection
              heading="What we offer"
              title="Get the best medical aid at home"
              desc={`
            We believe there is no better time to decongest hospitals especially
            in Africa where there is the disproportionate patient-to-doctor
            ratio with facilities that are either unavailable or dysfunctional.
            It’s an incredibly exciting moment for healthcare to take advantage
            of digital technology and the growing number of internet-enabled
            mobile phones in Africa. We are simply providing access to the very
            best prevention and treatment options at a fraction of the cost
            without necessarily leaving the comfort of your room. With iKarely
            you’re getting the best and quality health care services just at
            your finger tip.`}
            />
          </div>
          <div className="hidden mb:block sm:hidden lg:block sm:bg-section-2 lg:w-6/12 xl:w-2/5 h-3/4 sm:shadow-md">
            <div className="bg-homecare2 bg-section-1 shadow-md sm:bg-transparent sm:shadow-none h-96 bg-cover bg-no-repeat bg-center"></div>
          </div>
        </div>
      </LayoutMargin>

      <div className="bg-section-1 my-16 py-16">
        <LayoutMargin>
          <div className="">
            <ServiceListHeading
              heading="Our Services"
              title="Health Services we offer"
            />

            {/* {!currUser ? (
            <Link to="/signin">
            <button type="button" className="getstarted__btn">Get Started</button>
            </Link>
            ) : (
              <button
              className="makerequest__btn inheader"
              onClick={() => setOpenModal(!openModal)}
              >
              Make Request
              </button>
            )} */}

            <div className="">
              <div className="max-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 justify-items-center mt-4">
                {services
                  .filter((service) => !service.params)
                  .map(({ icon, title, word }) => {
                    return (
                      // <div className="" key={title}>
                      <ServiceCard
                        icon={icon}
                        title={title}
                        word={word}
                        key={title}
                      />
                      // </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </LayoutMargin>
      </div>

      <LayoutMargin>
        <div className="my-16 py-16">
          <ServiceListHeading
            heading="Our Services"
            title="Premium Health Services we offer"
          />

          <div className="">
            <div className="max-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 justify-items-center mt-4">
              {services
                .filter((service) => service.params)
                .map(({ icon, title, word, type, params }) => {
                  return (
                    <>
                      {/* <div className="service__list" key={title}> */}
                      <ServiceCard
                        icon={icon}
                        title={title}
                        word={word}
                        key={title}
                        isSubscription={type}
                      />
                      {/* <Link to={`/subscription/${params}`}>{subBtnSwitch}</Link> */}

                      {/* </div> */}
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </LayoutMargin>
    </div>

    //  <Modal
    //  disablePortal
    //  open={openModal}
    //  onBackdropClick={() => setOpenModal(false)}
    //  className=""
    // >
    //  <ModalForm services={services} setOpenModal={setOpenModal} />
    // </Modal>
  );
};

export default observer(Service);

const ServiceListHeading = ({ heading, title }) => {
  return (
    <div className="text-center mb-6">
      <h3 className="text-2xl font-bold text-typography-emphasis px-2 py-3 sm:px-0 sm:py-0">
        {heading}
      </h3>
      <h2 className="text-lg sm:text-xl xl:text-3xl font-bold tracking-tight px-4 sm:px-0 capitalize">
        {title}
      </h2>
    </div>
  );
};

function ServiceCard({ icon, title, word, key, isSubscription }) {
  return (
    <div
      key={key}
      className="bg-white w-10/12 sm:w-11/12 xl:w-10/12 shadow-2xl rounded-3xl p-6 sm:-7 xl:p-8"
    >
      <div className="max-w-full h-60 sm:h-72 md:h-80 xl:h-96 grid grid-cols-1">
        <div className="w-full">
          <div className="flex justify-evenly items-center">
            <div className="">
              <div className="bg-primary-100 h-16 w-16 rounded-md transform -rotate-12">
                <div className="bg-primary-100 h-16 w-16 rounded-md transform rotate-12 grid place-items-center">
                  <div
                    className={`text-xs sm:text-sm h-9 w-9 bg-contain bg-center bg-no-repeat ${icon}`}
                  ></div>
                </div>
              </div>
            </div>
            <div className="">
              <h2 className="text-center text-xl text-typography-light font-bold tracking-tight xl:tracking-wider">
                {title}
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full">
          <p
            className={`text-typography-extralight text-xs sm:text-sm xl:text-base font-font-light
              sm:tracking-tight md:leading-5 text-justify xl:tracking-normal`}
          >
            {word}
          </p>
        </div>
        {isSubscription && (
          <div className="w-full">
            <Link to="/subscriptions">
              <button type="button" className="">
                Subscription
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
