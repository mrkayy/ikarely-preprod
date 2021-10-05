import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import AuthContext from "../../../stores/AuthStore";
import LayoutMargin from "../component/LayoutMargin";

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

  const navigationMenu = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/service" },
    { title: "About Us", path: "/about" },
    { title: "Contact Us", path: "/contact" },
    // {title: '',path:''},
    // {title: '',path:''},
  ];
  return (
    <header
      className={`fixed aboslute xl:font-semibold w-screen ${
        show
          ? "bg-white shadow-2xl transition ease-out duration-300"
          : "bg-white transition ease-in duration-300"
      }`}
    >
      <LayoutMargin>
        <div className="py-4 sm:py-3 flex items-center justify-between">
          {/* mobile menu */}
          <div className="sm:hidden">
            <div
              className=" sm:hidden relative h-8 w-12 bg-primary-accent text-white hover:border-2 border-primary-accent rounded hover:bg-white hover:text-primary-accent"
              onClick={showMenu}
            >
              <span className="absolute -top-9 left-3 mr-4">
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

          <div className="hidden sm:block md:w-6/10">
            <ul className="text-default sm:flex sm:items-center sm:justify-center sm:text-xs lg:text-base">
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

          <div className="mr-5 sm:mr-0">
            <div className="flex sm:text-sm md:text-base sm:items-center lg:text-lg">
              {currUser && currUser ? (
                <>
                  <div
                    className="rounded text-white px-4 py-2 bg-primary-accent text-xs sm:text-sm lg:text-base w-16 sm:w-24 lg:w-32 xl:w-40 hover:bg-white sm:m-0 md:px-3 hover:text-primary-accent"
                    onClick={() => logout()}
                  >
                    <button className="lg:font-semibold"> Log out</button>
                  </div>
                </>
              ) : (
                <>
                  <div className="">
                    <Link
                      className="rounded text-white px-4 py-2 bg-primary-accent text-xs sm:text-sm lg:text-base w-16 sm:w-24 lg:w-32 xl:w-40 hover:bg-white sm:m-0 md:px-3 hover:text-primary-accent"
                      to="/signin"
                    >
                      <button className="lg:font-semibold">Sign In</button>
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

export default observer(NavBar);
