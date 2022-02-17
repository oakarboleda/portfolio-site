import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './stylesheets/App.scss';
import HomePage from './pages/HomePage/HomePage';
import AboutMe from './pages/AboutMe/AboutMe';
import SkillPage from './pages/SkillPage/SkillPage';
import WebFont from 'webfontloader';
import ContactPage from './pages/ContactPage/ContactPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';


export default function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Secular One', 'Nunito Sans']
      }
    });
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/" component={AboutMe} />
        <Route path="/" component={SkillPage} />
        <Route path="/" component={ProjectsPage} />
        <Route path="/" component={ContactPage} />
      </Switch>
    </Router>

  );
}
