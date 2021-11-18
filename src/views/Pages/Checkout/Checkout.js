import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
        <div className="contact__container">

        
      <h2 className="checkout__header">CHECK OUT</h2>
      <h4 className="billing__info">Billing Info</h4>
      <div className="billingform__input">
        <div className="top__left">
          <input type="radio" />
          <span>Billing Info</span>
        </div>

        <form action="">
          <div className="fornames">
            <div className="input__andlabel">
              <label htmlFor="">First Name</label>
              <input type="text" />
            </div>

            <div className="input__andlabel">
              <label htmlFor="">Last Name</label>
              <input type="text" />
            </div>
          </div>

          <div className="for__address">
            <div className="input__andlabel">
              <label htmlFor="">Address 1</label>
              <input type="text" />
            </div>

            <div className="input__andlabel">
              <label htmlFor="">Address 2 (Optional)</label>
              <input type="text" />
            </div>
          </div>

          <div className="for__states">
            <div className="input__andlabel">
              <label htmlFor="">State</label>
              <input type="text" />
            </div>

            <div className="input__andlabel">
              <label htmlFor="">Zip Code</label>
              <input type="text" />
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Checkout;
