import React, { useState, createContext } from "react";
import Joi from "joi-browser";

export const GlobalContext = createContext();

const GlobalLayer = ({ children }) => {
  const [state, setState] = useState({ data: {}, errors: {} });
  const [schemas, setSchemas] = useState({});

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(state.data, schemas, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: schemas[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  const handleChange = ({ currentTarget: input }) => {
    const errors = { ...state.errors };
    const errorMessage = validateProperty(input);
    const { name, value } = input;
    if (errorMessage) errors[name] = errorMessage;
    else delete errors[name];

    if (name === "re_enter_password" && value === state.data.password) {
      delete errors[name];
    }

    const data = { ...state.data };
    data[name] = value;
    // //console.log(data[name])
    setState((state) => ({
      ...state,
      data,
      errors,
    }));
  };

  // const handleCheckBox = (e) => {
  //   e.persist();
  //   const { type, checked } = e.target;
  //   if (checked) {
  //     setFormValue((state) => ({
  //       ...state,
  //       remember: type === "checkbox" ? checked : !checked,
  //     }));
  //   }
  // };

  return (
    <GlobalContext.Provider
      value={{
        state,
        setState,
        schemas,
        setSchemas,
        validate,
        validateProperty,
        handleChange,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalLayer;
