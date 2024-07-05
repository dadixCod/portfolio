import React from "react";
import NavBar from "./components/NavBar";
import Home from "./sections/Home";
import "./styles/App.css";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App">
      <div className="background-image">
        <img src="https://dadixcod.com/assets/stars.jpg" alt="Stars"></img>
      </div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ToastContainer autoClose={2000} theme="dark" />
    </div>
  );
};

export default App;
