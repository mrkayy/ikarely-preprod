import React, { useState, useEffect, useContext } from "react";
// import { Link, useHistory, Redirect } from "react-router-dom";

import "./Contact.css";
import PageLanding from "../../components/PageLanding/PageLanding";
import InputBox from "../../shared/InputBox";
import Joi from "joi-browser";
import { observer } from "mobx-react";
import AuthStore from "../../stores/ContactUs";
// import dataHero from "data-hero";
import { useAlert } from "react-alert";
import { GlobalContext } from "../../stores/GlobalLayer";
import Button from "../../Anime/Button";

const Contact = (props) => {
  console.log({ props });

  useEffect(() => {
    autoScroll();
  }, []);

  const autoScroll = () => {
    return window.scrollTo(0, 0);
  };

  const alert = useAlert();
  // const history = useHistory();
  const authcontext = useContext(AuthStore);

  const {
    error,
    loading,
    success,
    sendmessage,
    errMessage,
    successMessage,
    resetActions,
  } = authcontext;

  const {
    state,
    setState,
    schema,
    setSchemas,
    validate,
    handleSubmit,
    handleChange,
  } = useContext(GlobalContext);

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      data: {
        email: "",
        message: "",
      },
    }));

    setSchemas((prevState) => ({
      ...prevState,
      email: Joi.string().email().required().label("Email"),
      message: Joi.string().required().label("Your message"),
    }));

    return () => {
      setState({ data: {}, errors: {} });
      setSchemas({});
    };
  }, []);

  //alert user on error or success
  useEffect(() => {
    if (error) {
      alert.error(errMessage);
    }
    if (success && !error) {
      console.log({ successMessage });
      alert.success(successMessage);
    }
    return () => {
      resetActions();
    };
  }, [errMessage, successMessage]);

  // if (currentUser && currentUser) {
  //   return <Redirect to={"/"} />;
  // }

  const { data, errors } = state;

  const sendMsg = async (e) => {
    e.preventDefault();
    const errors = validate();
    setState((prevState) => ({
      ...prevState,
      errors: errors || {},
    }));
    if (errors) return;
    const { email, message } = data;

    const datas = {
      medium: "email",
      name: "contact_us",
      sender: "josepholukayode05@gmail.com",
      recipient: [email],
      subject: "THANK YOU FOR REACHING OUT",
      data: { user_name: message, current_year: 2021 },
    };
    sendmessage(datas);
    console.log(datas, "Register submitted"); 
  };

  return (
    <div className="contactus">
      <PageLanding image="health-service.jpg" title="Contact us" />

      <div className="contact">
        <h2 className="contactus__description__top">
          We will like to hear from you!
        </h2>
        <div className="contactus__form">
          <div className="contactus__headers">
            <h3 className="contactus__header">Leave a Message</h3>
          </div>

          <form action="" className="contactus__inputs" onSubmit={sendMsg}>
            <InputBox label="Email or Phone" name="email" type="email" />

            <div className="input__box">
              {/* <label htmlFor="password">Your Name</label> */}
              <InputBox
                onChange={handleChange}
                value={state.data.message}
                label="please enter your name"
                name="message"
                type="text"
              />
            </div>

            <Button progress="Sending..." shown="Send Message" />
          </form>
        </div>
        <h2 className="contactus__description__bottom">
          Would you rather phone in? <br />{" "}
          <a href="tel:+2348035418437">08035418437,</a>{" "}
          <a href="tel:+2349063870220"> 09063870220</a>
        </h2>
      </div>
    </div>
  );
};

export default observer(Contact);
