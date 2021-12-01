// // Customer payment using Flutter options
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
// import Payments from "../../shared/payment_util";

function PaymentComponent(props) {
  const { email, amount, type, customer, phoneNum, subscription } = props;

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
      email: email,
      phonenumber: phoneNum,
      name: customer,
    },
    customizations: {
      title: type,
      name: customer,
      email: email,
      phone: phoneNum,
      description: { ...subscription },
      //   logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <>
      <button
        className={`capitalize hover:bg-primary-200 w-full my-5 h-12 shadow-sm rounded-md ${textColor(
          type
        )} ${planColor(type)}`}
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              closePaymentModal(); // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Subscribe now
      </button>
    </>
  );
}

export default PaymentComponent;
