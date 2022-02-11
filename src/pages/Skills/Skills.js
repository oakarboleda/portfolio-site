import React, { Component } from "react";
import { skills } from '../../resumeData';
import './Skills.scss';

import { Container, Row, Col } from 'react-bootstrap'

function TechSkills(props) {
  const skillItem = props.skills.map((skill, i) => {
    // const skillSwitch = (val) => {
    //   switch (val) {
    //     case '1':
    //       return (1)
    //     case '2':
    //       return (2)
    //     default:
    //       return (3)
    //   }
    // }
    return (
      <Col>
        <a key={i} target="_blanck" href={skill.url} className="grid-item main">
        <img className="skill-img" src={skill.img} alt={skill.text} title={skill.title} />
      </a>
      </Col>
    );
  });

  return (
    <React.Fragment>
      <h5 className="skills-header">{props.title}</h5>
      <Container>
        <Row>{skillItem}</Row>
      </Container>
    </React.Fragment>
  );
}

class Skills extends Component {
  render() {
    return (
      <div className="container-fluid App-Content" id="tech">
        <h3>I like to work with technologies such as:</h3>
        <Row md={8}>
          <TechSkills className="align-content-center" title="Technology" skills={skills.hard} />
        </Row>
        <Row md={8}>
          <TechSkills title="Tools" skills={skills.soft} />

        </Row>
        <Row md={8}>
          <TechSkills title="Managment" skills={skills.managment} />

        </Row>
      </div>
    );
  }
}

export default Skills;



