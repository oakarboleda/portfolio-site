import React from 'react';
import './HomePage.scss';
import Hero from '../../components/Hero/Hero';
import AboutMe from '../AboutMe/AboutMe';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import Contact from '../ContactPage/ContactPage';
import Footer from '../../components/Footer/Footer';

// import Contact from '../ContactAirTable/ContactAirtable';


const HomePage = () => (
  <div className="home-section" id="home">
    <div className="hero-section container-fluid mt-4">
      <Hero />
      <AboutMe />
      <ProjectsPage />
      <Contact />
    </div>
    <Footer/>
  </div>

);

export default HomePage;
