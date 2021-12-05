import { makeObservable, action, observable } from "mobx";
import { createContext } from "react";
import FirebaseConfig from "../configs/firebase-config";
import { collection, doc, setDoc } from "firebase/firestore";
import { getSubscriptionReqUUID } from "../utils/generateUUID";
import Authentication from "./authentication_store";

class PaymentStore extends FirebaseConfig {
  loading = false;
  error = false;
  success = false;
  errorMsg = "";
  successMsg = "";

  constructor() {
    super();
    this.resetActions();

    this.auth = Authentication;
    this.collectionRef = collection(this.db, "subscription_payments");
    makeObservable(this, {
      loading: observable,
      error: observable,
      success: observable,
      successMsg: observable,
      errorMsg: observable,

      submitPayment: action,
      resetActions: action,
    });
  }

  submitPayment = async (data, userID) => {
    this.loading = true;
    const uuid = getSubscriptionReqUUID();
    try {
      await setDoc(doc(this.collectionRef), {
        user_id: userID,
        uuid,
        ...data,
      });
      this.loading = false;
      this.successMsg = "Subscription was successful!";
      this.success = true;
    } catch (error) {
      this.loading = false;
      this.error = true;
      this.errorMsg = error;
      console.log("ERR_SUBSCRIBING: " + error);
      return;
    }
    // this.resetActions();
  };

  resetActions = () => {
    this.loading = false;
    this.error = false;
    this.success = false;
    this.successMsg = "";
    this.errorMsg = "";
  };
}

export default createContext(new PaymentStore());
