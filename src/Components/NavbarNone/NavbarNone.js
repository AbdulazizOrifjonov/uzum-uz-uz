import React from 'react'
import Headroom from 'react-headroom'
import Navbar from '../Navbar/Navbar'
import {  useLocation } from 'react-router-dom';
import "./NavbarNone.css"

// import "./NavbarNone.css"
function NavbarNone({data}) {
    const location = useLocation();
    if (location.pathname.toLowerCase().includes('login') || location.pathname.includes('admin')) {
  
      return <></>;
    }
  return (
    <div className="Rs">

      <Headroom>
            <div className='background'>
            <Navbar data={data}/>
        <hr />
        </div>
        </Headroom> 
    </div>
  )
}

export default NavbarNone


 

