import React, { useContext } from "react";
import ReactDom from "react-dom";
import { useAlert } from "react-alert";

import PropTypes from "prop-types";
// import AuthStore from ".././../../controllers/stores_v1/AuthStore";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import "./overlay_styles.css";
import Authentication from "../../../controllers/authentication_store";

const Overlay = ({ slide, showMenu, setSlide }) => {
  const { signout, user } = useContext(Authentication);
  const alert = useAlert();

  const logout = () => {
    signout();
    console.log("LOGGING_OUT_OF_APPLICATION");
    alert.success("Thank you for visiting Ikarely!", { error: false });
  };

  const links = [
    {
      value: "Home",
      directory: "/",
    },
    {
      value: "Services",
      directory: "/service",
    },
    // {
    //   value: "Blog",
    //   directory: "/blog",
    // },
    {
      value: "About Us",
      directory: "/about",
    },
    {
      value: "Contact Us",
      directory: "/contact",
    },
  ];

  const accountLinks = [
    { value: "Dashboard", directory: "/account/dashboard" },
    { value: "Medical Profile", directory: "/account/medicals" },
    { value: "Medical History", directory: "/account/medical-history" },
    { value: "Service Requests", directory: "/account/service-requests" },
    { value: "My Appointments", directory: "/account/appointments" },
    { value: "Payments", directory: "/account/payments" },
    { value: "Settings", directory: "/account/settings" },
  ];

  // pushes the new route to the DOM history
  // const handleLink = (e) => {
  //   return history.push(e);
  // };

  const viewLink = () => {
    showMenu();
    window.scrollTo(0, 0);
  };

  const content = (
    <div
      className={`overlay bg-transprent aboslute z-50 w-full h-screen fixed transition ease-in-out duraton-300 ${
        slide && "slide"
      }`}
    >
      <div className="w-10/12 h-auto bg-primary-100 absolute index-0 drop-shadow-2xl shadow-2xl">
        <div
          onClick={() => setSlide(false)}
          className="h-18 mt-5 flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-primary-accent hover:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <div className="h-screen flex-col justify-between">
          <div className="px-8 mb-10">
            <ul>
              {links.map(({ value, directory }, index) => {
                return (
                  <Link className="" to={directory} key={index}>
                    <li
                      className={`
                        font-semibold my-4 text-center text-typography-main py-4 rounded-md
                        ${
                          window.location.pathname === directory
                            ? "bg-primary-200 text-typography-main"
                            : ""
                        }`}
                      onClick={viewLink}
                    >
                      {value}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="px-8">
            <ul className="overflow-auto md:overflow-hidden">
              {user && user ? (
                <>
                  {/* Divider */}
                  {/* <hr className="my-4 md:min-w-full  text-primary-100" />
                  {profileLinks.map(({ value, directory }, index) => {
                    return (
                      <Link className="" to={directory} key={index}>
                        <li
                          className={`
                          font-semibold my-4 text-center text-typography-main py-4 rounded-md
                          ${
                            window.location.pathname === directory
                              ? "bg-primary-200 text-typography-main"
                              : ""
                          }`}
                          onClick={viewLink}
                        >
                          {value}
                        </li>
                      </Link>
                    );
                  })} */}
                  <hr className="my-4 md:min-w-full bg-primary-100" />
                  <li className="" onClick={logout}>
                    <button
                      type="button"
                      className="my-3 bg-primary-accent text-center rounded-md hover:bg-white hover:text-primary-accent text-white w-full p-3 translate duration-500 ease-in"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to=""></Link>
                  </li>
                  <li className="navbar__slide" onClick={() => viewLink(slide)}>
                    <Link to="/signin">
                      <div
                        type="button"
                        className="my-3 bg-white text-center rounded-md hover:bg-primary-accent hover:text-white text-primary-accent w-full p-3 translate duration-500 ease-in"
                      >
                        Login
                      </div>
                    </Link>
                  </li>

                  <li className="navbar__slide" onClick={() => viewLink(slide)}>
                    <Link to="/register">
                      <div
                        type="button"
                        className="my-3 bg-primary-accent text-center rounded-md hover:bg-white hover:text-primary-accent text-white w-full p-3 translate duration-500 ease-in"
                      >
                        Register
                      </div>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDom.createPortal(content, document.getElementById("overlay"));
};

Overlay.propTypes = {
  slide: PropTypes.bool.isRequired,
  showMenu: PropTypes.func.isRequired,
};

export default observer(Overlay);
