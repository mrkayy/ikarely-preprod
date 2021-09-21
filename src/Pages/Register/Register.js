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
import InputPasswordBox from "../../shared/InputPasswordBox";

function Register(props) {
  const alert = useAlert();
  const history = useHistory();
  const authcontext = useContext(AuthStore);
  const {
    error,
    success,
    currUser,
    loading,
    errMessage,
    // authSuccess,
    successMessage,
    register,
    resetActions,
  } = authcontext;

  const options = {
    error,
  };

  useEffect(() => {
    autoScroll();
  }, []);

  const autoScroll = () => {
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
        first_name: "",
        last_name: "",
        phone: "",
        email: "",

        password: "",
        re_enter_password: "",
        user_type: "customer",
      },
    }));

    setSchemas((prevState) => ({
      ...prevState,
      first_name: Joi.string().required().label("First Name"),
      last_name: Joi.string().required().label("Last Name"),
      phone: Joi.number().min(9).required().label("Phone"),
      email: Joi.string().email().required().label("Email"),
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
      user_type: Joi.string(),
    }));

    return () => {
      setState({ data: {}, errors: {} });
      setSchemas({});
    };
  }, []);

  //alert user on error or success
  useEffect(() => {
    if (error) {
      alert.error(errMessage, options);
      alert.removeAll();
    }
    if (success && !error) {
      // //console.log({ successMessage });
      alert.success(successMessage, options);
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
    const { first_name, last_name, phone, email, password, user_type } = data;

    const datas = {
      first_name,
      last_name,
      phone,
      email,
      password,
      user_type,
    };
    register(datas);
    //console.log(data, "Register submitted");
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
          <InputBox label="First Name" name="first_name" type={"text"} />
          <InputBox label="Last Name" name="last_name" type={"text"} />

          <InputBox label="Email" name="email" type="email" />

          <InputBox label="Phone" name="phone" type="text" />

          <InputBox label="Password" name="password" type={"password"} />

          <InputBox
            label="Re-enter Password"
            name="re_enter_password"
            type={"password"}
          />

          <Button
            loading={loading}
            progress="Registering..."
            shown="Create Account"
          />

          <p className="bottom__text">
            Do you have an account ? <Link to="/signin">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default observer(Register);
