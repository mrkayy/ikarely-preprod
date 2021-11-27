import React from "react";
import CustomServiceModal from "../../../../../components/customModal";

const DoctorsConsult = ({ show }) => {
  const buttonList = [
    // {
    //   title: "save",
    //   action: () => {
    //     console.log("modal_action_1");
    //   },
    // },
    // {
    //   title: "next",
    //   action: () => {
    //     console.log("modal_action_2");
    //   },
    // },
    // {
    //   title: "send request",
    //   action: () => {
    //     console.log("modal_action_3");
    //   },
    // },
  ];

  return (
    <CustomServiceModal
      showModal={show}
      title="Request Doctors Consultation"
      buttonList={buttonList}
    >
      <div>
        <input type="text" placeholder="enter some text" className="text-sm" />
      </div>
    </CustomServiceModal>
  );
};

export default DoctorsConsult;
