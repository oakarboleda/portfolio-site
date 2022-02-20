import React, { Component } from "react";
import './Skills.scss';
import {Fade} from "react-reveal";
import { skillsSection} from "../../resumeData";
import SoftwareSkills from '../../components/SoftwareSkills/SoftwareSkills';

class SkillsPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      skillsSection: null,
    }
  }
  render() {
    return (
            <Fade right duration={1000}>
                <div className="skills-text-div">
                  <figure className="text-center">
                    <h1 className= "skills-heading justify-content-center">
                    {skillsSection.title}
                  </h1>
                  <p className="subTitle skills-text-subtitle">
                    {skillsSection.subTitle}
                  </p>
                  </figure>
                  <SoftwareSkills />
                  <div>
                    {skillsSection.skills.map((skills, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle skills-text">
                          {skills}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </Fade>

    );
  }
}

export default SkillsPage;