import React from "react";
import currencyFormatter from "currency-formatter";
import "./Plan.css";
import PaymentComponent from "../PaymentComponent";



function Plan({ type, price, offers }) {
  const showCurrency = (value, code) => {
    return currencyFormatter.format(value, { code });
  };


  const planColor = (color) => {
    switch(color){
      case 'gold':
        return "gold"
      case "silver":
        return 'silver'
    }
  }


  return (
    <div className={`each__plan ${planColor(type.toLowerCase())}`} >
      <div className="plan__header">
        <img src="images/planicon.png" alt="" />
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
                  src="images/markicon.png"
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
