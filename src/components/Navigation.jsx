// NavBar.js
import React from 'react';
import '../styles/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faTags, faEnvelope, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

function NavBar() {
  return (
    <div className="navbar">
      <div className="menu">
        <div><Link to="about" smooth={true} duration={500}><FontAwesomeIcon icon={faHome} /></Link></div>
        <div><Link to="skills" smooth={true} duration={500}><FontAwesomeIcon icon={faInfoCircle} /></Link></div>
        <div><Link to="myWork" smooth={true} duration={500}><FontAwesomeIcon icon={faTags} /></Link></div>
    
        <div><Link to="contact" smooth={true} duration={500}><FontAwesomeIcon icon={faEnvelope} /></Link></div>
      </div>
      <div className='nav-light'><a href="/LightMode"><FontAwesomeIcon icon={faLightbulb} /></a></div>
    </div>
  );
}

export default NavBar;
