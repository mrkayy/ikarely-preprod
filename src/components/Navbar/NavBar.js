import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Overlay from "../Overlay/Overlay";
import WebStorage from "../../shared/LocalStorage";

function NavBar({ slide, showMenu, user }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar__content ${show && "nav__bg"}`}>
      <div className="logo">
        <img src="images/logo.png" alt="" />
      </div>

      <div className="navbar__links">
        <ul>
          <li className="navbar__menus">
            <Link to="/">Home</Link>{" "}
          </li>
          <li className="navbar__menus">
            <Link to="/service">Services</Link>{" "}
          </li>
          {/* <li className="navbar__menus">
            {" "}
            <Link to="/blog">Blog</Link>
          </li> */}
          <li className="navbar__menus">
            <Link to="/about">About us</Link>
          </li>
          <li className="navbar__menus">
            <Link to="/contact">Contact us</Link>
          </li>
          {user && user === true ? (
            <>
              <li className="navbar__menus">
                <Link to="/profile">Accounts</Link>
              </li>
              <li className="navbar__menus logout__btn"
                  onClick={() => WebStorage.logout()}>
                  Log out
              </li>
            </>
          ) : (
            <>
              <li className="navbar__menus">
                <Link to="/register">Sign Up</Link>
              </li>
              <li className="navbar__menus">
                <Link to="/signin">Sign In</Link>
              </li>{" "}
            </>
          )}
          <li className="hamburger__menu" onClick={() => showMenu(slide)}>
            <div className="first line"></div>
            <div className="first line"></div>
            <div className="first line"></div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
