import React from 'react';
import './Homepage.css';

import Navbar from '../components/Navbar/Navbar.jsx'

const Homepage = () => {
  return (
    <>
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Upskill Anytime, Anywhere</h1>
          <p>Learn from top instructors and advance your career with expertly crafted courses.</p>
          <div className="search-bar">
            <input type="text" placeholder="Search for courses, topics, instructors..." />
          </div>
        </div>
        <div className="hero-image">
          <img src="/heroimg.jpg" alt="Learning online" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Explore Categories</h2>
        <div className="categories">
          <div className="category-card">Web Development</div>
          <div className="category-card">Data Science</div>
          <div className="category-card">Design</div>
          <div className="category-card">Marketing</div>
          <div className="category-card">Finance</div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="featured-courses-section">
        <h2>Top Picks For You</h2>
        <div className="course-grid">
          <div className="course-card">
            <img src="/reactimg.png" alt="React Course" />
            <h3>React for Beginners</h3>
            <p>Instructor: Jane Doe</p>
            <p>$19.99</p>
          </div>
          <div className="course-card">
            <img src="/uximg.jpg" alt="UX Course" />
            <h3>UX Design Masterclass</h3>
            <p>Instructor: Alex Smith</p>
            <p>$24.99</p>
          </div>
          <div className="course-card">
            <img src="/reactimg.png" alt="Python Course" />
            <h3>Complete Python Bootcamp</h3>
            <p>Instructor: Emily Clark</p>
            <p>$29.99</p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Homepage;
