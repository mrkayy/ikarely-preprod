import React, { useContext } from "react";
import AuthStore from "../stores/AuthStore";
import "./Alert.css";
import Anime, { FailAnime } from "./Anime";

function Alert({ style, options, close, message }) {
  const authcontext = useContext(AuthStore);
  const { error, loading, success } = authcontext;

  console.log(error, loading, success);
  return (
    <div className="alert__box">
      {/* <p className="close__icon" onClick={close}>X</p> */}
      <div className="feedback__body">
        {!error ? <Anime /> : <FailAnime />}

        <h3 className="feedback__status">{!error ? "Successful" : "Error"}</h3>
        <p className="feedback__message">{message}</p>
      </div>
    </div>
  );
}

export default Alert;
