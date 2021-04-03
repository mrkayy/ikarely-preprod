import React, { useEffect, useState, useContext } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import "./SignIn.css";

import { observer } from "mobx-react";
import AuthStore from "../../stores/AuthStore";
import dataHero from "data-hero";
import { useAlert } from "react-alert";
import InputBox from "../../shared/InputBox";

const schema = {
  email: {
    min: 6,
    email: true,
    isEmpty: true,
    message: "Please enter a valid email!",
  },
  password: {
    min: 6,
    isEmpty: true,
    message: "Password too short!",
  },
};

function SignIn(props) {
  const { currentUser } = props;
  const alert = useAlert();
  const history = useHistory();
  const authcontext = useContext(AuthStore);
  const {
    error,
    loading,
    success,
    authSuccess,
    errMessage,
    successMessage,
    login,
    resetActions,
  } = authcontext;

  // console.log({ errMessage });

  const [formValue, setFormValue] = useState({
    isValid: false,
    remember: false,
    touched: {},
    err: {},
    value: {
      email: "",
      password: "",
    },
  });

  const { isValid, remember, touched, err, value } = formValue;

  const handleCheckBox = (e) => {
    e.persist();
    const { type, checked } = e.target;
    if (checked) {
      setFormValue((state) => ({
        ...state,
        remember: type === "checkbox" ? checked : !checked,
      }));
    }
  };

  const handleFormChange = (e) => {
    e.persist();
    const { name, value } = e.target;
    setFormValue((state) => ({
      ...state,
      value: {
        ...state.value,
        [name]: value,
      },
      touched: {
        ...state.touched,
        [name]: true,
      },
    }));
  };

  // validation with data-hero

  useEffect(() => {
    const errors = dataHero.validate(schema, value);
    // console.log(errors);
    setFormValue((state) => ({
      ...state,
      isValid: errors.email.error || errors.password.error ? false : true,
      err: errors || {},
    }));
  }, [value]);

  const hasError = (field) => touched[field] && err[field].error;

  // console.log("formValue: ", formValue);

  const loginUser = (e) => {
    e.preventDefault();
    const data = {
      remember,
      value,
    };
    // console.log(data);
    if (isValid) {
      login(data);
    }
  };

  //alert user on error or success
  useEffect(() => {
    if (error) {
      console.log({ errMessage });
      alert.error(`${errMessage}`);
    }
    if (success && !error) {
      console.log({ successMessage });
      alert.success(`${"hello"}`);
    }
    return () => {
      resetActions();
    };
  }, [errMessage, successMessage]);

  //alert user on success

  // useEffect(() => {
  //   if (success) {
  //     console.log({ successMessage });
  //     alert.success(`${successMessage}`);
  //   }
  //   return () => {
  //     resetActions();
  //   };
  // }, [successMessage]);

  useEffect(() => {
    if (authSuccess === "pass") {
      // console.log("redirecting to home page");
      history.push("/");
    }
  }, [authSuccess]);
  if (currentUser && currentUser) {
    return <Redirect to={"/"} />;
  }
  return (
    <div className="contact">
      <div className="signin">
        <div className="signin__form">
          <div className="signin__headers">
            <h3 className="signin__header">Users Sign in</h3>
            <p className="little__text">Welcome to iKarely</p>
          </div>

          <form action="submit" onSubmit={loginUser} className="form__inputs">
            {/* <label htmlFor="email">Email or Phone Number</label>
              <input
                type="email"
                name="email"
                value={value.email}
                onChange={handleFormChange}
              />{" "}
              <label htmlFor="email" className="has_error">
                {hasError("email")
                  ? err["email"]?.error && err.email.message
                  : null}
              </label> */}
            <InputBox
              label="Email or Phone Number"
              name="email"
              value={value}
              onchange={handleFormChange}
              hasError={hasError}
              type="email"
              err={err}
            />

            <InputBox
              label="Password"
              name="password"
              value={value}
              onchange={handleFormChange}
              hasError={hasError}
              type="password"
              err={err}
            />
            {/* <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={value.password}
                onChange={handleFormChange}
              />
              <label htmlFor="password" className="has_error">
                {hasError("password")
                  ? err.password?.error && err.password.message
                  : null}
              </label> */}

            <div className="keep__signed">
              <input
                type="checkbox"
                value={remember}
                onChange={handleCheckBox}
              />
              Keep me signed in
            </div>

            <button
              type="submit"
              disabled={!isValid}
              className="register__submit__btn"
            >
              {loading ? "Loading..." : "Sign In"}
            </button>
            <p className="bottom__text">
              New user? <Link to="/register">Sign up</Link> for free
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default observer(SignIn);
