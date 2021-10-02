import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import AuthContext from "../../../stores/AuthStore";

function NavBar({ showMenu }) {
  const { logout, currUser } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 55) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", setShow(false), false);
    };
  }, []);

  return (
    <div
      className={`w-full h-16 sm:h-24 md:h-28 lg:36 px-3 py-7 sm:py-3 font-semibold fixed flex items-center justify-between ${
        show
          ? "bg-white shadow-2xl transition ease-out duration-300"
          : "bg-transparent transition ease-in duration-300"
      }`}
    >
      {/* hambuger menu for mobile screens */}
      <div className="mr-4 sm:hidden">
        <div
          className=" sm:hidden relative h-8 w-12 rounded hover:bg-primary-accent hover:text-white"
          onClick={showMenu}
        >
          <span className=" absolute -top-9 left-3 mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="w-full sm:w-1/12 grid place-items-center">
        <img
          src="../images/logo.png"
          alt="logo.png"
          className="w-20 tablet:w-36 md:w-36 lg:w-28 l-2 sm:ml-4"
        />
      </div>

      <div className="hidden sm:block sm:w-6/10 tablet:w-3/6 md:w-5/12">
        <ul className="text-default sm:flex sm:items-center sm:justify-around sm:text-sm lg:text-lg">
          <li className="">
            <Link
              className="rounded hover:bg-primary-accent py-2 px-4 tablet:px-3 md:px-3 hover:text-white"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              className="rounded hover:bg-primary-accent py-2 px-4 tablet:px-3 md:px-3 hover:text-white"
              to="/service"
            >
              Services
            </Link>
          </li>
          {/* <li className="navbar__menus">
            <Link to="/blog">Blog</Link>
          </li> */}
          <li className="">
            <Link
              className="rounded hover:bg-primary-accent py-2 px-4 tablet:px-3 md:px-3 hover:text-white"
              to="/about"
            >
              About us
            </Link>
          </li>
          <li className="">
            <Link
              className="rounded hover:bg-primary-accent py-2 px-4 tablet:px-3 md:px-3 hover:text-white"
              to="/contact"
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>

      <div className="mr-4">
        <div className="flex sm:text-sm md:text-base sm:items-center lg:text-lg">
          {currUser && currUser ? (
            <>
              <div
                className="rounded hover:bg-primary-accent py-2 px-4 tablet:px-3 md:px-3 hover:text-white"
                onClick={() => logout()}
              >
                <button> Log out</button>
              </div>
            </>
          ) : (
            <>
              <div className="">
                <Link
                  className="rounded hover:bg-primary-accent mr-7 sm:m-0 py-2 px-4 tablet:px-3 md:px-3 hover:text-white"
                  to="/signin"
                >
                  <button className="font-semibold">Sign In</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default observer(NavBar);
