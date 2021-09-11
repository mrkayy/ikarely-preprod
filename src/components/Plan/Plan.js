import React, { useContext } from "react";
import currencyFormatter from "currency-formatter";
import PaymentComponent from "../PaymentComponent";
import WebStorage from "../../shared/LocalStorage";
import jwt_decode from "jwt-decode";

import markicon from "../../assets/images/markicon.png";
import markicon2 from "../../assets/images/markicon2.png";
import planicon from "../../assets/images/planicon.png";
<<<<<<< HEAD

// import AuthStore from "../../stores/AuthStore";

import "./Plan.css";

function Plan({ type, price, offers, title }) {
  const token = WebStorage.get("user_token");
  const user_details = jwt_decode(token);

  // const authcontext = useContext(AuthStore);
  const { full_name, phone, email } = user_details;

=======

import "./Plan.css";

function Plan({ type, price, offers }) {
>>>>>>> 806411a21d5e4c3413541fa88de4e99f1c9fa85a
  const showCurrency = (value, code) => {
    return currencyFormatter.format(value, { code });
  };

  const planColor = (color) => {
    switch (color) {
      case "gold":
<<<<<<< HEAD
        return "gold";
      case "silver":
        return "silver";
=======
      case "smart":
        return "blue";
      case "silver":
      case "basic":
        return "grey";
      case 'bronze':
        return "white";
      default:
        return "white"
>>>>>>> 806411a21d5e4c3413541fa88de4e99f1c9fa85a
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
          {offers.map((offer, index) => {
            return (
              <li className="plandetails__list" key={index}>
                <img
<<<<<<< HEAD
                  src={type.toLowerCase() == "gold" ? markicon2 : markicon}
=======
                  src={
                    type.toLowerCase() == "gold" ||
                    type.toLowerCase() == "smart"
                      ? markicon2
                      : markicon
                  }
>>>>>>> 806411a21d5e4c3413541fa88de4e99f1c9fa85a
                  alt=""
                  className="planlist__icon"
                />
                {offer}
              </li>
            );
          })}
        </ul>

        <div className="plan__price">{showCurrency(price, "NGN")}</div>
<<<<<<< HEAD
        <PaymentComponent
          email={email}
          amount={price}
          type={title}
          customer={full_name}
          phoneNum={phone}
          subscription={offers}
        />
        {/* <button className="choose__plan">Choose</button> */}
=======
        {/* TODO: implement flutterwave payment component */}
        <button className={`choose__plan ${planColor(type.toLowerCase())}`}>Choose</button>
>>>>>>> 806411a21d5e4c3413541fa88de4e99f1c9fa85a
      </div>
    </div>
  );
}

export default Plan;
