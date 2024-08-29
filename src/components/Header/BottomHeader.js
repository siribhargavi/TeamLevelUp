// src/components/Header/BottomHeader.js
import React from 'react';
import './BottomHeader.css';

const BottomHeader = () => {
  return (
    <div className="bottom-header">
      <nav>
        <ul>
       {/* Courses Dropdown */}
<li className="dropdown">
  <a href="#">Courses</a>
  <div className="dropdown-content">
    
   {/* Top Courses */}
<div className="dropdown-submenu">
  <a href="#">Top Courses</a>
  <div className="dropdown-submenu-content">
    <a href="/courses/react">React</a>
    <a href="/courses/java">Java</a>
    <a href="/courses/python">Python</a>  
      <a href="/courses/aws-admin">AWS Fundamentals</a>
      <a href="/courses/azure">Azure Fundamentals</a>
      <a href="/courses/gcp">GCP Fundamentals</a>
      <a href="/courses/data-science">Data Science Basics</a>
  </div>
</div>


    {/* Bundled Courses */}
    <div className="dropdown-submenu">
      <a href="#">Bundled Courses</a>
      <div className="dropdown-submenu-content">
        <a href="/courses/java-fullstack">Java Fullstack Development</a>
        <a href="/courses/frontend-development">Frontend Development</a>
        <a href="/courses/python-fullstack">Python Fullstack Development</a>
        <a href="/courses/data-science">Data Science</a>
        <a href="/courses/cloud-computing">Cloud Computing Bundle</a>
        <a href="/courses/devops">DevOps Essentials</a>
        <a href="/courses/fullstack-js">Fullstack JavaScript</a>
        <a href="/courses/cyber-security-bundle">Cyber Security Professional</a>
      </div>
    </div>

    {/* Individual Courses */}
    <div className="dropdown-submenu">
      <a href="#">Individual Courses</a>
      <div className="dropdown-submenu-content">
        <a href="/courses/react">React</a>
        <a href="/courses/java">Java</a>
        <a href="/courses/python">Python</a>
        <a href="/courses/data-science">Data Science</a>
        <a href="/courses/cloud-computing">Cloud Computing</a>
        <a href="/courses/ai-ml">AI & ML</a>
        <a href="/courses/data-engineering">Data Engineering</a>
        <a href="/courses/cyber-security">Cyber Security</a>
        <a href="/courses/ui-ux">UI/UX Design</a>
        <a href="/courses/blockchain">Blockchain</a>
        <a href="/courses/docker-kubernetes">Docker & Kubernetes</a>
        <a href="/courses/ethical-hacking">Ethical Hacking</a>
        <a href="/courses/microservices">Microservices Architecture</a>
        <a href="/courses/agile-methodologies">Agile Methodologies</a>
        <a href="/courses/sql-databases">SQL Databases</a>
        <a href="/courses/angular">Angular</a>
      </div>
    </div>

    {/* Offer Courses */}
    <div className="dropdown-submenu">
      <a href="#">Offer Courses</a>
      <div className="dropdown-submenu-content">
        <a href="/courses/offer-1">Cloud Computing Essentials</a>
        <a href="/courses/offer-2">Introduction to Python</a>
        <a href="/courses/offer-3">Java Programming Basics</a>
        <a href="/courses/offer-4">AI & Machine Learning</a>
        <a href="/courses/offer-5">Data Science Bootcamp</a>
        <a href="/courses/offer-6">Frontend Web Development</a>
      </div>
    </div>
    
  </div>
</li>




          {/* Features Dropdown */}
          <li className="dropdown">
            <a href="#">Features</a>
            <div className="dropdown-content">
              <a href="/features/interactive-learning">Interactive Learning</a>
              <a href="/features/hands-on-labs">Hands-On Labs</a>
              <a href="/features/live-sessions">Live Sessions</a>
              <a href="/features/certifications">Certifications</a>
              <a href="/features/multi-language-support">Multi-language Support</a>
              <a href="/features/mobile-access">Mobile Access</a>
            </div>
          </li>
           {/* Career Services Dropdown */}
           <li className="dropdown">
            <a href="#">Career Services</a>
            <div className="dropdown-content">
              <a href="/career/resume-building">Resume Building</a>
              <a href="/career/interview-preparation">Interview Preparation</a>
              <a href="/career/job-placement">Job Placement</a>
              <a href="/career/career-coaching">Career Coaching</a>
            </div>
          </li>



          {/* Community Dropdown */}
          <li className="dropdown">
            <a href="#">Community</a>
            <div className="dropdown-content">
              <a href="/community/forums">Forums</a>
              <a href="/community/events">Events</a>
              <a href="/community/mentorship">Mentorship</a>
              <a href="/community/student-network">Student Network</a>
            </div>
          </li>


          {/* Support Dropdown */}
          <li className="dropdown">
            <a href="#">Support</a>
            <div className="dropdown-content">
              <a href="/support/contact">Contact Us</a>
              <a href="/support/faq">FAQ</a>
              <a href="/support/help-center">Help Center</a>
              <a href="/support/live-chat">Live Chat</a>
              <a href="/support/technical-support">Technical Support</a>
              <a href="/support/community-support">Community Support</a>
            </div>
          </li>
         
          {/* Additional Sections */}
          <li className="dropdown">
            <a href="#">Company</a>
            <div className="dropdown-content">
              <a href="/about-us">About Us</a>
              <a href="/blog">Blog</a>
              <a href="/partners">Partners</a>
              <a href="/affiliates">Affiliate Program</a>
              <a href="/press">Press</a>
              <a href="/careers">Careers</a>
            </div>
          </li>

          
        </ul>
      </nav>
    </div>
  );
};

export default BottomHeader;
