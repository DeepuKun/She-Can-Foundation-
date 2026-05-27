import React from 'react'
import '../Styles/header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className='header_left'>
        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/Aq2NJ23MzBH2rx2j/she-YlenJon1O7ieeEoa.jpg"></img>
        <h1>She Can Foundation</h1>
      </div>
        
        <div className='header_right'>
        <p>Home</p>
        <p>About Us</p>
        <p>Contact Us</p>
        </div>
        
    </div>
  )
}

export default Header