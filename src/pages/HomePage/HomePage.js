import React from 'react';
import './HomePage.scss';
import Hero from '../../components/Hero/Hero';


const HomePage = () => (

  <div className="home-section" id="home">
    <div className="hero-section container-fluid mt-4">
      <Hero/>
    </div>
  </div>
);

export default HomePage;
