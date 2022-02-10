import React from 'react';
import './ProjectsPage.scss';
import Projects from '../../components/ProjectCard/Projects';



const ProjectsPage = () => (
  <div className="ProjectsPage" data-testid="ProjectsPage">
  <Projects/>
  </div>
);


export default ProjectsPage;
