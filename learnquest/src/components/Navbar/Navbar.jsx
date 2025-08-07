// src/components/Navbar.jsx
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">LearnQuest</div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for courses, topics, instructors..."
          className="search-input"
        />
      </div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">Categories</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
