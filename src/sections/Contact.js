import React from "react";
import { toast } from "react-toastify";
import "../styles/Contact.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());

    const formUrl = "https://formspree.io/f/mgvwenle";

    fetch(formUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formDataObj,
        subject: formDataObj.subject,
      }),
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Message sent successfully");
          e.target.reset();
        } else {
          toast.error("Failed to send message. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <motion.section
      variants={fadeIn("down", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="contact-section"
      id="contact"
    >
      <div className="title">Contact me</div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Your Name *</label>
            <input type="text" className="form-input" name="name" required />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" className="form-input" name="phone" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group full-width">
            <label>Email *</label>
            <input type="email" className="form-input" name="email" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group full-width">
            <label>Subject *</label>
            <input type="text" className="form-input" name="subject" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group full-width">
            <label>Description *</label>
            <textarea
              className="form-textarea"
              name="description"
              required
            ></textarea>
          </div>
        </div>
        <div className="form-row center">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </motion.section>
  );
};

export default Contact;
