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
  user = {};

  constructor() {
    makeObservable(this, {
      error: observable,
      loading: observable,
      success: observable,
      errMessage: observable,
      successMessage: observable,
      authSuccess: observable,

      user: observable,
      login: action,
      logout: action,
      register: action,
      rememberMe: action,
      resetActions: action,
    });
  }

  rememberMe = () => {
    const email = WebStorage.get("use_email");
    const password = WebStorage.get("use_password");

    const credentials = { email, password };
    api
      .post("login", credentials)
      .then((res) => {
        this.loading = false;
        if (res.data.status) {
          this.success = true;
          this.user = res.data.data;
          this.successMessage = res.data.message;
          WebStorage.save("user_token", res.data.data.token);
          console.log(res.data.data);
        }
      })
      .catch((err) => {
        this.loading = false;
        this.error = true;
        console.log(err.response);
        this.errMessage = err.response.message;
      });
  };

  register = (data) => {
    console.log({ data });
    this.loading = true;
    api
      .post("users", data)
      .then((res) => {
        this.loading = false;
        if (res.data.status) {
          this.success = true;
          this.successMessage = res.data.message;
          console.log(res.data.data);
        }
      })
      .catch((err) => {
        this.loading = false;
        this.error = true;
        console.log(err.response);
        this.errMessage = err.response.message;
      });
  };

  login = (data) => {
    console.log({ data });
    this.loading = true;

    api
      .post("login", data?.value)
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
          this.successMessage = res.data.message;
          WebStorage.save("user_token", res.data.data.token);
          console.log(res.data.data);
        }
      })
      .catch((err) => {
        this.loading = false;
        this.error = true;
        this.errMessage = err.response.data.message;
        console.log(err.response.data);
      });
  };

  logout = () => {
    WebStorage.logout();
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
