import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className='header_left'>
        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/Aq2NJ23MzBH2rx2j/she-YlenJon1O7ieeEoa.jpg"></img>
        <h1>She Can Foundation</h1>
      </div>
        
        <div className='header_right'>
        <NavLink to='/'> <p className='nav-link'>Home</p> </NavLink>
        <NavLink to='/about'> <p className='nav-link'>About Us</p> </NavLink>
        <NavLink to='/donate'> <p className='nav-link'>Our Certificate</p> </NavLink>
        <NavLink to='/donate_page'> <p className='nav-link'>Donate</p> </NavLink>
        </div>
        
    </div>
  )
}

export default Header