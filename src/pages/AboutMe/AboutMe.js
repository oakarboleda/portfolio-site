import React from 'react';
import './AboutMe.scss';
import { Button} from 'react-bootstrap';
import { about } from '../../resumeData';


const AboutMe = ({ heading, message, link, imgSize, resume }) => {
  return (

    <div className="container-fluid m-0 ">
      <div className="row d-md-flex-row  overflow-hidden">
        <div className="col-md-4  p-0 col-12 bg-light d-flex overflow-hidden ">
          <div className="card p-0   w-100 h-100 text-light   border-0 ">
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img className="card-img h-100 w-100"
                 src="https://unsplash.com/photos/3TLl_97HNJo"
                 alt="Card image" />
              <div className="card-img-overlay p-1 p-md-3">
                <div className="position-relative  w-100 h-25  d-flex">
                  <div className="container-fluid align-self-start   mt-2 mb-2">
                    <div className="row">
                      <div className="col-5 col-md-3">
                        <h4 className="mt-1">Oak</h4>
                      </div>
                      <div className="col-md-9 col-7 text-right">
                        <div className="row align-items-center">
                          <div className="col-12 align-self-center">
                            <hr className="border border-border-light mt-3" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="col-md-8  pt-5 pt-md-1 pb-5 overflow-hidden">

          <div className="container-fluid p-md-5 d-flex align-items-center h-100">
            <div className="row justify-content-md-center">

              <div className="col-md-8">
        <p className="display-4 mb-5 text-center">{about.heading}</p>
       <h1 className="  mb-5 pt-md-2 pt-sm-4">{about.message}</h1>
        {about.resume && (
          <p className="lead text-center">
            <Button
              className="btn btn-outline-dark btn-lg"
              href={resume}
              target="_blank"
              rel="noreferrer noopener"
              role="button"
              aria-label="Resume/CV"
            >
              Resume
            </Button>
          </p>
        )}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  )
}



export default AboutMe;
