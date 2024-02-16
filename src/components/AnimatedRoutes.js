import React, { useState } from 'react'
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import Index from "views/Index.js";
import About from "components/pages/About";
import Resume from "components/pages/Resume";
import ContactMe from "components/pages/ContactMe";
import Employment from "components/pages/Employment";
import MyWork from "components/pages/MyWork";
import Skills from "components/pages/Skills";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../theme";

function AnimatedRoutes() {
    const location = useLocation()
    const [theme, setTheme] = useState("light");
    // const themeToggler = () => {
    //   theme === "light" ? setTheme("dark") : setTheme("light");
    // };
  
    const StyledApp = styled.div`
    color: ${(props) => props.theme.fontColor};
  `;
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
    <StyledApp>
    <Switch location={location} key={location.pathname}>
    <Route path="/index" render={(props) => <Index {...props} />} />
    <Route
      path="/about"
      render={(props) => <About {...props} />}
    />
     <Route
      path="/contact-me"
      render={(props) => <ContactMe {...props} />}
      // element={<ContactMe/>}
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
    <Redirect to="/index" />
    <Redirect from="/" to="/" />
  </Switch>
  </StyledApp>
  </ThemeProvider>
  )
}

export default AnimatedRoutes