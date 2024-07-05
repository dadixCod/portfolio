import React, { useEffect } from "react";
import "../styles/Modal.css";

const Modal = ({ show, onClose, videoUrl }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  if (!show) {
    return null;
  }

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <iframe
          src={videoUrl}
          frameBorder={0}
          
          allow="autoplay; encrypted-media"
          title="video"
        ></iframe>
      </div>
    </div>
  );
};

export default Modal;
