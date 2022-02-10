export var particles = ` particlesJS("particles-js", {
    particles: {
      number: { 
        value: 10, 
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
        value: 0,
        random: false,
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
      line_linked: {
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
    retina_detect: false
  })
  `;