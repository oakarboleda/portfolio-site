import React, { Component } from "react";
import './Skills.scss';
import SkillBar from 'react-skillbars';
const skills = [
  {type: "React", level: 64},
  {type: "Javascript", level: 75},
  {type: "React Native", level: 75},
  {type: "NodeJS", level: 35},
];

class SkillsPage extends Component {
  render() {
    return (
      <div className="container" id="tech">
        <h3>Current Skills</h3>
        <br/>
        <SkillBar skills={skills}/>
      </div>
    );
  }
}

export default SkillsPage;