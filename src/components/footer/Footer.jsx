import { FaGithub, FaLinkedin, FaEnvelope, FaLeaf } from 'react-icons/fa';
import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';
import { HashLink } from 'react-router-hash-link';

import '../../styles/carbonBadge.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="font-body bg-bg-dark pt-12 flex flex-col items-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          className="absolute bottom-0 left-0 right-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#a3b18a"
            fillOpacity="0.8"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,170.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="25s"
              repeatCount="indefinite"
              values="
                M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,170.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,160L48,154.7C96,149,192,139,288,154.7C384,171,480,213,576,213.3C672,213,768,171,864,154.7C960,139,1056,149,1152,176C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,170.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </path>
        </svg>
      </div>

      <div className="footer-container flex flex-col sm:flex-row justify-center items-center gap-8 max-w-screen-xl z-10">
        <div className="footer-section text-center">
          <h3 className="footer-heading text-secondary text-xl mb-4 relative">
            <div>Navigation</div>
            <span className="absolute left-0 bottom-[-8px] h-[2px] w-[6ch] bg-accent"></span>
          </h3>
          <ul className="footer-links list-none p-0 m-0 text-left">
            <li>
              <HashLink
                to="/#header"
                className="text-tertiary hover:text-accent"
              >
                Home
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/about#about"
                className="text-tertiary hover:text-accent"
              >
                About
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#resources"
                className="text-tertiary hover:text-accent"
              >
                Resources
              </HashLink>
            </li>
          </ul>
        </div>

        <div className="footer-section text-center">
          <h3 className="footer-heading text-secondary text-xl mb-4 relative">
            <div>Connect</div>
            <span className="absolute left-0 bottom-[-8px] h-[2px] w-[6ch] bg-accent"></span>
          </h3>
          <ul className="footer-social list-none p-0 m-0">
            <li>
              <a
                href="https://github.com/liam-mcauliffe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tertiary hover:text-accent flex items-center"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/liam-mcauliffe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tertiary hover:text-accent flex items-center"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
            </li>
            <li>
              <HashLink
                to="/contact#contact"
                className="text-tertiary hover:text-accent flex items-center"
              >
                <FaEnvelope className="mr-2" /> Email
              </HashLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-section flex justify-center text-text-muted m-4 z-10">
        <div className="privacy-policy">
          <HashLink
            to="/legal/privacy#privacy"
            className="text-text-muted hover:text-accent"
          >
            Privacy Policy
          </HashLink>
        </div>
        <span className="separator mx-2">|</span>
        <div className="terms-of-service">
          <HashLink
            to="/legal/terms#terms"
            className="text-text-muted hover:text-accent"
          >
            Terms of Service
          </HashLink>
        </div>
      </div>

      <div className="footer-bottom p-4 border-t border-white/10 text-text-muted flex flex-col items-center gap-4 z-10">
        <p>© {currentYear} Liam McAuliffe. All rights reserved.</p>
        <div className="eco-friendly flex items-center text-accent-secondary">
          <FaLeaf className="mr-2" /> Carbon-conscious website
        </div>
        <div className="carbon-badge">
          <WebsiteCarbonBadge
            co2="0.06"
            percentage="95"
            dark="true"
            url="myhomeimpact-info"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
