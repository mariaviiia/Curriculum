import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './Skills.scss';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faHtml5, faCss3Alt, faJsSquare, faAdobe } from '@fortawesome/free-brands-svg-icons'
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

library.add(fab, faHtml5, faCss3Alt, faJsSquare, faAdobe)

const ExpansionPanel = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  },
  expanded: {
    margin: 'auto',
  },
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
}))(MuiExpansionPanelDetails);

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      hidden: false,
      styles: false,
    };
    this.stylesNone = this.stylesNone.bind(this);
  }

  handleChange = panel => (event, expanded, ) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
    this.setState({
      hidden: !this.state.hidden,
    });
  };

  stylesNone() {
    this.setState({
      styles: !this.state.styles,
    });
  };


  render() {
    const { expanded } = this.state;

    return (
      <div className='container-fluid m-0 p-0 w-100 h-100 skillsSection' id='Skills'>
        <div className='row m-0 p-0 w-100 h-100'>
          <div className='col m-0 p-0 w-100 h-100'>
            <div className="container w-100 justify-content-center d-flex align-content-center expandedContainer">
              <div className="row h-auto m-0 w-100">
                <div className="card h-auto m-0 w-100 expansionPanel">
                  <ExpansionPanel
                    square
                    expanded={expanded === 'panel1'}
                    onChange={this.handleChange('panel1')}
                    className='m-0 p-0'
                  >
                    <ExpansionPanelSummary className={`container styles m-0 p-0 ${this.state.hidden ? "hidden" : "expansion"}`}>
                      <Typography className='row justify-content-center d-flex w-100 m-0 p-0'><FontAwesomeIcon icon={['fab', 'html5']} className='col w-100 skillsIcon p-0 m-0-' /></Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={`container p-0 m-0 w-100 styles ${this.state.hidden ? "showDetails" : ""}`}>
                      <div className='row expansionDetails m-0 w-100'>
                        <p className='skillName w-100 col-12'>HTML 5</p>
                        <div className="w-100 col-12 containerSkills">
                          <div className="skillSeccion html5">90%</div>
                        </div>
                        <p className='skillName w-100 col-12'>React</p>
                        <div className="w-100 col-12 containerSkills">
                          <div className="skillSeccion react">80%</div>
                        </div>
                        <p className='skillName w-100 col-12'>Angular</p>
                        <div className="w-100 col-12 containerSkills">
                          <div className="skillSeccion angular">65%</div>
                        </div>
                      </div>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel
                    square
                    expanded={expanded === 'panel2'}
                    onChange={this.handleChange('panel2')}
                    className='m-0 p-0'
                  >
                    <ExpansionPanelSummary className={`container styles m-0 p-0 ${this.state.hidden ? "hidden" : "expansion"}`}>
                      <Typography className='row justify-content-center d-flex w-100 m-0 p-0'><FontAwesomeIcon icon={['fab', 'css3-alt']} className='col w-100 skillsIcon p-0 m-0' /></Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={`container p-0 m-0 w-100 styles ${this.state.hidden ? "showDetails" : ""}`}>
                      <div className='row expansionDetails m-0 w-100'>
                        <p className='skillName w-100 col-12'>CSS 3</p>
                        <div className="w-100 col-12 containerSkills">
                          <div className="skillSeccion css3">90%</div>
                        </div>

                        <p className='skillName w-100 col-12'>SASS</p>
                        <div className="w-100 col-12 containerSkills">
                          <div className="skillSeccion sass">90%</div>
                        </div>

                        <p className='skillName w-100 col-12'>Bootstrap</p>
                        <div className="w-100 col-12 containerSkills">
                          <div className="skillSeccion bootstrap">80%</div>
                        </div>
                      </div>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel
                    square
                    expanded={expanded === 'panel3'}
                    onChange={this.handleChange('panel3')}
                    className='m-0 p-0'
                  >
                    <ExpansionPanelSummary className={`container styles m-0 p-0 ${this.state.hidden ? "hidden" : "expansion"}`}>
                      <Typography className='row justify-content-center d-flex w-100 m-0 p-0'><FontAwesomeIcon icon={['fab', 'js-square']} className='col w-100 skillsIcon p-0 m-0' /></Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={`container d-flex justify-content-center p-0 m-0 w-100 styles ${this.state.hidden ? "showDetailsPanel3" : ""}`}>
                      <div className='row expansionDetails m-0 w-100'>
                        <p className='skillName w-100 col-12'>JavaScript</p>
                        <div className="w-100 col-12 containerSkills">
                          <div className="skillSeccion js">90%</div>
                        </div>

                        <p className='skillName w-100 col-12'>React</p>
                        <div className="w-100 col-12 containerSkills">
                          <div className="skillSeccion react">80%</div>
                        </div>

                        <p className='skillName w-100 col-12'>Angular</p>
                        <div className="w-100 col-12 containerSkills">
                          <div className="skillSeccion angular">65%</div>
                        </div>

                        <p className='skillName w-100 col-12'>Ionic</p>
                        <div className="w-100 col-12 containerSkills">
                          <div className="skillSeccion ionic">50%</div>
                        </div>

                        <p className='skillName w-100 col-12'>jQuery</p>
                        <div className="w-100 col-12 containerSkills">
                          <div className="skillSeccion jquery">65%</div>
                        </div>
                      </div>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel
                    square
                    expanded={expanded === 'panel4'}
                    onChange={this.handleChange('panel4')}
                    className='m-0 p-0'
                  >
                    <ExpansionPanelSummary className={`container expansion m-0 p-0 ${this.state.styles ? "styles" : "stylesNone"} ${this.state.hidden ? "hidden" : "expansion"}`} onClick={this.stylesNone}>
                      <Typography className='row justify-content-center d-flex w-100 m-0 p-0'><FontAwesomeIcon icon={['fab', 'adobe']} className='col w-100 skillsIcon p-0 m-0' /></Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={`container p-0 m-0 w-100 stylesNone ${this.state.hidden ? "showDetails" : ""}`}>
                      <div className='row expansionDetails m-0 w-100'>
                        <p className='skillName w-100 col-12'>Photoshop</p>
                        <div className="w-100 col-12 containerSkills">
                          <div className="skillSeccion photoshop">80%</div>
                        </div>

                        <p className='skillName w-100 col-12'>Illustrator</p>
                        <div className="w-100 col-12 containerSkills">
                          <div className="skillSeccion illustrator">90%</div>
                        </div>

                        <p className='skillName w-100 col-12'>Premiere Pro CC</p>
                        <div className="w-100 col-12 containerSkills">
                          <div className="skillSeccion premiere">80%</div>
                        </div>
                      </div>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default (Skills);