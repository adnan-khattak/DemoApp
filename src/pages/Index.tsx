import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Categories from '../components/Categories';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
        <Navigation />
      {/* Main content with left spacing */}
      <main className="ml-2 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-12">
        <div className="max-w-7xl">
          <Hero />
          <Stats />
          <Categories />
        </div>
      </main>
    </div>
  );
};

export default Index;