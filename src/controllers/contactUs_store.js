import { makeObservable, action, observable } from "mobx";
import { createContext } from "react";
import FirebaseConfig from "../configs/firebase-config";
import { collection, doc, setDoc } from "firebase/firestore";
import { getInquiryReqUUID } from "../utils/generateUUID";
import Authentication from "./authentication_store";

class ContactUsStore extends FirebaseConfig {
  loading = false;
  error = false;
  success = false;
  errorMsg = "";
  successMsg = "";

  constructor() {
    super();
    this.resetActions();

    this.auth = Authentication;
    this.collectionRef = collection(this.db, "contact_us");
    makeObservable(this, {
      loading: observable,
      error: observable,
      success: observable,
      successMsg: observable,
      errorMsg: observable,

      sendmessage: action,
      resetActions: action,
    });
  }

  sendmessage = async (data) => {
    this.loading = true;
    const uuid = getInquiryReqUUID();
    try {
      await setDoc(doc(this.collectionRef), {
        uuid,
        ...data,
      });
      this.loading = false;
      this.successMsg = "Message was successful!";
      this.success = true;
    } catch (error) {
      this.loading = false;
      this.error = true;
      this.errorMsg = error;
      console.log("ERR_SENDING_INQUIRY: " + error);
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

export default createContext(new ContactUsStore());
