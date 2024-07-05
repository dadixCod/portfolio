import React from "react";
import "../styles/Skills.css";
import { skills } from "../data/Constants";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="wrapper">
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="skills-title"
        >
          Skills
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="skills-desc"
        >
          <p>
            Here are some of my skills on which I have been working on the past
            2 years.
          </p>
        </motion.div>
        <div className="skills-container">
          {skills.map((item) => (
            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              key={item.title}
              className="skill"
            >
              <div className="skill-title">{item.title}</div>
              <div className="skills-list">
                {item.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <img src={skill.image} alt="Skill" /> {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
