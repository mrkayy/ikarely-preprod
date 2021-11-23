import React from "react";
import PortalLayout from "./portalLayout";
import "./modal.css";

const CustomModal = ({ open, onBackdropClick, children }) => {
  return (
    <PortalLayout>
      <div className={`portal__modal`}>{children}</div>
    </PortalLayout>
  );
};

export default CustomModal;
