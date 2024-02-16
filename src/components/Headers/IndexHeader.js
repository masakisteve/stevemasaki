import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "components/config/particles-config.js";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Container } from "reactstrap";
import HeaderImage3 from "../../assets/img/header3.jpg"
import HeaderImage4 from "../../assets/img/header4.jpg"
import HeaderImage7 from "../../assets/img/header7.jpg"
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

function IndexHeader() {
  let pageHeader = React.createRef();
  const images = [
    HeaderImage3, HeaderImage4, HeaderImage7
  ];
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [currentImage, setCurrentImage] = React.useState(null);
  var imageUrl = "assets/img/header.jpg"

  React.useEffect(() => {

    const updateScroll = () => {
      let windowScrollTop = window.pageYOffset / 3;
      if (window.innerWidth > 991) {
        pageHeader.current.style.transform = "translate3d(0," + windowScrollTop + "px,0)";
      }
    };

    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 30000)
    window.addEventListener("scroll", updateScroll);
    return function cleanup() {
      if (window.innerWidth > 991) {
        window.removeEventListener("scroll", updateScroll);
      }
      clearInterval(intervalId);
    };
  });

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
      />

      <div className="page-header clear-filter" filter-color="blue">
        <motion.div
          className="page-header-image"
          style={{
            backgroundImage: `url(${images[Math.floor(Math.random() * images.length)]})`,
            filter: "blur(2px)",
            opacity: "0.75",
            transition: "blur 3s ease",
          }}
          ref={pageHeader}
        ></motion.div>
        <Container>
          <div className="content-center brand">
            <motion.div
              whileHover={{ scale: 1.2 }}>
              <h1 className="h1-seo">Steve Masaki</h1>
              <h4>
                <TypeAnimation
                  sequence={[
                    'Full Stack Software Engineer', // Types 'One'
                    3000, // Waits 1s
                    'Blockchain Developer', // Deletes 'One' and types 'Two'
                    6000, // Waits 2s
                    'App Development Consultant', // Types 'Three' without deleting 'Two'
                    6000,
                    () => {
                      // console.log('Done typing!'); // Place optional callbacks anywhere in the array
                    }
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: '2em' }}
                />
              </h4>
            </motion.div>
          </div>
          <h6 className="category category-absolute">
            Professional Portfolio
          </h6>

        </Container>
      </div>

    </>
  );
}

export default IndexHeader;
