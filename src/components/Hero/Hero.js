import React, { Component } from "react";
import {illustration} from "../../resumeData";
import girl from "../../assets/lottie/44975-girl-with-a-cup-of-coffee.json";
import "./Hero.scss";
import Hello from "../Hello/Hello";
import Lottie from "lottie-react";
import { particles } from "./particles";
import 'particles.js';
import TypedText from '../TypedText/TypedText';
import  {Container, Row } from 'react-bootstrap';



export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.player = React.createRef(); // initialize your ref

  }
  componentDidMount() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = false;
    script.innerHTML = (particles);
    document.body.appendChild(script);
  }
  render() {
    return(
      <Container className="hero-container" id="hero">
        <Row className="canvas-content-wrapper">
        <div className="col-md-6 mt-4">
          <div className="canvas-content">
          <div className="canvas-content-text-centred">
            <Hello/>
            <p className="canvas-content-small">I am</p>
            <p className="canvas-content-text-title">Oak Arboleda</p>
            < TypedText/>
          </div>
          </div>

        </div>
        <div className="col-md-6 mt-4">
          <div className="canvas-content-image-wrapper">
            {illustration.animated ? (
              <Lottie animationData={girl} />
            ) : (
              <img className="profile" alt="profile" />
            )}
          </div>
        </div>
        </Row>
      </Container>
   )
  }

}
