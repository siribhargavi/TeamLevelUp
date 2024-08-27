import React, { useState, useEffect } from 'react';
import './BannerSection.css';

const BannerSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const banners = [
    { id: 1, img: '/images/aws.jpg', alt: 'AWS' },
    { id: 3, img: '/images/datascience1.jpg', alt: 'Data Science' },
    { id: 4, img: '/images/frontend.jpg', alt: 'Frontend' },
    { id: 5, img: '/images/javainAI.jpg', alt: 'Java in AI' },
   
  ];
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(slideInterval); // Cleanup on unmount
  }, [currentIndex]); // Dependency array to restart interval when currentIndex changes

  return (
    <div className="banner-section">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="banner-container">
        <div
          className="banner-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((banner) => (
            <div key={banner.id} className="banner-slide">
              <img src={banner.img} alt={banner.alt} className="banner-image" />
            </div>
          ))}
        </div>
      </div>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default BannerSection;
