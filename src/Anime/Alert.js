import React, { useContext } from "react";
import AuthStore from "../stores/AuthStore";
import "./Alert.css";
import Anime, { FailAnime } from "./Anime";

function Alert({ style, options, close, message }) {
  const authcontext = useContext(AuthStore);
  const { error, loading, success } = authcontext;

<<<<<<< HEAD
  console.log(error, loading, success);
  return (
    <div className="alert__box">
      {/* <p className="close__icon" onClick={close}>X</p> */}
      <div className="feedback__body">
        {!error ? <Anime /> : <FailAnime />}

        <h3 className="feedback__status">{!error ? "Successful" : "Error"}</h3>
=======
  console.log(error, loading, success, message);
  return (
    <div className="alert__box">
      <div className="feedback__body">
        {!error ? <FailAnime /> : <Anime />}

        <h3 className="feedback__status">{!error ? "Error" : "Successful"}</h3>
>>>>>>> 806411a21d5e4c3413541fa88de4e99f1c9fa85a
        <p className="feedback__message">{message}</p>
      </div>
    </div>
  );
}

export default Alert;
