import React, { useEffect, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Register.css";

import { observer } from "mobx-react";
import AuthStore from "../../stores/AuthStore";
import dataHero from "data-hero";
import { useAlert } from "react-alert";

import InputBox from "../../shared/InputBox";

const schema = {
  full_name: {
    min: 6,
    required: true,
    isEmpty: true,
    message: 'Please enter your full name'
  },
  email: {
    min: 6,
    email: true,
    isEmpty: true,
    message: "Please enter a valid email!",
  },
  phone: {
    min: 6,
    required: true,
    isEmpty: true,
    message: 'Phone number is required'
  },
  city_of_residence: {
    min: 6,
    required: true,
    isEmpty: true,
    message: 'Please fill your city of residence'
  },
  recurrent_ailment:{
    min: 6,
    required: true,
    isEmpty: true,
    message: 'Cant be blank'
  },
  password: {
    min: 6,
    isEmpty: true,
    message: "Password too short!",
  },
  re_enter_password: {
    min: 6,
    required: true,
    isEmpty: true,
    message: 'Password too short!'
  },
  licence: {
    min: 6,
    required: true,
    isEmpty: true,
    message: 'Please upload your licence'
  }

};

function Register() {
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
    register,
    resetActions,
  } = authcontext;

  // console.log({ errMessage });

  const [formValue, setFormValue] = useState({
    isValid: false,
    touched: {},
    err: {},
    value: {
      full_name: "",
      email: "",
      phone: "",
      city_of_residence: "",
      recurrent_ailment: "",
      password: "",
      re_enter_password: "",
      licence: "",
    },
  });

  const { isValid, touched, err, value } = formValue;

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

  const registerUser = (e) => {
    console.log(data)
    e.preventDefault();
    const data = { value };
    // console.log(data);
    if (isValid) {
      register(data);
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

  return (
    <div className="register">
      <h2 className="header__description">
        Get qualilty healthcare at your convenience
      </h2>
      <div className="register__form">
        <div className="register__headers">
          <h3 className="register__header">Create a free account</h3>
          <p className="little__text">Welcome to iKarely</p>
        </div>

        <form action="" className="form__inputs" onSubmit={registerUser}>
          <InputBox
            label="Full Name"
            name="full_name"
            value={value}
            onchange={handleFormChange}
            hasError={hasError}
            err={err}
          />

          <InputBox
            label="Email"
            name="email"
            value={value}
            onchange={handleFormChange}
            hasError={hasError}
            type="email"
            err={err}
          />

          <InputBox
            label="Phone"
            name="phone"
            value={value}
            onchange={handleFormChange}
            hasError={hasError}
            err={err}
          />

          <InputBox
            label="City of residence"
            name="city_of_residence"
            value={value}
            onchange={handleFormChange}
            hasError={hasError}
            err={err}
          />

          <InputBox
            label="Recurrent Ailment"
            name="recurrent_ailment"
            value={value}
            onchange={handleFormChange}
            hasError={hasError}
            err={err}
          />

          <InputBox
            label="Password"
            name="password"
            value={value}
            onchange={handleFormChange}
            hasError={hasError}
            err={err}
          />

          <InputBox
            label="Re-enter Password"
            name="re_enter_password"
            value={value}
            onchange={handleFormChange}
            hasError={hasError}
            err={err}
          />

          <div className="input__box">
            <label htmlFor="upload">Upload Professional License</label>
            <input type="file" required />
          </div>

          <button
              type="submit"
              disabled={!isValid}
              className="register__submit__btn"
            >
              {loading ? "Loading..." : "Create Account"}
            </button>
          <p className="bottom__text">
            Do you have an account ? <Link to="/signin">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default observer(Register);
