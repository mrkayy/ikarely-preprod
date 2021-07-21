import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ReactDom from "react-dom";
import "./Overlay.css";
import AuthStore from "../../stores/AuthStore";
import { observer } from "mobx-react";

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

  const profileLinks = [
    { value: "Dashboard", directory: "/dashboard" },
    { value: "Medical Profile", directory: "/medicals" },
    { value: "Medical History", directory: "/medical-history" },
    { value: "Service Requests", directory: "/service-requests" },
    { value: "My Appointments", directory: "/appointments" },
    { value: "Payments", directory: "/payments" },
    { value: "Settings", directory: "/settings" },
  ];

  // pushes the new route to the DOM history
  // const handleLink = (e) => {
  //   return history.push(e);
  // };

  const viewLink = (slide) => {
    showMenu(slide);
    window.scrollTo(0, 0);
  };

  const content = (
    // <div className={`overlay ${slide && "slide"}`}>
      <div className={`overlay__body ${slide && "slide"}`}>

        <div onClick={() => setSlide(false)} className="close__button">
          X
        </div>
        <img
          src="../images/ikarely_logo_overlay.png"
          alt="logo.png"
          className="overlay__logo"
        />

        <div className="hamburger__menus">
          <ul>
            {links.map(({ value, directory }, index) => {
              return (
                <li
                  className="navbar__slide"
                  onClick={() => viewLink(slide)}
                  key={index}
                >
                  <Link activeClassName="selected" to={directory}>{value}</Link>
                </li>
              );
            })}
          </ul>
          <ul className="more__links">
            {currUser && currUser ? (
              <>
                <hr />
                {profileLinks.map(({ value, directory }, index) => {
                  return (
                    <li
                      key={index}
                      className="navbar__slide"
                      onClick={() => viewLink(slide)}
                    >
                      <Link to={directory}>{value}</Link>
                    </li>
                  );
                })}
                <li className="navbar__slide" onClick={logout}>
                  <button className="register__link__btn">Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="navbar__slide" onClick={() => viewLink(slide)}>
                  <button
                    // onClick={handleLink("/signin")}
                    className="login__link__btn"
                  >
                    Login
                  </button>
                </li>

                <li className="navbar__slide" onClick={() => viewLink(slide)}>
                  <button
                    // onClick={handleLink("/register")}
                    className="register__link__btn"
                  >
                    Register
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    // </div>
  );

  return ReactDom.createPortal(content, document.getElementById("overlay"));
};

export default observer(Overlay);
