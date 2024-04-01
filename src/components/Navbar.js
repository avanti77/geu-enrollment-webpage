import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file
import logo from "../Assets/geu-logo.png"
function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo_comp">
      <img src={logo} alt="Logo" className="logo_img" />
      </div>
      <div className="nav-links">
        <Link to="https://geu.ac.in/" className="nav-link">Home</Link>
        <Link to="https://geu.almaconnect.com/" className="nav-link">Alumini</Link>
        <Link to="https://geu.ac.in/contact/" className="nav-link">Contact</Link>
        <Link to="https://geu.ac.in/about-us/" className="nav-link">About</Link>
       
      </div>
    </nav>
  );
}

export default Navbar;
