import React, {useState} from 'react'
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Service from "./Pages/Service/Service";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Overlay from "./components/Overlay/Overlay";
import Error from "./Pages/Error/Error";
import Register from "./Pages/Register/Register";
import SignIn from "./Pages/SignIn/SignIn";


function App() {


  const [slide, setSlide] = useState(false)

  const showMenu = (slide) => {
    setSlide(!slide)
  }


  return (

    <div className="App">
      <Router>
        <Overlay slide={slide} showMenu={showMenu} setSlide={setSlide}/>
        <NavBar slide={slide} showMenu={showMenu}/>
        <Switch>
          <Route exact path="/" render={(props) => <Home />} />
          <Route exact path="/service" render={(props) => <Service /> } />
          <Route exact path="/about" render={(props) => <About />  } />
          <Route exact path="/blog" render={(props) => <Blog />  } />
          <Route exact path="/contact" render={(props) => <Contact />  } />
          <Route exact path="/register" render={(props) => <Register />   } />
          <Route exact path="/signin" render={(props) =>   <SignIn /> } />
          <Route exact path="/*" render={(props) => <Error />  } />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
