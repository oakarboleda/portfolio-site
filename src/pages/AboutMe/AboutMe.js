import React from 'react';
import './AboutMe.scss';
import SkillsPage from '../SkillPage/SkillPage';
import StackProgress from '../../components/StackProgress/StackProgress';

const AboutMe = () => {
  return (
    <section id="about" className="about">
      <div className="container-fluid mt-4">
        <div className="row no-gutters">
          <div className="image col-md-5 d-flex align-items-stretch justify-content-center">
           <img src={require('../../assets/cartoonself.png')} className="img-fluid"   alt="self"/>
          </div>
          <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
            <div className="content d-flex flex-column justify-content-center">
              <SkillsPage/>
            </div>
          </div>
          <StackProgress />
        </div>
      </div>
    </section>
  )
}



export default AboutMe;
