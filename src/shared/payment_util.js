// Customer payment using flutterwave-payments-v3 option

import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

function PaymentApp() {
  const config = {
    public_key:
      process.env.NODE_ENV === "development"
        ? process.env.REACT_APP_PAYMENT_DEV
        : process.env.REACT_APP_PAYMENT,
    tx_ref: Date.now(), //(new Date()).getTime().toString(),
    amount: 100,
    currency: "NGN",
    payment_options: "card,ussd",
    customer: {
      email: "user@gmail.com",
      phonenumber: "07064586146",
      name: "joel ugwumadu",
    },
    customizations: {
      title: "my Payment Title",
      description: "Payment for items in cart",
      //   logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div>
      <button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal(); // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Payment with React hooks
      </button>
    </div>
  );
}

export default PaymentApp;
