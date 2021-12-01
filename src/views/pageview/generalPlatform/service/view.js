import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import PageLanding from "../../../../components/pageLanding";

import { observer } from "mobx-react-lite";
import { useAlert } from "react-alert";
import ArticleSection from "../../../../components/articleSection";

import LayoutMargin from "../../../../components/layoutWrapper";

import Authentication from "../../../../controllers/authentication_store";
import UserAccountStore from "../../../../controllers/userAccount_store";
import LoadingIndicator from "../../../../utils/loadingIndicator";

import DoctorsConsultForm from "./customForm/doctorsConsult";
import WoundCareForm from "./customForm/woundCare";
import Covid19ScreeningForm from "./customForm/covid19";
import UpdateProfileForm from "./updateProfileForm";

// import SectionDescCard from "../../components/Sections/SectionDescCard";

const Service = () => {
  const { user } = useContext(Authentication);
  const {
    loading,
    error,
    success,
    errorMsg,
    successMsg,
    getprofile,
    loadUserAccount,
    resetActions,
  } = useContext(UserAccountStore);

  const [showDocConsult, setshowDocConsult] = useState(false);
  const [showCovid19, setshowCovid19] = useState(false);
  const [showWoundCare, setshowWoundCare] = useState(false);
  // const [showUpdateProfile, setShowUpdateProfile] = useState(false);

  const [loadingUsers, setLoadingUsers] = useState(false);
  const [showLoginBtn, setShowLoginBtn] = useState(true);

  const alert = useAlert();

  const toggleDocConsultModal = () => {
    setshowDocConsult(!showDocConsult);
  };
  const toggleWoundCareModal = () => {
    setshowWoundCare(!showWoundCare);
  };
  const toggleCovid19Modal = () => {
    setshowCovid19(!showCovid19);
  };

  const services = [
    {
      id: 1,
      icon: "bg-injection",
      title: "Dr Consultation",
      word: "With ikarely you don't have to go through the stress of going to and wait for hours in the hospital to get timely consultation, treatment and Drug prescription for your health needs",
      type: "by_request",
      action: toggleDocConsultModal,
    },
    {
      id: 2,
      icon: "bg-wound",
      title: "Wound Care",
      word: "Why go through the stress of going to and waiting in the hospital when dealing with wounds is enough stress on its own. We offer wound dressing services for patients with minor burns, pressure ulcer, diabetic foot and any other form of wounds at your utmost convenience.",
      type: "by_request",
      action: toggleWoundCareModal,
    },
    {
      id: 3,
      icon: "bg-catherization",
      title: "Covid19 Screening",
      word: "Get you Covid 19 test done without leaving the comfort of your home. We provide home sample collection and immediate result within 24hrs",
      type: "by_subscription",
      action: toggleCovid19Modal,
    },
  ];
  const subscriptions = [
    {
      id: 1,
      icon: "bg-healthcare",
      title: "Geriatic Care",
      params: "geriatic-care",
      word: "Elderly people don't always have to be hospitalized for minor health concerns that can be delivered to them at home. We provide care for the Elderly, from general checkup to catheterization and lots more.",
      type: "by_subscription",
    },

    {
      id: 2,
      icon: "bg-healthcare",
      title: "General Checkup",
      params: "general-checkup",
      word: "You can request for our professional service forindividual and family general checkups like Bloodpressure, weightcheck, glucosecheck, malaria/HIVtest, BodyMassInde(BMI) all at your convenience",
      type: "by_subscription",
    },
    {
      id: 3,
      icon: "bg-healthcare",
      title: "Diabetes Care",
      params: "diabetes",
      word: "Managing Diabetes is easier with ikarely, we provide in home Doctor management, Glucose check, Drug refil, strip refil to help you avoid unnecessary queues at clinics and pharmacies.",
      type: "by_subscription",
    },
  ];

  const options = {
    error,
  };

  // show login button if user is not signed in
  useEffect(() => {
    if (user && user !== null) return setShowLoginBtn(false);
    return setShowLoginBtn(true);
  }, [user]);

  // listen for user account loading event
  useEffect(() => {
    setLoadingUsers(loading);

    return () => resetActions();
  }, [loading]);

  // load user profile on_page_load
  useEffect(() => {
    if (getprofile === null && user && user !== null) {
      loadUserAccount(user?.uid ?? "nnn");
    } else {
      console.log({ getprofile });
      return;
    }
  }, []);

  // show error message
  useEffect(() => {
    if (error) {
      alert.error(errorMsg, options);
    }
  }, [errorMsg, error]);

  // show success message
  useEffect(() => {
    if (success) {
      alert.success(successMsg, options);
    }
  }, [successMsg, success]);

  return (
    <div className="">
      {/* TODO: work on user profile updata later */}
      {/* {getprofile && !getprofile.address ? (
        <UpdateProfileForm show={setShowUpdateProfile} />
      ) : (
        <></>
      )} */}
      {loadingUsers && <LoadingIndicator action="fetching account" />}
      {showDocConsult && (
        <DoctorsConsultForm
          show={setshowDocConsult}
          user={getprofile}
          uid={user && user.uid}
        />
      )}
      {showWoundCare && (
        <WoundCareForm
          show={setshowWoundCare}
          user={getprofile}
          uid={user && user.uid}
        />
      )}
      {showCovid19 && (
        <Covid19ScreeningForm
          show={setshowCovid19}
          user={getprofile}
          uid={user && user.uid}
        />
      )}
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

      <div className="bg-section-1 my-16 py-16 h-9/12">
        <LayoutMargin>
          <div className="">
            <ServiceListHeading
              heading="Our Services"
              title="Health Services we offer"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 justify-items-center mt-8">
              {services
                .filter((service) => !service.params)
                .map(({ icon, title, word, action }) => {
                  return (
                    <ServiceCard
                      icon={icon}
                      title={title}
                      word={word}
                      btnState={showLoginBtn}
                      action={action}
                      key={title}
                    />
                  );
                })}
            </div>
            {showLoginBtn ? (
              <div className="mt-12 p-4 sm:p-5 mx-auto w-48 sm:w-1/3 lg:w-1/5 bg-primary-main ring-2 ring-primary-200 rounded-md hover:bg-primary-200 shadow-xl">
                <Link to="/signin">
                  <p className="text-center tex-sm sm:text-md tracking-wide font-bold text-white">
                    Make Request
                  </p>
                </Link>
              </div>
            ) : (
              <div className="mt-12 p-5 ">{""}</div>
            )}
          </div>
        </LayoutMargin>
      </div>

      <LayoutMargin>
        <div className="my-6 py-6">
          <ServiceListHeading
            heading="Our Services"
            title="Premium Health Services we offer"
          />

          {/* subscription services section */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 justify-items-center mt-8">
            {" "}
            {subscriptions
              .filter((service) => service.params)
              .map(({ icon, title, word, type, params }) => {
                return (
                  <SubscriptionCard
                    icon={icon}
                    title={title}
                    word={word}
                    key={title}
                    params={params}
                    isSubscription={type}
                    btnState={showLoginBtn}
                  />
                );
              })}
          </div>
          {showLoginBtn ? (
            <Link to="/signin">
              <div className="order-1 sm:order-none  mt-12 p-4 sm:p-5 mx-auto w-48 sm:w-1/3 lg:w-1/5 bg-primary-main ring-2 ring-primary-200 rounded-md hover:bg-primary-200 shadow-xl">
                <p className="text-center tex-sm sm:text-md tracking-wide font-bold text-white">
                  Subscribe
                </p>
              </div>
            </Link>
          ) : (
            <div className="order-1 sm:order-none mt-12 p-5">{""}</div>
          )}
        </div>
      </LayoutMargin>
    </div>
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

function ServiceCard({ icon, title, word, action, btnState, key }) {
  return (
    <div
      key={key}
      className="bg-white w-10/12 sm:w-11/12 xl:w-10/12 h-96 sm:h-auto shadow-2xl rounded-3xl px-6 py-12 sm:p-7 xl:p-8"
    >
      <div className="max-w-full grid grid-cols-1 h-full place-content-between">
        <div>
          <div>
            <div className="w-full">
              <div className="flex justify-evenly sm:justify-between items-center">
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
            <div className="w-full mt-6">
              <p
                className={`text-typography-extralight text-xs sm:text-sm xl:text-base font-font-light
              sm:tracking-tight md:leading-5 text-justify xl:tracking-normal`}
              >
                {word}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-2 px-10 sm:px-5">
          {!btnState && (
            <button
              type="button"
              onClick={action}
              className="text-center w-full bg-primary-accent text-white shadow-md ring-1 ring-primary-200 hover:text-typography-main hover:bg-primary-200 py-3 px-4 capitalize font-bold rounded-lg md:mr-6 text-xs sm:text-sm"
            >
              Request Service
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function SubscriptionCard({
  icon,
  title,
  word,
  isSubscription,
  params,
  key,
  btnState,
}) {
  return (
    <div
      key={key}
      className="bg-white w-10/12 sm:w-11/12 xl:w-10/12 h-96 sm:h-auto shadow-2xl rounded-3xl px-6 py-4 sm:-7 xl:p-8"
    >
      <div className="max-w-full grid grid-cols-1 h-full place-content-between">
        <div>
          <div>
            <div className="w-full">
              <div className="flex justify-evenly sm:justify-between items-center">
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
            <div className="w-full mt-6">
              <p
                className={`text-typography-extralight text-xs sm:text-sm xl:text-base font-font-light
              sm:tracking-tight md:leading-5 text-justify xl:tracking-normal`}
              >
                {word}
              </p>
            </div>
          </div>
        </div>
        <div className="px-10 sm:px-5">
          {isSubscription && (
            <>
              {!btnState && (
                <Link to={`/subscription/${params}`}>
                  <div className="w-full text-center bg-primary-accent text-white shadow-md ring-1 ring-primary-200 hover:text-typography-main hover:bg-primary-200 py-3 px-4 capitalize font-bold rounded-lg md:mr-6 text-xs sm:text-sm">
                    <p className="">Subscription</p>
                  </div>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
