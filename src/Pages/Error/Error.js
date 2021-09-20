import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";

const Error = (props) => {
  //console.log({props});

  return (
    <div className="error">
      <div className="error__content">
        <h4 className="error__message">Oops!</h4>
        <p className="error__body">Something Went wrong!</p>
        <Link to="/profile/dashboard">
          <button className="go__backhome">back</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
