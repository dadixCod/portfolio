import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const NavBar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  function openDropDownMenu() {
    setDropDownState(!dropDownState);
  }
  return (
    <motion.header
      variants={fadeIn("down", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="logo">
        <img src="https://www.dadixcod.com/logo.png" alt="Mehdi Elouissi" />
      </div>
      <nav>
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
      </nav>

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
    </motion.header>
  );
};

export default NavBar;
