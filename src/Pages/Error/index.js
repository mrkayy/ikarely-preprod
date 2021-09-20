import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";

const Error = (props) => {
  //console.log({props});

  return (
    <div className="error">
      <div className="error__content">
        <h4 className="error__message">Oops!</h4>
        <p className="error__body">
          We couldn’t find the page you are looking for.
        </p>
        <Link to="/">
          <button className="go__backhome">Take me Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
