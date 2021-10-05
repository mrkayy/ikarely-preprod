import React, { useContext } from "react";
import ReactDom from "react-dom";

import PropTypes from "prop-types";
import AuthStore from "../../../stores/AuthStore";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import "./overlay_styles.css";

const Overlay = ({ slide, showMenu, setSlide }) => {
  const authcontext = useContext(AuthStore);
  const { logout, currUser } = authcontext;

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

  // const profileLinks = [
  //   { value: "Dashboard", directory: "/dashboard" },
  //   { value: "Medical Profile", directory: "/medicals" },
  //   { value: "Medical History", directory: "/medical-history" },
  //   { value: "Service Requests", directory: "/service-requests" },
  //   { value: "My Appointments", directory: "/appointments" },
  //   { value: "Payments", directory: "/payments" },
  //   { value: "Settings", directory: "/settings" },
  // ];

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
        <div onClick={() => setSlide(false)} className="h-18">
          <span className="w-10">
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
          </span>
        </div>

        <div className="h-screen flex-col justify-between">
          <div className="px-8 mb-10">
            <ul>
              {links.map(({ value, directory }, index) => {
                return (
                  <Link className="" to={directory}>
                    <li
                      className=" hover:bg-white font-semibold my-4 text-center text-red py-4 rounded-md"
                      onClick={viewLink}
                      key={index}
                    >
                      {value}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="px-8">
            <ul className="">
              {currUser && currUser ? (
                <>
                  {/* <hr /> */}
                  {/* {profileLinks.map(({ value, directory }, index) => {
                  return (
                    <li
                    key={index}
                    className="navbar__slide"
                    onClick={() => viewLink(slide)}
                    >
                    <Link to={directory}>{value}</Link>
                    </li>
                    );
                  })} */}
                  <li className="" onClick={logout}>
                    <button className="">Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="navbar__slide" onClick={() => viewLink(slide)}>
                    <Link to="signin">
                      <button className="my-3 bg-white rounded-md hover:bg-primary-accent hover:text-white text-primary-accent w-full p-3 translate duration-500 ease-in">
                        Login
                      </button>
                    </Link>
                  </li>

                  <li className="navbar__slide" onClick={() => viewLink(slide)}>
                    <Link to="/register">
                      <button className="my-3 bg-primary-accent rounded-md hover:bg-white hover:text-primary-accent text-white w-full p-3 translate duration-500 ease-in">
                        Register
                      </button>
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
