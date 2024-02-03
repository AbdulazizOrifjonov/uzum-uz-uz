import React from 'react'
import Headroom from 'react-headroom'
import Navbar from '../Navbar/Navbar'
import {  useLocation } from 'react-router-dom';

// import "./NavbarNone.css"
function NavbarNone() {
    const location = useLocation();
    if (location.pathname.toLowerCase().includes('login') || location.pathname.includes('admin')) {
  
      return <></>;
    }
  return (
      <Headroom>
            <div className='background'>
            <Navbar/>
        <hr />
        </div>
        </Headroom> 
  )
}

export default NavbarNone