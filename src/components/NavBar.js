import React, { useState } from "react";
// import logo from "https://www.dadixcod.com/logo.png";

const NavBar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  function openDropDownMenu() {
    setDropDownState(!dropDownState);
  }
  return (
    <header>
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
    </header>
  );
};

export default NavBar;
