import React from "react";
import { Route, Switch } from "react-router-dom";
import GeneralLayout from "../../Layouts/GeneralLayout/LayoutWrapper";

function GeneralRoute(props) {
  const { component: Component, ...rest } = props;
  return (
      <Route
        {...rest}
        render={(props) => (
          <GeneralLayout {...props}>
            <Component {...props} />
          </GeneralLayout>
        )}
      />
  );
}

export default GeneralRoute;
