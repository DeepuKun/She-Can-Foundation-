import React from 'react'
import '../Styles/contactus.css'
const ContactUs = () => {
  return (
    <div className='contactus'>
        <div className='contactus_left autoShow'>
        <h1 className='contactus_heading1'>Get</h1>
        <h1 className='contactus_heading2'>In Touch...</h1>

        <br></br>
        <br></br>
        <br></br>
        <h2>
         ➤    president@shecanfoundation.org
        </h2>

           <br></br> 
        <h2>
          ➤   +91- 8283841830
        </h2>
        <br></br>
        <a href='https://www.instagram.com/_shecanfoundation_/'>➤  Instagram</a>
        <br></br>
        <br></br>
        <a href='https://www.linkedin.com/company/shecanfoundation/'>➤  LinkedIn</a>
</div>
<div className='contactus_right autoShow'> 
<img src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=761,fit=crop/Aq2NJ23MzBH2rx2j/copy-of-brown-simple-happy-birthday-poster-Yg27zMJrD9tBN5zQ.png'></img>
</div>
    </div>
  )
}

export default ContactUs