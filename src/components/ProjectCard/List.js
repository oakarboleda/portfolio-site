import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Card, Col, Button } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';


const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <Row fluid>

      {repos.map((repo) => {
        return (
          <Col md={4} className="py-md-2">

            <Card>
              <Card.Body>
            <p>
                {repo.name} </p>
              <p>{(!repo.description)?"":repo.description || <Skeleton count={3} />}</p>
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

              </Card.Body>
            </Card>
          </Col>
        );
      })}

    </Row>

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
        ? array.map((languages_url) => (
          <p
            color='gray'
            key={languages_url}
            className="badge badge-dark card-link"
            href={repo_url + `/search?l=${languages_url}`}
            target=" _blank"
          >
            {languages_url}:{" "}
            {Math.trunc((data[languages_url] / total_count) * 1000) / 10} %
          </p>
        ))
        : "code yet to be deployed."}
    </div>
  );
};
const CardButtons = ({ svn_url }) => {
  return (
    <>
      <Row>
        <Button variant="primary" size="md">
          Clone Project
        </Button>
        <Button variant="primary" size="md">
          Repo
        </Button>
      </Row>
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
    <Row className="CardFooter">
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
      <p className="text-muted">Updated {updated_at}</p>
    </p>
    </Row>
  );
};

export default List;