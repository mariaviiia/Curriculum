import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './Portfolio.scss';
import js from './img/js.png';
import fe from './img/fe.png';
import dv from './img/dv.png';
import rw from './img/rw.png';
import wa from './img/wa.png';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faFreeCodeCamp, faGithub, faCodepen, faApple } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faFreeCodeCamp, faGithub, faCodepen, faApple)

const DialogContent = withStyles(theme => ({
  root: {
    padding: 2,
  },
}))(MuiDialogContent);


class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  worldsApart(){
    window.open('http://worldsapart.co/')
  }

  codepen() {
    window.open('https://codepen.io/mariaviiia/')
  }

  gitHub(){
    window.open('https://github.com/mariaviiia')
 }
  render() {
    return (
      <div className="container-fluid m-0 p-0 w-100 portfolio" id='Portfolio'>
        <div className="row h-100 m-0 p-0">
          <div className="col h-100 m-0 p-0">
            <Dialog
              onClose={this.handleClose}
              aria-labelledby="customized-dialog-title"
              open={this.state.open}
            >
              <DialogContent>
                <img src={js} className='certificate' />
                <img src={fe} className='certificate' />
                <img src={rw} className='certificate' />
                <img src={dv} className='certificate' />
              </DialogContent>
            </Dialog>
            <div className="container h-100 w-100 projectsContainer">
              <div className="row card h-100 m-0 w-100">
                <div className="col h-100 m-0 d-flex p-0">
                  <div className='col-3 projects freecodecamp' onClick={this.handleClickOpen}>
                    <div className='container h-100 m-0 p-0'>
                      <div className='row h-100 m-0 p-0 d-flex justify-content-center align-content-center'>
                        <FontAwesomeIcon icon={['fab', 'free-code-camp']} className='col d-flex iconProjects m-0 p-0 w-100' />
                        <span className='col d-flex justify-content-center'>FreeCodeCamp</span>
                      </div>
                    </div>
                  </div>
                  <div className='col-3 projects worldsApart' onClick={this.worldsApart}>
                    <div className='container h-100 m-0 p-0'>
                      <div className='row h-100 m-0 p-0 d-flex justify-content-center align-content-center'>
                        <img src={wa} className='col-auto d-flex m-0 p-0 w-100 worlds' />
                        <span className='col-12 d-flex justify-content-center'>Worlds Apart</span>
                      </div>
                    </div>
                  </div>
                  <div className='col-3 projects codepen' onClick={this.codepen}>
                    <div className='container h-100 m-0 p-0'>
                      <div className='row h-100 m-0 p-0 d-flex justify-content-center align-content-center'>
                        <FontAwesomeIcon icon={['fab', 'codepen']} className='col d-flex iconProjects m-0 p-0 w-100' />
                        <span className='col d-flex justify-content-center'>Codepen</span>
                      </div>
                    </div>
                  </div>
                  <div className='col-3 projects github' onClick={this.gitHub} >
                    <div className='container h-100 m-0 p-0'>
                      <div className='row h-100 m-0 p-0 d-flex justify-content-center align-content-center'>
                        <FontAwesomeIcon icon={['fab', 'github']} className='col d-flex iconProjects m-0 p-0 w-100' />
                        <span className='col d-flex justify-content-center'>Github</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default (Portfolio)