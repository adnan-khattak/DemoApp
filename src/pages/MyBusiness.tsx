import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Stats from '../components/Stats';

const MyBusiness = () => {
  const features = [
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Track your business performance with detailed analytics and insights.'
    },
    {
      icon: '🛍️',
      title: 'Product Management',
      description: 'Easily manage your products and services with our intuitive interface.'
    },
    {
      icon: '📱',
      title: 'Mobile Ready',
      description: 'Access your business dashboard from any device, anywhere.'
    },
    {
      icon: '🔒',
      title: 'Secure Platform',
      description: 'Your business data is protected with enterprise-grade security.'
    },
    {
      icon: '💬',
      title: 'Customer Support',
      description: 'Get help when you need it with our dedicated support team.'
    },
    {
      icon: '📈',
      title: 'Growth Tools',
      description: 'Access tools and resources to help your business grow.'
    }
  ];

  return (
    <div>
      <Header />
      <Navigation />
      
      <section className="business-header">
        <h1 className="business-title">My Business Dashboard</h1>
        <p className="business-subtitle">
          Manage your business, track performance, and grow your customer base all in one place.
        </p>
      </section>

      <Hero variant="growing" />
      <Stats variant="growing" />

      <section className="business-content">
        <h2 className="section-title">Business Features</h2>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyBusiness;