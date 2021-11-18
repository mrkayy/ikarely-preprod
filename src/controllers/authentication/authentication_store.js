import { makeObservable, observable, action, autorun } from "mobx";
import AuthenticationController from "./authentication";
import AuthenticationModel from "../../models/authentication_model";

class AuthenticationStore extends AuthenticationController {
  loading = false;
  error = false;
  success = false;
  errMessage = "";
  successMessage = "";
  authSuccess = "failed";
  currUser = false;
  user = {};

  constructor() {
    super();
    this.authenticationModel = new AuthenticationModel();
    makeObservable(this, {});
  }

  authenticateUser() {}
}

export default AuthenticationStore;
