import React from "react";
import NavBar from "./components/NavBar";
import Home from "./sections/Home";
import "./styles/App.css";
import About from "./sections/About";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <div>
      <div className="background-image">
        <img src="https://dadixcod.com/assets/stars.jpg" alt="Stars"></img>
      </div>
      <NavBar />
      <Home />
      <About />
      <Skills />
    </div>
  );
};

export default App;
