import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Categories from '../components/Categories';

const MyBusiness = () => {
  return (
    
    <div>
      <Header />
      <Navigation />
      <Hero variant="growing" />
      <Stats variant="growing" />
      <Categories />
    </div>
  );
};

export default MyBusiness;