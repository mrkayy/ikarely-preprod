import React from "react";
import "./Error.css";

function Error() {
  return (
    <div className="error">
      <div className="error__content">
        <h4 className="error__message">
          Oops! We couldn’t find the page you are looking for{" "}
        </h4>
        <button className="go__backhome">
          Go to Homepage{" "}
        </button>
      </div>
    </div>
  );
}

export default Error;
