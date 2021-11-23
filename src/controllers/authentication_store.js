import { makeObservable, observable, action, autorun, computed } from "mobx";
import FirebaseConfig from "../configs/firebase-config";
import UserAccount from "./userAccount_store";

class AuthenticationStore {
  currentuser = null;
  successMsg = null;
  unsubscribe = null;
  errorMsg = null;
  loading = null;
  success = null;
  error = null;
  inprogress = null;
  inprogressMsg = null;

  // userviewModel =

  constructor() {
    makeObservable(this, {
      currentuser: observable,
      unsubscribe: observable,
      successMsg: observable,
      errorMsg: observable,
      loading: observable,
      success: observable,
      error: observable,
      inprogress: observable,
      inprogressMsg: observable,

      authenticateUserAccount: action,
      sendPasswordResetLink: action,
      getCurrentUserState: action,
      createUserAccount: action,
      verifyUserAccount: action,
      resetActions: action,
      signout: action,

      user: computed,
      unsubscribeUser: computed,
    });
    this.userAPI = new UserAccount();
    this.fb = new FirebaseConfig();
    this.getCurrentUserState();
    // this.fb.auth.signOut();
  }

  createUserAccount = (data) => {
    this.loading = true;
    this.fb.auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        this.loading = false;
        this.success = true;
        this.currentuser = res.user;
        this.successMsg = "ACCOUNT CREATION SUCCESSFUL!";
        console.log({ res: this.currentuser });
        // create medical profile if user account was created successfully.
        if (this.currentuser && this.currentuser) {
          this.inprogress = true;
          this.inprogressMsg = "CREATING YOUR MEDICAL ACCOUNT!";
          // creating user medical profile.
          this.userAPI
            .createUserAccount(data, this.currentuser.uid)
            .then((res) => {
              console.log("creating_user_doc:" + res);
            });
        }
        this.inprogress = false;
      })
      .catch((err) => {
        this.loading = false;
        this.error = err;
        this.errorMsg = err;
        console.log(this.error);
      });
    // .finally(async () => {

    //   this.loading = true;
  };

  authenticateUserAccount = (data) => {
    this.loading = true;
    this.fb.auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        this.loading = false;
        if (res.email) {
          this.successMsg = "Successfully Logged In";
          this.success = true;
          this.currentuser = res.user;
        }
        console.log({ res: this.currentuser.email });
        console.log({ res: this.currentuser.uid });
      })
      .catch((err) => {
        this.loading = false;
        this.error = true;
        this.errorMsg = err.message;
        console.log({ err });
      });
  };

  verifyUserAccount = (data) => {
    this.loading = true;
    this.fb.auth
      .sendEmailVerification({})
      .then((res) => {
        this.loading = false;
        this.success = true;
        this.currentuser = res;
      })
      .catch((err) => {});
  };

  sendPasswordResetLink = () => {};

  signout = () => {
    this.fb.auth.signOut();
    this.getCurrentUserState();
  };

  getCurrentUserState = async () => {
    this.unsubscribe = await this.fb.auth.onAuthStateChanged((user) => {
      this.currentuser = user;
      console.log({ currentUser: user });
    });
  };

  resetActions = () => {
    this.error = null;
    this.successMsg = null;
    this.errorMsg = null;
    this.loading = null;
    this.success = null;
  };

  get unsubscribeUser() {
    return this.unsubscribe;
  }

  get userAccount() {
    console.log(this.currentuser.id);
    return this.currentuser;
  }

  get user() {
    return this.currentuser;
  }
}

export default new AuthenticationStore();
