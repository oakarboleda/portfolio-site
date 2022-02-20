import React from 'react';
import './Hello.scss';
import Typical from "react-typical";

const Hello = () => (
  <div className="row align-items-stretch m-auto">
    <Typical
      className="font-loader customtext"
      steps={[ "Hello,", 5000,
        "Bonjour,", 4000,
        "¡Hola,", 4000,
        "Kumusta,",4000]}
      loop={Infinity}
    />
  </div>
);



export default Hello;
