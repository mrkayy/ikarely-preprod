import React, { useState, useContext, useEffect } from "react";
import CustomServiceModal from "../../../../components/customModal";
import InputBox from "../../../../utils/InputBox";
import Joi from "joi-browser";
import { GlobalContext } from "../../../../controllers/globalValidationLayer";
import UserAccountStore from "../../../../controllers/userAccount_store";

const UpdateProfileForm = ({ show }) => {
  const { state, setState, setSchemas, validate } = useContext(GlobalContext);
  const { loading } = useContext(UserAccountStore);

  const { data, errors } = state;

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      data: {
        consultReason: "",
        consultType: "",
      },
    }));

    setSchemas((prevState) => ({
      ...prevState,
      consultReason: Joi.string().required().label("consultReason"),
      consultType: Joi.string().required().label("consultType"),
    }));

    return () => {
      setState({ data: {}, errors: {} });
      setSchemas({});
    };
  }, []);

  const updateProfile = (e) => {
    e.preventDefault();
    const errors = validate();
    setState((prevState) => ({
      ...prevState,
      errors: errors || {},
    }));
    if (errors) return;
    function gotoNextPage() {}
  };

  return (
    <>
      <CustomServiceModal showModal={show} title="Update your profile">
        <form onSubmit={() => {}}>
          <div className="my-3"> </div>
          <div className="w-full pb-2">
            <div className="mb-3 px-2 md:px-4 pt-2 flex justify-evenly md:justify-end items-center">
              <button
                disabled={validate()}
                type="submit"
                className={`${
                  !validate()
                    ? "bg-primary-accent hover:text-typography-main"
                    : "bg-button-disabled text-typography-extralight ring-typography-extralight"
                } text-white shadow-md ring-1 ring-primary-main  hover:bg-primary-100 p-4 capitalize font-bold rounded-lg mx-2 md:mr-6 w-28`}
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </CustomServiceModal>
    </>
  );
};

export default UpdateProfileForm;
