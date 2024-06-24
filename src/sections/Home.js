import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import "../styles/Home.css";


const Home = () => {
  function openLink(url) {
    window.open(url, "_blank");
  }
  return (
    <section id="home" className="home">
      <div className="big-circle"></div>
      <div className="home-content">
        <div className="text-content">
          <h1>I'm Mehdi Elouissi</h1>
          <p>
            Experienced Mobile App developer using Flutter & Dart, Kotlin and
            backend using Node.js.You need a full stack mobile app ? Contact me
          </p>
          <div className="social-icons">
            <div
              className="iconrec"
              onClick={() => openLink("https://github.com/dadixcod")}
            >
              <a href="https://dadixcod.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
            <div
              className="iconrec"
              onClick={() =>
                openLink(
                  "https://www.linkedin.com/in/elmehdi-mokhtar-elouissi-670947258/"
                )
              }
            >
              <a href="https://dadixcod.com" rel="noopener noreferrer">
                <FaLinkedin /> 
              </a>
            </div>
            <div
              className="iconrec"
              onClick={() => openLink("https://x.com/MehdiElouissi2")}
            >
              <a href="https://dadixcod.com" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
            <div
              className="iconrec"
              onClick={() => openLink("https://www.instagram.com/mehdi_elss")}
            >
              <a href="https://dadixcod.com" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
          <button
            onClick={() =>
              window.open("https://www.dadixcod.com/mehdi-cv.pdf", "_blank")
            }
          >
            View & Download CV
          </button>
        </div>
        <div className="image-content">
          <div className="image-wrapper">
            <img src="https://www.dadixcod.com/profile-pic.jpg" alt="Mehdi Elouissi" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
