// src/pages/CourseDetails.jsx
import React from "react";
import "./CourseDetail.css";

const CourseDetails = () => {
  return (
    <div className="course-details-page">
      {/* Header */}
      <header className="course-header">
        <h2>Course Details</h2>
      </header>

      <main className="course-main">
        {/* Left Section */}
        <section className="course-left">
          {/* Video Preview */}
        <div className="course-video">
  <iframe
    src="https://www.youtube.com/embed/ZxKM3DCV2kE?rel=0"
    title="Full Stack Web Development Full Course"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

          {/* Course Description */}
          <div className="course-section">
            <h3>Course Description</h3>
            <p>
              This is a detailed overview of the course. You’ll learn modern web
              development, industry best practices, and build hands-on projects.
            </p>
          </div>

          {/* Curriculum */}
          <div className="course-section">
            <h3>Course Curriculum</h3>
            <ul>
              <li>Introduction & Setup</li>
              <li>React Basics</li>
              <li>State Management</li>
              <li>Backend Integration</li>
              <li>Final Project</li>
            </ul>
          </div>

          {/* Reviews & Ratings */}
          <div className="course-feedback">
            <div className="reviews">
              <h3>Reviews</h3>
              <p>⭐ “Great course, easy to follow and practical.”</p>
              <p>⭐ “Loved the projects and explanations.”</p>
            </div>

            <div className="ratings">
              <h3>Ratings</h3>
              <p>⭐⭐⭐⭐☆ (4.5/5)</p>
            </div>
          </div>
        </section>

        {/* Right Section (Purchase) */}
        <aside className="course-right">
          <div className="purchase-card">
            <h3>Purchase Details</h3>
            <p>Price: <strong>₹1999</strong></p>
            <p>Duration: <strong>10 weeks</strong></p>
            <p>Access: <strong>Lifetime</strong></p>
            <button className="buy-btn">Buy Now</button>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default CourseDetails;
