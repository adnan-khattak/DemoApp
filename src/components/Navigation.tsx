import React from 'react';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="nav">
      <div className="nav-container">
        <a href="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
          Home
        </a>
        <a href="/business" className={`nav-link ${location.pathname === '/business' ? 'active' : ''}`}>
          My Business
        </a>
      </div>
    </nav>
  );
};

export default Navigation;