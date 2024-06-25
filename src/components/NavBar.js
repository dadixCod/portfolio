import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const NavBar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  function openDropDownMenu() {
    setDropDownState(!dropDownState);
  }
  return (
    <header>
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="logo"
      >
        <img src="https://www.dadixcod.com/logo.png" alt="Mehdi Elouissi" />
      </motion.div>
      <motion.nav
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="toggle_btn" onClick={() => openDropDownMenu()}>
          <i
            className={`${
              dropDownState ? "fa-solid fa-xmark" : "fa-solid fa-bars"
            }`}
          ></i>
        </div>
      </motion.nav>

      <div className={`dropdown_menu ${dropDownState ? "open" : ""}`}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </div>
    </header>
  );
};

export default NavBar;
