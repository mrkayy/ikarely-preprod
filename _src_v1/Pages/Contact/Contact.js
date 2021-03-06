import React, { useState, useEffect, useContext } from "react";
// import { Link, useHistory, Redirect } from "react-router-dom";
import PageLanding from "../../components/pageLanding";
import InputBox from "../../../utils/InputBox";
import Joi from "joi-browser";
import { observer } from "mobx-react-lite";
import messagingStore from "../../controllers/stores_v1/ContactUs";
// import dataHero from "data-hero";
import { useAlert } from "react-alert";
import { GlobalContext } from "../../controllers/stores_v1/GlobalLayer";
import Button from "../../components/shared/Anime/Button";
import LayoutMargin from "../../components/LayoutWrapper";

const Contact = (props) => {
  useEffect(() => {
    autoScroll();
  }, []);

  const autoScroll = () => {
    return window.scrollTo(0, 0);
  };

  const alert = useAlert();
  // const history = useHistory();
  const authcontext = useContext(messagingStore);

  const {
    error,
    success,
    sendmessage,
    errorMsg,
    successMessage,
    loading,
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

  const options = {
    error,
  };

  //alert user on error or success
  useEffect(() => {
    if (error) {
      alert.error(errorMsg, options);
    }
    if (success && !error) {
      ////console.log({ successMessage });
      alert.success(successMessage, options);
    }
    return () => {
      resetActions();
    };
  }, [errorMsg, successMessage]);

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
      recipient: [email, "support@ikarely.com"],
      subject: "THANK YOU FOR REACHING OUT",
      data: { user_name: message, current_year: 2021 },
    };
    sendmessage(datas);
    ////console.log(datas, "Register submitted");
  };

  return (
    <div className="contactus">
      <PageLanding image="bg-contact" title="Contact us" />
      <LayoutMargin>
        <div className="h-6/12 py-16 sm:py-20 xl:py-8 w-9/12 sm:w-6/12 mx-auto lg:">
          <h2 className="text-center text-typography-emphasis font-semibold mb-5 text-lg sm:text-2xl xl:text-4xl">
            We will like to hear from you!
          </h2>
          <div className="py-4">
            <div className="">
              <h3 className="text-typography-main font-semibold text-center text-lg sm:text-xl xl:text-2xl">
                Leave us a message.
              </h3>
            </div>

            <form action="" className="contactus__inputs" onSubmit={sendMsg}>
              <InputBox label="Email or Phone" name="email" type="email" />

              <div className="">
                {/* <label htmlFor="password">Your Name</label> */}
                <InputBox
                  onChange={handleChange}
                  value={state.data.message}
                  label="please enter your name"
                  name="message"
                  type="text"
                />
              </div>

              <Button
                loading={loading}
                progress="Sending..."
                shown="Send Message"
              />
            </form>
          </div>
          <h2 className="text-center text-typography-light">
            Would you rather phone in? <br />{" "}
            <a href={"tel:+2348035418437"} className="text-typography-emphasis">
              08035418437,
            </a>{" "}
            <a href={"tel:+2349063870220"} className="text-typography-emphasis">
              {" "}
              09063870220
            </a>
          </h2>
        </div>
      </LayoutMargin>
    </div>
  );
};

export default observer(Contact);
