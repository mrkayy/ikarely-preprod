import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";
import GlobalLayer from "./stores/GlobalLayer";
import Alert from "./Anime/Alert";

// optional configuration
const options = {
  // you can also just use 'bottom right'
  position: positions.BOTTOM_RIGHT,
  timeout: 5000,
  offset: "500px",

  // you can also just use 'scale'
  transition: transitions.SCALE,
};

ReactDOM.render(
  <AlertProvider template={Alert} {...options}>
    <GlobalLayer>
      <App />
    </GlobalLayer>
  </AlertProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
