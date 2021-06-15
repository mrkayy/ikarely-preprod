import React, { useEffect, useState, useContext } from "react";
import {observer} from "mobx-react"
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Service from "./Pages/Service/Service";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Error from "./Pages/Error/Error";
import Register from "./Pages/Register/Register";
import SignIn from "./Pages/SignIn/SignIn";
import Profile from "./Pages/Profile/Profile";
import PageContainer from "./Layouts/PageContainer/PageContainer";

import AuthStore from "./stores/AuthStore";

function App() {
  const authcontext = useContext(AuthStore);
  const { currUser, getCurrUser } = authcontext;

  const [user, setUser] = useState(false);

  useEffect(() => {
    getCurrUser();
    if (currUser && currUser === true) {
      // console.log('re-rendering');
      setUser(true);
    } else if (currUser && currUser === false) {
      // console.log('re-rendering');
      setUser(false);
    }
  }, [currUser, getCurrUser]);

  // console.log({currUser});

  return (
    <div className="App">
      <Router>
        <PageContainer user={user}>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route
              exact
              path="/service"
              render={() => <Service currentUser={currUser} />}
            />
            <Route exact path="/about" render={() => <About />} />
            <Route exact path="/blog" render={() => <Blog />} />
            <Route exact path="/contact" render={() => <Contact />} />
            <Route
              exact
              path="/register"
              render={() => <Register currentUser={user} />}
            />
            <Route
              exact
              path="/signin"
              render={() => <SignIn currentUser={user} />}
            />
            <Route
              exact
              path="/profile/dashboard"
              render={() => <Profile currentUser={currUser} />}
            />
            <Route
              exact
              path="/profile/:page"
              render={() => <Profile currentUser={currUser} />}
            />
            <Route exact path="/*" render={() => <Error />} />
          </Switch>
        </PageContainer>
      </Router>
    </div>
  );
}

export default observer(App);
