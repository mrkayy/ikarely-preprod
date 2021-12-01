import { makeObservable, action, computed, observable } from "mobx";
import { createContext } from "react";
import FirebaseConfig from "../../configs/firebase-config";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { getServiceReqUUID } from "../../utils/generateUUID";
import Authentication from "../authentication_store";

class Covid19ScreeningStore extends FirebaseConfig {
  loading = false;
  error = false;
  success = false;
  errorMsg = "";
  successMsg = "";

  requestRes = null;

  constructor() {
    super();

    this.auth = Authentication;
    this.collectionRef = collection(this.db, "service_request");
    makeObservable(this, {
      loading: observable,
      error: observable,
      success: observable,
      successMsg: observable,
      errorMsg: observable,

      requestRes: observable,

      makeServiceRequest: action,
      getServiceRequest: action,
      resetActions: action,
    });
  }

  makeServiceRequest = async (data, userID) => {
    this.loading = true;
    const uuid = getServiceReqUUID();
    try {
      await setDoc(doc(this.collectionRef), {
        user_id: userID,
        uuid,
        ...data,
      });
    } catch (error) {
      this.loading = false;
      this.error = true;
      this.errorMsg = error;
      console.log("ERR_MAKING_SERVICE_REQUEST: " + error);
      return;
    }
    this.loading = false;
    this.successMsg = "Service Request was successful!";
    this.success = true;

    this.resetActions();
  };

  getServiceRequest = (userdocid) => {
    this.loading = true;
    getDocs(doc(this.collectionRef, userdocid))
      .then((snapshot) => {
        this.loading = false;
        this.profile = snapshot.data();
        console.log(snapshot.data());
      })
      .catch((error) => {
        this.loading = false;
      });

    this.resetActions();
  };

  UpdateServiceRequest = () => {};

  resetActions = () => {
    this.loading = false;
    this.error = false;
    this.success = false;
    this.successMsg = "";
    this.errorMsg = "";
  };
}

export default createContext(new Covid19ScreeningStore());
