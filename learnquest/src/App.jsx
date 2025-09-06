import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import CourseDetail from "./components/CourseDetail/CourseDetail.jsx"; 
import Home from "./Homepage/Homepage.jsx";
import CoursesPage from "./pages/Courses/CoursesPage.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Login from "./pages/Login/Login.jsx"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage/>} />
        <Route path="/course-details" element={<CourseDetail />} /> {/* ✅ */}
        <Route path="/categories" element={<div>Categories Page</div>} />
        <Route path="/login" element={<Login/>} />\
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
