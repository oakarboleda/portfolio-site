import React from 'react';
import './HomePage.scss';
import Hero from '../../components/Hero/Hero';


const HomePage = () => (
  <div className="section" id="home" data-testid="HomePage">
    <div className="canvas">
      <div id='particles-js'/>
      <Hero/>
  </div>
  </div>
);

export default HomePage;
