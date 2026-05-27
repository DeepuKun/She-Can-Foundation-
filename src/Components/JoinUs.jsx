import React from 'react'
import '../Styles/joinus.css'
const JoinUs = () => {
  return (
    <div>
        <div className='joinus'>
            <div className='joinus_left autoShow'>
            <h1>Join</h1>
            <h1>Our <span className='joinus_span'>Team</span></h1>
            <br></br>
            <br></br>
            <p className='joinus_paragraph autoShow'>"Join our team and make a difference in the lives of women in need. At She Can Foundation, we are committed to creating positive change and empowering women in communities across the globe. By joining our team, you will have the opportunity to contribute your time, skills, and ideas to help make a real impact in the lives of women. Whether you are passionate about education, health, or providing support during times of crisis, there is a place for you on our team. Join us today and be a part of an organization that is dedicated to creating a more equitable society, one woman at a time."</p>
            <br></br> 
            <br></br>
          <button className='joinus_button'>Join Us</button>
            </div>
            <div className='joinus_right autoShow'>
                <img className='joinus_img' src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1284,fit=crop/Aq2NJ23MzBH2rx2j/1-AR0eoOKWL4sXJRgY.png" alt="Join Us"></img>
            </div>
        </div>
    </div>
  )
}

export default JoinUs