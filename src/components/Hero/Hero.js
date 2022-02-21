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
                value: "#232323",
              },
            },
            fpsLimit: 120,
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover:{
                  enable: false,
                  mode: "repulse"
                },
                onclick: { enable: true, mode: "push" },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            particles: {
              number: {
                value: 25,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                // value: "#0b0c10"
              },
              shape: {
                type: "polygon",
                stroke: {
                  width: 2,
                  // color: "#30716e"
                  color: "#46496c"
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
                value: 1,
                random: true,
                anim: {
                  enable: false
                }
              },
              collisions: {
                enable: true,
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
              links: {
                enable: false,
                distance: 100,
                color: "#6ab4b1",
                opacity: 1,
                width: 1
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
              }
            },
            detectRetina: false,
          }}
        />
        <Hello
        />
        <div className="row align-items-center g-5 py-5 mb-3">
          <div className="col-xl order-first justify-content-center py-5 word-content">
            <p className="font-loader canvas-content-text-small text-center">I am</p>
            <h2 className="font-loader text-center" id="cursive">Oak Arboleda</h2>
            <p className="font-loader canvas-content-text-small text-center">Powered by caffiene.</p>
          </div>
          <div className="col-xl justify-content-center img-content">
          {illustration.animated ? (
              <Lottie className="my-image" animationData={girl} />
            ) : (
              <img className="d-block mx-sm-auto img-fluid" alt="my-pic"
              />
            )}
          </div>
        </div>
        </div>

   )
  }

}
