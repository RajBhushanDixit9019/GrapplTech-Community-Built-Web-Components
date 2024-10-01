// HeroSection.js
import React from 'react';
import './HeroSection.css'; // Import your CSS file for styling

const HeroSection = ({ title, subtitle, imageUrl, buttonText, onButtonClick }) => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <button className="hero-button" onClick={onButtonClick}>
            {buttonText}
          </button>
        </div>
        <div className="hero-image">
          <img src={imageUrl} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
