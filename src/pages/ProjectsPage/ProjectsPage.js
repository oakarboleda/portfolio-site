import React from 'react';
import './ProjectsPage.scss';
import Projects from '../../components/ProjectCard/Projects';



const ProjectsPage = () => (
  <section id="portfolio" className="portfolio section-bg">
    <div className="container mt-4">
      <div className="section-title">
        <h1 className="font-loader">Portfolio</h1>
        <p className="font-loader">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
          consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
          in iste officiis commodi quidem hic quas.</p>
      </div>
      <div className="row portfolio-container">
        <Projects/>
      </div>

    </div>
  </section>
);


export default ProjectsPage;
