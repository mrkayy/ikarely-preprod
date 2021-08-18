import React from "react";
import "./Plan.css";

function Plan({type, price, offers}) {
  return (
    <div className="each__plan">
      <div className="plan__header">
        <img src="images/planicon.png" alt="" />
        <h3 className="plan__type">{type} Plan</h3>
      </div>
      <div className="plan__details">
        <ul>
          {offers.map(offer => {
            return(
              <li className="plandetails__list">
                <img src="images/markicon.png" alt="" className="planlist__icon" />
                {offer}
              </li>
            )
          })}
        </ul>

        <div className="plan__price">#{price}</div>
        <button className="choose__plan">Choose</button>
      </div>
    </div>
  );
}

export default Plan;
