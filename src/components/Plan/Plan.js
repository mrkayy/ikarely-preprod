import React from "react";
import currencyFormatter from "currency-formatter";
import PaymentComponent from "../PaymentComponent";

import markicon from "../../assets/images/markicon.png"
import markicon2 from "../../assets/images/markicon2.png"
import planicon from "../../assets/images/planicon.png"

import "./Plan.css";



function Plan({ type, price, offers }) {
  const showCurrency = (value, code) => {
    return currencyFormatter.format(value, { code });
  };


  const planColor = (color) => {
    switch(color){
      case 'gold':
      case 'smart':
        return "gold"
      case "silver":
      case 'basic':
        return 'silver'
      
    }
  }


  return (
    <div className={`each__plan ${planColor(type.toLowerCase())}`} >
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
                  src={type.toLowerCase() == "gold" || type.toLowerCase() == "smart" ? markicon2 : markicon}   
                  alt=""
                  className="planlist__icon"
                />
                {offer}
              </li>
            );
          })}
        </ul>

        <div className="plan__price">{showCurrency(price, "NGN")}</div>
        {/* TODO: implement flutterwave payment component */}
        <button className="choose__plan">Choose</button>
      </div>
    </div>
  );
}

export default Plan;
