import React from "react";
import Anime, { FailAnime } from "./Anime";

function Alert({ style, options, close, message }) {
  return (
    <div className="bg-white bg-opacity-90 p-2 shadow-lg w-72 md:w-80 max-w-md h-16 rounded-md flex items-center mr-4 mb-8">
      <div
        className={`w-1 h-full rounded-md ${
          options.error ? "bg-secondary" : "bg-green-500"
        }`}
      ></div>
      <div className="h-full flex items-center mx-4">
        {options.error ? <FailAnime /> : <Anime />}
      </div>
      <div className="w-full flex justify-between items-center">
        <div>
          <p className="text-xs text-typography-light sm:text-md max-w-xs mr-4">
            {message}
          </p>
        </div>
        <div className="h-full w-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Alert;
