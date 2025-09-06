import React from "react";
import "./Dashboard.css";

const enrolledCourses = [
  {
    id: 1,
    title: "React for Beginners",
    description: "Learn the basics of React including components, state, and props.",
    rating: 4.7,
    image: "/reactimg.png",
  },
];

const recommendedCourses = [
  {
    id: 2,
    title: "Machine Learning Basics",
    description: "An introduction to ML concepts and Python implementation.",
    rating: 4.6,
    image: "mlimg.jpeg",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Principles of user experience and interface design.",
    rating: 4.8,
    image: "uximg.jpg",
  },
];

export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="logo"></div>
        <h2>User Dashboard</h2>
        <button className="logout-btn">Logout</button>
      </header>

      {/* Welcome Section */}
      <section className="welcome">
        <h2>Hi, Tanushree 👋</h2>
      </section>

      {/* Enrolled Courses */}
      <section className="course-section">
        <h3>Enrolled Courses</h3>
        <div className="course-grid">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.title} />
              <div className="course-details">
                <h4>{course.title}</h4>
                <p>{course.description}</p>
                <p className="rating">⭐ {course.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Courses */}
      <section className="course-section">
        <h3>Recommended Courses</h3>
        <div className="course-grid">
          {recommendedCourses.map((course) => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.title} />
              <div className="course-details">
                <h4>{course.title}</h4>
                <p>{course.description}</p>
                <p className="rating">⭐ {course.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
