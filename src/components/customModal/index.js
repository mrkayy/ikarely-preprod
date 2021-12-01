import React, { useState } from "react";
import CustomPortalLayout from "../../layouts/portalLayout";

function CustomServiceModal(props) {
  const { showModal, children, title } = props;
  const modal_overlay = document.querySelector("#modal_overlay");
  const modal = document.querySelector("#modal");

  function openModal(showModal) {
    const modalCl = modal.classList;
    const overlayCl = modal_overlay;

    if (showModal) {
      overlayCl.classList.remove("hidden");
      setTimeout(() => {
        modalCl.remove("opacity-0");
        modalCl.remove("-translate-y-full");
        modalCl.remove("scale-150");
      }, 100);
    } else {
      modalCl.add("-translate-y-full");
      setTimeout(() => {
        modalCl.add("opacity-0");
        modalCl.add("scale-150");
      }, 100);
      setTimeout(() => overlayCl.classList.add("hidden"), 300);
    }
  }

  // openModal(true)

  const closeModal = () => {
    showModal(false);
  };

  return (
    <>
      <CustomPortalLayout>
        <>
          <div className="w-11/12 sm:w-1/2 h-3/4 bg-white rounded-xl relative shadow-xl  overflow-y-scroll overflow-y-hidden">
            <div
              onClick={closeModal}
              className="h-18 absolute right-2 top-2 md:right-3 md:top-3"
            >
              <span className="w-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 sm:h-10 sm:w-10 text-typography-extralight hover:text-typography-emphasis"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </div>
            <div className="flex justify-center items-center w-full py-3 text-md sm:text-xl">
              {title ? title : "nothing_here"}
            </div>
            <hr className="mx-24" />
            <div className="py-4 px-8 h-full">{children}</div>
          </div>
        </>
      </CustomPortalLayout>
    </>
  );
}

export default CustomServiceModal;
