import React, { useContext, useEffect, useRef, useState } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/p1.png";
import Ecommerce from "../../img/p3.png";
import HOC from "../../img/p5.png";
import p10 from "../../img/p10.png";
import fyp from "../../img/2.png";
import neez from "../../img/1.png";
import gymwebsite from '../../img/g.png'
import carwebsite from '../../img/g2.png'
import shorturl from '../../img/g3.png'
import teachme from '../../img/g4.png'
import wakeelclient from '../../img/g5.png'
import MusicApp from "../../img/p7.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion"; // Import Framer Motion

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [showClickMe, setShowClickMe] = useState(true); // State to control "Click Me" visibility
  const portfolioRef = useRef(null);

  const transition = {
    duration: 0.8,
    type: "spring",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowClickMe(true);
          setTimeout(() => {
            setShowClickMe(false); // Hide "Click Me" after 3 seconds
          }, 3000);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is in view
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => {
      if (portfolioRef.current) {
        observer.unobserve(portfolioRef.current);
      }
    };
  }, []);

  // Variants for the Click Me animation
  const clickMeVariants = {
    initial: { opacity: 0, scale: 0.5, rotate: 0 },
    animate: {
      opacity: 1,
      scale: [1, 1.2, 1.1],
      rotate: [0, 15, -15, 0],
      transition: {
        duration: 0.8,
        yoyo: Infinity, // Repeat animation
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="portfolio" id="portfolio" ref={portfolioRef}>
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent</span>
      <span>Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        grabCursor={true}
        loop={true}
        className="portfolio-slider"
      >

        <SwiperSlide>
          <a href="https://kashanafzl.github.io/J_business/" target="_blank" rel="noopener noreferrer">
            <div className="slide-content">
              <motion.img
                src={Ecommerce}
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={transition}
              />
              {showClickMe && (
                <motion.span
                  className="click-me"
                  variants={clickMeVariants}
                  initial="initial"
                  animate="animate"
                >
                  Click Me
                </motion.span>
              )}
            </div>
          </a>

        </SwiperSlide>


        <SwiperSlide>
          <a href="https://clientwakeel.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div className="slide-content">
              <motion.img
                src={wakeelclient}
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={transition}
              />
              {showClickMe && (
                <motion.span
                  className="click-me"
                  variants={clickMeVariants}
                  initial="initial"
                  animate="animate"
                >
                  Click Me
                </motion.span>
              )}
            </div>
          </a>
        </SwiperSlide>
        
        <SwiperSlide>
          <a href="https://kust-ioc-my-fyp.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div className="slide-content">
              <motion.img
                src={fyp}
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={transition}
              />
              {showClickMe && (
                <motion.span
                  className="click-me"
                  variants={clickMeVariants}
                  initial="initial"
                  animate="animate"
                >
                  Click Me
                </motion.span>
              )}
            </div>
          </a>
        </SwiperSlide>
        
        <SwiperSlide>
          <a href="https://q-gym-fyp.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div className="slide-content">
              <motion.img
                src={gymwebsite}
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={transition}
              />
              {showClickMe && (
                <motion.span
                  className="click-me"
                  variants={clickMeVariants}
                  initial="initial"
                  animate="animate"
                >
                  Click Me
                </motion.span>
              )}
            </div>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://collabways.com/" target="_blank" rel="noopener noreferrer">
            <div className="slide-content">
              <motion.img
                src={MusicApp}
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={transition}
              />
              {showClickMe && (
                <motion.span
                  className="click-me"
                  variants={clickMeVariants}
                  initial="initial"
                  animate="animate"
                >
                  Click Me
                </motion.span>
              )}
            </div>
          </a>
        </SwiperSlide>

        

        <SwiperSlide>
          <a href="https://neez-blue.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div className="slide-content">
              <motion.img
                src={neez}
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={transition}
              />
              {showClickMe && (
                <motion.span
                  className="click-me"
                  variants={clickMeVariants}
                  initial="initial"
                  animate="animate"
                >
                  Click Me
                </motion.span>
              )}
            </div>
          </a>

        </SwiperSlide>

        <SwiperSlide>
          <a href="https://carshowroomfyp.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div className="slide-content">
              <motion.img
                src={carwebsite}
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={transition}
              />
              {showClickMe && (
                <motion.span
                  className="click-me"
                  variants={clickMeVariants}
                  initial="initial"
                  animate="animate"
                >
                  Click Me
                </motion.span>
              )}
            </div>
          </a>
        </SwiperSlide>


        <SwiperSlide>
          <a href="https://kashanafzl.github.io/Japan3_Industry/" target="_blank" rel="noopener noreferrer">
            <div className="slide-content">
              <motion.img
                src={p10}
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={transition}
              />
              {showClickMe && (
                <motion.span
                  className="click-me"
                  variants={clickMeVariants}
                  initial="initial"
                  animate="animate"
                >
                  Click Me
                </motion.span>
              )}
            </div>
          </a>
        </SwiperSlide>



        <SwiperSlide>
          <a
            href="https://kashanafzl.github.io/Shruh/User-Management.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="slide-content">
              <motion.img
                src={Sidebar}
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={transition}
              />
              {showClickMe && ( // Only show "Click Me" if showClickMe is true
                <motion.span
                  className="click-me"
                  variants={clickMeVariants}
                  initial="initial"
                  animate="animate"
                >
                  Click Me
                </motion.span>
              )}
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://shorturlproject.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="slide-content">
              <motion.img
                src={shorturl}
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={transition}
              />
              {showClickMe && ( // Only show "Click Me" if showClickMe is true
                <motion.span
                  className="click-me"
                  variants={clickMeVariants}
                  initial="initial"
                  animate="animate"
                >
                  Click Me
                </motion.span>
              )}
            </div>
          </a>
        </SwiperSlide>

        
        <SwiperSlide>
          <div className="slide-content">
            <motion.img
              src={HOC}
              alt=""
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={transition}
            />
            {showClickMe && (
              <motion.span
                className="click-me"
                variants={clickMeVariants}
                initial="initial"
                animate="animate"
              >
                Click Me
              </motion.span>
            )}
          </div>
        </SwiperSlide>

        
        <SwiperSlide>
          <a
            href="https://teachme-tau.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="slide-content">
              <motion.img
                src={teachme}
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={transition}
              />
              {showClickMe && ( // Only show "Click Me" if showClickMe is true
                <motion.span
                  className="click-me"
                  variants={clickMeVariants}
                  initial="initial"
                  animate="animate"
                >
                  Click Me
                </motion.span>
              )}
            </div>
          </a>
        </SwiperSlide>





      </Swiper>
    </div>
  );
};

export default Portfolio;
