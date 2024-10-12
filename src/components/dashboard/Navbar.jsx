import React from 'react';
import './navbar.css';
import Content from '../content/content';
const Navbar = () => {
  return (
    <div className="dashboard-container">
      {/* Top Navbar */}
      <div className="top-navbar">
        <h1>Your LoveConnect</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Profile</li>
            <li>Messages</li>
            <li>Settings</li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Vertical Navbar */}
        <div className="vertical-navbar">
          <ul>
            <li>Dashboard</li>
            <li>Matches</li>
            <li>Profile</li>
            <li>Settings</li>
            <li>Help</li>
            <li>Logout</li>
          </ul>
        </div>

        {/* Right Content Area */}
        <div className="content-area">
          <Content></Content>
          {/* Additional content will go here */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
