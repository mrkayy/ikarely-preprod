import React from "react";

function InputBox({ value, label, name, onchange, err, hasError, type }) {
  return (
    <div className="input__box">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} value={value[name]} onChange={onchange} />
      <label htmlFor="password" className="has_error">
        {hasError(name) ? err[name]?.error && err[name].message : null}
      </label>
    </div>
  );
}

export default InputBox;
