import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Solid icon for Envelope
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Brand icons for GitHub and LinkedIn
import "../footer/_footer.scss"; // Make sure this path is correct
import VantaBackground from '../VantaBackground/VantaBackground';

const Footer = () => {
    return (
      <footer className="footer">
                <VantaBackground />
        <div className="footer-content">
          <ul className="social-links">
            <li>
              <a href="mailto:contact@email.com" className="social-links">
                <FontAwesomeIcon icon={faEnvelope} /> {/* Use the envelope icon */}
              </a>
            </li>
            <li>
              <a href="https://github.com/sarabranco92" className="social-links">
                <FontAwesomeIcon icon={faGithub} /> {/* Use the GitHub icon */}
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sarabranco92" className="social-links"> {/* Update href with your LinkedIn profile link */}
                <FontAwesomeIcon icon={faLinkedinIn} /> {/* Use the LinkedIn icon */}
              </a>
            </li>
            {/* Add other social links as needed */}
          </ul>
          <p>&copy; {new Date().getFullYear()} Sara Branco.  All rights reserved.</p>
        </div>
      </footer>
    );
};

export default Footer;

