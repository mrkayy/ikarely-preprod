import { Link, useHistory, Redirect } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import Joi from "joi-browser";
import "./Register.css";
import { observer } from "mobx-react";
import AuthStore from "../../stores/AuthStore";
// import dataHero from "data-hero";
import { useAlert } from "react-alert";
import InputBox from "../../shared/InputBox";
import { GlobalContext } from "../../stores/GlobalLayer";
import Button from "../../Anime/Button";

function Register(props) {
  const alert = useAlert();
  const history = useHistory();
  const authcontext = useContext(AuthStore);
  const {
    error,
    success,
    currUser,
    errMessage,
    // authSuccess,
    successMessage,
    register,
    resetActions,
  } = authcontext;

  
  useEffect(() => {
    autoScroll();
  }, []);

  const autoScroll = () => {
    console.log("auto scroll");
    return window.scrollTo(0, 0);
  };

  const {
    state,
    setState,
    setSchemas,
    validate,
    // schema,
    // handleSubmit,
    handleChange,
  } = useContext(GlobalContext);

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      data: {
        full_name: "",
        phone: "",
        email: "",
        city_of_residence: "",
        password: "",
        re_enter_password: "",
        user_type: "",
      },
    }));

    setSchemas((prevState) => ({
      ...prevState,
      full_name: Joi.string().required().label("Full Name"),
      phone: Joi.number().min(9).required().label("Phone"),
      email: Joi.string().email().required().label("Email"),
      city_of_residence: Joi.string().required().label("City"),
      password: Joi.string().required().min(5).label("Password"),
      re_enter_password: Joi.string()
        .required()
        .valid(Joi.ref("password"))
        .options({
          language: {
            any: {
              allowOnly: "!!Passwords do not match",
            },
          },
        }),
      user_type: Joi.string().required().label("User type"),
    }));

    return () => {
      setState({ data: {}, errors: {} });
      setSchemas({});
    };
  }, []);

  //alert user on error or success
  useEffect(() => {
    if (error) {
      // console.log(errMessage)
      alert.error(`${errMessage}`);
      alert.removeAll();
    }
    if (success && !error) {
      // console.log({ successMessage });
      alert.success(`${successMessage}`);
      alert.removeAll();
    }
    return () => {
      resetActions();
    };
  }, [errMessage, successMessage]);

  const { data, errors } = state;

  const registerSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    setState((prevState) => ({
      ...prevState,
      errors: errors || {},
    }));
    if (errors) return;
    const { full_name, phone, email, city_of_residence, password, user_type } =
      data;

    const datas = {
      full_name,
      phone,
      email,
      city_of_residence,
      password,
      user_type,
    };
    register(datas);
    console.log(data, "Register submitted");
  };

  return currUser && props.location.pathname === "/register" ? (
    <Redirect
      to={{
        pathname: "/",
        state: {
          from: props.location,
        },
      }}
    />
  ) : (
    <div className="register">
      <h2 className="header__description">
        Get qualilty healthcare at your convenience
      </h2>
      <div className="register__form">
        <div className="register__headers">
          <h3 className="register__header">Create a free account</h3>
          <p className="little__text">Welcome to iKarely</p>
        </div>

        <form action="" className="form__inputs" onSubmit={registerSubmit}>
          <InputBox label="Full Name" name="full_name" type={"text"} />

          <InputBox label="Email" name="email" type="email" />

          <InputBox label="Phone" name="phone" type="text" />

          <InputBox
            label="City of residence"
            name="city_of_residence"
            type="text"
          />

          <InputBox label="Password" name="password" type={"password"} />

          <InputBox
            label="Re-enter Password"
            name="re_enter_password"
            type={"password"}
          />

          <select
            name="service"
            onChange={handleChange}
            value={state.data.user_type}
            label="User Type"
            name="user_type"
            type="text"
          >
            <option value="" className="first__option">
              --select account type--
            </option>
            <option value="Customer" className="first__option">
              Customer
            </option>
            <option value="Professional" className="first__option">
              Professional{" "}
            </option>
          </select>

          <Button progress="Registering..." shown="Create Account" />

          <p className="bottom__text">
            Do you have an account ? <Link to="/signin">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default observer(Register);
