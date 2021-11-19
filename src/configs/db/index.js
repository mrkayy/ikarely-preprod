import firebase from "firebase/compat/app";
// import getAnalytics from "ffirebase/compat/getAnalytics";
import "firebase/compat/auth";

class FirebaseConfig {
  // Initialize Firebase
  init = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    appId: process.env.REACT_APP_APP_ID,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  });

  constructor() {
    // getAnalytics(this.init);
    this.auth = this.init.auth();
    this.app = this.init;
  }

  set auth(e) {
    return (this._auth = e);
  }
  set app(e) {
    return (this._app = e);
  }

  get auth() {
    return this._auth;
  }
  get app() {
    return this._app;
  }
}

export default FirebaseConfig;
