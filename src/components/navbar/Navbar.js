import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';

import { MdLogin } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { FaRegRegistered } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { loginContext } from '../../contexts/loginContext';
import img from '../images/usersLogo.png'
function Navbar() {

  let [loggedInUser,loginError,loginStatus,loginUSer,logout]=useContext(loginContext);
  const active={
    color:"#DCC556"
    

  }
  const inactive={
    color:"#FFFFFF"
    
  }

  
  return (
    <nav className="navbar navbar-expand-sm">
  <div className="container-fluid">
  
  
  <NavLink className="navbar-brand" to="/">
    <img  src={img} width={50}  alt='image unavailable'></img>
  </NavLink>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> 
   
    
       {/* {/*items which has to be towards the right  */}
        
  <ul className="navbar-nav ms-auto mb-3 m-3 mb-lg-0 ">
        <li className="nav-item">
          <NavLink className='nav-link'
           to="/"
           style={({isActive})=>{
            return isActive?active:inactive;
           }}>
         <AiFillHome className='homeIcon m-2'/>
            Home </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className='nav-link' 
          to="/register" 
          style={({isActive})=>{return isActive?active:inactive;}}>
          <FaRegRegistered  className='resIcon m-2'/>
            Register</NavLink>
        </li>

{/* login */}

           {loginStatus ?
        <li className="nav-item">
          <NavLink className='nav-link' 
          to="/login" 
          style={({isActive})=>{return isActive?active:inactive;}} onClick={logout}>
          <MdLogout  className='logoutIcon m-2'/>
            Logout</NavLink>
        </li>:
         <li className="nav-item">
          <NavLink className='nav-link' 
          to="/login" 
          style={({isActive})=>{return isActive?active:inactive;}}>
          <MdLogin className='loginIcon m-2'/>
            Login</NavLink>
        </li>
}

        <li className="nav-item">
          <NavLink className='nav-link' 
          to="/aboutus" 
          style={({isActive})=>{return isActive?active:inactive;}}>
         
            AboutUS</NavLink>
        </li>





   </ul>
      
   
  </div>
</nav>
  
)
  }

export default Navbar