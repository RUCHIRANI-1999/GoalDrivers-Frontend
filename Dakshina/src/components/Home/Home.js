import React from 'react'
import { Link } from 'react-router-dom';
import NavHome from '../NavBar/NavHome';
import Footer from '../Footer/Footer';
import './Home.css'
import home from './home.jpg'
import {BsPerson} from 'react-icons/bs';

export default function Home() {
  return (
    <div>
      <div><NavHome/></div>
      <div style={{ height: '60vh', }} className='home'>
          <h1 className='h1'>BudgetPos</h1>
          <br/>
          <h2 className='h2 marquee'>Welcome!</h2>
          <br/>
          <h3>Select your role</h3>
          <br/>
          <Link to='/customer-bid'><button><BsPerson className='icon'/>Customer</button></Link>
          <Link to='/seller'><button><BsPerson className='icon'/>Seller</button></Link>
          <br/>
        </div> 
      <div><Footer/></div>
    </div>
  );
}




