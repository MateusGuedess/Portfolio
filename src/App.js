import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Particles from 'react-particles-js'
import Background from '../src/images/background_image_three.jpeg'
import { NavLink, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <body>
          <div className="container-um">
          <h1>Mateus Guedes</h1>
          <h2>A <div style={{display: 'inline-block'}}>FRONT-END</div> DEVELOPER THAT ARE IN CONSTANT DEVELOPMENT< br />AND<br />TRYING TO BE KNOW FOR THE KNOWLEDGE THAT I HAVE.</h2>
            <Particles 
                params={{
                  particles: {
                    number: {
                      value: 80,
                      density: {
                        enable: true,
                        value_area: 800
                      }
                    },
                    color: {
                      value: "#ffffff"
                    },
                    shape: {
                      type: "circle",
                      stroke: {
                        width: 0,
                        color: "#000000"
                      },
                      polygon: {
                        nb_sides: 5
                      },
                      image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100
                      }
                    },
                    opacity: {
                      value: 0.5,
                      random: false,
                      anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                      }
                    },
                    size: {
                      value: 3,
                      random: true,
                      anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                      }
                    },
                    line_linked: {
                      enable: true,
                      distance: 150,
                      color: "#ffffff",
                      opacity: 0.4,
                      width: 1
                    },
                    move: {
                      enable: true,
                      speed: 6,
                      direction: "none",
                      random: false,
                      straight: false,
                      out_mode: "out",
                      bounce: false,
                      attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                      }
                    }
                  },
                  interactivity: {
                    detect_on: 'canvas',
                    events: {
                      onhover: {
                        enable: true,
                        mode: 'repulse'
                      },
                      onclick: {
                        enable: true,
                        mode: "push"
                      },
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
                  retina_detect: true
                }}
                style={{
                  width: '100%',
                  backgroundSize: 'cover',
                  backgroundImage: `url(${Background})` 
                }}
            />
          </div>
          <div className="container-dois">
            <div className="aboutme"><h1>ABOUT ME</h1></div>
            <div className="aboutme-text">
                <p>
                  My name is Mateus Guedes da Conceição. I’m a self-taught web developer. I build beautiful, 
                  usable web Applications using best practices and the latest W3C web standards. 
                  I specialize in front-end development, user experience using modern tools in the build process. 
                  I tasked myself to find a passion and that is how i got into Web Development. 
                  My goal is to work fully as a web developer in a team of amazing people who share the same passion, 
                  and work daily to fulfil it . I am ready to start working with you. <NavLink to='mailto:teugeudes@outlook.com'>Say Hello <i style={{marginRight: '5px'}} className="fa fa-envelope-o" /></NavLink> 
                </p>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
