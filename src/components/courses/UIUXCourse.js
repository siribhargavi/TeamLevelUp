import React, { useState, useEffect } from 'react';
import './UIUXCourse.css';
import { useNavigate } from 'react-router-dom';



const UIUXCourse = () => {
  const navigate = useNavigate();
  const [subtopics, setSubtopics] = useState([]);
  const [showSubtopics, setShowSubtopics] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleBookNowClick = () => {
    navigate('/book-demo');
  };
  const testimonialsData = [
    {
      id: 1,
      name: 'Emily R.',
      photo: '/images/testi1.jpeg',
      quote: 'The Bootcamp transformed my career. The instructors were top-notch, and the curriculum was spot-on.',
    },
    {
      id: 2,
      name: 'Michael S.',
      photo: '/images/testi3.jpeg',
      quote: 'I gained practical skills that I could immediately apply to my job. Highly recommend!',
    },
    {
      id: 3,
      name: 'Sophia L.',
      photo: '/images/testi3.jpeg',
      quote: 'The hands-on projects were challenging but rewarding. I built a portfolio that landed me my dream job.',
    },
    {
      id: 4,
      name: "David Lee",
      photo: "/images/testi1.jpeg", 
      quote: "This is the best course I've taken online. The content is up-to-date, and the projects are relevant to what is currently being used in the industry.",
    },
    {
      id: 5,
      name: "Sarah Thompson",
      photo: "/images/testi1.jpeg", 
      quote: "The practical approach of the course, combined with expert guidance, has given me the confidence to tackle complex challenges at work.",
    },
  ];
  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMouseEnter = (event) => {
    const subtopicsData = event.currentTarget.getAttribute('data-subtopics');
    if (subtopicsData) {
      setSubtopics(subtopicsData.split(','));
      setShowSubtopics(true);
      const rect = event.currentTarget.getBoundingClientRect();
      setPosition({ x: rect.right + 10, y: rect.top });
    } else {
      setSubtopics([]);
      setShowSubtopics(false);
    }
  };

  const handleMouseLeave = () => {
    setShowSubtopics(false);
  };
  useEffect(() => {
    const items = document.querySelectorAll('.curriculum-item');
    items.forEach((item) => {
      item.addEventListener('mouseenter', handleMouseEnter);
      item.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      items.forEach((item) => {
        item.removeEventListener('mouseenter', handleMouseEnter);
        item.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
  return (
    <div className="react-course-page">

      {/* Header Section */}
      <header className="header">
        <div className="nav-header">
          <nav>
            <ul>
              <li><a href="#overview" onClick={(e) => handleNavClick(e, 'overview')}>Overview</a></li>
              <li><a href="#course-details" onClick={(e) => handleNavClick(e, 'course-details')}>Course Details</a></li>
              <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
              <li><a href="#roadmap" onClick={(e) => handleNavClick(e, 'roadmap')}>Roadmap to Success</a></li>
              <li><a href="#mentor" onClick={(e) => handleNavClick(e, 'mentor-demo')}>Mentor</a></li>
              <li><a href="#curriculum" onClick={(e) => handleNavClick(e, 'curriculum')}>Curriculum</a></li>
              <li><a href="#interactive-features" onClick={(e) => handleNavClick(e, 'interactive-features')}>Interactive Features</a></li>
              <li><a href="#certification" onClick={(e) => handleNavClick(e, 'certification')}>Certification</a></li>
              <li><a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')}>Testimonials</a></li>
              <li><a href="#alumni" onClick={(e) => handleNavClick(e, 'alumni')}>Alumni's Placed</a></li>
            </ul>
          </nav>
        </div>
      </header>


      {/* Course Overview Section */}
      <section id="overview" className="course-overview">
        <div className="course-details">
          <h2>Course Details</h2>
          <p><strong>Fees:</strong> $299</p>
          <p><strong>Start Date:</strong> September 15, 2024</p>
          <p><strong>Duration:</strong> 12 Weeks</p>
          <p><strong>Timings:</strong> 7 PM - 9 PM (Mon-Fri)</p>
        </div>
        <div className="course-image">
          <img src="/images/react-banner.png" alt="Course" />
        </div>
      </section>


  {/* Video Learning Section */}
  <section class="video-learning">
    <h2>Explore and Learn</h2>
    <div class="video-container">
        <div class="video-grid">
            <div class="video-item">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dGcsHMXbSOA" title="React JS Crash Course" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>React JS Crash Course</p>
            </div>
            <div class="video-item">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/yfoY53QXEnI" title="CSS Crash Course For Absolute Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>CSS Crash Course For Absolute Beginners</p>
            </div>
        </div>
    </div>
</section>


     {/* Skills You Will Gain Section */}
<section id="skills" className="skills-gained">
  <h2>Skills You Will Gain</h2>
  <ul>
     <li>User Experience (UX) Research and Design</li>
      <li>User Interface (UI) Design Principles</li>
      <li>Wireframing and Prototyping</li>
      <li>Information Architecture</li>
      <li>Interaction Design</li>
      <li>Visual Design and Typography</li>
      <li>Color Theory and Aesthetics</li>
      <li>User Testing and Usability Evaluation</li>
      <li>Responsive Design and Mobile Optimization</li>
      <li>UI/UX Design Tools (Figma, Adobe XD, Sketch)</li>
    </ul>
</section>


     {/* Roadmap to Success Section */}
<section id="roadmap" className="roadmap">
  <h2>Roadmap to Success</h2>
  <div className="roadmap-container">
    <div className="roadmap-step">
      <h3>Step 1: Video Lessons</h3>
      <p>Engage in comprehensive video tutorials covering every aspect of React development. Learn from experts and build a strong foundation.</p>
    </div>
    <div className="roadmap-step">
      <h3>Step 2: Hands-on Projects</h3>
      <p>Apply your knowledge in real-world projects. Build complete applications and gain practical experience to showcase in your portfolio.</p>
    </div>
    <div className="roadmap-step">
      <h3>Step 3: Mentorship Sessions</h3>
      <p>Receive personalized guidance from experienced mentors. Get your questions answered and overcome any learning challenges.</p>
    </div>
    <div className="roadmap-step">
      <h3>Step 4: Community Support</h3>
      <p>Join a vibrant community of learners. Collaborate, share ideas, and get feedback to accelerate your learning journey.</p>
    </div>
  </div>
</section>


<section id="demo-instructor" className="demo-instructor-section">
  <div className="demo-container">
    <h2>Book a Demo Session</h2>
    <p>Experience our teaching style and get a taste of what you'll learn in the course.</p>
    <button onClick={handleBookNowClick} className="demo-action-button">Book Now</button>
  </div>
  <div className="instructor-container">
    <img src="/images/react-instructor.jpg" alt="John Doe" className="instructor-photo" />
    <div className="instructor-info">
      <h3>John Doe</h3>
      <p>John Doe is an experienced front-end developer with a deep understanding of React. He has over 10 years of industry experience and has taught thousands of students.</p>
    </div>
  </div>
</section>


{/* Course Curriculum Section */}
<section id="curriculum" className="course-curriculum">
  <h2>Course Curriculum</h2>
  <div className="curriculum-content">
    <div className="curriculum-column">
      <ul className="curriculum-list">
        <li data-subtopics="Introduction to React,JSX Basics,Setting Up the Environment">
          <div className="module-title">Module 1:</div>
          <div className="module-content">Foundations of UI/UX Design</div>
        </li>
        <li data-subtopics="JSX in Depth,Conditional Rendering,Lists and Keys">
          <div className="module-title">Module 2:</div>
          <div className="module-content">User Research and Analysis</div>
        </li>
        <li data-subtopics="Creating Components,Passing Props,Reusing Components">
          <div className="module-title">Module 3:</div>
          <div className="module-content">Information Architecture and Planning</div>
        </li>
        <li data-subtopics="State Basics,Component Lifecycle,Updating State">
          <div className="module-title">Module 4:</div>
          <div className="module-content">Wireframing and Prototyping</div>
        </li>
        <li data-subtopics="Handling User Input,Form Submission,Form Validation">
          <div className="module-title">Module 5:</div>
          <div className="module-content">Visual Design Fundamentals</div>
        </li>
      </ul>
    </div>
    <div className="curriculum-column">
      <ul className="curriculum-list">
        <li data-subtopics="useState Hook,useEffect Hook,Custom Hooks">
          <div className="module-title">Module 6:</div>
          <div className="module-content">Interaction Design and Usability</div>
        </li>
        <li data-subtopics="Client-Side Routing,Nested Routes,Programmatic Navigation">
          <div className="module-title">Module 7:</div>
          <div className="module-content">Responsive Design and Mobile UX</div>
        </li>
        <li data-subtopics="Context API,Higher-Order Components,Render Props">
          <div className="module-title">Module 8:</div>
          <div className="module-content">Design Tools and Workflow</div>
        </li>
        <li data-subtopics="Code Splitting,Memoization,Performance Optimization Techniques">
          <div className="module-title">Module 9:</div>
          <div className="module-content">Design Case Studies and Trends</div>
        </li>
        <li data-subtopics="Project Setup,Development Workflow,Deployment and Optimization">
          <div className="module-title">Module 10:</div>
          <div className="module-content">Portfolio Development and Career Launch</div>
        </li>
      </ul>
    </div>
    <div className="subtopics-display"></div>
  </div>
</section>

{/* Assessments & Interactive Features Section */}
<section id="interactive-features" className="interactive-features">
    <h2>Assessments & Interactive Features</h2>
    <div className="features-grid">
        <div className="feature-box">
            <h3>Assignments</h3>
            <div className="progress-bar">
                <div className="progress" style={{ width: '0%' }}></div>
            </div>
            <p>0% Completed</p>
        </div>
        <div className="feature-box">
            <h3>Quizzes</h3>
            <div className="progress-bar">
                <div className="progress" style={{ width: '0%' }}></div>
            </div>
            <p>0% Completed</p>
        </div>
        <div className="feature-box">
            <h3>Discussion Forums</h3>
            <div className="progress-bar">
                <div className="progress" style={{ width: '0%' }}></div>
            </div>
            <p>0% Participated</p>
        </div>
        <div className="feature-box">
            <h3>Peer Reviews</h3>
            <div className="progress-bar">
                <div className="progress" style={{ width: '0%' }}></div>
            </div>
            <p>0% Reviewed</p>
        </div>
    </div>
</section>

     {/* Certification Details Section */}
<section id="certification" className="certification-details">
  <div className="certification-content">
    <div className="certification-text">
      <h2>Certification</h2>
      <p>Upon successful completion of this course, you will receive a certificate from Level Up, recognized in the industry.</p>
    </div>
    <div className="certification-image">
      <img src="/images/react-certificate.png" alt="Certificate" />
    </div>
  </div>
</section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonial-cards">
          {testimonialsData.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <img src={testimonial.photo} alt={`${testimonial.name}'s photo`} />
              <p className="quote">"{testimonial.quote}"</p>
              <p className="name">{testimonial.name}</p>
              <p className="title">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Alumni Placement Section */}
      <section id="alumni" className="alumni-placement">
        <h2>Our Students Placed At</h2>
        <div className="logo-grid">
          <img src="/images/google.png" alt="Google" />
          <img src="/images/microsoft.jpg" alt="Microsoft" />
          <img src="/images/amazon.png" alt="Amazon" />
          <img src="/images/apple.png" alt="Apple" />
          <img src="/images/meta.jpg" alt="Meta" />
          <img src="/images/infosys.png" alt="Infosys" />
          <img src="/images/tcs.png" alt="TCS" />
          <img src="/images/wipro.png" alt="Wipro" />
          <img src="/images/hcl.png" alt="HCL" />
          <img src="/images/ibm.jpg" alt="IBM" />
          <img src="/images/ntt-data.png" alt="NTT DATA" />
          <img src="/images/ey.png" alt="EY" />
          <img src="/images/cognizant.png" alt="Cognizant" />
          <img src="/images/capgemini.png" alt="Cap Gemini" />
          <img src="/images/state-street.png" alt="State Street" />
        </div>
      </section>
      </div>
  )
};
export default UIUXCourse;