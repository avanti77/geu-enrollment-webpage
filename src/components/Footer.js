import React from 'react';
import './Footer.css'; // Import your CSS file
import logo from '../Assets/geu-logo.png';
function Footer() {
  return (
    
    <footer className="footer">
        <div class="contact-info">
    <img src={logo} alt="Company Logo" class="logo" />
    <p>566/6, Bell Road, Society Area, <br/>
    Clement Town, Dehradun, Uttarakhand <br/>
    PIN : 248002<br/>
    Email: enquiry@geu.ac.in<br/>
    Enquiry: 1800 270 1291</p>
</div>
      <div className="container">
        <p>© 2024 Geu-Enrollment-Page. All rights reserved.</p>
        <div className="links">
          <a href="#">Privacy Policy</a>
          <span> | </span>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
