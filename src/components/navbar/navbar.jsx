import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'

import "../navbar/_navbar.scss"

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar_logo'>
        <a href="/"><img src={logo} alt='Logo du site Kasa' /></a>
      </div>
      <div className='navbar_menu'>
      <NavLink to="/"></NavLink>
      <NavLink to="/about">Présentation</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/skills">Compétences</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/about">Mon CV</NavLink>

      </div>
    </nav>
  );
}

export default Navbar;
