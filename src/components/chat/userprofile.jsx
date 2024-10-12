import React from 'react';
import './userprofile.css';

function userprofile() {
  return (
    <div className="user-profile">
      <img
        src="https://via.placeholder.com/70"
        alt="Profile"
        className="profile-image"
      />
      <h2>WarmHeart Connect</h2>
      <span className="status">Online now</span>
      <div className="contact-info">
        <button className="call-button">Call</button>
        <button className="video-call-button">Video Call</button>
        <button className="message-button">Message</button>
      </div>
      <div className="details">
        <p><strong>Job Title:</strong> PR Consultant</p>
        <p><strong>Email:</strong> bjorn@coolcompany.com</p>
        <p><strong>Time Zone:</strong> 11:58 AM</p>
      </div>
    </div>
  );
}

export default userprofile;
