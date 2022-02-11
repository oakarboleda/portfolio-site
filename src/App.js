import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import AboutMe from './pages/AboutMe/AboutMe';
import Footer from './components/Footer/Footer.js';
import './stylesheets/custom.scss';
import Skills from './pages/Skills/Skills';
import Projects from './components/ProjectCard/Projects';
import ContactPage from './pages/ContactPage/ContactPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
    };
  }
  render() {
    return (
      <Router>
        <Header />
        <div className="main-container">
          <HomePage />
          <AboutMe />
          <Skills />
          <Projects />
          <ContactPage />
        </div>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
