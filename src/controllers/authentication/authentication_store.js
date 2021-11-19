import {
  makeObservable,
  observable,
  action,
  autorun,
  flow,
  computed,
} from "mobx";
import FirebaseConfig from "../../configs/db";
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

      createUserAccount: action,
      authenticateUserAccount: action,
      verifyUserAccount: action,
      getCurrentUserState: action,
      sendPasswordResetLink: action,

      user: computed,
      unsubscribeUser: computed,
    });
    this.fb = new FirebaseConfig();
    this.getCurrentUserState();
    this.fb.auth.signOut();
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
    this.loading = true;
    this.fb.auth
      .signInWithEmailAndPassword(this.app, data.email, data.password)
      .then((res) => {
        this.loading = false;
        this.firebaseUser = res.user;
        console.log({ res: this.firebaseUser });
      })
      .catch((err) => {
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

  getCurrentUserState = () => {
    this.unsubscribe = onAuthStateChanged(this.fb.auth, (user) => {
      this.currentuser = user;
      console.log({ user });
    });
  };

  get unsubscribeUser() {
    return this.unsubscribe;
  }

  get user() {
    return this.currentuser;
  }
}

export default new AuthenticationStore();
