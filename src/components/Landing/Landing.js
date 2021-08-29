import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div
      className="landing"
      style={{
        backgroundImage: `url(../images/home-bg.jpg)`,
      }}
    >
      <div className="contents">
        <h1 className="main__word">
          Bringing Quality health <br />{" "}
          <span className="mainword__break">
            Services to your <br /> Doorstep
          </span>
        </h1>

        <Link to="/service">
          <button className="homegetstarted__btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
