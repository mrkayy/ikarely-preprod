// // Customer payment using PaystackConsumer option
// // import { PaystackConsumer } from "react-paystack";

// const amount = 10000;

// const config = {
//   reference: new Date().getTime().toString(),
//   email: "t.olukayode@ikarey.com",
//   amount: amount * 100,
//   publicKey: "pk_test_e502dd910aa80240b02684e8065edb04511d35bd",
// };

// //handleSuccess  method is called when payment has been completed successfully on the Paystack checkout
// const handleSuccess = (reference) => {
//   // Implementation for whatever you want to do with reference and after success call.
//   console.info(reference);
// };

// // handleClose method is called if the user closes the modal without completing payment.
// const handleClose = () => {
//   // implementation for  whatever you want to do when the Paystack dialog closed.
//   console.info("closed");
// };

// // TODO: implement payment verification method onPayment_success
// const verifyPayment = (reference) => {
//   console.log(reference);
// };

// function PaymentApp() {
//   const componentProps = {
//     ...config,
//     text: "Paystack Implementation",
//     onSuccess: (reference) => handleSuccess(reference),
//     onClose: handleClose,
//   };

//   return (
//     <div>
//       <PaystackConsumer {...componentProps}>
//         {({ initializePayment }) => (
//           <button
//             onClick={() => {
//               console.log("clicking");
//               initializePayment(handleSuccess, handleClose);
//             }}
//           >
//             Paystack
//           </button>
//         )}
//       </PaystackConsumer>
//     </div>
//   );
// }

// export default PaymentApp;
