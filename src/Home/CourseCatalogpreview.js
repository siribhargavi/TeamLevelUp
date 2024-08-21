import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './CourseCatalogPreview.css';

const CourseCatalogPreview = ({ courses }) => {
  const [activeCategory, setActiveCategory] = useState('BootCamps');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLearnMoreClick = (courseName) => {
    navigate(`/course/${courseName}`); // Navigate to the respective course page
  };

  const mapCourseNameToRoute = (courseTitle) => {
    // Convert course titles to their respective routes
    return courseTitle.toLowerCase().replace(/ /g, '-'); // Example: "Data Science" -> "data-science"
  };

  return (
    <div className="course-catalog-preview">
      <h2>Our Courses</h2>
      <div className="tabs">
        {Object.keys(courses).map((category) => (
          <button
            key={category}
            className={`tab-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="course-list">
        {courses[activeCategory].map((course) => (
          <div key={course.id} className="course-item">
            <img src={course.image} alt={course.title} />
            <h4>{course.title}</h4>
            <p>{course.description}</p>
            <div className="price">
              {course.price} <span className="discount">{course.discount}</span>
            </div>
            <button
              className="learn-more-button"
              onClick={() => handleLearnMoreClick(mapCourseNameToRoute(course.title))}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCatalogPreview;
