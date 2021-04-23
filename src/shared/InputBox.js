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
    </div>
  );
}

export default InputBox;
