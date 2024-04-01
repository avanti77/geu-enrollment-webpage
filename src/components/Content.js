import React from 'react';
import { Link } from 'react-router-dom';
import './Content.css'; // Import your CSS file
import pic from '../Assets/bg2_image.jpg';
function Content() {
  return (
    
    <div className="home">
        <img src={pic} alt="Company Logo" class="pic" />
        <Link to="/enroll" className="title">Enroll Now!</Link>
      <div className="buttons">
        <Link to="https://geu.ac.in/" className="button">Official Site</Link>
        <Link to="/enroll" className="button">Enroll</Link>
      </div>
    </div>
  );
}

export default Content;
