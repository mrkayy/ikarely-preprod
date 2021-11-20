import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Authentication from "../../../controllers/authentication_store";
import LayoutMargin from "../../../components/layoutWrapper";
import { useAlert } from "react-alert";

function NavBar({ showMenu }) {
  const alert = useAlert();
  const { signout, user } = Authentication;

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

  const logout = () => {
    signout();
    console.log("LOGGING_OUT_OF_APPLICATION");
    alert.success("Thank you for visiting Ikarely!", { error: false });
  };

  const navigationMenu = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/service" },
    { title: "About Us", path: "/about" },
    { title: "Contact Us", path: "/contact" },
    // { title: "Blogs", path: "/blogs" },
    { title: "Account", path: "/account" },
  ];
  return (
    <header
      className={`fixed aboslute xl:font-semibold w-screen z-40 ${
        show
          ? "bg-white shadow-2xl transition ease-out duration-200"
          : "bg-transparent transition ease-in duration-300"
      }`}
    >
      <LayoutMargin>
        <div className="py-4 sm:py-3 flex items-center justify-between">
          {/* mobile menu */}
          <div className="sm:hidden">
            <div
              className=" sm:hidden relative h-8 w-12 bg-primary-accent text-white hover:border-2 border-primary-accent rounded hover:shadow-lg hover:bg-white hover:text-primary-accent"
              onClick={showMenu}
            >
              <span className="absolute top-1 left-3 mr-4">
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
          {/* brand logo */}
          <div className="w-full sm:w-24 grid place-items-center">
            <img
              src="../images/logo.png"
              alt="logo.png"
              className="w-24 md:w-36 lg:w-28 sm:ml-4"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:block md:w-6/10">
            <ul className="text-default sm:flex sm:items-center sm:justify-center sm:text-sm lg:text-base">
              {navigationMenu.map(({ title, path }, index) => (
                <li className="" key={index}>
                  <Link
                    className="rounded hover:bg-primary-accent py-2 px-4 md:px-3 hover:text-white"
                    to={path}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Authentication Button */}
          <div className="">
            <div className="flex sm:items-center lg:text-lg">
              {user ? (
                <>
                  <ButtonWrapper logout={logout} label="Sign Out" />
                </>
              ) : (
                <>
                  <div className="mr-3 sm:mr-0">
                    <Link to="/signin">
                      <ButtonWrapper label="Sign In" />
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </LayoutMargin>
    </header>
  );
}

// refactor component to a seperate widget
const ButtonWrapper = ({ label, logout }) => {
  return (
    <div className="rounded text-center text-white px-4 py-2 bg-primary-accent sm:text-sm lg:text-md hover:bg-white sm:m-0 md:px-3 hover:text-primary-accent hover:shadow-lg">
      <button onClick={logout} type="button" className="lg:font-semibold">
        {label}
      </button>
    </div>
  );
};

export default observer(NavBar);
