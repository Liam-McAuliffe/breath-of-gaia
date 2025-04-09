import { FaGithub, FaLinkedin, FaEnvelope, FaLeaf } from 'react-icons/fa';
import './footer.css';

function Footer({ memoizedWebsiteCarbonBadge }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">Navigation</h3>
          <ul className="footer-links">
            <li>
              <a
                href="https://github.com/Liam-McAuliffe/breath-of-gaia?tab=readme-ov-file#breath-of-gaia"
                target="_blank"
              >
                About
              </a>
            </li>
            <li>
              <a href="#resources">Resources</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Connect</h3>
          <ul className="footer-social">
            <li>
              <a
                href="https://github.com/liam-mcauliffe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/liam-mcauliffe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:lmmcauliffe1223@gmail.com">
                <FaEnvelope /> Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Liam McAuliffe. All rights reserved.</p>
        <div className="eco-friendly">
          <FaLeaf className="leaf-icon" /> Carbon-conscious website
        </div>
        <div className="carbon-badge">{memoizedWebsiteCarbonBadge}</div>
      </div>
    </footer>
  );
}

export default Footer;
