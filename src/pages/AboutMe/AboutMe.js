import React from 'react';
import './AboutMe.scss';
import { about } from '../../resumeData';


const AboutMe = () => {
  return (
    <section id="about" className="about">
      <div className="container-fluid mt-4">
        <div className="row no-gutters">
          <div className="image col-md-4 d-flex align-items-stretch justify-content-center justify-content-md-start px-4">
           <img src={require('../../assets/cartoonself.png')} className="img-fluid"   alt="self"/>
          </div>
          <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
            <div className="content d-flex flex-column justify-content-center">
              <h3>{about.heading}</h3>
              <p>{about.message}</p>
              <div className="row">
                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className='bi bi-emoji-smile'/>
                    <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="0"
                          className="purecounter">65</span>
                    <p><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-journal-richtext" />
                    <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="0"
                          className="purecounter">85</span>
                    <p><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan
                    </p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-clock" />
                    <span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="0"
                          className="purecounter">7</span>
                    <p><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



export default AboutMe;
