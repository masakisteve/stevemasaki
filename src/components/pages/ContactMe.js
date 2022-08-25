import React, { useState } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader2 from "components/Headers/IndexHeader2.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import { motion } from "framer-motion";
import { Container } from "reactstrap";
import SignUp from "views/index-sections/SignUp";


function ContactMe() {
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

  return (
    <>

      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader2 />
        <div className="main">
          <div className="page-header clear-filter" filter-color="blue">
            <Container>
              <motion.div
               initial={{x:'-100vw',}}
               animate={{x:0}}
               exit={{x:'100vw'}}
               transition={{duration:0.5}}
              >
                <SignUp />
              </motion.div>
            </Container>
          </div>
        </div>
        <DarkFooter />
      </div>

    </>
  );
}

export default ContactMe;
