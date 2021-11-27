import React, { useState } from "react";
import CustomPortalLayout from "../../layouts/portalLayout";

function CustomServiceModal(props) {
  const { showModal, children, title, buttonList } = props;
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
          <div className="w-11/12 h-5/6 lg:w-3/5 md:w-3/4 md:h-3/5 bg-white rounded-xl relative shadow-xl overflow-y-scroll overflow-y-hidden">
            <div
              onClick={closeModal}
              className="h-18 absolute right-2 top-2 md:right-3 md:top-3"
            >
              <span className="w-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-typography-extralight hover:text-typography-emphasis"
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
            <div className="flex justify-center items-center w-full pt-3 text-xl">
              {title ? title : "nothing_here"}
            </div>
            <hr className="mt-3 mx-24" />
            <div className="p-8 bg-gray-100 ">{children}</div>
            <div className="absolute bottom-0 w-full pb-2">
              <hr className="mb-3 mx-24 text-primary-100" />
              <div className="mb-3 px-2 md:px-4 pt-2 flex justify-evenly md:justify-end items-center">
                {buttonList.map(({ title, action }, index) => {
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={action}
                      className="bg-primary-accent text-white shadow-md ring-1 ring-primary-main hover:text-typography-main hover:bg-primary-100 p-4 capitalize font-bold rounded-lg mx-2 md:mr-6 w-28"
                    >
                      {title ? title : "nothing_here"}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      </CustomPortalLayout>
    </>
  );
}

export default CustomServiceModal;
