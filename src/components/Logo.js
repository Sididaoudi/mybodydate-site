import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/images/logo.png';

class LogoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <img src={logo} alt="logo" className="logo-img" />
            </div>
        );
    }
}

LogoComponent.propTypes = {};

export default LogoComponent;
