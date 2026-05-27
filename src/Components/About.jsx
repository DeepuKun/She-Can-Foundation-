import React from 'react'
import Header from './Header'
import '../Styles/about.css'
import ContactUs from './ContactUs'
const About = () => {
  return (
    <div className='about_bg'>
    <Header/>
    <div className='about'>
        <div>
        <h1 className="about-black autoShow">What is</h1>
        <h1 className="about-red autoShow">She Can ?</h1>
        <br></br>
        <br></br>
        <p className="about-text autoShow">She Can Foundation is a non-profit organization dedicated to empowering women and creating a more equitable society. We provide support, resources, and training to women in communities across the globe, and we raise awareness of women's issues through advocacy campaigns and initiatives. We believe that every woman deserves the opportunity to thrive and succeed, regardless of her background or circumstances, and we work tirelessly to create a world where that is possible. We are committed to breaking down barriers and creating lasting change, and we invite you to join us in our mission to empower women and create a better future for all.

</p>
    </div>
    </div>
        <div className='about_images autoShow'>
        <img src='https://i.pinimg.com/1200x/78/06/72/780672eb1dc8e28781c9784d8764f751.jpg'></img>
        <img src='https://i.pinimg.com/736x/c0/56/0b/c0560b8e9e4923f8c70b0d4c1bf07f17.jpg'></img>
        <img src='https://i.pinimg.com/736x/ae/ab/5e/aeab5eceeabe5da55e755fcb5d3478cf.jpg'></img>
        <img src='https://i.pinimg.com/736x/79/8f/ee/798fee6301d39ac0c721e16ea1124dbe.jpg'></img>
    </div>

    <div className='started autoShow'>
        <div className='started_image'>
            <img src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1157,fit=crop/Aq2NJ23MzBH2rx2j/untitled-design-3-Yan7Loy0bvt4QPya.png'></img>
        </div>
        <div className='started_text'>
        <h1 className='started_h1'>How it </h1>
        <h1 className='started_h2'>Started ?</h1>
        <br></br>
        <br></br>
        <p className='started_p'>She Can Foundation was founded by a group of individuals who shared a common vision of creating a world where every woman has the opportunity to thrive and succeed. The idea for the organization was born out of a desire to make a real difference in the lives of women in communities across the globe. We recognized that there are countless barriers that prevent women from reaching their full potential, and we wanted to create an organization that could help break down those barriers and provide women with the resources and support they need to succeed. With a shared passion and a determination to create positive change, we set out to make our vision a reality, and She Can Foundation was born.</p>
        </div>
    </div>
    <ContactUs/>
    </div>
  )
}

export default About