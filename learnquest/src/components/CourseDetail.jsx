import React from 'react';
import './styles/CourseDetail.css';

const CourseDetail = () => {
  return (
    <div className="course-detail">
      <div className="video">Video Preview</div>
      <div className="info">
        <h1>Course Title</h1>
        <p>Description</p>
        <button>Buy Now</button>
      </div>
      <div className="curriculum">
        <h2>Course Curriculum</h2>
        <p>Lesson list...</p>
      </div>
    </div>
  );
};

export default CourseDetail;
