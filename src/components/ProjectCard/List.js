import React, { useCallback, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';


const List = ({repos}) => {
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
                <CardFooter star_count={repo.stargazers_count} repo_url={repo.svn_url} pushed_at={repo.pushed_at} />
              </div>
            </div>
          </div>
        );
      })}

    </div>

  );
};

const CardButtons = ({ svn_url }) => {
  return (
    <>
      <div className="row justify-content-center">
        <button className="btn btn-primary btn-sm m-2">
          Clone Project
        </button>
        <button className="btn btn-primary btn-sm m-2">
          Repo
        </button>
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
      <p className="text-muted">Updated {updated_at}</p>
    </div>
    </div>
    </div>
  );
};

export default List;