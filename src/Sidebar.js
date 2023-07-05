import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './sidebar.scss';
import LogoA from '../src/assets/images/logoa.png';
import LogoSubtitle from '../src/assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBookOpen, faHome, faUser, faGears, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`nav-bar ${isLoaded ? 'loaded' : ''}`}>
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img src={LogoA} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="Axel" />
      </Link>
      <nav className={`nav ${showNav ? 'mobile-show' : ''}`}>
        <NavLink exact activeClassName="active" to="/" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact activeClassName="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact activeClassName="active" className="skills-link" to="/skills" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faGears} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact
          activeClassName="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faBookOpen} color="#4d4d4e" />
        </NavLink>
        <NavLink exact activeClassName="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faTimes}
          color="#ffd700"
          size="3x"
          className="close-icon"
        />
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/axel-liscovsky-developer/">
            <FontAwesomeIcon icon={faLinkedin} className="anchor-icon" color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Axel-lis">
            <FontAwesomeIcon className="anchor-icon" icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  );
};

export default Sidebar;
