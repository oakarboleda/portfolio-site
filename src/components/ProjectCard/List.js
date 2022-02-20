import React, { useCallback, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import axios from 'axios'

const List = ({ repos }) => {

  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <div className="row">
      {repos.map((repo) => {
        return (
          <div className="col-sm justify-content-center m-4" key={repo.id}>
            <div className='card text-center shadow'>
              <div className='card-body text-dark'>
                <h4 className='card-title'>
                {repo.name} </h4>
                <p className='card-text text-secondary'>{(!repo.description)?"":repo.description || <Skeleton count={3} />}</p>
              <br/>
              {repo.svn_url ?
                <CardButtons svn_url={repo.svn_url} /> : null}
              <hr />
                {repo.languages_url ? (
                  <Language languages_url={repo.languages_url} repo_url={repo.svn_url} />
                ) : (
                  <Skeleton count={3} />
                )}
                <CardFooter star_count={repo.stargazers_count} repo_url={repo.svn_url} pushed_at={repo.pushed_at} />
              </div>
            </div>
          </div>
        );
      })}

    </div>

  );
};
const Language = ({ languages_url, repo_url }) => {
  const [data, setData] = useState([]);

  const handleRequest = useCallback(async () => {
    try {
      const response = await axios.get(languages_url);
      return setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }, [languages_url]);

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
          <a
            key={language}
            className="badge badge-light card-link"
            href={repo_url + `/search?l=${language}`}
            target=" _blank"
          >
            {language}:{" "}
            {Math.trunc((data[language] / total_count) * 1000) / 10} %
          </a>
        ))
        : "code yet to be deployed."}
    </div>
  );
};
const CardButtons = ({ svn_url }) => {
  return (
    <>
      <div className="row justify-content-center">
        <a
          href={`${svn_url}/archive/master.zip`}
          className="btn btn-outline-secondary btn-sm m-1"
        >
          <i className="fab fa-github" /> Clone Project
        </a>
        <a href={svn_url} target=" _blank" className="btn btn-outline-secondary btn-sm m-1">
          <i className="fab fa-github" /> Repo
        </a>
      </div>
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
    <div className="row justify-content-center">
    <div className="CardFooter">
      <div className="card-text">
      <a
        href={repo_url + "/stargazers"}
        target=" _blank"
        className="text-dark text-decoration-none"
      >
      </a>
        <span className="text-dark card-link mr-4">
          <i className="fab fa-github" /> Stars{" "}
          <span className="badge badge-dark">{star_count}</span>
        </span>
        <p className="text-muted"><small>Updated {updated_at}</small></p>
    </div>
    </div>
    </div>
  );
};

export default List;