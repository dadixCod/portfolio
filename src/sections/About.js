import React, { useState, useEffect } from "react";
import "../styles/About.css";
import Countup from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const [mobileAppPercent, setMobileAppPercent] = useState(0);
  const [backendPercent, setBackendPercent] = useState(0);
  const [uxUiPercent, setUxUiPercent] = useState(0);

  useEffect(() => {
    if (inView) {
      setMobileAppPercent(80);
      setBackendPercent(60);
      setUxUiPercent(80);
    }
  }, [inView]);

  const circleLength = 2 * Math.PI * 36; 

  return (
    <section className="about-section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="image-text">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="image-about">
            <img className="img" src="https://dadixcod.com/assets/developer.jpg" alt="Mehdi Elouissi" />
          </motion.div>
          <motion.div
           variants={fadeIn('left', 0.3)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.3 }}
          
          className="right-about">
            <h2>About</h2>
            <h3>
              I'm a Freelance FullStack Mobile App Developer with 2 years of
              Experience.
            </h3>
            <p>
              I worked for 2 years in design, where I built some beautiful UX/UI designs, social media posts, and more. I started my journey as a Full Stack Mobile Application Developer 2 years ago, using Flutter & Dart, Kotlin, and NodeJS for the backend. My career is still long, and I will definitely bring more products to life in my journey. Here are some stats:
            </p>

            {/* Stats */}
            <div className="stats">
              <div className="circle-container">
                <svg className="circle">
                  <circle className="circle-background" />
                  <circle
                    className="circle-progress"
                    strokeDasharray={circleLength}
                    strokeDashoffset={circleLength - (inView ? (mobileAppPercent / 100) * circleLength : 0)}
                  />
                </svg>
                <div className="years-countup">
                  {inView ? (
                    <Countup start={0} end={80} duration={3} />
                  ) : null}%
                </div>
                <div className="years-text">
                  Mobile App <br />
                  Development
                </div>
              </div>
              <div className="circle-container">
                <svg className="circle">
                  <circle className="circle-background" />
                  <circle
                    className="circle-progress"
                    strokeDasharray={circleLength}
                    strokeDashoffset={circleLength - (inView ? (backendPercent / 100) * circleLength : 0)}
                  />
                </svg>
                <div className="years-countup">
                  {inView ? (
                    <Countup start={0} end={60} duration={3} />
                  ) : null}%
                </div>
                <div className="years-text">
                  Backend <br />
                  Development
                </div>
              </div>
              <div className="circle-container">
                <svg className="circle">
                  <circle className="circle-background" />
                  <circle
                    className="circle-progress"
                    strokeDasharray={circleLength}
                    strokeDashoffset={circleLength - (inView ? (uxUiPercent / 100) * circleLength : 0)}
                  />
                </svg>
                <div className="years-countup">
                  {inView ? (
                    <Countup start={0} end={80} duration={3} />
                  ) : null}%
                </div>
                <div className="years-text">
                  UX/UI <br />
                  Design
                </div>
              </div>
            </div>
            <div className="hire">
              <button className="btn btn-lg">Hire me</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
