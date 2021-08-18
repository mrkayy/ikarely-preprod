import React, { useEffect, useState, useContext } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
// import Overlay from "../Overlay/Overlay";
import { observer } from "mobx-react";
import AuthContext from "../../stores/AuthStore";

function NavBar({ slide, showMenu }) {
  const { logout, currUser } = useContext(AuthContext);
  // const [show, setShow] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 35) {
  //       setShow(true);
  //     } else {
  //       setShow(false);
  //     }
  //   });
  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // }, []);

  return (
    <div className={`navbar__content nav__bg`}>
      <div className="logo">
        <img src="../images/logo.png" alt="logo.png" />
      </div>

      <div className="navbar__links">
        <ul>
          
          <li className="navbar__menus">
            <Link to="/">Home</Link>
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


          {currUser && currUser ? (
            <>
              <li className="navbar__menus">
                <Link to="/profile/dashboard">Dashboard</Link>
              </li>
              <li
                className="navbar__menus logout__btn"
                onClick={() => logout()}
              >
                Log out
              </li>
            </>
          ) : (
            <>
              <li className="navbar__menus">
                <Link to="/register">
                  <button className="signinbtn">Sign Up</button>
                </Link>
              </li>
              <li className="navbar__menus">
                <Link to="/signin">
                  <button className="signinbtn">Sign In</button>
                </Link>
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

export default observer(NavBar);
