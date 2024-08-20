import React, { useState, useEffect } from 'react';
import './TextCycler.css';

const TextCycler = () => {
  const words = ["Expert-Led", "Cutting-Edge", "Industry-Recognized", "Future-Proof"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500); // Change the word every 1.5 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <span className="cycling-word">{words[currentWordIndex]}</span>
  );
};

export default TextCycler;
