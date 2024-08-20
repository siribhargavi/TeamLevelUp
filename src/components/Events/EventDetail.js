// src/pages/EventDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './EventsPage.css';

const EventDetail = () => {
  const { eventId } = useParams();
  
  const events = [
    { id: 1, title: 'Annual Tech Conference', date: 'March 20, 2024', description: 'A comprehensive conference covering the latest in technology.' },
    { id: 2, title: 'AI & Machine Learning Summit', date: 'April 10, 2024', description: 'Explore the future of AI and machine learning with industry leaders.' },
    { id: 3, title: 'Cloud Computing Expo', date: 'May 5, 2024', description: 'The largest expo dedicated to cloud computing advancements.' },
    { id: 4, title: 'Cybersecurity Forum', date: 'June 15, 2024', description: 'Learn about the latest in cybersecurity from top experts.' },
    { id: 5, title: 'Data Science Workshop', date: 'July 25, 2024', description: 'Hands-on workshop for mastering data science techniques.' },
  ];

  const event = events.find(e => e.id === parseInt(eventId));

  if (!event) {
    return <p>Event not found!</p>;
  }

  return (
    <div className="event-detail">
      <h1>{event.title}</h1>
      <p><strong>Date:</strong> {event.date}</p>
      <p>{event.description}</p>
      {/* Add more detailed content here as needed */}
    </div>
  );
};

export default EventDetail;
