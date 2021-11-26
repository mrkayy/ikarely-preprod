import React from "react";
import PortalLayout from "./portalLayout";
// import "./modal.css";

const CustomPortalLayout = ({ children }) => {
  return (
    <PortalLayout>
      <div className="aboslute z-50 fixed bg-black bg-opacity-50 w-screen h-screen flex items-center justify-center">
        {children}
      </div>
    </PortalLayout>
  );
};

export default CustomPortalLayout;
