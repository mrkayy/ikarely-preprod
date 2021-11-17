// // Customer payment using Flutter options
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
// import Payments from "../../shared/payment_util";

function PaymentComponent(props) {
  const { email, amount, type, customer, phoneNum, subscription } = props;

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
      description: subscription,
      //   logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div>
      <button
        className="choose__plan"
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              closePaymentModal(); // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Choose
      </button>
    </div>
  );
}

export default PaymentComponent;
