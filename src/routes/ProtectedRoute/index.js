import React, { useContext } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import AuthenticationStore from "../../controllers/authentication_store";

const ProtectedRoute = (props) => {
  const { layout: Layout, ...rest } = props;
  const { user } = useContext(AuthenticationStore);
  const history = useHistory();

  console.log({ user });

  console.log({ history });

  return (
    <Route
      {...rest}
      render={() => {
        //   renders the component passed to the Route based on the authentication state
        return user && user ? (
          <Layout {...props} />
        ) : history.action === "PUSH" ? (
          <Redirect
            to={{
              pathname: history.location.pathname,
              state: {
                from: props.location,
              },
            }}
          />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
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
