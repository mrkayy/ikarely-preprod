import FirebaseConfig from "../../interfaces/db/firebase_config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import AuthenticationModel from "../../models/authentication_model";

class AuthenticationController extends FirebaseConfig {
  constructor() {
    super();
    // firebase authentication instance
    this.Iauthentication = getAuth(this.app);
    // instanciate Authentication Model Class
    this.response = new AuthenticationModel();
  }

  // signout of the application
  signout() {}

  // signin into application
  signin(email, password) {
    signInWithEmailAndPassword(this.Iauthentication, email, password)
      .then((userCredential) => {
        this.response.response = userCredential.user;
        console.log(this.response.response);
      })
      .catch((error) => {
        this.response.error.err = error;
        console.log(error);
        // this.response.error.message = error.message;
      });
    // return authentication response instance from the controller
    return this.response;
  }
  // signup into application
  signup(email, password) {
    createUserWithEmailAndPassword(this.Iauthentication, email, password).then(
      (userCredential) => {}
    );

    return this.response;
  }

  // reset user password into application
  resetPassword() {}
}

export default AuthenticationController;
