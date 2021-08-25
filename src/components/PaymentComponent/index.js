// // Customer payment using Flutter options
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

function PaymentComponent(props) {
  const { email, amount, type } = props;

  const customer = {};
  const customizations = {};
  const config = {
    public_key:
      process.env.NODE_ENV === "development"
        ? process.env.REACT_APP_PAYMENT_DEV
        : process.env.REACT_APP_PAYMENT,
    tx_ref: Date.now(), //(new Date()).getTime().toString(),
    amount: 100,
    currency: "NGN",
    payment_options: "card,ussd",
    customer,
    customizations,
  };

  console.log(config);

  return (
    <div>
      <p>{email}</p>
      <p>{amount}</p>
      <p>{type}</p>
    </div>
  );
}

export default PaymentComponent;
