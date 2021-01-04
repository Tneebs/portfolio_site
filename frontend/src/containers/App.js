import React from "react";
import "../App.css";
import Footer from "../components/Footer";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";

import {
  Switch,
  BrowserRouter,
  Route,
  withRouter,
  Redirect,
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/portfolio">
              <Portfolio />
            </Route>

            <Route path="/blogs">
              <Blogs />
            </Route>

            <Route path="/resume">
              <Resume />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
