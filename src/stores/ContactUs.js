import { createContext } from "react";
import { makeObservable, observable, action } from "mobx";
import api from "../Config";

class ContactUs {
  error = false;
  loading = false;
  success = false;
  errMessage = "";
  successMessage = "";

  constructor() {
    makeObservable(this, {
      error: observable,
      loading: observable,
      success: observable,
      errMessage: observable,
      successMessage: observable,

      sendmessage: action,
      resetActions: action,
    });
  }
  // all store functions starts here
  sendmessage = (data) => {
    this.loading = true;
    api
      .post("/notifications", data)
      .then((res) => {
        this.loading = false;
        if (res.data.status) {
          this.success = true;
          this.successMessage = res.data.message;
          // //console.log(this.reqSuccessMessage);
          window.location.href = "/";
        }
      })
      .catch((err) => {
        this.loading = false;
        this.error = true;
        this.errMessage =
          err.response === undefined ? err.message : err.response.data.message;
      });
  };

  resetActions = () => {
    this.error = false;
    this.loading = false;
    this.success = false;
    this.errMessage = "";
    this.successMessage = "";
  };
}

export default createContext(new ContactUs());
