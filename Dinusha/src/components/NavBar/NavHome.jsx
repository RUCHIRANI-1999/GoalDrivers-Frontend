import React from 'react';
import './NavHome.css';
import { FaHome } from "react-icons/fa";
import bduget from "../../assets/images/bduget pos.jpg";
import { Link } from 'react-router-dom';

function NavHome() {
  return (
    <div className='nav-container'> 
      <nav>
        <div>
          <img src={bduget} alt='wada karapn ' style={{ height: "50px" }}></img>
        </div>
        <ul style={{ cursor: 'pointer' }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About us</Link></li>
          <li><a href='#'>services</a></li>
          <li><Link to="/product">products</Link></li>
          <li><a href='#'>contact us</a></li>
          <input type={"search"} placeholder={"Search on budget pos"}></input>
        </ul>
        
        <button type='button'>Request Demo</button>
        <p style={{ color: "white" }}>sign in <span>register</span></p>
        <p style={{ color: "white" }} className='hfar'><FaHome/></p>
      </nav>
    </div>
  );
}

export default NavHome;
