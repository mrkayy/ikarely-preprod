import { createContext } from "react";
import { makeObservable, observable, action } from "mobx";

import api from "../Config";

class Clients {
  error = false;
  loading = false;
  success = false;
  errorMsg = "";
  successMessage = "";

  constructor() {
    makeObservable(this, {
      error: observable,
      loading: observable,
      success: observable,
      errorMsg: observable,
      successMessage: observable,

      resetActions: action,
    });
  }
  // all store functions starts here

  resetActions = () => {
    this.error = false;
    this.loading = false;
    this.success = false;
    this.errorMsg = "";
    this.successMessage = "";
  };
}

export default createContext(new Clients());
