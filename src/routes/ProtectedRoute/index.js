import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthStore from "../../stores/AuthStore";
import ClientLayout from "../../Layouts/ClientLayout/LayoutWrapper";
import { observer } from "mobx-react";

const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;
  const { currUser } = useContext(AuthStore);

  // TODO: add error boundary implementation
  return (
    <Route
      {...rest}
      render={(matchProps) => {
        //   renders the component passed to the Route based on the authentication state
        return currUser ? (
          <ClientLayout {...matchProps}>
            <Component {...props} />
          </ClientLayout>
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
