import React,{useEffect} from 'react';
import './DataEngineeringCourse.css';

const DataEngineeringCourse = () => {
  const testimonialsData = [
    {
      id: 1,
      name: 'Emily R.',
      title: 'Software Engineer',
      photo: '/images/testi1.jpeg',
      quote: 'The Bootcamp transformed my career. The instructors were top-notch, and the curriculum was spot-on.',
    },
    {
      id: 2,
      name: 'Michael S.',
      title: 'Data Scientist',
      photo: '/images/testi3.jpeg',
      quote: 'I gained practical skills that I could immediately apply to my job. Highly recommend!',
    },
    {
      id: 3,
      name: 'Sophia L.',
      title: 'UI/UX Designer',
      photo: '/images/testi3.jpeg',
      quote: 'The hands-on projects were challenging but rewarding. I built a portfolio that landed me my dream job.',
    },
  ];
  useEffect(() => {
    const items = document.querySelectorAll('.curriculum-list li');
    const subtopicsDisplay = document.querySelector('.subtopics-display');

    const handleMouseEnter = (event) => {
      const subtopics = event.target.getAttribute('data-subtopics').split(',');
      subtopicsDisplay.classList.add('active');
      subtopicsDisplay.innerHTML = `
        <h3>Subtopics</h3>
        <ul>
          ${subtopics.map((subtopic) => `<li>${subtopic}</li>`).join('')}
        </ul>
      `;
    };

    const handleMouseLeave = () => {
      subtopicsDisplay.classList.remove('active');
      subtopicsDisplay.innerHTML = '';
    };

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
              <li><a href="#overview">Overview</a></li>
              <li><a href="#course-details">Course Details</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#roadmap">Roadmap to Success</a></li>
              <li><a href="#mentor">Mentor</a></li>
              <li><a href="#curriculum">Curriculum</a></li>
              <li><a href="#interactive-features">Interactive Features</a></li>
              <li><a href="#certification">Certification</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#alumni">Alumni's Placed</a></li>
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

     {/* Skills You Will Gain Section */}
<section id="skills" className="skills-gained">
  <h2>Skills You Will Gain</h2>
  <ul>
    <li>Introduction to Data Engineering</li>
    <li>Data Modeling and Design</li>
    <li>Data Warehousing and Data Marts</li>
    <li>ETL/ELT Processes and Tools</li>
    <li>Big Data Technologies (Hadoop, Spark)</li>
    <li>Cloud Data Platforms (AWS, GCP, Azure)</li>
    <li>Data Pipelines and Orchestration</li>
    <li>Data Quality and Governance</li>
    <li>Data Security and Privacy</li>
    <li>Data Visualization and Business Intelligence</li>
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


 {/* Mentor and Demo Section */}
<section id="mentor-demo" className="mentor-demo-section">
  <div className="demo-box">
    <h2>Book a Demo Session</h2>
    <p>Experience our teaching style and get a taste of what you'll learn in the course.</p>
    <button className="demo-button">Book Now</button>
  </div>
  <div className="mentor-box">
    <img src="/images/react-instructor.jpg" alt="John Doe" className="mentor-image" />
    <div className="mentor-info">
      <h3>Turner</h3>
      <p>Turner is a seasoned data engineering expert with over 10 years of experience building robust data solutions.</p>
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
          <div className="module-content">Data Engineering Fundamentals</div>
        </li>
        <li data-subtopics="JSX in Depth,Conditional Rendering,Lists and Keys">
          <div className="module-title">Module 2:</div>
          <div className="module-content">Data Integration and Transformation</div>
        </li>
        <li data-subtopics="Creating Components,Passing Props,Reusing Components">
          <div className="module-title">Module 3:</div>
          <div className="module-content">Big Data Processing</div>
        </li>
        <li data-subtopics="State Basics,Component Lifecycle,Updating State">
          <div className="module-title">Module 4:</div>
          <div className="module-content">Data Modeling and Warehousing</div>
        </li>
        <li data-subtopics="Handling User Input,Form Submission,Form Validation">
          <div className="module-title">Module 5:</div>
          <div className="module-content">Cloud Data Engineering</div>
        </li>
      </ul>
    </div>
    <div className="curriculum-column">
      <ul className="curriculum-list">
        <li data-subtopics="useState Hook,useEffect Hook,Custom Hooks">
          <div className="module-title">Module 6:</div>
          <div className="module-content">Data Orchestration and Governance</div>
        </li>
        <li data-subtopics="Client-Side Routing,Nested Routes,Programmatic Navigation">
          <div className="module-title">Module 7:</div>
          <div className="module-content">Data Security and Privacy</div>
        </li>
        <li data-subtopics="Context API,Higher-Order Components,Render Props">
          <div className="module-title">Module 8:</div>
          <div className="module-content">Data Visualization and Analysis</div>
        </li>
        <li data-subtopics="Code Splitting,Memoization,Performance Optimization Techniques">
          <div className="module-title">Module 9:</div>
          <div className="module-content">Machine Learning and Data Engineering</div>
        </li>
        <li data-subtopics="Project Setup,Development Workflow,Deployment and Optimization">
          <div className="module-title">Module 10:</div>
          <div className="module-content">Capstone Project</div>
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
                <div className="progress" style={{ width: '85%' }}></div>
            </div>
            <p>85% Completed</p>
        </div>
        <div className="feature-box">
            <h3>Quizzes</h3>
            <div className="progress-bar">
                <div className="progress" style={{ width: '60%' }}></div>
            </div>
            <p>60% Completed</p>
        </div>
        <div className="feature-box">
            <h3>Discussion Forums</h3>
            <div className="progress-bar">
                <div className="progress" style={{ width: '75%' }}></div>
            </div>
            <p>75% Participated</p>
        </div>
        <div className="feature-box">
            <h3>Peer Reviews</h3>
            <div className="progress-bar">
                <div className="progress" style={{ width: '90%' }}></div>
            </div>
            <p>90% Reviewed</p>
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
export default DataEngineeringCourse;