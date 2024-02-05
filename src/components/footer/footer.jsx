import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; 
import "./_footer.scss"; 

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <ul className="social-links">
            <li>
              <a href="mailto:contact@email.com" className="social-links">
                <FontAwesomeIcon icon={faEnvelope} /> 
              </a>
            </li>
            <li>
              <a href="https://github.com/sarabranco92" className="social-links">
                <FontAwesomeIcon icon={faGithub} /> 
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sarabranco92" className="social-links"> 
                <FontAwesomeIcon icon={faLinkedinIn} /> 
              </a>
            </li>
          </ul>
          <p>&copy; {new Date().getFullYear()} Sara Branco.  All rights reserved.</p>
        </div>
      </footer>
    );
};

export default Footer;

