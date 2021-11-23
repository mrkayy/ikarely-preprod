import { makeObservable, observable, action, autorun, computed } from "mobx";
import FirebaseConfig from "../configs/firebase-config";
import { collection, doc, setDoc } from "firebase/firestore";
import { genUUID } from "../utils/generateUUID";
import Authentication from "./authentication_store";
import { data } from "autoprefixer";

class UserAccount {
  loading = false;
  error = false;
  success = false;
  errorMsg = "";
  successMsg = "";

  profile = null;

  constructor() {
    this.api = new FirebaseConfig();
    this.auth = Authentication;
    this.collectionRef = collection(this.api.db, "users");

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

      dashboardData: computed,
    });
  }
  loadUserAccount = () => {};

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
    return true;
  };

  updateUserAccount = () => {
    try {
    } catch (error) {}
  };

  generateDashboard = () => {};

  get dashboardData() {
    return this.profile;
  }
}

export default UserAccount;
