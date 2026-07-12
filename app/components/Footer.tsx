import React from 'react'

const Footer = () => {
  return (
    <header className='header'>
      <div className="header-container">
        
        <div className="header-left">
          <a href="#" className="logo">
            Tyrah
          </a>
          <p>
            Frontend developer passionate about creating innovative solutions and delivering exceptional user experiences.
          </p>
        </div>
        <div className="header-center">
            <h4>
                Quick Links
            </h4>

          <nav>
            <ul className="nav-links">
              <li>
                <a href="#services" className='btn'><b>Services</b></a>
              </li>

              <li>
                <a href="#projects" className='btn'><b>Projects</b></a>
              </li>

              <li>
                <a href="#about" className='btn'><b>About</b></a>
              </li>

              <li>
                <a href="#contact" className='btn'><b>Contact</b></a>
              </li>
            </ul>

          </nav>
        </div>

        <div className="header-right">
            <h4>
                Let's Connect
            </h4>
          <a href="mailto:musiliuoyinkansolatyrah@email.com" className='btn'>
            Mail
          </a>

          <a
            href="https://www.linkedin.com/in/rukayatmusiliu"
            target="_blank"
            rel="noopener noreferrer"
            className='btn'
          >
            LinkedIn
          </a>
        </div>

      </div>

      <hr />
      <div className="header-bottom">
        <p> &copy; {new Date().getFullYear()} Tyrah. All Rights Reserved</p>
      </div>
    </header>
  );
}

export default Footer