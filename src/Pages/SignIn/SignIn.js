import React, { useEffect, useState, useContext} from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import "./SignIn.css";
import { observer } from "mobx-react";
import AuthStore from "../../stores/AuthStore";
import { useAlert } from "react-alert";
import InputBox from "../../shared/InputBox";
import Joi from "joi-browser";
import { GlobalContext } from "../../stores/GlobalLayer";

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

  const { state, setState, schema, setSchemas, validate } = useContext(
    GlobalContext
  );

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      data: { 
        email: "", 
        password: "" 
      },
    }));

    setSchemas((prevState) => ({
      ...prevState,
      email: Joi.string().required().label("Username"),
      password: Joi.string().required().label("Password"),
    }));

    return () => {
      setState({data: {}, errors: {}})
      setSchemas({})
    }
  }, []);

  useEffect(() => {
    if (error) {
      alert.error(`${errMessage}`);
    }
    if (success && !error) {
      alert.success(`${successMessage}`);
      
    }
    // return () => {
    //   resetActions();
    // };
  }, [errMessage, successMessage]);

  useEffect(() => {
    if (authSuccess === "pass") {
      history.push("/");
    }
  }, [authSuccess]);
  if (currentUser && currentUser) {
    return <Redirect to={"/"} />;
  }

  const { data, errors } = state;

  const loginSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    setState((prevState) => ({
      ...prevState, errors: errors || {} 
    }));
    if (errors) return;
    login(data);
    console.log("Details submitted");
  };

  console.log(validate())
// 
  return (
    <div className="contact">
      <div className="signin">
        <div className="signin__form">
          <div className="signin__headers">
            <h3 className="signin__header">Users Sign in</h3>
            <p className="little__text">Welcome to iKarely</p>
          </div>

          <form action="submit" onSubmit={loginSubmit} className="form__inputs">
            <InputBox label="Email or Phone Number" name="email" type="email" />
            <InputBox label="Password" name="password" type="password" />

            <div className="keep__signed">
              <input
                type="checkbox"
                // onChange={handleCheckBox}
              />
              Keep me signed in
            </div>

            <button
              type="submit"
              disabled={validate()}
              className={!validate() ? "register__submit__btn" : "not__active"}
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
