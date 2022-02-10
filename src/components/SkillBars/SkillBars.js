import React from 'react';
import PropTypes from 'prop-types';
import './SkillBars.scss';
import ProgressBar from "react-bootstrap/ProgressBar";

const SkillBars = ({ skill, value, isScrolled }) => (
  <div className="SkillBars">
    <ProgressBar
      className={!isScrolled ? "progress" : " progress-bar-animation"}
      now={value}
    />
  </div>
);

SkillBars.propTypes = {};

SkillBars.defaultProps = {};

export default SkillBars;
