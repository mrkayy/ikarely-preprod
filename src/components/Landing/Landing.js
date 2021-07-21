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
        <div className="word">
          <h1 className="main__word">
            Bringing Quality health <br />{" "}
            <span className="mainword__break">
              Services at your <br /> Doorstep
            </span>
          </h1>
        </div>

        <Link to="/service">
          <div className="button">
            <button className="getstarted__btn">Get Started</button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
