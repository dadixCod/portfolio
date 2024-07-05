import React, { useEffect, useState } from "react";
import "../styles/Projects.css";
import { projects } from "../data/Constants";
import { FaGithub } from "react-icons/fa";
import Modal from "../components/Modal"; // Import the modal component
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const [toggle, setToggle] = useState("all");
  const [projectsList, setProjectsList] = useState(projects);

  const changeProjectsList = (category) => {
    if (category === "all") {
      setProjectsList(projects);
    } else {
      const filteredProjects = projects.filter(
        (project) => project.category === category
      );
      setProjectsList(filteredProjects);
    }
  };

  useEffect(() => {
    changeProjectsList(toggle);
  }, [toggle]);

  const openModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentVideo("");
  };

  return (
    <section className="projects-section" id="projects">
      <div className="wrapper">
        <motion.div
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="title"
        >
          Projects
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="project-desc"
        >
          <p>
            I have worked on a wide range of projects. From Native / Cross
            Platform apps to web apps. Here are some of my projects.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className={`toggle-group ${toggle}-selected`}
        >
          <div
            onClick={() => setToggle("all")}
            className={`toggle-button ${toggle === "all" ? "selected" : ""}`}
          >
            ALL
          </div>
          <div className="divider"></div>
          <div
            onClick={() => setToggle("mobile")}
            className={`toggle-button ${toggle === "mobile" ? "selected" : ""}`}
          >
            MOBILE
          </div>
          <div className="divider"></div>
          <div
            onClick={() => setToggle("web")}
            className={`toggle-button ${toggle === "web" ? "selected" : ""}`}
          >
            WEB
          </div>
        </motion.div>

        <div className="projects-container">
          {projectsList.map((project) => (
            <motion.div
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              key={project.id}
              className="project-card"
            >
              <div className="upper">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="lower">
                <div className="tags-list">
                  {project.tags.map((tag) => (
                    <div key={tag.tag} className="tag">
                      {tag.tag}
                    </div>
                  ))}
                </div>
                <div className="project-title">{project.title}</div>
                <div className="project-desc">{project.description}</div>
                <div className="links-row">
                  <a
                    className="github"
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="giticon" />
                  </a>

                  <span
                    className="video-view"
                    onClick={() => openModal(project.videoUrl)}
                  >
                    Watch Project
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Modal show={showModal} onClose={closeModal} videoUrl={currentVideo} />
    </section>
  );
};

export default Projects;
