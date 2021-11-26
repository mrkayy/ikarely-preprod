import React from "react";
import Sidebar from "../sidebar";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../../../views/pageview/clientPlatform/dashboard";
import Footer from "../footer";

function LayoutWrapper(props) {
  console.log({ props });

  // const getBrandText = path => {
  //    for (let i = 0; i < Menus.length; i++) {
  //      if (
  //        props.location.pathname.indexOf( Menus[i].path
  //        ) !== -1
  //      ) {
  //        return Menus[i].name;
  //      }
  //    }
  //    return "Brand";
  //  };

  const menus = [
    {
      path: "/account/dashboard",
      name: "Dashboard",
      icon: "",
      component: Dashboard,
    },
    // {
    //   path: "/account/profile",
    //   name: "Medical Profile",
    //   icon: "",
    //   component: <></>,
    // },
    // {
    //   path: "/account/services",
    //   name: "Services",
    //   icon: "",
    //   component: <></>,
    // },
    // {
    //   path: "/account/appointments",
    //   name: "Appointments",
    //   icon: "",
    //   component: <></>,
    // },
    // {
    //   path: "/account/Settings",
    //   name: "Settings",
    //   icon: "",
    //   component: <></>,
    // },
  ];

  return (
    <>
      <Sidebar />
      <Switch>
        <div className="relative md:ml-64 h-screen bg-red-50">
          <div className="container bg-green-50">
            {menus.map(({ path, component }, index) => (
              <Route
                exact
                key={index}
                path={path}
                component={component}

                // : (
                //   <Redirect
                //     to={{
                //       pathname: "/signin",
                //       state: {
                //         from: props.location,
                //       },
                //     }}
                //   />
                // );
              />
            ))}
          </div>
        </div>
      </Switch>
      <div className="relative md:ml-64 bg-blue-100">
        <Footer />
      </div>
    </>
  );
}

export default LayoutWrapper;
