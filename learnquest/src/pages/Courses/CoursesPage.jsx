import React, { useState } from "react";
import "./CoursesPage.css";

const sampleCourses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    instructor: "John Doe",
    price: 0,
    level: "Beginner",
    category: "Web Development",
    rating: 5,
    image: "/webdevimg.jpeg",
  },
  {
    id: 2,
    title: "React Mastery",
    instructor: "Jane Smith",
    price: 499,
    level: "Intermediate",
    category: "React",
    rating: 4,
    image: "/reactimg.png",
  },
  {
    id: 3,
    title: "Machine Learning A-Z",
    instructor: "Michael Johnson",
    price: 999,
    level: "Advanced",
    category: "Machine Learning",
    rating: 5,
    image: "/mlimg.jpeg",
  },
  {
    id: 4,
    title: "UI/UX Design Principles",
    instructor: "Emily Davis",
    price: 299,
    level: "Beginner",
    category: "UI/UX",
    rating: 4,
    image: "/uximg.jpg",
  },
];

const CoursesPage = () => {
  const [filters, setFilters] = useState({
    free: false,
    paid: false,
    level: [],
    category: "",
  });

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("popularity");

  // Update filter state
  const handleCheckboxChange = (e) => {
    const { name, checked, value } = e.target;

    if (name === "free" || name === "paid") {
      setFilters({ ...filters, [name]: checked });
    } else if (name === "level") {
      const updatedLevels = checked
        ? [...filters.level, value]
        : filters.level.filter((lvl) => lvl !== value);
      setFilters({ ...filters, level: updatedLevels });
    }
  };

  // Filtering logic
  const filteredCourses = sampleCourses
    .filter((course) =>
      search ? course.title.toLowerCase().includes(search.toLowerCase()) : true
    )
    .filter((course) =>
      filters.free && !filters.paid
        ? course.price === 0
        : filters.paid && !filters.free
        ? course.price > 0
        : true
    )
    .filter((course) =>
      filters.level.length > 0 ? filters.level.includes(course.level) : true
    )
    .filter((course) =>
      filters.category ? course.category === filters.category : true
    )
    .sort((a, b) => {
      if (sortBy === "priceLow") return a.price - b.price;
      if (sortBy === "priceHigh") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // popularity (default)
    });

  return (
    <div className="courses-page">
      {/* Page Title */}
      <h2 className="page-title">Courses</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="content">
        {/* Filters Section */}
        <aside className="filters">
          <h3>Filters</h3>

          <div className="filter-group">
            <label>
              <input
                type="checkbox"
                name="free"
                checked={filters.free}
                onChange={handleCheckboxChange}
              />{" "}
              Free
            </label>
            <label>
              <input
                type="checkbox"
                name="paid"
                checked={filters.paid}
                onChange={handleCheckboxChange}
              />{" "}
              Paid
            </label>
          </div>

          <div className="filter-group">
            <h4>Level</h4>
            <label>
              <input
                type="checkbox"
                name="level"
                value="Beginner"
                checked={filters.level.includes("Beginner")}
                onChange={handleCheckboxChange}
              />{" "}
              Beginner
            </label>
            <label>
              <input
                type="checkbox"
                name="level"
                value="Intermediate"
                checked={filters.level.includes("Intermediate")}
                onChange={handleCheckboxChange}
              />{" "}
              Intermediate
            </label>
            <label>
              <input
                type="checkbox"
                name="level"
                value="Advanced"
                checked={filters.level.includes("Advanced")}
                onChange={handleCheckboxChange}
              />{" "}
              Advanced
            </label>
          </div>

          <div className="filter-group">
            <h4>Category</h4>
            <select
              value={filters.category}
              onChange={(e) =>
                setFilters({ ...filters, category: e.target.value })
              }
            >
              <option value="">All</option>
              <option value="Web Development">Web Development</option>
              <option value="React">React</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="UI/UX">UI/UX</option>
            </select>
          </div>
        </aside>

        {/* Courses Section */}
        <main className="courses-section">
          <div className="sort-bar">
            <span>Sort by:</span>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="popularity">Popularity</option>
              <option value="priceLow">Price (Low → High)</option>
              <option value="priceHigh">Price (High → Low)</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          <div className="courses-grid">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <div className="course-card" key={course.id}>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="course-image"
                  />
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-instructor">{course.instructor}</p>
                  <div className="course-rating">
                    {"⭐".repeat(course.rating)}
                  </div>
                  <p className="course-price">
                    {course.price === 0 ? "Free" : `₹${course.price}`}
                  </p>
                  <button className="enroll-btn">Enroll</button>
                </div>
              ))
            ) : (
              <p>No courses found matching your filters.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CoursesPage;
