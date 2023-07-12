import React from 'react';
import './NavHome.css';
import { FaHome } from "react-icons/fa"; // import the home icon from react-icons/fa
import bduget  from "../../assets/images/bduget pos.jpg"; // import the company logo image
import doneb from "../../assets/images/doneb.png"
import { Link } from 'react-router-dom';


function NavHome() {
  return (
    <div className='nav-container'> 
      <nav>
        <div>
          <img src={bduget} alt='wada karapn ' style={{height:"50px"}} ></img> {/* Display the company logo image */}
        </div>
        <ul>
          <li><a href='#'>Home</a></li> 
          <li><a href='#'>about</a></li>
          <li><a href='#'>services</a></li>
          <li><a href='#'>products</a></li>
          <Link to='/chat'><li><a href='#'>contact us</a></li></Link>
          <input type={"search"} placeholder={"Search on budget pos"}></input> {/* Display a search input */}
        </ul>
        
        <Link to='/req_demo'> <button type='button' style={{width:'150px', cursor:'pointer'}}>Request Demo</button></Link> {/* Display "Request Demo" button */}
       <Link to='/reg_form'><p style={{color:"white", paddingLeft:'1rem' }}>register</p></Link>  {/* Display a "sign in/register" text */}
       <Link to='/login_form'><p style={{color:"white" }}>sign in </p></Link> 
        <p style={{color:"white"}} className='hfar'><FaHome/></p> {/* Display the home icon */}
      </nav>
     
      {/* <br/>

      <center>
        <div className='popup'>
          <img className='huu' src={doneb} alt='wada karapn ' style={{height:"50px"}} ></img>  
          <h2>Thank You !!</h2>
          <p>Your details has been successfully submited.You can get your good at your place.Thanks!</p>
          <button type='button'>Ok</button>
        </div> 
      </center>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>  */}

      {/* <div>
        <Footerr/> 
      </div> */}
    </div>
  );
}

export default NavHome;