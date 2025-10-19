import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const NotFound = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <div style={{ 
        textAlign: 'center', 
        padding: '4rem 1rem',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <h1 style={{ 
          fontSize: '4rem', 
          fontWeight: '700', 
          color: '#2563eb',
          marginBottom: '1rem'
        }}>
          404
        </h1>
        <h2 style={{ 
          fontSize: '2rem', 
          fontWeight: '600', 
          color: '#1e293b',
          marginBottom: '1rem'
        }}>
          Page Not Found
        </h2>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#64748b',
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          style={{
            display: 'inline-block',
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: '600',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;