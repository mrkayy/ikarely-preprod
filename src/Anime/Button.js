import React, { useContext } from "react";
import AuthStore from "../stores/AuthStore";
import "./Button.css";
import { GlobalContext } from "../stores/GlobalLayer";

function Button({ progress, shown }) {
  const authcontext = useContext(AuthStore);
  const {
    error,
    loading,
    success,
    authSuccess,
    errMessage,
    successMessage,
    register,
    resetActions,
  } = authcontext;

  const {
    validate,
  } = useContext(GlobalContext);

  return (
    <div>
        {loading ?
        <div className="loading__show" >
        <div class="loader" title="2">
          {" "}
        </div>
        {progress}
      </div>

      :
      <button
      type="submit"
      disabled={validate()}
      className={!validate() ? "register__submit__btn" : "not__active"}
    >
      { shown }
    </button>
    
    }
      
      
    </div>
  );
}

export default Button;
