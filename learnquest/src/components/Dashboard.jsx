import React from 'react';
import './styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Hi, [User]</h1>
      <section>
        <h2>Enrolled Courses</h2>
        <div className="courses">
          <div className="course-card">Course 1</div>
          <div className="course-card">Course 2</div>
        </div>
      </section>
      <section>
        <h2>Recommended</h2>
        <div className="courses">
          <div className="course-card">Course 3</div>
          <div className="course-card">Course 4</div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
