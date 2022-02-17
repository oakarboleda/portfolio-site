import React, { useState, useEffect } from "react";
import withListLoading from '../ListLoading/ListLoading';
import List from './List';
import './ProjectCard.scss';

const Project = () => {
  const ProjectCard = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.github.com/users/oakarboleda/repos`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  return (
    <div className="container" id="projects">
      <div className="row">
            <ProjectCard
              key={appState.id}
            isLoading={appState.loading}
            repos={appState.repos}
          />
      </div>
    </div>
  );
};

export default Project;
