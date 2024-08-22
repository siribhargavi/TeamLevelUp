import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  { id: 1, name: 'Emily R.', title: 'Software Engineer', photo: '/images/testi1.jpeg', quote: 'The Bootcamp transformed my career. The instructors were top-notch, and the curriculum was spot-on.' },
  { id: 2, name: 'Michael S.', title: 'Data Scientist', photo: '/images/testi1.jpeg', quote: 'I gained practical skills that I could immediately apply to my job. Highly recommend!' },
  { id: 3, name: 'Sophia L.', title: 'UI/UX Designer', photo: '/images/testi1.jpeg', quote: 'The hands-on projects were challenging but rewarding. I built a portfolio that landed me my dream job.' },
  { id: 4, name: 'David T.', title: 'DevOps Engineer', photo: '/images/testi1.jpeg', quote: 'The real-world scenarios prepared me for my job role. The learning environment was amazing.' },
  { id: 5, name: 'Isabella M.', title: 'Machine Learning Engineer', photo: '/images/testi1.jpeg', quote: 'An incredible learning experience. The course content was up-to-date and relevant.' },
  { id: 6, name: 'Lucas J.', title: 'Full Stack Developer', photo: '/images/testi1.jpeg', quote: 'This program gave me the skills and confidence to transition into a new career path.' },
  { id: 7, name: 'Grace K.', title: 'Product Manager', photo: '/images/testi1.jpeg', quote: 'The insights I gained from this program were invaluable in my role as a Product Manager.' },
  { id: 8, name: 'Ethan W.', title: 'Cybersecurity Analyst', photo: '/images/testi1.jpeg', quote: 'I was able to apply what I learned immediately at work. A fantastic course!' },
  { id: 9, name: 'Ava P.', title: 'Cloud Architect', photo: '/images/testi1.jpeg', quote: 'The cloud computing module was incredibly comprehensive and easy to follow.' },
  { id: 10, name: 'James H.', title: 'AI Researcher', photo: '/images/testi1.jpeg', quote: 'The AI-focused courses were advanced and covered the latest technologies in the field.' },
  { id: 11, name: 'Olivia C.', title: 'Blockchain Developer', photo: '/images/testi1.jpeg', quote: 'Learning about blockchain through this course was an eye-opening experience. Highly recommend!' },
  { id: 12, name: 'William B.', title: 'Network Engineer', photo: '/images/testi1.jpeg', quote: 'The networking courses were thorough and practical. I feel well-prepared for my new role.' },
  { id: 13, name: 'Sophia A.', title: 'Data Analyst', photo: '/images/testi1.jpeg', quote: 'This program gave me the analytical skills needed to succeed as a data analyst.' },
  { id: 14, name: 'Henry M.', title: 'Systems Administrator', photo: '/images/testi1.jpeg', quote: 'I appreciated the hands-on labs, which provided real-world experience in system administration.' },
  { id: 15, name: 'Mia D.', title: 'Digital Marketing Specialist', photo: '/images/testi1.jpeg', quote: 'The digital marketing strategies I learned were immediately applicable to my job.' },
  { id: 16, name: 'Alexander P.', title: 'Web Developer', photo: '/images/testi1.jpeg', quote: 'The web development track was incredibly detailed, and the projects were challenging.' },
  { id: 17, name: 'Charlotte B.', title: 'AI Developer', photo: '/images/testi1.jpeg', quote: 'The AI courses were advanced and offered insights into the latest trends in the field.' },
  { id: 18, name: 'Benjamin F.', title: 'Security Consultant', photo: '/images/testi1.jpeg', quote: 'The cybersecurity courses were top-notch and helped me secure a position in the industry.' },
  { id: 19, name: 'Amelia R.', title: 'Data Engineer', photo: '/images/testi1.jpeg', quote: 'The data engineering courses were comprehensive and covered all the essential topics.' },
  { id: 20, name: 'Noah G.', title: 'IT Consultant', photo: '/images/testi1.jpeg', quote: 'This program gave me the tools and knowledge to excel in my consulting role.' },

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
