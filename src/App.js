import React, { Component } from "react";
// import { observer } from "mobx-react";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Service from "./Pages/Service/Service";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Error from "./Pages/Error";
import Register from "./Pages/Register/Register";
import SignIn from "./Pages/SignIn/SignIn";
import Profile from "./Pages/Profile";
import Payments from "./Pages/Payment";
import GeneralLayout from "./Layouts/GeneralLayout/LayoutWrapper";
import ProtectedRoute from "./routes/ProtectedRoute";
import Subscription from "./Pages/Subscription/Subscription";

// import AuthStore from "./stores/AuthStore";
// import Admin from "./Pages/Admin/Admin";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <GeneralLayout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/service" component={Service} />
              <Route exact path="/about" component={About} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/signin" component={SignIn} />

              <Route
                exact
                path={`/subscription/geriatic_care`}
                component={Subscription}
              />
              <Route
                exact
                path={`/subscription/general_checkup`}
                component={Subscription}
              />
              <Route
                exact
                path={`/subscription/pregnacare`}
                component={Subscription}
              />
              <Route
                exact
                path={`/subscription/diabetes`}
                component={Subscription}
              />
              {/* TODO: add layout component */}
              <ProtectedRoute exact path="/profile/:page" component={Profile} />
              {/* profile routing temporary fix */}
              <ProtectedRoute exact path="/dashboard" component={Profile} />
              <ProtectedRoute exact path="/medicals" component={Profile} />
              <ProtectedRoute
                exact
                path="/medical-history"
                component={Profile}
              />
              <ProtectedRoute
                exact
                path="/service-requests"
                component={Profile}
              />
              <ProtectedRoute exact path="/appointments" component={Profile} />
              <ProtectedRoute exact path="/payments" component={Profile} />
              <ProtectedRoute exact path="/settings" component={Profile} />
              <ProtectedRoute exact path="/support" component={Profile} />
              <ProtectedRoute exact path="/payment" component={Payments} />
              <Route path="/*" component={Error} />
            </Switch>
          </GeneralLayout>
        </Router>
      </div>
    );
  }
}

export default App;
