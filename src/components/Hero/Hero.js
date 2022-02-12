import React, { Component } from "react";
import {illustration} from "../../resumeData";
import girl from "../../assets/lottie/44975-girl-with-a-cup-of-coffee.json";
import "./Hero.scss";
import Hello from "../Hello/Hello";
import Lottie from "lottie-react";
import { particles } from "./particles";
import 'particles.js';


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
      <div className="col-10 mx-auto">

        <div className="row">
          <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">

          <div className="canvas-content">
          <div className="canvas-content-text-centred">
            <Hello/>
            <p className="canvas-content-text-small">I am</p>
            <p className="canvas-content-text-title">Oak Arboleda</p>
            <p className="canvas-content-text-xsmall">Powered by caffiene.</p>
          </div>
          </div>

        </div>

          <div className="col-lg-6 order-2 order-lg-2 header-img">

          {illustration.animated ? (
              <Lottie animationData={girl} />
            ) : (
              <img  className="img-fluid animated"
                    alt="my-pic"
              />
            )}
          </div>

        </div>
        </div>
   )
  }

}
