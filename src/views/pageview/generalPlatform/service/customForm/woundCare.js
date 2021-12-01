import React, { useState, useEffect, useContext } from "react";
import CustomServiceModal from "../../../../../components/customModal";
import InputBox from "../../../../../utils/InputBox";
import InputAreaBox from "../../../../../utils/InputAreaBox";
import Joi from "joi-browser";
import { GlobalContext } from "../../../../../controllers/globalValidationLayer";
import { useAlert } from "react-alert";
import WoundCareStore from "../../../../../controllers/serviceRequest/woundCare_store";
import { observer } from "mobx-react-lite";

const WoundCare = ({ show, user, uid }) => {
  const alert = useAlert();
  const [stage, setStage] = useState(0);

  const { state, setState, setSchemas, validate } = useContext(GlobalContext);

  const { loading, error, success, successMsg, errorMsg, makeServiceRequest } =
    useContext(WoundCareStore);

  const { data, errors } = state;

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      data: {
        woundLocation: "",
        woundType: "",
        address: "",
        nearestBusstop: "",
        appointmentDate: "",
      },
    }));
    setSchemas((prevState) => ({
      ...prevState,
      woundLocation: Joi.string().required().label("woundLocation"),
      woundType: Joi.string().required().label("woundType"),
      address: Joi.string().required().label("address"),
      nearestBusstop: Joi.string().required().label("nearestBusstop"),
      appointmentDate: Joi.string().required().label("appointmentDate"),
    }));
    return () => {
      setState({ data: {}, errors: {} });
      setSchemas({});
    };
  }, []);

  const preStage = (e) => {
    e.preventDefault();
    setStage((prevStage) => prevStage - 1);
  };

  const nextStage = (e) => {
    e.preventDefault();
    const errors = validate();
    setState((prevState) => ({
      ...prevState,
      errors: errors || {},
    }));
    console.log({ errors });

    if (errors) return;
    console.log({ data });
    setStage((prevStage) => prevStage + 1);
  };

  const sendRequest = () => {
    const requestData = {
      user_name: user && `${user.first_name} ${user.last_name}`,
      user_uuid: user && user.uuid,
      email: user && user.email,
      request_form: {
        service_type: "wound_care",
        wound_location: data.woundLocation,
        wound_type: data.woundType,
      },
      address: {
        street: data.address,
        landmark: data.nearestBusstop,
      },
      preferred_date: data.appointmentDate,
    };

    if (!validate()) {
      makeServiceRequest(requestData, uid);
      console.log({ requestData });
    } else {
      console.log({ errorMsg });
    }
  };
  const stagesRender = (stage) => {
    // eslint-disable-next-line default-case
    switch (stage) {
      case 0:
        return (
          <>
            <form onSubmit={nextStage}>
              <InputAreaBox
                type="text"
                label="Where is the wound located on your body?"
                rows={4}
                name="woundLocation"
                placeholder="Eg. The wound is around my anckle."
                required={true}
                hasOption={false}
                labelColor={"text-typography-bold"}
              />
              <InputAreaBox
                type="text"
                rows={4}
                name="woundType"
                label="Describe the type of wound."
                placeholder="Eg. It is a diabetic wound."
                required={true}
                hasOption={false}
                labelColor={"text-typography-bold"}
              />
              <InputBox
                label="Enter Consultation Address"
                type="text"
                required={true}
                hasOption={false}
                name="address"
                labelColor={"text-typography-bold"}
              />
              <InputBox
                label="Enter the nearest bus stop"
                type="text"
                required={true}
                hasOption={false}
                name="nearestBusstop"
                labelColor={"text-typography-bold"}
              />
              <InputBox
                label="Enter your preferred appointment date"
                type="date"
                required={true}
                hasOption={false}
                name="appointmentDate"
                labelColor={"text-typography-bold"}
              />
              <div className="my-3 w-full pb-4">
                <div className="flex justify-end items-center">
                  <button
                    type="button"
                    onClick={nextStage}
                    className="
                      bg-primary-accent hover:text-typography-main
                  text-white shadow-md ring-1 ring-primary-main  hover:bg-primary-100 p-3 capitalize font-bold rounded-lg w-32"
                  >
                    Next
                  </button>
                </div>
              </div>
            </form>
          </>
        );
      case 1:
        return (
          <>
            <div className="h-5/6 min-w-full grid grid-cols-1 place-content-between">
              <div className="flex-col justify-evenly ">
                <p className="text-lg mb-5">
                  <span className="text-sm text-typography-extralight">
                    Name:{" "}
                  </span>
                  {`${user && user.first_name} ${user && user.last_name}`}
                </p>
                <p className="text-lg my-1 mb-5">
                  <span className="text-sm text-typography-extralight">
                    Email:{" "}
                  </span>
                  {user && user.email}
                </p>
                <p className="text-lg my-1 mb-5">
                  <span className="text-sm text-typography-extralight">
                    Contact Number:{" "}
                  </span>
                  {user && user.phone}
                </p>
                <p className="text-lg my-1 mb-5">
                  <span className="text-sm text-typography-extralight">
                    Preferred Addres:{" "}
                  </span>
                  {data.address}
                </p>
                <p className="text-lg my-1 mb-5">
                  <span className="text-sm text-typography-extralight">
                    Preferred appointment Date:{" "}
                  </span>
                  {data.appointmentDate}
                </p>
                <p className="text-lg my-1 mb-5">
                  <span className="text-sm text-typography-extralight">
                    Wound Type:{" "}
                  </span>
                  {data.woundType}
                </p>
                <p className="text-lg my-1 mb-5">
                  <span className="text-sm text-typography-extralight">
                    Wound Loction:{" "}
                  </span>
                  {data.woundLocation}
                </p>
              </div>
              {loading ? (
                <div className="text-typography-emphasis text-xl text-center w-full">
                  Requesing for Wound Care ...
                </div>
              ) : (
                <>
                  {" "}
                  <div className="text-typography-main text-base text-center w-full">
                    Thank you for using our service! Our expert will reach out
                    to you shortly! Also an email will be sent to you with the
                    information of your service request.
                  </div>
                </>
              )}
              <div className="my-3 pb-2 mb-5">
                <div className="flex justify-evenly items-center">
                  <button
                    onClick={preStage}
                    type="button"
                    className="bg-primary-accent hover:text-typography-main text-white shadow-md ring-1 ring-primary-main  hover:bg-primary-100 p-3 capitalize font-bold rounded-lg w-32"
                  >
                    previous
                  </button>
                  <div className="mx-3"></div>
                  <button
                    disabled={validate()}
                    type="button"
                    onClick={sendRequest}
                    className={`      ${
                      !validate()
                        ? "bg-primary-accent hover:text-typography-main"
                        : "bg-button-disabled text-typography-extralight ring-typography-extralight"
                    } text-white shadow-md ring-1 ring-primary-main  hover:bg-primary-100 p-3 capitalize font-bold rounded-lg w-32`}
                  >
                    next
                  </button>
                </div>
              </div>
            </div>
          </>
        );
    }
  };
  const options = { error };

  useEffect(() => {
    if (error) {
      alert.error(errorMsg, options);
    }
  }, [error, errorMsg]);

  useEffect(() => {
    if (success) {
      show(false);
      alert.success(successMsg, options);
    }
  }, [success, successMsg]);

  return (
    <CustomServiceModal showModal={show} title="Request Wound Care">
      {stagesRender(stage)}
    </CustomServiceModal>
  );
};

export default observer(WoundCare);
