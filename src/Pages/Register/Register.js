import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <div className="register">
        <h2 className="header__description">
            Get qualilty healthcare at your convenience
        </h2>
      <div className="register__form">
        <div className="register__headers">
          <h3 className="register__header">Create a free account</h3>
          <p className="little__text">Welcome to iKarely</p>
        </div>

        <form action="" className="register__inputs">
          <div className="name__input">
            <label htmlFor="name">Full Name</label>
            <input type="text" required />
          </div>

          <div className="email__input">
            <label htmlFor="email">Email</label>
            <input type="email" required />
          </div>

          <div className="phone__input">
            <label htmlFor="phone">Phone</label>
            <input type="text" required />
          </div>

          <div className="city__input">
            <label htmlFor="phone">City of residence</label>
            <input type="text" required />
          </div>

          <div className="city__input">
            <label htmlFor="phone">Recurrent Ailment</label>
            <input type="text" required />
          </div>

          <div className="password__input">
            <label htmlFor="password">Password</label>
            <input type="password" required />
          </div>
          <div className="password__input">
            <label htmlFor="password">Re-enter Password</label>
            <input type="password" required />
          </div>

          <div className="upload__input">
            <label htmlFor="upload">Upload Professional License</label>
            <input type="file" required />
          </div>

          <button className="register__submit__btn">Create Account</button>
          <p className="bottom__text">
            Do you have an account ? <Link to="/signin">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
