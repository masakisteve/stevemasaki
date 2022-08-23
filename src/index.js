import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
import { AnimatePresence } from "framer-motion";
import AnimatedRoutes from "components/AnimatedRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  
  <BrowserRouter>
  <AnimatePresence wait>
    <AnimatedRoutes/>
    </AnimatePresence>
  </BrowserRouter>
 
);
