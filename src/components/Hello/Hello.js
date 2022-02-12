import React from 'react';
import './Hello.scss';

import Typical from "react-typical";

const Hello = () => (
  <div className="Hello">
    <Typical
      steps={[ "Hello,", 3000,
        "Hallo Welt,",3000,
        "Bonjour,", 3000,
        "¡Hola,", 3000,
        "Hei maailma,", 3000,
        "Kumusta,",3000,
        "안녕하세요 월드,",3000,
        "こんにちは世界,",3000]}
      loop={Infinity}
      wrapper="p"
    />
  </div>
);



export default Hello;
