import React, {
  useState,
  useContext,
  // useLayoutEffect,
  // useRef,
  useEffect,
} from "react";
import { Link } from "react-router-dom";
import PageLanding from "../../Components/PageLanding/PageLanding";
import "./Service.css";
import Modal from "@material-ui/core/Modal";
import ModalForm from "../../Components/Modal/ModalForm";
import ServiceStore from "../../stores/Services";
import AuthStore from "../../stores/AuthStore";
import { observer } from "mobx-react";
import { useAlert } from "react-alert";

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
      icon: "wound.svg",
      title: "Dr Consultation",
      word: "Why go through the stress of going to and waiting in the hospital when dealing with wounds is enough stress on its own. We offer wound dressing services for patients with minor burns, pressure ulcer, diabetic foot and any other form of wounds at your utmost convenience.",
      type: "by_request",
    },
    {
      id: 1,
      icon: "injection.svg",
      title: "Wound Care",
      word: "At ikarely, we believe you don't have to stay on a long queue in the hospital to receive vaccination. We simply help reduce the stress by providing vaccination from deadly diseases like, hepatitis, typhoid, polio etc at the comfort of your home. ",
      type: "by_request",
    },
    {
      id: 1,
      icon: "Catherization.svg",
      title: "Vaccination",
      word: "Elderly people don't always have to be hospitalized for minor health concerns that can be delivered to them at home. We provide care for the Elderly, from general checkup to catheterization and lots more.",
      type: "",
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
      id: 1,
      icon: "teeth-checkup.svg",
      title: "Dental Care",
      params: "dental_care",
      word: "We provide a wide range of dental services etc dental cleanings, Fillings, root canals, and extractions. Imagine the comfort of having a dentist come to your home for your dental care, that's exactly what we are offering you.",
      type: "",
    },

    {
      id: 1,
      icon: "healthcare.svg",
      title: "General Check-up",
      params: "general_checkup",
      word: "At ikarely, we believe you don't have to stay on a long queue in the hospital to receive vaccination. We simply help reduce the stress by providing vaccination from deadly diseases like, hepatitis, typhoid, polio etc at the comfort of your home. ",
      type: "",
    },
    {
      icon: "Catherization.svg",
      title: "Pregnacare",
      params: "pregnacare",
      word: "Elderly people don't always have to be hospitalized for minor health concerns that can be delivered to them at home. We provide care for the Elderly, from general checkup to catheterization and lots more.",
      type: "",
    },
    {
      icon: "healthcare.svg",
      title: "Diabetes Care",
      params: "diabetes",
      word: "We provide a wide range of dental services etc dental cleanings, Fillings, root canals, and extractions. Imagine the comfort of having a dentist come to your home for your dental care, that's exactly what we are offering you.",
      type: "",
    },
  ];
  const {
    reqError,
    reqSuccess,
    reqErrMessage,
    reqSuccessMessage,
    resetActions,
  } = servicecontext;

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
            <button className="getstarted__btn">Get Started</button>
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
          {services.map(({ icon, title, word, params }) => {
            return (
              <div className="service__list" key={title}>
                <div className="list__icon">
                  <img src={`../images/icons/${icon}`} alt="icon.png" />
                  <h4 className="list__title">{title}</h4>
                </div>
                <p className="list__word">{word}</p>

                {params ? (
                  <Link to={`/subscription/${params}`}>
                    <button className="makerequest__btn">Make Request</button>
                  </Link>
                ) : (
                  btnSwitch
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default observer(Service);
