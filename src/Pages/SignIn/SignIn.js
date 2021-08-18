/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import "./SignIn.css";
import { observer } from "mobx-react";
import AuthStore from "../../stores/AuthStore";
import { useAlert } from "react-alert";
import InputBox from "../../shared/InputBox";
import Joi from "joi-browser";
import { GlobalContext } from "../../stores/GlobalLayer";
import Button from "../../Anime/Button";

const SignIn = (props) => {
  const alert = useAlert();
  // const history = useHistory();

  
  useEffect(() => {
    autoScroll();
  }, []);

  const autoScroll = () => {
    return window.scrollTo(0, 0);
  };

  const authcontext = useContext(AuthStore);
  const {
    error,
    success,
    authSuccess,
    errMessage,
    successMessage,
    login,
    currUser,
    resetActions,
  } = authcontext;

  const { state, setState, setSchemas, validate } = useContext(GlobalContext);

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      data: {
        email: "",
        password: "",
      },
    }));

    setSchemas((prevState) => ({
      ...prevState,
      email: Joi.string().required().label("Username"),
      password: Joi.string().required().label("Password"),
    }));

    return () => {
      setState({ data: {}, errors: {} });
      setSchemas({});
    };
  }, []);

  useEffect(() => {
    if (error) {
      alert.error(`${errMessage}`);
    }
    if (success && !error) {
      alert.success(`${successMessage}`);
    }
    return () => {
      resetActions();
    };
  }, [errMessage, successMessage]);

  useEffect(() => {
    if (authSuccess === "pass") {
      props.history.push("/service");
    }
    return () => {
      resetActions();
    };
  }, [authSuccess]);

  const { data, errors } = state;

  const loginSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setState((prevState) => ({
      ...prevState,
      errors: errors || {},
    }));
    if (errors) return;
    login(data);
  };

  return currUser && props.location.pathname === "/signin" ? (
    <Redirect
      to={{
        pathname: "/",
        state: {
          from: props.location,
        },
      }}
    />
  ) : (
    <div className="signin">
      <div className="signin__form">
        <div className="signin__headers">
          <h3 className="signin__header">Users Sign in</h3>
          <p className="little__text">Welcome to iKarely</p>
        </div>

        <form action="submit" onSubmit={loginSubmit} className="form__inputs">
          <InputBox label="Email or Phone Number" name="email" type="email" />
          <InputBox label="Password" name="password" type="password" />

          {/* <div className="keep__signed">
              <input
                type="checkbox"
                // onChange={handleCheckBox}
              />
              Keep me signed in
            </div> */}

          <Button progress="Loading..." shown="Signin" />

          <p className="bottom__text">
            New user? <Link to="/register">Sign up</Link> for free
          </p>
        </form>
      </div>
    </div>
  );
};

export default observer(SignIn);
