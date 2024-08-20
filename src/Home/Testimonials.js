import React from 'react';
import './Testimonials.css';

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
    photo: '/images/testi2.jpeg',
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

const Testimonials = () => {
  return (
    <section className="testimonials">
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
  );
};

export default Testimonials;
