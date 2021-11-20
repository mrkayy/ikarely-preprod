import { createContext } from "react";
import { makeObservable, observable, action } from "mobx";
import api from "../Config";

class ServiceStore {
  loadingReq = false;
  reqError = false;
  reqSuccess = false;
  reqErrMessage = "";
  reqSuccessMessage = "";

  response = [];

  constructor() {
    this.resetActions();
    makeObservable(this, {
      reqError: observable,
      loadingReq: observable,
      reqSuccess: observable,
      reqErrMessage: observable,
      reqSuccessMessage: observable,
      response: observable,

      sendRequest: action,
      resetActions: action,
    });
  }

  sendRequest = (data) => {
    this.loadingReq = true;
    api
      .post("/health/request", data)
      .then((res) => {
        //I want to see the response returned
        // ////console.log(res.data.data);
        this.loadingReq = false;
        if (res.data.status) {
          this.reqSuccess = true;
          this.reqSuccessMessage = res.data.message;
          ////console.log(this.reqSuccessMessage);
          // window.location.href = "/";
        }
      })
      .catch((err) => {
        this.loadingReq = false;
        this.reqError = true;
        this.reqErrMessage =
          err.response === undefined ? err.message : err.response.data.message;
      });
  };

  resetActions = () => {
    this.reqError = false;
    this.loadingReq = false;
    this.reqSuccess = false;
    this.reqErrMessage = "";
    this.reqSuccessMessage = "";
  };
}

export default createContext(new ServiceStore());
