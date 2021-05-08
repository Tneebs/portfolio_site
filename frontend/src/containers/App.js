import React from "react";
import "../styling/App.css";
import Footer from "./Footer";
import Header from './Header';
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import About from '../components/About';
import "../styling/aboutme.css"
import "../styling/blogs.css"
import "../styling/portfolio.css"
import "../styling/resume.css"
import "../styling/contact.css"
import "../styling/home.css"
import { AnimatePresence } from 'framer-motion';


import {
  Switch,
  BrowserRouter,
  Route,
  withRouter,
  Redirect,
  NavLink
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path='/about'>
              <About />
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
          </AnimatePresence>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
