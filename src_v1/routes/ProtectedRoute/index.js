import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthStore from "../../stores/AuthStore";
import { observer } from "mobx-react";

const ProtectedRoute = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;
  const { currUser } = useContext(AuthStore);

  // TODO: add error boundary implementation
  return (
    <Route
      {...rest}
      render={(matchProps) => {
        //   renders the component passed to the Route based on the authentication state
        return currUser ? (
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
