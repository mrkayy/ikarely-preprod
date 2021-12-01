import React, { useContext, useEffect } from "react";
import currencyFormatter from "currency-formatter";
import PaymentComponent from "../paymentComponent";

import UserAccountStore from "../../controllers/userAccount_store";
import markicon from "../../utils/assets/images/markicon.png";
import markicon2 from "../../utils/assets/images/markicon2.png";
import planicon from "../../utils/assets/images/planicon.png";

// import "./plan.css";
import { observer } from "mobx-react-lite";

function Plan({ type, price, offers }) {
  const { getprofile } = useContext(UserAccountStore);

  const showCurrency = (value, code) => {
    return currencyFormatter.format(value, { code });
  };

  const planColor = (color) => {
    switch (color) {
      case "bronze":
        return "bg-white";
      case "silver":
        return "bg-primary-100";
      case "gold":
        return "bg-primary-main";
      default:
        return "bg-white";
    }
  };

  const textColor = (param) => {
    switch (param) {
      case "bronze":
        return "text-bold";
      case "silver":
        return "text-bold";
      default:
        return "text-white";
    }
  };

  return (
    <div
      className={`bg-white w-10/12 sm:w-11/12 xl:w-10/12 shadow-xl rounded-xl px-8 py-5 sm:px-7 xl:px-8 grid grid-cols-1 place-content-between ${textColor(
        type.toLowerCase()
      )} ${planColor(type.toLowerCase())}`}
    >
      <div className="">
        <div className="flex justify-start items-center">
          <div className="shadow-md mr-6">
            <img src={planicon} alt="logo.png" />
          </div>
          <div className="">
            <h3 className="font-bold text-lg">{type} Plan</h3>
          </div>
        </div>
        <hr className="my-6 text-typography-light" />

        <div className="h-full">
          <ul>
            {offers.map((offer, index) => {
              return (
                <li
                  className="flex justify-start items-center my-5"
                  key={index}
                >
                  <div>
                    <img
                      src={
                        type.toLowerCase() === "gold" ||
                        type.toLowerCase() === "smart"
                          ? markicon2
                          : markicon
                      }
                      alt="img.png"
                      className="mr-4"
                    />
                  </div>
                  <p className="">{offer}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div>
        <hr className="my-6 text-typography-light" />
        <div className="text-center text-3xl">{showCurrency(price, "NGN")}</div>
        <PaymentComponent
          email={getprofile && getprofile.email}
          amount={price}
          type={`${type} plan`}
          customer={getprofile && getprofile.phone}
          phoneNum={getprofile && getprofile.full_name}
          subscription={offers}
        />
      </div>
    </div>
  );
}

export default observer(Plan);
