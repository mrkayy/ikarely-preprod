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
import PageContainer from "./Layouts/PageContainer/PageContainer";
import ProtectedRoute from "./Layouts/ProtectedRoute"

// import AuthStore from "./stores/AuthStore";
// import Admin from "./Pages/Admin/Admin";

class App extends Component {

render(){
  return (
    <div className="App">
      <Router>
        <PageContainer>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/about" component={About} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/signin" component={SignIn} />
            <ProtectedRoute exact path="/profile/:page" component={Profile} />
            <Route path="/*" component={Error} />
          </Switch>
        </PageContainer>
      </Router>
    </div>
  );}
}

export default App;

