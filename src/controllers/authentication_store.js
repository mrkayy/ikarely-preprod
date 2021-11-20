import { makeObservable, observable, action, autorun, computed } from "mobx";
import FirebaseConfig from "../configs/db";
import { onAuthStateChanged } from "firebase/auth";

class AuthenticationStore {
  firebaseUser = null;
  currentuser = null;
  succMessage = null;
  unsubscribe = null;
  errMessage = null;
  loading = null;
  success = null;
  error = null;

  // userviewModel =

  constructor() {
    makeObservable(this, {
      firebaseUser: observable,
      currentuser: observable,
      unsubscribe: observable,
      succMessage: observable,
      errMessage: observable,
      loading: observable,
      success: observable,
      error: observable,

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
    this.fb = new FirebaseConfig();
    this.getCurrentUserState();
    // this.fb.auth.signOut();
  }

  createUserAccount = (data) => {
    this.loading = true;
    this.fb.auth
      .createUserWithEmailAndPassword(this.app, data.email, data.password)
      .then((res) => {
        this.loading = false;
        this.success = true;
        this.firebaseUser = res.user;
        console.log({ res: this.firebaseUser });
      })
      .catch((err) => {
        this.baseModelViewModel.setFirebaseError(err);
        this.error = err;
        console.log(this.error);
      });
  };

  authenticateUserAccount = (data) => {
    console.log(data);
    this.loading = true;
    this.fb.auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        this.loading = false;
        if (res != null) {
          this.succMessage = "Successfully Logged In";
          this.success = true;
          this.firebaseUser = res.user;
        }
        console.log({ res: this.firebaseUser });
      })
      .catch((err) => {
        this.loading = false;
        this.error = true;
        this.errMessage = err.message;
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
        this.firebaseUser = res;
      })
      .catch((err) => {});
  };

  sendPasswordResetLink = () => {};

  signout = () => {
    this.fb.auth.signOut();
    // this.getCurrentUserState();
  };

  getCurrentUserState = () => {
    this.unsubscribe = onAuthStateChanged(this.fb.auth, (user) => {
      this.currentuser = user;
      console.log({ user });
    });
  };

  resetActions = () => {
    this.error = null;
    this.succMessage = null;
    this.errMessage = null;
    this.loading = null;
    this.success = null;
  };

  get unsubscribeUser() {
    return this.unsubscribe;
  }

  get user() {
    return this.currentuser;
  }
}

export default new AuthenticationStore();
