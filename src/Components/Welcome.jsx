import React from 'react'
import '../Styles/welcome.css'
import image from '../assets/image.png'
const Welcome = () => {
  return (
    <div className='welcome'>
        <div className='welcome_left'>
      <h2 className='welcome_to autoShow'>Welcome to</h2>
      <h1 className='welcome_she_can autoShow'>She Can Foundation</h1>


      <p className='welcome_NGO autoShow'>NGO Registered Under the Indian Society Act, 1860</p>
      <br></br>
      <br></br>
      <h1 className='motto1 autoShow'>Together We Can Change</h1>
        <h1 className='motto2 autoShow'>The World.</h1>
        <p className='motto3 autoShow'>We don't ask for much, just help us with what you can- Be it Money, Skill or Your Time</p>
        <br></br>
        <br></br>
        <button className='welcome_button'>Donate Now</button>
      </div>

      <div className='welcome_right autoShow'>
        <img src='https://tse4.mm.bing.net/th/id/OIP.78GOXWLIq3lXKAZpjHmX1AHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'></img>
      </div>
    </div>
  )
}

export default Welcome