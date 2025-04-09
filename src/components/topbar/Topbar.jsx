import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './topbar.css';

const Topbar = memo(() => {
  return (
    <div className="topbar">
      <div className="topbar-item">
        <Link to="/" className="logo-link">
          <div className="logotype">
            <div className="logo">
              <img
                src="https://ck1ia2fn07.ufs.sh/f/ee1C2z5l9wQimjwQZRtArs2hcfePFxbiWVaLqJzKyDw8tl5I"
                alt="Logo"
                className="logo"
              />
            </div>
            <div className="title">
              <h1>MyHomeImpact</h1>
            </div>
          </div>
        </Link>
        <p className="tagline">Explore your home's impact on the planet.</p>
      </div>
      <div className="topbar-item">
        <nav>
          <a
            href="https://github.com/Liam-McAuliffe/myhomeimpact?tab=readme-ov-file#myhomeimpact"
            target="_blank"
          >
            about
          </a>
          <a href="/#resources">resources</a>
          <a
            href="https://liam-mcauliffe.github.io/#contact-me"
            target="_blank"
          >
            contact
          </a>
        </nav>
      </div>
    </div>
  );
});

export default Topbar;
