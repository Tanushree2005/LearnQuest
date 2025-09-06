// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom"; // if using React Router
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">LearnQuest</div>

      {/* Search */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for courses, topics, instructors..."
          className="search-input"
        />
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/course-details">Course Details</Link> {/* ✅ Added */}
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
