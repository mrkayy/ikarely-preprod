import React from "react";

function LineSvg(props) {
  return (
    <svg
      width="1332"
      height="2"
      viewBox="0 0 1332 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        y1="1"
        x2="1332"
        y2="1"
        stroke="url(#paint0_linear)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="0"
          y1="2"
          x2="1332"
          y2="2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="0.507662" stopColor="white" />
          <stop offset="0.507762" stopColor="white" />
          <stop offset="0.998083" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default LineSvg;
