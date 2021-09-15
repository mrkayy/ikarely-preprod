import React, { useContext } from "react";
import currencyFormatter from "currency-formatter";
import PaymentComponent from "../PaymentComponent";
// import WebStorage from "../../shared/LocalStorage";
// import jwt_decode from "jwt-decode";

import AuthStore from "../../stores/AuthStore";

import markicon from "../../assets/images/markicon.png";
import markicon2 from "../../assets/images/markicon2.png";
import planicon from "../../assets/images/planicon.png";

import "./Plan.css";

function Plan({ type, price, offers }) {
  const authcontext = useContext(AuthStore);

  const { user } = authcontext;

  console.log({ user });

  const showCurrency = (value, code) => {
    return currencyFormatter.format(value, { code });
  };

  const planColor = (color) => {
    switch (color) {
      case "gold":
      case "smart":
        return "blue";
      case "silver":
      case "basic":
        return "grey";
      case "bronze":
        return "white";
      default:
        return "white";
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
                  src={
                    type.toLowerCase() === "gold" ||
                    type.toLowerCase() === "smart"
                      ? markicon2
                      : markicon
                  }
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
          email={user?.email ?? ""}
          amount={price}
          type={`${type} plan`}
          customer={user?.phone ?? ""}
          phoneNum={user?.full_name ?? ""}
          subscription={offers}
        />
      </div>
    </div>
  );
}

export default Plan;
