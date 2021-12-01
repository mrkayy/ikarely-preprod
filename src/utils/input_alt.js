import React from "react";
import dataHero from "data-hero";

const shema = {
  txtOne: { 
    min: 6,
    isEmpty: true,
    message: "Please enter a valid email!", // error message to disaplay
},
  txtTwo: {},
};

const InputAlt = () => {
  const [formValue, setFormValue] = React.useState({
    isValid: false,
    touched: {},
    err: {},
    value: {
      txtOne: "",
      txtTwo: "",
    },
  });

  return <div></div>;
};

export default InputAlt;
