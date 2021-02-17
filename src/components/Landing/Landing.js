import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <div
      className="landing"
      style={{
       backgroundImage: `url(images/home-bg.jpg)`
      }}
    >
      <div className="contents" >
        <div className="word">
          <h1 className="main__word fix">
            Quality Health Service 
          </h1>
          <div><span className='mainword__break'> at your Doorstep</span> </div>
        </div>
        <div className="button">
        <button className="getstarted__btn">
          <Link to="/register">Get Started</Link>
        </button>
      </div>
      
       
      </div>  
    </div>
  );
}

export default Landing;
