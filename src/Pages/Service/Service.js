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
import AuthStore from '../../stores/AuthStore'
import { observer } from "mobx-react";
import { useAlert } from "react-alert";

function Service() {
  const [openModal, setOpenModal] = useState(false);
  const servicecontext = useContext(ServiceStore);
  const authContext = useContext(AuthStore)
  
  const {currUser} = authContext;
  
  useEffect(() => {
    autoScroll();
  }, []);

  const autoScroll = () => {
    console.log("auto scroll");
    return window.scrollTo(0, 0);
  };


  const alert = useAlert();
  const services = [
    {
      icon: "wound.svg",
      title: "Wound Care",
      params: "wound_care",
      word: "Why go through the stress of going to and waiting in the hospital when dealing with wounds is enough stress on its own. We offer wound dressing services for patients with minor burns, pressure ulcer, diabetic foot and any other form of wounds at your utmost convenience.",
    },
    {
      icon: "injection.svg",
      title: "Vaccination",
      params: "vaccination",
      word: "At ikarely, we believe you don't have to stay on a long queue in the hospital to receive vaccination. We simply help reduce the stress by providing vaccination from deadly diseases like, hepatitis, typhoid, polio etc at the comfort of your home. ",
    },
    {
      icon: "Catherization.svg",
      title: "Geriatric care",
      params: "catheterization",
      word: "Elderly people don't always have to be hospitalized for minor health concerns that can be delivered to them at home. We provide care for the Elderly, from general checkup to catheterization and lots more.",
    },
    // {
    //   icon: 'Chemotography.svg',
    //   title: 'Chemotography',
    // params: 'chemotherapy',
    //   word:
    //     'We offer home chemotherapy psychological support for people living with cancer. ',
    // },
    {
      icon: "teeth-checkup.svg",
      title: "Dental Care",
      params: "dental_care",
      word: "We provide a wide range of dental services etc dental cleanings, Fillings, root canals, and extractions. Imagine the comfort of having a dentist come to your home for your dental care, that's exactly what we are offering you.",
    },
    {
      icon: "healthcare.svg",
      title: "General Check-up",
      params: "general_checkup",
      word: "You can request for our professional service for individual and family general check ups like Blood pressure, weight check, glucose check, malaria/HIV test, Body Mass Index (BMI) all at your convenience.",
    },
  ];
  const {
    reqError,
    reqSuccess,
    reqErrMessage,
    reqSuccessMessage,
    resetActions,
  } = servicecontext;

  useEffect(() => {
    if (reqError) {
      alert.error(`${reqErrMessage}`);
      console.log({ reqErrMessage });
    }
    if (reqSuccess) {
      alert.success(`${reqSuccessMessage}`);
      console.log({ reqSuccessMessage });
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
          <h1>Get the best medical aid at home</h1>
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

        {!currUser ? (
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
        )}

        <div className="service__lists">
          {services.map(({ icon, title, word }) => {
            return (
              <div className="service__list" key={title}>
                <div className="list__icon">
                  <img src={`../images/icons/${icon}`} alt="icon.png" />
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

export default observer(Service);
