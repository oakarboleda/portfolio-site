import React from 'react';
import './HomePage.scss';
import Hero from '../../components/Hero/Hero';

import Aboutme from '../AboutMe/AboutMe'
import Skills from '../Skills/Skills';
import ContactPage from '../ContactPage/ContactPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';


const HomePage = () => (
  <div className="HomePage" data-testid="HomePage">
    <Hero/>
    <Aboutme />
    <Skills />
    <ProjectsPage/>
    <ContactPage/>
  </div>

);


export default HomePage;
