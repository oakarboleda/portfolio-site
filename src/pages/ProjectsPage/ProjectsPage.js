import React from 'react';
import './ProjectsPage.scss';
import Projects from '../../components/ProjectCard/Projects';



const ProjectsPage = () => (
  <section id="portfolio" className="portfolio section-bg">
    <div className="container mt-4">
      <div className="section-title">
        <h1 className="font-loader">Portfolio</h1>
        <p className="font-loader">Here is a list of current repos living in my github.</p>
      </div>
      <div className="row portfolio-container">
        <Projects/>
      </div>

    </div>
  </section>
);


export default ProjectsPage;
