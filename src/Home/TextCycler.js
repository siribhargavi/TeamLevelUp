import React, { useState, useEffect } from 'react';
import './TextCycler.css';

const TextCycler = () => {
  const phrases = [
    {
      word: "Expert-Led",
      sentence: "Our courses are taught by industry-leading professionals who bring real-world experience to the classroom."
    },
    {
      word: "Cutting-Edge",
      sentence: "Stay ahead of the curve with our courses on the latest technologies and methodologies."
    },
    {
      word: "Industry-Recognized",
      sentence: "Gain certifications that are recognized and valued by employers worldwide."
    },
    {
      word: "Future-Proof",
      sentence: "Equip yourself with the skills needed to thrive in tomorrow's job market."
    }
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Change the phrase every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [phrases.length]);

  return (
    <div>
      <h1 className="cycling-word">{phrases[currentPhraseIndex].word} Courses to Elevate Your Expertise and Level Up.</h1>
    </div>
  );
};

export default TextCycler;
