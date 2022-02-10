import React, { useState, useEffect } from "react";
import {
  Grid,
  Heading,
  Flex
} from '@chakra-ui/react';
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
    <Flex>
      <Grid
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      direction={'row'}
      id="projects" className="bg-light">
        <Heading mb={4} color="#0b0710"> Current Projects </Heading>

          <ProjectCard
            isLoading={appState.loading}
            repos={appState.repos}
          />
          ))
          };


    </Grid>
    </Flex>
  );
};

export default Project;
