import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import ReactGA from "react-ga4";

// application pages
import Home from "./views/pageview/generalPlatform/home";
import About from "./views/pageview/generalPlatform/about";
import Service from "./views/pageview/generalPlatform/service";
import Contact from "./views/pageview/generalPlatform/contact";
import Error from "./views/pageview/generalPlatform/error";
import Register from "./views/pageview/generalPlatform/register";
import SignIn from "./views/pageview/generalPlatform/signIn";
import Subscription from "./views/pageview/generalPlatform/subscription";
// import AccountLayout from "./views/pageview/clientPlatform/account";

//  application Routes
import GeneralRoute from "./routes/generalRoute";
import ProtectedRoute from "./routes/protectedRoute";

import ClientLayout from "./layouts/clientLayout/layoutWrapper";
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
            <GeneralRoute path="/about" component={About} />
            <GeneralRoute path="/service" component={Service} />
            <GeneralRoute path="/blog" component={Home} />
            <GeneralRoute path="/register" component={Register} />
            <GeneralRoute path="/signin" component={SignIn} />
            <GeneralRoute path="/contact" component={Contact} />
            {/* TODO: refactor client routes & subscription routes */}
            <GeneralRoute
              exact
              path={`/subscription/:id`}
              component={Subscription}
            />
            <ProtectedRoute
              exact
              path={`/account/dashboard`}
              // component={AccountLayout}
              layout={ClientLayout}
            />
            <Redirect from="/account" to="/account/dashboard" />
            <GeneralRoute exact path="**/*" component={Error} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
