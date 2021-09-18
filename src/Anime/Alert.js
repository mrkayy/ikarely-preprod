import React from "react";
import "./Alert.css";
import Anime, { FailAnime } from "./Anime";

function Alert({ style, options, close, message }) {
  return (
    <div className="alert__box">
      <div className="feedback__body">
        {options.error ? <FailAnime /> : <Anime />}
        <h3 className="feedback__status">
          {options.error ? "Error" : "Successful"}
        </h3>
        <p className="feedback__message">{message}</p>
      </div>
    </div>
  );
}

export default Alert;
