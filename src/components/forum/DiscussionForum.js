import React from 'react';
import { Link } from 'react-router-dom';
import './DiscussionForum.css';

const DiscussionForum = () => {
  const categories = [
    { id: 1, name: 'Interview Experiences', description: 'Share your interview experiences, tips, and strategies.' },
    { id: 2, name: 'Interview Questions', description: 'Discuss common interview questions, solutions, and best practices.' },
    { id: 3, name: 'System Design', description: 'Dive into system design problems, solutions, and architectural discussions.' },
    { id: 4, name: 'Company-Specific Discussions', description: 'Discussions related to interviews, work culture, and experiences at specific companies.' },
    { id: 5, name: 'Career Advice', description: 'Seek and share advice on career progression, job searches, and professional development.' },
    { id: 6, name: 'Resume and Portfolio Review', description: 'Get feedback on your resume, portfolio, and LinkedIn profile.' },
    { id: 7, name: 'Coding Competitions', description: 'Discuss strategies, problems, and experiences from coding competitions.' },
    { id: 8, name: 'General Discussion', description: 'Open-ended discussions on any other topics not covered by the specific categories.' },
  ];

  const headingText = "Join the Dialogue";

  return (
    <div className="discussion-forum">
      <h1 className="gradient-heading">
        {headingText.split("").map((char, index) => (
          <span
            key={index}
            className="animated-letter"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
      <div className="category-grid">
        {categories.map(category => (
          <Link to={`/community/forums/category/${category.id}`} key={category.id} className="category-box">
            <h2>{category.name}</h2>
            <p>{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DiscussionForum;
