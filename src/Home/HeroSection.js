import React from 'react';
import './HeroSection.css';
import TextCycler from './TextCycler';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <TextCycler />
      </div>
    </div>
  );
};

export default HeroSection;
