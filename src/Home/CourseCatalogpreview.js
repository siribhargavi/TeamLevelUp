import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CourseCatalogPreview.css';

const CourseCatalogPreview = ({ courses = {} }) => {
  const [activeCategory, setActiveCategory] = useState(Object.keys(courses)[0] || 'AWS');
  const navigate = useNavigate();

  const handleLearnMoreClick = (courseName) => {
    navigate(`/courses/${courseName}`);
  };

  const courseTitleToRouteMap = {
    'React Bootcamp': 'react',
    'Python Bootcamp': 'python',
    'Cloud Computing Bootcamp': 'cloud-computing',
    'Cyber Security Bootcamp': 'cyber-security',
    'Data Engineering Bootcamp': 'data-engineering',
    'Data Science Bootcamp': 'data-science',
    'Java Bootcamp': 'java',
    'UI/UX Design Bootcamp': 'ui-ux',
    'AI & ML Bootcamp': 'ai-ml',
    'Blockchain Bootcamp': 'blockchain',
  };

  const mapCourseNameToRoute = (courseTitle) => {
    return courseTitleToRouteMap[courseTitle] || courseTitle.toLowerCase().replace(/ /g, '-');
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
        {(courses[activeCategory] || []).map((course) => (
          <div key={course.id} className="course-item">
            <img src={course.img} alt={course.title} />
            <h4>{course.title}</h4>
            <p>{course.description}</p>
            {course.videoUrl && (
              <div className="video-container">
                <iframe
                  src={course.videoUrl}
                  title={course.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            {course.price && (
              <div className="price">
                {course.price} <span className="discount">{course.discount}</span>
              </div>
            )}
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
