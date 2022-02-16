import React, { Component } from "react";
import {illustration} from "../../resumeData";
import girl from "../../assets/lottie/44975-girl-with-a-cup-of-coffee.json";
import "./Hero.scss";
import Hello from "../Hello/Hello";
import Lottie from "lottie-react";
import Particles from 'react-tsparticles';

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.player = React.createRef();

  }
  render() {
    return(
      <div id="hero" className="container col-xxl-8 px-4 py-5">
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "#0A0908",
              },
            },
            fpsLimit: 120,
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                  mode: "repulse"
                },
                onclick: { enable: true, mode: "push" },
                resize: true
              },
            },
            particles: {
              number: {
                value: 25,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              shape: {
                type: "polygon",
                stroke: {
                  width: 2,
                  color: "#868dc3"
                },
                polygon: {
                  nb_sides: 6
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: .3,
                random: true,
                anim: {
                  enable: false
                }
              },
              size: {
                value: 8,
                random: true,
                anim: {
                  enable: false,
                  speed: 4,
                  size_min: 0.2,
                  sync: true
                }
              },
              move: {
                enable: true,
                speed: 0.6,
                direction: "top",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: true,
                  rotateX: 600,
                  rotateY: 1200
                }
              },
              line_linked: {
                enable: false,
                distance: 100,
                color: "#6ab4b1",
                opacity: 1,
                width: 1
              },
            },
            detectRetina: true,
          }}
        />
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 mb-3">
          <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
            <Hello/>
            <p className="canvas-content-text-small">I am</p>
            <p className="canvas-content-text-title">Oak Arboleda</p>
            <p className="canvas-content-text-xsmall">Powered by caffiene.</p>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
          {illustration.animated ? (
              <Lottie animationData={girl} />
            ) : (
              <img  className="d-block mx-sm-auto img-fluid" alt="my-pic"
              />
            )}
          </div>
        </div>
        </div>

   )
  }

}
