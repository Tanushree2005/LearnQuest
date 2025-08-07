import React from 'react';
import './styles/CourseListing.css';

const CourseListing = () => {
  return (
    <div className="listing-page">
      <aside className="filters">
        <h3>Filters</h3>
        <label><input type="checkbox" /> Free</label>
        <label><input type="checkbox" /> Paid</label>

        <h4>Level</h4>
        <label><input type="checkbox" /> Beginner</label>
        <label><input type="checkbox" /> Intermediate</label>
        <label><input type="checkbox" /> Advanced</label>
      </aside>

      <section className="courses">
        <h2>Courses in [Category]</h2>
        <div className="course-grid">
          {[1,2,3,4].map((i) => (
            <div className="course-card" key={i}>
              <div className="thumbnail">Image</div>
              <div className="info">
                <h3>Course Title</h3>
                <p>Instructor</p>
                <p>★★★★★</p>
                <p>Price</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CourseListing;
