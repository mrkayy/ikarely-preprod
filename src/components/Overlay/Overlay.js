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
    { value: "Dashboard", directory: "profile/dashboard" },
    { value: "Medical Profile", directory: "profile/medicals" },
    { value: "Medical History", directory: "profile/medical-history" },
    { value: "Service Requests", directory: "profile/service-requests" },
    { value: "My Appointments", directory: "profile/appointments" },
    { value: "Payments", directory: "profile/payments" },
    { value: "Settings", directory: "profile/settings" },
  ];

  const viewLink = (slide) => {
    showMenu(slide);
    window.scrollTo(0, 0);
  };
  
  const content = (
    <div className={`overlay ${slide && "slide"}`}>
      <div className="overlay__body">
        <div onClick={() => setSlide(false)} className="close__button">
          X
        </div>

        <img
          src="../images/ikarely_logo_overlay.png"
          alt="logo.pngs"
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
                  <Link to={directory}>{value}</Link>{" "}
                </li>
              );
            })}
          </ul>
          <hr />
          <ul className="more__links">
            {currUser && currUser ? (
              <>
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
                  <Link to={"/signin"}>
                    <button className="login__link__btn">Login</button>
                  </Link>
                </li>

                <li className="navbar__slide" onClick={() => viewLink(slide)}>
                  <Link to={"/register"}>
                    <button className="register__link__btn">Register</button>
                  </Link>{" "}
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );

  return ReactDom.createPortal(content, document.getElementById("overlay"));
}

export default observer(Overlay);
