import React, { useEffect, Component } from "react";
// import { observer } from "mobx-react";
// import "./App";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AuthenticationController from "./controllers/authentication/authentication";

// application pages
import Home from "./views/templates/home";
import About from "./views/templates/aboutus";
import Service from "./views/templates/service";
// import Blog from "./views/Pages/Blog/Blog";
import Contact from "./views/Pages/Contact/Contact";
import Error from "./views/Pages/Error";
import Register from "./views/Pages/Register/Register";
import SignIn from "./views/Pages/SignIn/SignIn";
import Profile from "./views/Pages/Profile";
import Payments from "./views/Pages/Payment";
import Checkout from "./views/Pages/Checkout/Checkout";
import Subscription from "./views/Pages/Subscription";
import ReactGA from "react-ga4";

//  application Routes
import GeneralRoute from "./interfaces/routes/GeneralRoute";

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
// import ClientLayout from "./Layouts/ClientLayout/LayoutWrapper";
// import GeneralLayout from "./Layouts/GeneralLayout/LayoutWrapper";

class App extends Component {
  conn = new AuthenticationController();

  render() {
    console.log("Environment:" + process.env.NODE_ENV);
    console.log(process.env);
    console.log(this.conn.signin("developer@ikarely.com", "developer1000"));

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
            <GeneralRoute exact path="/*" component={Error} />
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
            {/* <ProtectedRoute
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
          */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
