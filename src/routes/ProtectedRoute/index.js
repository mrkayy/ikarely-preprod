import React from "react";
import { Route, Redirect } from "react-router-dom";
import { observer } from "mobx-react-lite";
import AuthenticationStore from "../../controllers/authentication_store";

const ProtectedRoute = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;
  const { user } = AuthenticationStore;

  console.log({ user });

  // TODO: add error boundary implementation
  return (
    <Route
      {...rest}
      render={(matchProps) => {
        //   renders the component passed to the Route based on the authentication state
        return user ? (
          <Layout {...matchProps}>
            <Component {...props} />
          </Layout>
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
