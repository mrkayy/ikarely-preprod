import React, { Component } from 'react'
import Joi from 'joi-browser'
import Form from './Form';

class LoginForm extends Form {

    state = {
        data: {username: '', password: ''},
        errors: {}
    }
    schema = {
        email: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password"),
      };

      doSubmit = () => {
         //Call the server
         console.log('Submitted to the server')
      }



    render() {
        return (
            <div className="contact">
              <div className="signin">
                <div className="signin__form">
                  <div className="signin__headers">
                    <h3 className="signin__header">Users Sign in</h3>
                    <p className="little__text">Welcome to iKarely</p>
                  </div>
        
                  <form action="submit" onSubmit={handleSubmit} className="form__inputs">
                    <InputBox
                      label="Email or Phone Number"
                      name="email"
                      type="email"
                    />
        
                    <InputBox
                      label="Password"
                      name="password"
                      type="password"
                    />
        
                    <div className="keep__signed">
                      <input
                        type="checkbox"
                        // onChange={handleCheckBox}
                      />
                      Keep me signed in
                    </div>
        
                    <button
                      type="submit"
                      disabled={validate()}
                      className="register__submit__btn"
                    >
                      {loading ? "Loading..." : "Sign In"}
                    </button>
                    <p className="bottom__text">
                      New user? <Link to="/register">Sign up</Link> for free
                    </p>
                  </form>
                </div>
              </div>
            </div>
          );
    }
}

export default LoginForm
