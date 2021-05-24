import { createContext } from "react";
import { makeObservable, observable, action } from "mobx";
import api from "../Config";
import WebStorage from "../shared/LocalStorage";

class AuthStore {
  loading = false;
  error = false;
  success = false;
  errMessage = "";
  successMessage = "";
  authSuccess = "failed";
  currUser = false;
  user = {};

  constructor() {
    this.getCurrUser();
    makeObservable(this, {
      error: observable,
      loading: observable,
      success: observable,
      errMessage: observable,
      successMessage: observable,
      authSuccess: observable,
      user: observable,
      currUser: observable,

      login: action,
      logout: action,
      register: action,
      rememberMe: action,
      getCurrUser: action,
      resetActions: action,
    });
  }

  rememberMe = () => {
    const email = WebStorage.get("use_email");
    const password = WebStorage.get("use_password");

    const credentials = { email, password };
    api
      .post("*", credentials)
      .then((res) => {
        this.loading = false;
        if (res.data.status) {
          this.success = true;
          this.user = res.data.data;
          this.successMessage = res.data.message;
          WebStorage.save("user_token", res.data.data.token);
        }
      })
      .catch((err) => {
        this.loading = false;
        this.error = true;
        this.errMessage = err.response.message;
      });
  };

  register = (data) => {
    this.loading = true;
    api
      .post("auth/users", data)
      .then((res) => {
        this.loading = false;
        if (res.data.status) {
          this.success = true;
          this.successMessage = res.data.message;
          // console.log(this.successMessage);
          window.location.href = "/signin";
        }
      })
      .catch((err) => {
        this.loading = false;
        this.error = true;
        this.errMessage =
          err.response === undefined ? err.message : err.response.data.message;
      });
  };

  login = (data) => {
    this.loading = true;
    api
      .post("auth/login", data)
      .then((res) => {
        this.loading = false;
        if (res.data.status) {
          if (data?.remember) {
            WebStorage.save("remember_me", data.remember);
            WebStorage.save("use_email", data.value.email);
            WebStorage.save("use_password", data.value.password);
          }
          this.success = true;
          this.user = res.data.data;
          this.authSuccess = "pass";
          WebStorage.save("user_token", res.data.data.token);
          this.getCurrUser();
          console.log({user:this.user})
          console.log("logging in...");
        }
      })
      .catch((err) => {
        // console.log(err);
        this.loading = false;
        this.error = true;
        this.getCurrUser();
        this.errMessage =
          err.response === undefined ? err.message : err.response.data.message;
        // console.log(err.response.data);
      })
      .finally(() => {
        this.getCurrUser();
      });
  };

  logout = () => {
    WebStorage.logout();
    this.getCurrUser();
  };

  getCurrUser = () => {
    this.currUser = WebStorage.get("user_token")? true:false;
    // console.log(WebStorage.get("user_token"));
  };

  resetActions = () => {
    this.error = false;
    this.loading = false;
    this.success = false;
    this.errMessage = "";
    this.successMessage = "";
  };
}

export default createContext(new AuthStore());
