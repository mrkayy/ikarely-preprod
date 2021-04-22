<<<<<<< HEAD
import React from "react";

function InputBox({ value, label, name, onchange, err, hasError, type }) {
  return (
    <div className="input__box">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} value={value[name]} onChange={onchange} />
      <label htmlFor="password" className="has_error">
        {hasError(name) ? err[name]?.error && err[name].message : null}
      </label>
=======
import React, {useState, useContext} from "react";
import { GlobalContext } from "../stores/GlobalLayer";
import './InputBox.css'


function  InputBox({label, name, type })  {
  const {state: {data, errors}, handleChange} = useContext(GlobalContext)
  
  return (
    <div className="input__box">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} value={data?.name} onChange={handleChange} />
      <label htmlFor={name} className="has__error">
        {errors[name]}
         </label>
>>>>>>> 33be542 (dasdads)
    </div>
  );
}

export default InputBox;
