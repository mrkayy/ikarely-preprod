import React, { useContext } from "react";
import AuthStore from "../stores/AuthStore";
import "./Button.css";
import { GlobalContext } from "../stores/GlobalLayer";

function Button({ progress, shown }) {
  const authcontext = useContext(AuthStore);
  const { loading } = authcontext;

  const { validate } = useContext(GlobalContext);

  return (
    <div>
      {loading ? (
        <div className="loading__show">
          <div className="loader" title="2">
            {" "}
          </div>
          {progress}
        </div>
      ) : (
        <button
          type="submit"
          disabled={validate()}
          className={!validate() ? "register__submit__btn" : "not__active"}
        >
          {shown}
        </button>
      )}
    </div>
  );
}

export default Button;
