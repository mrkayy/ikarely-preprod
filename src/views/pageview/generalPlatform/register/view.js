import React, { useEffect, useState, useContext } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import Joi from "joi-browser";
import { observer } from "mobx-react-lite";
import Authentication from "../../../../controllers/authentication_store";
import { useAlert } from "react-alert";
import InputBox from "../../../../utils/InputBox";
import { GlobalContext } from "../../../../controllers/globalValidationLayer";
import Button from "../../../../components/shared/buttons/button";

function Register() {
  const alert = useAlert();
  const history = useHistory();
  const {
    user,
    error,
    success,
    loading,
    resetActions,
    errorMsg,
    successMsg,
    createUserAccount,
  } = useContext(Authentication);

  const options = {
    error,
  };

  const [passwordType, setpasswordType] = useState(true);
  const [RepasswordType, setrePasswordType] = useState(true);

  const togglePassword = () => {
    setpasswordType(!passwordType);
  };
  const toggleRepassword = () => {
    setrePasswordType(!RepasswordType);
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
      alert.error(errorMsg, options);
      alert.removeAll();
    }
    if (success && !error) {
      alert.success(successMsg, options);
      alert.removeAll();
    }
    return () => {
      resetActions();
    };
  }, [error, errorMsg, successMsg]);

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
    createUserAccount(datas);
    ////console.log(data, "Register submitted");
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
  return user && history.location.pathname === "/register" ? (
    <Redirect
      to={{
        pathname: "/",
        state: {
          from: history.location,
        },
      }}
    />
  ) : (
    <section className="w-screen bg-doctor2 bg-no-repeat bg-center bg-cover">
      <div className="bg-white bg-opacity-70 md:bg-opacity-50 py-24 lg:py-0 w-screen lg:flex lg:justify-between">
        <div className="w-full h-screen hidden xl:block"></div>
        <div className="w-full h-screen flex items-center justify-center">
          <div className="md:w-8/12 lg:w-6/12 xl:w-10/12">
            <div className="w-full h-full md:h-3/5 bg-white lg:shadow-lg px-8 md:px-12 lg:px-10 py-12 rounded-2xl">
              <h2 className=" text-sm text-typography-emphasis text-center xl:text-left">
                Get qualilty healthcare at your convenience
              </h2>
              <div className="">
                <div className="mt-2 mb-4">
                  <p className="text-center xl:text-left xl:text-xl font-semibold text-typography-main capitalize">
                    Welcome to iKarely
                  </p>
                </div>

                <form action="" onSubmit={registerSubmit} className="">
                  <div className="lg:grid lg:grid-cols-2 lg:gap-x-3 xl:gap-x-8 ">
                    <InputBox
                      disable={loading}
                      label="First Name"
                      name="first_name"
                      type={"text"}
                      labelColor={"text-typography-main"}
                      placeholder={"Enter your first name"}
                    />
                    <InputBox
                      disable={loading}
                      label="Last Name"
                      name="last_name"
                      type={"text"}
                      labelColor={"text-typography-main"}
                      placeholder={"Enter your last name"}
                    />

                    <InputBox
                      disable={loading}
                      label="Email"
                      name="email"
                      type="email"
                      labelColor={"text-typography-main"}
                      placeholder={"Enter a valid email address"}
                    />

                    <InputBox
                      disable={loading}
                      label="Phone"
                      name="phone"
                      type="text"
                      labelColor={"text-typography-main"}
                      placeholder={"Enter a valid phone number"}
                    />

                    <InputBox
                      disable={loading}
                      label="Password"
                      name="password"
                      placeholder={"Enter a password"}
                      type={passwordType ? "password" : "text"}
                      hasOption={true}
                      options={passwordType ? hidden : visible}
                      showOption={passwordType}
                      optionFunciton={togglePassword}
                      labelColor={"text-typography-main"}
                    />

                    <InputBox
                      disable={loading}
                      label="Confirm-Password"
                      name="re_enter_password"
                      placeholder={"Confirm your password"}
                      type={RepasswordType ? "password" : "text"}
                      hasOption={true}
                      options={RepasswordType ? hidden : visible}
                      showOption={RepasswordType}
                      optionFunciton={toggleRepassword}
                    />
                  </div>
                  <div className="w-full grid place-items-center">
                    <div className="mt-3  w-full lg:w-5/12">
                      <Button
                        loading={loading}
                        progress="Registering..."
                        shown="Create Account"
                      />
                    </div>
                    <p className="mt-4 text-center sm:text-left text-xs sm:text-sm font-medium">
                      Do you have an account ?{" "}
                      <Link to="/signin">
                        <span className="font-semibold text-typography-emphasis">
                          Sign In
                        </span>
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default observer(Register);
