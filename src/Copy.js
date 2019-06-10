import React from 'react';
import './Copy.scss'
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far, faCopyright } from '@fortawesome/free-regular-svg-icons';

library.add(far, faCopyright)

class Copy extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
          <div className='container-fluid w-100 m-0 p-0 copyContainer'>
           <div className='row m-0 p-0 w-100 d-flex justify-content-center'>
            <div className='col-auto m-0 p-0'><FontAwesomeIcon icon={['far', 'copyright']} className='copyIcon'/><span className='copy'>Maria Isabel Ochoa 2019</span></div>
           </div>
          </div>
      )
    }
}

export default (Copy)