import React from "react";
import Sidebar from "../sidebar";
import { Switch, Route } from "react-router-dom";

function LayoutWrapper(props) {
  //   const getBrandText = path => {
  //      for (let i = 0; i < Menus.length; i++) {
  //        if (
  //          props.location.pathname.indexOf( Menus[i].path
  //          ) !== -1
  //        ) {
  //          return Menus[i].name;
  //        }
  //      }
  //      return "Brand";
  //    };

  const menus = [
    {
      path: "/account/dashboard",
      name: "Dashboard",
      icon: "",
      component: <></>,
    },
  ];

  return (
    <div>
      <Sidebar {...props} routes={menus} logo={"logo.png"} />
      <Switch>
        {menus.map(({ path, name, icon, component }, index) => (
          <Route
            // {...rest}
            // render={(props) => (
            //   <GeneralLayout {...props}>
            //     <Component {...props} />
            //   </GeneralLayout>
            // )}
          />
        ))}
      </Switch>
    </div>
  );
}

export default LayoutWrapper;
