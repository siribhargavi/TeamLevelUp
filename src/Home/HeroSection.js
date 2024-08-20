import React, { useEffect } from 'react';
import './HeroSection.css';
import TextCycler from './TextCycler';

const HeroSection = () => {
  useEffect(() => {
    const networkAnimation = document.querySelector('.network-animation');
    const numDots = 30; // Adjust the number of dots
    const dots = [];
    const lines = [];

    // Create dots
    for (let i = 0; i < numDots; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.top = `${Math.random() * 100}%`;
      networkAnimation.appendChild(dot);
      dots.push(dot);
    }

    // Function to connect dots with lines
    function connectDots() {
      // Clear previous lines
      lines.forEach(line => line.remove());
      lines.length = 0;

      // Create lines between dots
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dot1 = dots[i].getBoundingClientRect();
          const dot2 = dots[j].getBoundingClientRect();
          const distance = Math.hypot(dot1.x - dot2.x, dot1.y - dot2.y);

          if (distance < 200) { // Adjust max distance for connections
            const line = document.createElement('div');
            line.classList.add('line');
            const length = Math.hypot(dot2.x - dot1.x, dot2.y - dot1.y);
            line.style.width = `${length}px`;
            line.style.transform = `rotate(${Math.atan2(dot2.y - dot1.y, dot2.x - dot1.x)}rad)`;
            line.style.left = `${dot1.left + dot1.width / 2}px`;
            line.style.top = `${dot1.top + dot1.height / 2}px`;
            networkAnimation.appendChild(line);
            lines.push(line);
          }
        }
      }
    }

    connectDots(); // Initial connection
    const intervalId = setInterval(connectDots, 1000); // Update connections every second
    window.addEventListener('resize', connectDots); // Reconnect dots on resize

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', connectDots);
    };
  }, []);

  return (
    <div className="hero-section">
      <div className="network-animation"></div>
      <div className="hero-image">
        <img src="/images/hero-background.png" alt="Hero" />
      </div>
      <div className="hero-content">
        <h1><TextCycler /> Courses to <br /> Level Up Your Skills</h1>
        <p>Empower your future by gaining the skills that matter. Whether you're just starting out or looking to advance, our expert-led courses are meticulously crafted to help you achieve your goals and stay ahead in today's competitive landscape. With a focus on practical knowledge, real-world applications, and innovative teaching methods, we equip you with the tools needed to excel in your career. Join a community of learners who are transforming their lives through education, and unlock your potential to make a lasting impact in your field.</p>
        <button className="cta-button">Level Up Now</button>
      </div>
    </div>
  );
};

export default HeroSection;
