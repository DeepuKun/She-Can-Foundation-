import React from 'react'
import '../Styles/donate.css'
import Header from './Header'
import Footer from './Footer'
const Donate = () => {
  return (
    <div>
        <Header/>
   
    <div className='donate'>
        
        <div className='donate_left'>
            <h1>Indian Society Registration <span>Certificate</span></h1>
            <br></br>
            <br></br>
            <p>We are proud to be registered under the Indian Society Act, 1860, and we are committed to operating with transparency and accountability. Our registration is a testament to our dedication to creating positive change in the world and to our commitment to empowering women and creating a more equitable society. As a registered non-profit organization, we are held to a high standard of integrity and professionalism, and we take that responsibility very seriously. We are honored to have received this certificate from the government, and we are committed to upholding the values of the She Can Foundation as we continue our mission to empower women and create a better world for all.</p>
        </div>
        <div className='donate_right'>
            <img src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1250,fit=crop/Aq2NJ23MzBH2rx2j/copy-of-our-society-registration-certificate-YrD3y8gnDRt43yN5.png'></img>

            </div>
    </div>
    <Footer/>
     </div>
  )
}

export default Donate