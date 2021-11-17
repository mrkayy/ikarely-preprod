import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./Button.css";
import { GlobalContext } from "../stores/GlobalLayer";

function Button({ progress, shown, loading, type }) {
  const { validate } = useContext(GlobalContext);

  return (
    <div>
      {loading ? (
        <button
          className="text-center w-full bg-button-disabled text-typography-main text-xs sm:text-sm font-semibold rounded-lg
        px-4 py-3 mt-6"
          type={type === "button" ? type : "submit"}
        >
          {/* <span className="loader text-typography-main" title="2">
            {" "}
          </span> */}
          {progress}
        </button>
      ) : (
        <button
          type={type === "button" ? type : "submit"}
          disabled={validate()}
          className={`w-full block ${
            !validate()
              ? "bg-button-primary hover:text-typography-main hover:bg-white hover:shadow-md"
              : "bg-button-disabled"
          }  text-white text-xs sm:text-sm font-semibold rounded-lg
          px-4 py-3 mt-6`}
        >
          {shown}
        </button>
      )}
    </div>
  );
}

Button.propTypes = {
  progress: PropTypes.string.isRequired,
  shown: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Button;
