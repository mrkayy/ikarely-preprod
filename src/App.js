import React, { useEffect, Component } from "react";
// import { observer } from "mobx-react-lite";
// import "./App";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// import AuthenticationController from "./repository/authentication";

// application pages
import Home from "./views/pageview/home";
import About from "./views/pageview/aboutus";
import Service from "./views/pageview/service";
// import Blog from "./views/Pages/Blog/Blog";
import Contact from "./views/pages/Contact/Contact";
import Error from "./views/pages/Error";
import Register from "./views/pages/Register/Register";
import SignIn from "./views/pages/SignIn/SignIn";
import Profile from "./views/pages/Profile";
import Payments from "./views/pages/Payment";
import Checkout from "./views/pages/Checkout/Checkout";
import Subscription from "./views/pages/Subscription";
import ReactGA from "react-ga4";

//  application Routes
import GeneralRoute from "./routes/GeneralRoute";
import ProtectedRoute from "./routes/ProtectedRoute";

import ClientLayout from "./Layouts/clientLayout/layoutWrapper";
import GeneralLayout from "./layouts/generalLayout/layoutWrapper";

const measurmentID1 = {
  trackingId: "G-HY5HEHC52K",
  gaOptions: {}, // optional
  gtagOptions: {}, // optional
};
const measurmentID2 = {
  trackingId: "G-JR3G6DJB3M",
  gaOptions: {}, // optional
  gtagOptions: {}, // optional
};

ReactGA.initialize([measurmentID1, measurmentID2]);

// application layouts

class App extends Component {
  render() {
    console.log("Environment:" + process.env.NODE_ENV);
    console.log(process.env);

    return (
      <div className="App">
        <Router>
          <Switch>
            <GeneralRoute exact path="/" component={Home} />
            <GeneralRoute exact path="/about" component={About} />
            <GeneralRoute exact path="/service" component={Service} />
            <GeneralRoute exact path="/blog" component={Home} />
            <GeneralRoute exact path="/register" component={Register} />
            <GeneralRoute exact path="/signin" component={SignIn} />
            <GeneralRoute exact path="/contact" component={Contact} />
            {/* TODO: refactor client routes & subscription routes */}
            <GeneralRoute
              exact
              path={`/subscription/:id`}
              component={Subscription}
            />
            <GeneralRoute exact path="/*/**" component={Error} />
          </Switch>
          <Switch>
            {/* <ProtectedRoute
              exact
              path="/payments"
              component={Payments}
              layout={GeneralLayout}
            /> */}
            {/* <ProtectedRoute
              exact
              path={`/checkout`}
              component={Checkout}
              layout={GeneralLayout}
            /> */}
            <ProtectedRoute
              exact
              path={`/subscription/general_checkup`}
              component={Subscription}
              layout={GeneralLayout}
            />
            <ProtectedRoute
              exact
              path={`/subscription/pregnacare`}
              component={Subscription}
              layout={GeneralLayout}
            />
            <ProtectedRoute
              exact
              path={`/subscription/diabetes`}
              component={Subscription}
              layout={GeneralLayout}
            />
            <ProtectedRoute
              exact
              path="/dashboard"
              component={Profile}
              layout={ClientLayout}
            />
            <ProtectedRoute
              exact
              path="/medicals"
              component={Profile}
              layout={ClientLayout}
            />
            <ProtectedRoute
              exact
              path="/medical-history"
              component={Profile}
              layout={ClientLayout}
            />
            <ProtectedRoute
              exact
              path="/service-requests"
              component={Profile}
              layout={ClientLayout}
            />
            <ProtectedRoute
              exact
              path="/appointments"
              component={Profile}
              layout={ClientLayout}
            />
            <ProtectedRoute
              exact
              path="/settings"
              component={Profile}
              layout={ClientLayout}
            />
            <ProtectedRoute
              exact
              path="/support"
              component={Profile}
              layout={ClientLayout}
            />

            <ProtectedRoute exact path="/*" component={Error} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
