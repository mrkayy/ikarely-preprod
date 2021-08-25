import React from "react";
import Sidebar from "../Sidebar";

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
      path: "/",
      name: "",
      icon: "",
      component: <></>,
      layout: "",
    },
  ];

  return (
    <div>
      <Sidebar {...props} routes={menus} logo={"logo.png"} />
      {props.children}
    </div>
  );
}

export default LayoutWrapper;
