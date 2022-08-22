import React from 'react'
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import Index from "views/Index.js";
import About from "components/pages/About";
import Resume from "components/pages/Resume";
import ContactMe from "components/pages/ContactMe";
import Employment from "components/pages/Employment";
import MyWork from "components/pages/MyWork";
import Skills from "components/pages/Skills";
import Socials from "components/pages/Socials";

function AnimatedRoutes() {
    const location = useLocation()
  return (
    <Switch location={location} key={location.pathname}>
    <Route path="/index" render={(props) => <Index {...props} />} />
    <Route
      path="/about"
      render={(props) => <About {...props} />}
    />
     <Route
      path="/contact-me"
      render={(props) => <ContactMe {...props} />}
    />
     <Route
      path="/employment"
      render={(props) => <Employment {...props} />}
    />
     <Route
      path="/my-work"
      render={(props) => <MyWork {...props} />}
    />
     <Route
      path="/resume"
      render={(props) => <Resume {...props} />}
    />
     <Route
      path="/skills"
      render={(props) => <Skills {...props} />}
    />
     <Route
      path="/socials"
      render={(props) => <Socials {...props} />}
    />
    <Redirect to="/index" />
    <Redirect from="/" to="/index" />
  </Switch>
  )
}

export default AnimatedRoutes