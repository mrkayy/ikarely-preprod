import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

class FirebaseConfig {
  // Initialize Firebase
  config = initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    appId: process.env.REACT_APP_APP_ID,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  });

  constructor() {
    this.app = this.config;
    this.analytics = getAnalytics(this.app);
    // this.
  }
}

export default FirebaseConfig;
