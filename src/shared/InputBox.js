import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "../stores/GlobalLayer";
// import './InputBox.css'

function InputBox({
  label,
  name,
  type,
  required,
  placeholder,
  autoFocus,
  autoComplete,
  hasOption,
  options: Options,
  labelColor,
  optionFunciton,
}) {
  const {
    state: { data, errors },
    handleChange,
  } = useContext(GlobalContext);

  return (
    <div className="mt-3">
      <label
        htmlFor={name}
        className={`block text-sm ${
          labelColor ?? "text-default"
        } font-semibold`}
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          name={name}
          value={data[name]}
          required={required}
          autoFocus={autoFocus}
          onChange={handleChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="text-typography-heavy text-sm w-full px-4 py-3 rounded-lg bg-white sm:mt-2 border focus:border-blue-200
        focus:bg-white focus:outline-none"
        />
        {hasOption ? (
          <div
            onClick={optionFunciton}
            className="w-9 h-9 absolute right-0.5 rounded-lg bottom-1.5 grid place-items-center"
          >
            <Options />
          </div>
        ) : (
          <></>
        )}
      </div>
      <label htmlFor={name} className="text-typography-emphasis text-xs">
        {errors[name]}
      </label>
    </div>
  );
}

InputBox.propTypes = {
  hasOption: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  options: PropTypes.func,
  labelColor: PropTypes.string,
  optionFunciton: PropTypes.func,
  autoFocus: PropTypes.string,
  autoComplete: PropTypes.string,
};

export default InputBox;
