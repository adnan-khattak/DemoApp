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
      
      <section className="bg-gradient-to-br from-blue-500 to-blue-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">My Business Dashboard</h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          Manage your business, track performance, and grow your customer base all in one place.
        </p>
      </section>

      <Hero variant="growing" />
      <Stats variant="growing" />

      <section className="max-w-7xl mx-auto my-12 px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Business Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyBusiness;