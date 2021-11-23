import { createContext } from "react";
import { makeObservable, observable, action, autorun } from "mobx";
// import this.api from "../../Config";
import WebStorage from "../../utils/LocalStorage";
import jwt_decode from "jwt-decode";

class AuthStore {
  loading = false;
  error = false;
  success = false;
  errorMsg = "";
  successMessage = "";
  authSuccess = "failed";
  currUser = false;
  user = {};
  api = {};

  constructor() {
    this.getCurrUser();
    makeObservable(this, {
      error: observable,
      loading: observable,
      success: observable,
      errorMsg: observable,
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
      getLoggedInUser: action,
      refreshUser: action,
    });
    autorun(() => this.getCurrUser());
    // autorun(() => this.refreshUser());
  }

  rememberMe = () => {
    const email = WebStorage.get("use_email");
    const password = WebStorage.get("use_password");

    const credentials = { email, password };
    this.api
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
        this.errorMsg = err.response.message;
      });
  };

  register = (data) => {
    this.loading = true;
    this.api
      .post("/signup", data)
      .then((res) => {
        this.loading = false;
        if (res.data.status) {
          this.success = true;
          this.successMessage = res.data.message;
          window.location.href = "/signin";
        }
      })
      .catch((err) => {
        //console.log({ err });
        this.loading = false;
        this.error = true;
        this.errorMsg =
          err.response === undefined ? err.message : err.response.data.message;
      });
  };

  login = (data) => {
    this.loading = true;
    this.api
      .post("/login", data)
      .then((res) => {
        this.loading = false;
        if (res.data.status) {
          // if (data?.remember) {
          //   WebStorage.save("remember_me", data.remember);
          //   WebStorage.save("use_email", data.value.email);
          //   WebStorage.save("use_password", data.value.password);
          // }

          this.success = true;
          this.authSuccess = "pass";
          WebStorage.save("user_token", res.data.data.token);
          this.successMessage = res.data.message;
          this.getCurrUser();
          ////console.log({ user: this.user });
          ////console.log("logging in...");
        }
      })
      .catch((err) => {
        // ////console.log(err);
        this.loading = false;
        this.error = true;
        this.getCurrUser();
        this.errorMsg =
          err.response === undefined ? err.message : err.response.data.message;
        //console.log(err.response.data);
      })
      .finally(() => {
        // sets logged in user state to true
        this.getCurrUser();
        // try {
        //   const token = WebStorage.get("user_token");
        //   var decoded = jwt_decode(token);
        // } catch (err) {
        //   //console.log(err);
        // }
        // this.getLoggedInUser(decoded?.id);
      });
  };

  getLoggedInUser = (id) => {
    this.api
      .get(`/users/${id}`)
      .then((res) => {
        //console.log(res.data);
        this.user = res.data.data;
      })
      .catch((err) => {});
  };

  refreshUser = () => {
    try {
      const token = WebStorage.get("user_token");
      var decoded = jwt_decode(token);
    } catch (err) {
      //console.log(err);
    }
    this.getLoggedInUser(decoded.id ?? "");
  };

  // TODO: implement forgot_password
  forgotPassword = (data) => {};

  logout = () => {
    WebStorage.logout();
    this.getCurrUser();
  };

  getCurrUser = () => {
    this.currUser = WebStorage.get("user_token") ? true : false;
  };

  resetActions = () => {
    this.error = false;
    this.loading = false;
    this.success = false;
    this.errorMsg = "";
    this.successMessage = "";
  };
}

export default createContext(new AuthStore());
