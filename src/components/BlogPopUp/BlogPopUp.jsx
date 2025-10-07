import React from "react";
import "./BlogPopUp.css";

const ComingSoonPopup = ({ closePopup }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Coming Soon</h2>
        <p>We're working hard to bring this feature to you. Stay tuned!</p>
        <button className="close-btn" onClick={closePopup}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ComingSoonPopup;
