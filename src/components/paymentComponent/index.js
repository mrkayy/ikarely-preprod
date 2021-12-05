// // Customer payment using Flutter options
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
// import Payments from "../../shared/payment_util";
import { useAlert } from "react-alert";
import PaymentStore from "../../controllers/payment_store";
import Authentication from "../../controllers/authentication_store";
import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import plan from "../plan/plan";

function PaymentComponent(props) {
  const alert = useAlert();
  const { loading, error, success, errorMsg, successMsg, submitPayment } =
    useContext(PaymentStore);

  const { user } = useContext(Authentication);
  const userUID = user && user.uid;

  const { email, amount, type, customer, phoneNum, subscription, plan } = props;
  const [responseState, setResponseState] = useState({});

  const planColor = (color) => {
    switch (color) {
      case "Bronze plan":
        return "bg-primary-100";
      case "Silver plan":
        return "bg-white";
      case "Gold plan":
        return "bg-white";
      default:
        return "bg-white";
    }
  };
  const textColor = (param) => {
    switch (param) {
      case "Bronze plan":
        return "text-bold";
      case "Silver plan":
        return "text-bold";
      default:
        return "text-typography-main";
    }
  };

  const config = {
    public_key:
      process.env.NODE_ENV === "development"
        ? process.env.REACT_APP_PAYMENT_DEV
        : process.env.REACT_APP_PAYMENT,

    tx_ref: Date.now(), //(new Date()).getTime().toString(),
    amount,
    currency: "NGN",
    payment_options: "card",
    customer: {
      name: customer,
      email: email,
      phone_number: phoneNum,
    },
    customizations: {
      title: `${plan.toUpperCase()} ${type.toUpperCase()}`,
      name: customer,
      email: email,
      phone: phoneNum,
      description: { ...subscription },
      //   logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  useEffect(() => {
    const options = { error };
    if (success) {
      alert.success(successMsg, options);
    }
  }, [success]);

  useEffect(() => {
    const options = { error };
    if (error) {
      alert.error(errorMsg, options);
    }
  }, [error]);

  const savePayment = () => {
    const data = {
      amount,
      phone: phoneNum,
      name: customer,
      email: email,
      plan: type,
      type: plan.toUpperCase(),
      description: { ...subscription },
    };
    submitPayment(data, userUID);
  };

  const paymentError = () => {
    const options = {
      error: true,
    };
    alert.error("Payment Unsuccessfull!", options);
  };

  return (
    <>
      <button
        className={`capitalize hover:bg-primary-200 w-full my-5 h-12 shadow-sm rounded-md ${textColor(
          type
        )} ${planColor(type)}`}
        onClick={() => {
          handleFlutterPayment({
            callback: () => {
              closePaymentModal(); //  this will close the modal programmatically
            },
            onClose: (response) => {
              if (!response) return savePayment();
              return paymentError();
            },
          });
        }}
      >
        {loading ? "processing ..." : "Subscribe now"}
      </button>
    </>
  );
}

export default observer(PaymentComponent);
