import React from "react";
import { Route } from "react-router-dom";
import GeneralLayout from "../../layouts/generalLayout/layoutWrapper";

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
