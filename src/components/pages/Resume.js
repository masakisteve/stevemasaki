import React, { useState } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader2 from "components/Headers/IndexHeader2.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import { motion } from "framer-motion";
import { Container } from "reactstrap";
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function Resume() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  const file = "https://stevemasakipro.000webhostapp.com/docs/stevecv.pdf"

  // creating new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <motion.div
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 3.0 }}
    >
          <IndexNavbar />
          <div className="wrapper">
            <IndexHeader2 />
            <div className="main">
              <div className="page-header clear-filter" filter-color="blue">
                <Container>

                  <motion.iframe
                    initial={{ x: '-100vw', }}
                    animate={{ x: 0 }}
                    exit={{ x: '100vw' }}
                    transition={{ duration: 0.5 }}
                    title="file"
                    style={{ width: '100%', height: '100%' }}
                    src={file}
                    className="holds-the-iframe"
                  />

                </Container>
              </div>
              {/* <Download /> */}
            </div>
            <DarkFooter />
          </div>
    </motion.div>
  );
}

export default Resume;
