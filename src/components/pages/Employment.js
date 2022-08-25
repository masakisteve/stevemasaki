import React, { useState } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader2 from "components/Headers/IndexHeader2.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import Download from "../../views/index-sections/Download";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../../theme";
import { motion } from "framer-motion";
import { Container } from "reactstrap";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Employment() {
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

  const [theme, setTheme] = useState("light");
  // const themeToggler = () => {
  //   theme === "light" ? setTheme("dark") : setTheme("light");
  // };
  return (
    <motion.div
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 3.0 }}>
          <IndexNavbar />
          <div className="wrapper">
            <IndexHeader2 />
            <div className="main">
              <div className=" clear-filter" filter-color="blue">
                <Container>
                  <VerticalTimeline>
                    <br />
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                      date="August 2022 - present"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">Fleelance</h3>
                      <h4 className="vertical-timeline-element-subtitle">Developer</h4>
                      <p>
                      Full Stack Software Engineer, Blockchain Developer, App Development Consultant.
                      </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="July 2018 - July 2022"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">ICT Manager</h3>
                      <h4 className="vertical-timeline-element-subtitle">Manager</h4>
                      <p>
                      CoverApp, Nairobi Kenya
                      </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="Oct 2017 - July 2022"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">Full Stack Software Engineer</h3>
                      <h4 className="vertical-timeline-element-subtitle">Developer</h4>
                      <p>
                        CoverApp, Nairobi Kenya
                      </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="May 2015 - August 2015"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">Systems Support Engineer</h3>
                      <h4 className="vertical-timeline-element-subtitle">Internship</h4>
                      <p>
                        Systems Support Engineer, RBA Kenya
                      </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--education"
                      date="May 2012 - August 2012"
                      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    // icon={<SchoolIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">Systems Support Engineer</h3>
                      <h4 className="vertical-timeline-element-subtitle">Internship</h4>
                      <p>
                        Systems Support Engineer, National Oil Kenya
                      </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--education"
                      date="Jan 2013 - August 2015"
                      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    // icon={<SchoolIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">Bachelors Degree in Information Technology</h3>
                      <h4 className="vertical-timeline-element-subtitle">Degree</h4>
                      <p>
                        Mount Kenya University, Information Technology
                      </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--education"
                      date="Sept 2010 - Aug 2012"
                      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    // icon={<SchoolIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">Diploma in Information Technology</h3>
                      <h4 className="vertical-timeline-element-subtitle">Diploma</h4>
                      <p>
                        Mont Kenya University, Information Technology
                      </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    // icon={<StarIcon />}
                    />
                  </VerticalTimeline>
                </Container>
              </div>
              {/* <Download /> */}
            </div>
            <DarkFooter />
          </div>
    </motion.div>
  );
}

export default Employment;
