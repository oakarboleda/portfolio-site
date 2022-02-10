import React, { useCallback, useEffect, useState } from 'react';
import {
  Heading,
  Box,
  Skeleton,
  Text,
  Stack,
  Button,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import axios from 'axios';
import { FaGithubSquare } from 'react-icons/fa';


const List = (props) => {
  const {
    name,
    description,
    svn_url,
    stargazers_count,
    languages_url,
    pushed_at,
  } = props;
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <Grid templateColumns='repeat(4, 1fr)' spacing={4} gap={6}>
      {repos.map((repo) => {
        return (
          <GridItem>
            <Box
              role={'group'}
              p={6}
              maxW={'330px'}
              w={'full'}
              boxShadow={'2xl'}
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}>
              <Heading color='#262626' fontSize={'2xl'} fontFamily={'body'}>
                {repo.name} </Heading>
              <Text
                color='#868dc3'
                textAlign={'center'}
                py={3}>{(!repo.description)?"":repo.description || <Skeleton count={3} />}</Text>
              <br/>
              {repo.svn_url ?
                <CardButtons svn_url={repo.svn_url} /> : <Skeleton count={2} />}
              <hr />
              {repo.language ? (
                <Language languages_url={repo.language} repo_url={repo.svn_url} />
              ) : (
                <Skeleton count={3} />
              )}


              <CardFooter star_count={repo.stargazers_count} repo_url={repo.svn_url} pushed_at={repo.pushed_at} />


            </Box>

          </GridItem>
        );
      })}
    </Grid>

  );
};
const Language = ({ language, repo_url }) => {
  const [data, setData] = useState([]);

  const handleRequest = useCallback(async () => {
    try {
      const response = await axios.get(language);
      return setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }, [language]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const array = [];
  let total_count = 0;
  for (let index in data) {
    array.push(index);
    total_count += data[index];
  }

  return (
    <div className="pb-3">
      Languages:{" "}
      {array.length
        ? array.map((language) => (
          <Text
            color='gray'
            key={language}
            className="badge badge-dark card-link"
            href={repo_url + `/search?l=${language}`}
            target=" _blank"
          >
            {language}:{" "}
            {Math.trunc((data[language] / total_count) * 1000) / 10} %
          </Text>
        ))
        : "code yet to be deployed."}
    </div>
  );
};
const CardButtons = ({ svn_url }) => {
  return (
    <>
      <Stack  py={4} direction='row' spacing={4}>
        <Button leftIcon={<FaGithubSquare />} colorScheme='pink' variant='solid'>
          Clone Project
        </Button>
        <Button leftIcon={<FaGithubSquare />} colorScheme='pink' variant='solid'>
          Repo
        </Button>
      </Stack>
    </>
  );
};
const CardFooter = ({ star_count, repo_url, pushed_at }) => {
  const [updated_at, setUpdated_at] = useState("0 mints");

  const handleUpdatetime = useCallback(() => {
    const date = new Date(pushed_at);
    const nowdate = new Date();
    const diff = nowdate.getTime() - date.getTime();
    const hours = Math.trunc(diff / 1000 / 60 / 60);

    if (hours < 24) {
      if (hours < 1) return setUpdated_at("just now");
      let measurement = hours === 1 ? "hour" : "hours";
      return setUpdated_at(`${hours.toString()} ${measurement} ago`);
    } else {
      const options = { day: "numeric", month: "long", year: "numeric" };
      const time = new Intl.DateTimeFormat("en-US", options).format(date);
      return setUpdated_at(`on ${time}`);
    }
  }, [pushed_at]);

  useEffect(() => {
    handleUpdatetime();
  }, [handleUpdatetime]);

  return (
    <p className="card-text">
      <a
        href={repo_url + "/stargazers"}
        target=" _blank"
        className="text-dark text-decoration-none"
      >
        <span className="text-dark card-link mr-4">
          <i className="fab fa-github" /> Stars{" "}
          <span className="badge badge-dark">{star_count}</span>
        </span>
      </a>
      <Text fontSize='xs' className="text-muted">Updated {updated_at}</Text>
    </p>
  );
};

export default List;