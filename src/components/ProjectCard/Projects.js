import React, { useState, useEffect } from "react";
import { Container, Row } from 'react-bootstrap';
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
    <Container>
      <Row id="projects">
        <h4> Current Projects </h4>
            <ProjectCard
              key={appState.item}
            isLoading={appState.loading}
            repos={appState.repos}
          />
      </Row>
    </Container>
  );
};

export default Project;
