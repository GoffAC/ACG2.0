import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  
  render() {
    const { lightBackground } = this.props;
    return (
      <div className="nav">
        <div className="nav__logo">
          <Link to="/">
            <img src="/logo.png" className="logo" alt="logo" />
          </Link>
        </div>
       
        <div className={`nav__links ${lightBackground ? "nav__links--light" : "nav__links--dark" }`} >
          <nav>
            <Link to="/projects">Projects</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/Contact">Contact</Link>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
