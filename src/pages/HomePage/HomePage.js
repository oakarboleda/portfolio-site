import React from 'react';
import './HomePage.scss';
import {Container} from 'react-bootstrap';
import Hero from '../../components/Hero/Hero';


const HomePage = () => (
  <div className="home-section" id="home">
    <div id='particles-js'/>
    <Container fluid className="home-content">
      <Hero/>
    </Container>
  </div>
);

export default HomePage;
