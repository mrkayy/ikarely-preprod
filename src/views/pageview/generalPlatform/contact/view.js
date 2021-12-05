import React, { useContext, useEffect } from "react";

import PageLanding from "../../../../components/pageLanding";
import InputBox from "../../../../utils/InputBox";
import Joi from "joi-browser";
import { observer } from "mobx-react-lite";
import { useAlert } from "react-alert";
import { useHistory } from "react-router";
import { GlobalContext } from "../../../../controllers/globalValidationLayer";
import Button from "../../../../components/shared/buttons/button";
import LayoutMargin from "../../../../components/layoutWrapper";

import ContactUsStore from "../../../../controllers/contactUs_store";

import InputAreaBox from "../../../../utils/InputAreaBox";

const Contact = (props) => {
  useEffect(() => {
    autoScroll();
  }, []);

  const autoScroll = () => {
    return window.scrollTo(0, 0);
  };

  const alert = useAlert();
  const history = useHistory();

  const { error, success, errorMsg, successMsg, loading, sendmessage } =
    useContext(ContactUsStore);

  const {
    state,
    setState,
    schema,
    setSchemas,
    validate,
    // handleSubmit,
    // handleChange,
  } = useContext(GlobalContext);

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      data: {
        email: "",
        name: "",
        message: "",
        // phone: "",
      },
    }));

    setSchemas((prevState) => ({
      ...prevState,
      email: Joi.string().email().required().label("email"),
      // phone: Joi.string().label("phone"),
      name: Joi.string().required().label("name"),
      message: Joi.string().required().label("message"),
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
    if (success) {
      alert.success(successMsg, options);
    }

    return () => {
      setState({
        data: {
          email: "",
          name: "",
          message: "",
          // phone: "",
        },
        errors: {},
      });
      setSchemas({});
    };
  }, [error, success]);

  const { data, errors } = state;

  const sendMsg = async (e) => {
    e.preventDefault();
    const errors = validate();
    setState((prevState) => ({
      ...prevState,
      errors: errors || {},
    }));

    if (errors) return;
    const { email, name, message } = data;

    const datas = {
      sender_name: name,
      sender_email: email,
      // sender_number: phone,
      message: message,
    };

    sendmessage(datas);
  };

  return (
    <div className="">
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

            <form className="" onSubmit={sendMsg}>
              <InputBox
                label="Email Address"
                name="email"
                type="email"
                required={false}
              />
              {/* <div className="w-full">
                <p className="m-2 text-center text-typography-light">OR</p>
              </div>
              <InputBox
                label="Phone Number"
                name="phone"
                type="tel"
                required={false}
              /> */}

              <InputBox
                // onChange={handleChange}
                value={state.data.message}
                label="Please enter your name"
                name="name"
                type="text"
              />
              <InputAreaBox
                type="text"
                name="message"
                rows={6}
                label="Please us leave a message."
              />

              <Button
                loading={loading}
                progress="Sending..."
                shown="Send Message"
              />
            </form>
          </div>
          <h2 className="text-center text-typography-light">
            Would you rather phone in? <br />{" "}
            {/* <a href={"tel:+2348035418437"} className="text-typography-emphasis">
              08035418437,
            </a>{" "} */}
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
