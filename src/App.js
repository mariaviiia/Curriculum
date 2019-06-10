import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';
import Skills from './Skills.js';
import Portfolio from './Portfolio.js'
import Contact from './Contact.js'
import Copy from './Copy.js'
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import _ from "lodash";

library.add(faBars, faArrowCircleDown)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.Scroller = React.createRef();
    this.state = {
      active: false,
      hidden: false,
    };
    this.opening = this.opening.bind(this);
    this.scrollDown = this.scrollDown.bind(this);
  }

  componentDidMount() {
    window[$] = $;
    $(this.Scroller.current).on('scroll', _.throttle((e) => {
      console.log(e);
  },1e2));
  }

  opening() {
    this.setState({
      active: true
    });
    setTimeout(() => {
      this.setState({
        hidden: true
      });
    }, 600);
  }

  scrollDown() {
    $(this.Scroller.current).animate({ scrollTop: window.innerHeight }, 800);  
}

  render() {

    return (
      <main
        id="envelope_body"
        className={`w3-animate-zoom ${this.state.active ? "active" : ""}`}
        onClick={this.opening}
      >
        <div>
          <div id="front_1" className={this.state.hidden ? "hidden" : ""}>
            <h6 className="w3-animate-zoom fading">Click Me!</h6>
          </div>
          <div id="front_2" className={this.state.hidden ? "hidden" : ""} />
          <div id="front_3" className={this.state.hidden ? "hidden" : ""} />
          <div id="front_4" className={this.state.hidden ? "hidden" : ""} />
        </div>
        <div className="container-fluid m-0 p-0 h-100 w-100 portfolio" ref={this.Scroller}>
          <div className="row m-0 p-0 h-100">
            <div className="col m-0 p-0 h-100">
              <div id="back" className='intro'>
                <div className="row h-100 w-100 m-0 p-0">
                  <div className="col h-100 w-100 m-0 p-0">
                    <div className="container-fluid w-100 h-100 m-0 p-0 birds-container">
                      <div className="bird-container bird-container--one">
                        <div className="bird bird--one"></div>
                      </div>

                      <div className="bird-container bird-container--two">
                        <div className="bird bird--two"></div>
                      </div>

                      <div className="bird-container bird-container--three">
                        <div className="bird bird--three"></div>
                      </div>

                      <div className="bird-container bird-container--four">
                        <div className="bird bird--four"></div>
                      </div>

                    </div>
                    <div className='container-fluid w-100 m-0 p-0 h-100'>
                      <div className="row w-100 m-0 p-0 h-100">
                        <div className='col logo m-0 w-100 h-100'>
                        </div>
                        <div className='container-fluid d-flex w-100 h-100 p-0 navigationContainer'>
                          <Fab
                              className='navigationButton'
                            >
                              <NavigationIcon className="navigation" />
                            </Fab>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className='container-fluid d-flex w-100 p-0 scrollContainer'>
              <Fab
                className='scroller'
                onClick={this.scrollDown}
              >
                <NavigationIcon className="scroll" />
              </Fab>
            </div> */}
              <Skills/>
              <Portfolio />
              <Contact />
              <Copy />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default (App);

