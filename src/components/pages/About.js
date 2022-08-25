import React, { useState } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader2 from "components/Headers/IndexHeader2.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import Download from "../../views/index-sections/Download";
import { motion } from "framer-motion";
import { Container, Row } from "reactstrap";
import lottie from "lottie-web";
import headeranim from "../../assets/img/header_anim.json";
import * as animationData from '../../assets/img/header_anim.json'

function About() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    lottie.loadAnimation({
      container: document.querySelector("#aboutanim"),
      animationData: headeranim,
    });
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <>
      <IndexNavbar/>
      <div className="wrapper">
        <IndexHeader2 />
        <div className="main">
          <div className="page-header clear-filter" filter-color="blue">
            <Container>
              <Row>

                <motion.div className="col"
                  initial={{ x: '-100vw', }}
                  animate={{ x: 0 }}
                  exit={{ x: '100vw' }}
                  transition={{ duration: 0.5 }}>
                  <div id="aboutanim" />
                </motion.div>
                <motion.div className="col"
                  initial={{ x: '-100vw', }}
                  animate={{ x: 0 }}
                  exit={{ x: '100vw' }}
                  transition={{ duration: 0.5 }}>
                  <br />
                  <br />
                  <br />
                  <br />
                  <h3>About Myself</h3>
                  <br />
                  <p>
                    Never turning down a challenge made me a jack of all trades in software engineering.
                    Name a programming language or framework and there is a good chance I have used it before.
                    I always look forward to having a good blend of collaborative spirit and individuality within a
                    team which proves efficient in enhancing productivity.
                    I started coding and working freelance through college therefore gaining wide experience.
                  </p>
                </motion.div>
              </Row>
            </Container>
          </div>
          {/* <Download /> */}
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default About;
