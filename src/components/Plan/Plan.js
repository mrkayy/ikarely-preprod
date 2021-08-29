import React, { useContext } from "react";
import currencyFormatter from "currency-formatter";
import PaymentComponent from "../PaymentComponent";
import WebStorage from "../../shared/LocalStorage";
import jwt_decode from "jwt-decode";

import markicon from "../../assets/images/markicon.png";
import markicon2 from "../../assets/images/markicon2.png";
import planicon from "../../assets/images/planicon.png";

// import AuthStore from "../../stores/AuthStore";

import "./Plan.css";

function Plan({ type, price, offers, title }) {
  const token = WebStorage.get("user_token");
  const user_details = jwt_decode(token);

  // const authcontext = useContext(AuthStore);
  const { full_name, phone, email } = user_details;

  const showCurrency = (value, code) => {
    return currencyFormatter.format(value, { code });
  };

  const planColor = (color) => {
    switch (color) {
      case "gold":
        return "gold";
      case "silver":
        return "silver";
    }
  };

  return (
    <div className={`each__plan ${planColor(type.toLowerCase())}`}>
      <div className="plan__header">
        <img src={planicon} alt="" />
        <div className="plan__type">
          <h3 className="">{type} Plan</h3>
        </div>
      </div>
      <div className="plan__details">
        <ul>
          {offers.map((offer) => {
            return (
              <li className="plandetails__list">
                <img
                  src={type.toLowerCase() == "gold" ? markicon2 : markicon}
                  alt=""
                  className="planlist__icon"
                />
                {offer}
              </li>
            );
          })}
        </ul>

        <div className="plan__price">{showCurrency(price, "NGN")}</div>
        <PaymentComponent
          email={email}
          amount={price}
          type={title}
          customer={full_name}
          phoneNum={phone}
          subscription={offers}
        />
        {/* <button className="choose__plan">Choose</button> */}
      </div>
    </div>
  );
}

export default Plan;
