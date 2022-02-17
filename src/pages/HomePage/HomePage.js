import React from 'react';
import './HomePage.scss';
import Hero from '../../components/Hero/Hero';
import AboutMe from '../AboutMe/AboutMe';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import ContactForm from '../ContactPage/ContactPage';


const HomePage = () => (

  <div className="home-section" id="home">
    <div className="hero-section container-fluid mt-4">
      <Hero />
      <AboutMe />
      <ProjectsPage />
      <ContactForm />
    </div>
  </div>
);

export default HomePage;
