import React from "react";
import NavBar from "./components/NavBar";
import Home from "./sections/Home";
import "./styles/App.css";
import About from "./sections/About";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
};

export default App;
