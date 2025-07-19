import React from "react";
import "../styles/About.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <section className="about-section" id="about">
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="about-text"
      >
        <h1>About me.</h1>
      </motion.div>

      <div className="about-container">
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="left-about"
        >
          <div className="rectangle-about">
            <div>
              <img className="icon" src="/assets/flutter.png" alt="" />
            </div>
            <div className="text">
              <h3>Cross Platform Development</h3>
              <p>
                I have build different apps for different clients with
                Flutter/Dart , with my 2 years of experience , I can bring any
                UI to Life
              </p>
            </div>
          </div>
          <div className="rectangle-about">
            <div>
              <img className="icon" src="/assets/android.png" alt="" />
            </div>
            <div className="text">
              <h3>Android Development</h3>
              <p>
                I have a good knowledge using Kotlin / Java to develop Native
                Android apps with 1 year of experience
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="right-about"
        >
          <div className="rectangle-about">
            <div>
              <img className="icon" src="/assets/coding.png" alt="" />
            </div>
            <div className="text">
              <h3>Backend Development</h3>
              <p>
                I have also 1 year experience in Backend using NodeJs and
                ExpressJS to build a maintainable backend programs
              </p>
            </div>
          </div>
          <div className="rectangle-about">
            <div>
              <img className="icon" src="/assets/design.png" alt="" />
            </div>
            <div className="text">
              <h3>Design</h3>
              <p>
                I worked for 2 years in design with different fields such as
                UX/UI design ,Social Media posts deisgn , identity design and
                more.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
