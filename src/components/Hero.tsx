import React from 'react';

interface HeroProps {
  variant?: 'selling' | 'growing';
}

const Hero = ({ variant = 'selling' }: HeroProps) => {
  const content = variant === 'selling' 
    ? {
        title: 'Want customers\nin just 2 steps?',
        buttonText: 'Start Selling'
      }
    : {
        title: 'Ready to grow\nyour business online?',
        buttonText: 'Get Started'
      };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          {content.title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </h1>
        <button className="cta-button">{content.buttonText}</button>
      </div>
      
      <div className="hero-media">
        <div style={{ position: 'relative' }}>
          <img 
            src="/src/assets/hero-meeting.jpg" 
            alt="Business professionals collaborating" 
            className="hero-image" 
          />
          <button className="play-button" aria-label="Play video">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,3 19,12 5,21"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;