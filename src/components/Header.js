import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Dhanunjay's Portfolio</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="#skills">Skills</Link></li>
          <li><Link to="#projects">Projects</Link></li>
          <li><Link to="#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
