/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
// import "./SignIn.css";
import { observer } from "mobx-react";
import AuthStore from "../../stores/AuthStore";
import { useAlert } from "react-alert";
import InputBox from "../../shared/InputBox";
import Joi from "joi-browser";
import { GlobalContext } from "../../stores/GlobalLayer";
import Button from "../../Anime/Button";
// import InputPasswordBox from "../../shared/InputPasswordBox";

const SignIn = (props) => {
  const alert = useAlert();

  useEffect(() => {
    autoScroll();
  }, []);

  const autoScroll = () => {
    return window.scrollTo(0, 0);
  };

  let userName = "";

  const authcontext = useContext(AuthStore);
  const {
    error,
    loading,
    success,
    authSuccess,
    errMessage,
    successMessage,
    login,
    currUser,
    resetActions,
  } = authcontext;

  const options = {
    error,
  };

  const [passwordType, setpasswordType] = useState(true);

  const togglePassword = () => {
    setpasswordType(!passwordType);
  };

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
      alert.error(errMessage, options);
    }
    if (success && !error) {
      alert.success(successMessage, options);
    }
    return () => {
      resetActions();
    };
  }, [errMessage, successMessage]);

  // useEffect(() => {
  //   if (authSuccess === "pass") {
  //     props.history.push("/service");
  //   }
  //   return () => {
  //     resetActions();
  //   };
  // }, [authSuccess]);

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

  const hidden = () => (
    <>
      <div className="bg-closeEye bg-contain h-6 w-6"></div>
    </>
  );

  const visible = () => (
    <>
      <div className="bg-eye bg-contain h-6 w-6"></div>
    </>
  );

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
    // px-8 md:p-12 xl:p-16 2xl:p-28
    // px-4 md:px-28 lg:px-8 xl:px-0
    <>
      <section className="w-screen bg-doctor3 bg-no-repeat bg-center bg-cover">
        <div className="bg-opacity-50 py-10 sm:py-0 bg-white h-screen w-screen lg:flex lg:justify-between">
          <div className="w-full h-screen hidden lg:block"></div>
          <div className="w-full h-screen flex items-center justify-center">
            <div className="md:w-8/12 lg:w-11/12 xl:w-8/12">
              <div className="w-full h-full md:h-3/5 md:bg-white md:shadow-lg px-12 py-12  rounded-2xl">
                <h1 className="text-lg text-typography-main md:text-2xl font-bold leading-tight text-center">
                  Welcome! {userName && userName}
                </h1>

                <form className="mt-6 lg:px-4" onSubmit={loginSubmit}>
                  <InputBox
                    type={"email"}
                    label={"Email Address"}
                    name={"email"}
                    labelColor={"text-typography-main"}
                    placeholder={"Enter Email Address"}
                    autoFocus={true}
                    autoComplete={true}
                    required={true}
                  />
                  <InputBox
                    type={passwordType ? "password" : "text"}
                    label={"Password"}
                    name={"password"}
                    labelColor={"text-typography-main"}
                    placeholder={"Enter Password"}
                    minLength="6"
                    required={true}
                    hasOption={true}
                    options={passwordType ? hidden : visible}
                    showOption={passwordType}
                    optionFunciton={togglePassword}
                  />
                  <div className="text-right mt-2">
                    <Link to="/signin">
                      <span className="text-xs sm:text-sm text-typography-emphasis hover:text-typography-main focus:text-blue-700 font-semibold">
                        Forgot Password?
                      </span>
                    </Link>
                  </div>

                  <div className="w-full grid place-items-center">
                    <div className="w-full md:w-9/12">
                      <Button
                        type="submit"
                        loading={loading}
                        progress="Authenticating..."
                        shown="Sign In"
                      />
                    </div>
                  </div>
                </form>
                <hr className="my-6 border-primary-100 w-full" />

                <p className="mt-8 text-xs sm:text-sm text-center text-typography-main">
                  Need an account?{" "}
                  <Link to="/register">
                    <span className="text-typography-emphasis hover:text-typography-main font-semibold text-xs sm:text-sm">
                      Create an account
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default observer(SignIn);
