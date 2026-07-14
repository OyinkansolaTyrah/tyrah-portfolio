"use client";

import React from 'react'
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className='header'>
      <div className="header-container">
        
        <div className="header-left">
          <a href="#" className="logo">
            Tyrah
          </a>


          <nav className={`nav ${menuOpen ? "navOpen" : ""}`}>
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

        <button
              className="menuButton"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
          >
              {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>

      </div>
    </header>
  );
}

export default Header