import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  return (
    <div className="contact">

<div className="signin">
      <div className="signin__form">
        <div className="signin__headers">
          <h3 className="signin__header">Users Sign in</h3>
          <p className="little__text">Welcome to iKarely</p>
        </div>

        <form action="" className="signin__inputs">
          <div className="email__input">
            <label htmlFor="email">Email or Phone Number</label>
            <input type="email" required />
          </div>

          <div className="password__input">
            <label htmlFor="password">Password</label>
            <input type="password" required />
          </div>

          <div className="keep__signed">
            <input type="checkbox" />
            Keep me signed in
          </div>

          <button className="register__submit__btn">Sign In</button>
          <p className="bottom__text">
            New user? <Link to="/register">Sign up</Link> for free
          </p>
        </form>
      </div>
    </div>
      
    </div>
  );
}

export default SignIn;
