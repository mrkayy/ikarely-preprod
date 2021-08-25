import React, { Component } from "react";
// import { observer } from "mobx-react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// application pages
import Home from "./Pages/Home/Home";
import Service from "./Pages/Service/Service";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Error from "./Pages/Error";
import Register from "./Pages/Register/Register";
import SignIn from "./Pages/SignIn/SignIn";
import Profile from "./Pages/Profile";
import Payments from "./Pages/Payment";
import Checkout from "./Pages/Checkout/Checkout";
import Subscription from "./Pages/Subscription/Subscription";

//  application Routes
import GeneralRoute from "./routes/GeneralRoute";
import ProtectedRoute from "./routes/ProtectedRoute";

// application layouts
import ClientLayout from "./Layouts/ClientLayout/LayoutWrapper";
import GeneralLayout from "./Layouts/GeneralLayout/LayoutWrapper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <GeneralRoute exact path="/" component={Home} />
            <GeneralRoute exact path="/service" component={Service} />
            <GeneralRoute exact path="/about" component={About} />
            <GeneralRoute exact path="/blog" component={Blog} />
            <GeneralRoute exact path="/contact" component={Contact} />
            <GeneralRoute exact path="/register" component={Register} />
            <GeneralRoute exact path="/signin" component={SignIn} />

            {/* TODO: refactor client routes & subscription routes */}
            <ProtectedRoute
              exact
              path={`/checkout`}
              component={Checkout}
              layout={GeneralLayout}
            />
            <ProtectedRoute
              exact
              path={`/subscription/geriatic_care`}
              component={Subscription}
              layout={GeneralLayout}
            />
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
              path="/payments"
              component={Payments}
              layout={GeneralLayout}
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
            <ProtectedRoute
              exact
              path="/payment"
              component={Payments}
              layout={ClientLayout}
            />

            <GeneralRoute path="/*" component={Error} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
