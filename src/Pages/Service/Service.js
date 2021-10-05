import React, {
  useState,
  useContext,
  // useLayoutEffect,
  // useRef,
  useEffect,
} from "react";
import { Link } from "react-router-dom";
import PageLanding from "../../components/PageLanding/PageLanding";
import "./Service.css";
import Modal from "@material-ui/core/Modal";
import ModalForm from "../../components/Modal/ModalForm";
import ServiceStore from "../../stores/Services";
import AuthStore from "../../stores/AuthStore";
import { observer } from "mobx-react";
import { useAlert } from "react-alert";
import ReactGA from "react-ga4";
import {raiseEvent,sendPageView } from "../../shared/GaEvent"

function Service() {
  const [openModal, setOpenModal] = useState(false);

  const servicecontext = useContext(ServiceStore);

  const authContext = useContext(AuthStore);

  const { currUser } = authContext;

  useEffect(() => {
    autoScroll();
  }, []);

  const autoScroll = () => {
    return window.scrollTo(0, 0);
  };

  const alert = useAlert();
  const services = [
    {
      id: 1,
      icon: "injection.svg",
      title: "Dr Consultation",
      word: "With ikarely you don't have to go through the stress of going to and wait for hours in the hospital to get timely consultation, treatment and Drug prescription for your health needs",
      type: "by_request",
    },
    {
      id: 2,
      icon: "wound.svg",
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
      icon: "Catherization.svg",
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
      icon: "healthcare.svg",
      title: "Geriatic Care",
      params: "geriatic_care",
      word: "Elderly people don't always have to be hospitalized for minor health concerns that can be delivered to them at home. We provide care for the Elderly, from general checkup to catheterization and lots more.",
      type: "by_subscription",
    },

    {
      id: 6,
      icon: "healthcare.svg",
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
      icon: "healthcare.svg",
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
      <button className="makerequest__btn">Get Started</button>
    </Link>
  ) : (
    <button
      className="makerequest__btn"
      onClick={() => setOpenModal(!openModal)}
    >
      Make Request
    </button>
  );

  const subBtnSwitch = !currUser ? (
    <Link to="/signin">
      <button className="makerequest__btn">Get Started</button>
    </Link>
  ) : (
    <button className="makerequest__btn">Subscribe to Service</button>
  );

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
    <div className="services">
      <PageLanding image="health-service.jpg" title="What we offer" />

      <div className="each__section">
        <div className="right__part">
          <h3>services</h3>
          <h2>Get the best medical aid at home</h2>
          <p className="section__word">
            We believe there is no better time to decongest hospitals especially
            in Africa where there is the disproportionate patient-to-doctor
            ratio with facilities that are either unavailable or dysfunctional.
            It’s an incredibly exciting moment for healthcare to take advantage
            of digital technology and the growing number of internet-enabled
            mobile phones in Africa. We are simply providing access to the very
            best prevention and treatment options at a fraction of the cost
            without necessarily leaving the comfort of your room. With iKarely
            you’re getting the best and quality health care services just at
            your finger tip.
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
          <h3 className="services__head">Our Services</h3>
          <h1 className="services__mainheader">Health Services we offer</h1>
        </div>

        {/* service request modal */}
        <Modal
          disablePortal
          open={openModal}
          onBackdropClick={() => setOpenModal(false)}
          className="main__modal"
        >
          <ModalForm services={services} setOpenModal={setOpenModal} />
        </Modal>

        {/* {!currUser ? (
          <Link to="/signin">
            <button className="getstarted__btn">Get Started</button>
          </Link>
        ) : (
          <button
            className="makerequest__btn inheader"
            onClick={() => setOpenModal(!openModal)}
          >
            Make Request
          </button>
        )} */}

        <div className="service__lists regular">
          {services
            .filter((service) => !service.params)
            .map(({ icon, title, word, params }) => {
              return (
                <div className="service__list" key={title}>
                  <div>
                    <div className="list__icon">
                      <img src={`../images/icons/${icon}`} alt="icon.png" />
                      <h4 className="list__title">{title}</h4>
                    </div>
                    <p className="list__word">{word}</p>
                  </div>
                  {btnSwitch}
                </div>
              );
            })}
        </div>

        <div className="service__premiumheaders">
          <h3 className="services__head">Our Services</h3>
          <h1 className="services__mainheader">
            Premium Health Services we offer
          </h1>
        </div>

        <div className="service__lists">
          {services
            .filter((service) => service.params)
            .map(({ icon, title, word, params }) => {
              return (
                <div className="service__list" key={title}>
                  <div>
                    <div className="list__icon">
                      <img src={`../images/icons/${icon}`} alt="icon.png" />
                      <h4 className="list__title">{title}</h4>
                    </div>
                    <p className="list__word">{word}</p>
                  </div>
                  <Link to={`/subscription/${params}`}>{subBtnSwitch}</Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default observer(Service);
