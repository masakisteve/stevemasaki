import React, { useState } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader2 from "components/Headers/IndexHeader2.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import Download from "../../views/index-sections/Download";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../../theme";
import { motion } from "framer-motion";
import { Container, Table } from "reactstrap";
import SkillsRow from "components/pageComponents/SkillsRow";
import SkillsData from "data/SkillsData";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function Skills() {
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

  const cards = SkillsData.map(item => {
    return (
      <SkillsRow
        key={item.id}
        {...item}
      />
    )
  })

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
              <div className="page-header clear-filter" filter-color="blue">
                <Container>
                  <Table responsive hover>
                    <thead>
                      <tr>
                        <th className="small-width1">Skills</th>
                        <th className="small-width2"></th>
                        <th className="half-width"></th>
                      
                      </tr>
                    </thead>
                    <tbody>
                     {cards}
                    </tbody>
                  </Table>
                </Container>
              </div>
              {/* <Download /> */}
            </div>
            <DarkFooter />
          </div>
        </StyledApp>
      </ThemeProvider>
    </motion.div>
  );
}

export default Skills;
