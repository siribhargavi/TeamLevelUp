import React from 'react';
import './LiveSessions.css';

const LiveSessions = () => {
  const sessions = [
    {
      id: 1,
      title: 'Introduction to React',
      date: 'September 22, 2024',
      time: '7:00 PM - 8:30 PM',
      description: 'An introductory session covering the basics of React and its ecosystem.',
      instructor: 'John Doe'
    },
    {
      id: 2,
      title: 'Advanced State Management',
      date: 'September 25, 2024',
      time: '7:00 PM - 8:30 PM',
      description: 'A deep dive into state management in React using Context API and Redux.',
      instructor: 'Jane Smith'
    },
    {
      id: 3,
      title: 'React Performance Optimization',
      date: 'September 29, 2024',
      time: '7:00 PM - 8:30 PM',
      description: 'Best practices for optimizing the performance of your React applications.',
      instructor: 'Alex Johnson'
    }
  ];

  return (
    <div className="live-sessions-page">
      <header className="page-header">
        <h1>Live Sessions</h1>
        <p>Join our upcoming live sessions and enhance your learning experience.</p>
      </header>

      <div className="sessions-list">
        {sessions.map(session => (
          <div key={session.id} className="session-card">
            <h2>{session.title}</h2>
            <p><strong>Date:</strong> {session.date}</p>
            <p><strong>Time:</strong> {session.time}</p>
            <p><strong>Description:</strong> {session.description}</p>
            <p><strong>Instructor:</strong> {session.instructor}</p>
            <button className="join-button">Join Session</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveSessions;
