const values = {}
const usePaystackPayment = val => {}
const onSuccess = {}
const onClose = {}

  const config = {
     reference: new Date().getTime(),
     email: values?.order_email,
     amount: values?.cartTotal * 100,
     publicKey: 'pk_test_410fb7b46aa42e298597140e4230a454ce01405a',
   };
 
   
  const PaystackHookButton = () => {
     const initializePayment = usePaystackPayment(config);
     return (
       <div>
         <button
           my="5"
           size="lg"
           bg="main"
           onClick={() => {
             initializePayment(onSuccess, onClose);
           }}
           type="submit"
           boxShadow="sm"
           variant="solid"
           isFullWidth={true}
           _hover={{boxShadow: 'md'}}
           _active={{boxShadow: 'lg'}}
         >
           Pay Now
         </button>
       </div>
     );
   };
 