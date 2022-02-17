import React from 'react';
import './SoftwareSkills.scss';
import {skillsSection} from "../../resumeData";

const SoftwareSkills = () => (
  <div className="software-skills-main-div">
    <ul className="dev-icons">
      {skillsSection.softwareSkills.map((skills, i) => {
        return (
          <li
            key={i}
            className="software-skill-inline"
          >

            <div className="col-sm">
              <p>{skills.icon}</p></div>
            <p className="font-loader">{skills.skillName}</p>
          </li>
        );
      })}
    </ul>
  </div>
);


export default SoftwareSkills;
