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

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function Employment() {

  const [theme, setTheme] = useState("light");
  // const themeToggler = () => {
  //   theme === "light" ? setTheme("dark") : setTheme("light");
  // };
  return (
    <motion.div
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 3.0 }}
    >
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
          <IndexNavbar />
          <div className="wrapper">
            <IndexHeader2 />
            <div className="main">
              <div className=" clear-filter" filter-color="blue">
                <Container>
                  <VerticalTimeline>
                    <br/>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                      date="2011 - present"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">Creative Director</h3>
                      <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                      <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                      </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="2010 - 2011"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">Art Director</h3>
                      <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                      <p>
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                      </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="2008 - 2010"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">Web Designer</h3>
                      <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                      <p>
                        User Experience, Visual Design
                      </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="2006 - 2008"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">Web Designer</h3>
                      <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                      <p>
                        User Experience, Visual Design
                      </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--education"
                      date="April 2013"
                      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    // icon={<SchoolIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                      <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                      <p>
                        Strategy, Social Media
                      </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--education"
                      date="November 2012"
                      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    // icon={<SchoolIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                      <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                      <p>
                        Creative Direction, User Experience, Visual Design
                      </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--education"
                      date="2002 - 2006"
                      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    // icon={<SchoolIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                      <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                      <p>
                        Creative Direction, Visual Design
                      </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    // icon={<StarIcon />}
                    />
                  </VerticalTimeline>
                </Container>
              </div>
              <Download />
            </div>
            <DarkFooter />
          </div>
        </StyledApp>
      </ThemeProvider>
    </motion.div>
  );
}

export default Employment;
