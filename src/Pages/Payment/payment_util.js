// Customer payment using PaystackConsumer option
import { PaystackConsumer } from "react-paystack";

const amount = 1000;

const config = {
  reference: new Date().getTime().toString(),
  email: "samplemail@mail.com",
  amount: amount * 1000,
  publicKey: "pk_test_dsdfghuytfd2345678gvxxxxxxxxxx",
};

//handleSuccess  method is called when payment has been completed successfully on the Paystack checkout
const handleSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.info(reference);
};

// handleClose method is called if the user closes the modal without completing payment.
const handleClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.info("closed");
};

// TODO: implement payment verification method onPayment_success
const verifyPayment = (reference) => {
  console.log(reference);
};

function PaymentApp() {
  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    onSuccess: (reference) => handleSuccess(reference),
    onClose: handleClose,
  };

  return (
    <PaystackConsumer {...componentProps}>
      {({ initializePayment }) => (
        <button onClick={() => initializePayment(handleSuccess, handleClose)}>
          Paystack
        </button>
      )}
    </PaystackConsumer>
  );
}
