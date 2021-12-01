import { makeObservable, observable, action, autorun, computed } from "mobx";
import FirebaseConfig from "../configs/firebase-config";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { genUUID } from "../utils/generateUUID";
import Authentication from "./authentication_store";
import { createContext } from "react";

class UserAccountStore extends FirebaseConfig {
  loading = false;
  error = false;
  success = false;
  errorMsg = "";
  successMsg = "";

  profile = null;

  constructor() {
    super();
    // this = new FirebaseConfig();
    this.auth = Authentication;
    this.collectionRef = collection(this.db, "users");

    makeObservable(this, {
      loading: observable,
      error: observable,
      success: observable,
      successMsg: observable,
      errorMsg: observable,

      profile: observable,

      loadUserAccount: action,
      createUserAccount: action,
      updateUserAccount: action,
      resetActions: action,

      dashboardData: computed,
      getprofile: computed,
    });
  }

  isVerified = async () => {
    const isVerified = this.auth.user.emailVerified;
    try {
      if (isVerified) {
        await this.auth.sendEmailVerification();
      }
    } catch (error) {}
  };

  loadUserAccount = (userdocid) => {
    this.loading = true;
    getDoc(doc(this.collectionRef, userdocid))
      .then((snapshot) => {
        this.loading = false;
        this.successMsg = "Operation was successful!";
        this.success = true;
        this.profile = snapshot.data();
        console.log(snapshot.data());
      })
      .catch((error) => {
        this.loading = false;
        this.error = true;
        this.errorMsg = error;
        console.log("ERR_LOADING_USER_ACCOUNT: " + error);
      });

    this.resetActions();
  };

  //TODO: create user model class
  createUserAccount = async (data, userID) => {
    const uuid = genUUID();
    console.log({ uuid });
    try {
      await setDoc(doc(this.collectionRef, userID), {
        uuid,
        ...data,
      });
    } catch (error) {
      return error;
    }
    this.loading = false;
    this.successMsg = "Serice Request was successful.";
    this.success = true;
    this.resetActions();
    return true;
  };

  updateUserAccount = () => {
    try {
    } catch (error) {}
  };

  generateDashboard = () => {};

  resetActions = () => {
    this.error = null;
    this.successMsg = null;
    this.errorMsg = null;
    this.loading = null;
    this.success = null;
  };

  get dashboardData() {
    return this.profile;
  }
  get getprofile() {
    return this.profile;
  }
}

export default createContext(new UserAccountStore());
