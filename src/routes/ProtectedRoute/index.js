import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthStore from "../../stores/AuthStore";
import { observer } from "mobx-react";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { currUser } = useContext(AuthStore);

  // TODO: add error boundary implementation
  return (
    <Route
      {...rest}
      render={(props) => {
        //   renders the component passed to the Route based on the authentication state
        return currUser ? (
          // TODO: add protected route layout
          <Component {...props} />
        ) : (
         <Redirect
            to={{
              pathname: "/",
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};

export default observer(ProtectedRoute);
