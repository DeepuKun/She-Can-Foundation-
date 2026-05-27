import React from 'react'
import Hero from './Components/Hero'
import Header from './Components/Header'
import Welcome from './Components/Welcome'
import AboutUS from './Components/AboutUS'
import JoinUs from './Components/JoinUs'
import Quote from './Components/Quote'
import ContactUs from './Components/ContactUs'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Welcome/>
      <AboutUS/>
      <JoinUs/>
      <Quote/>
      <ContactUs/>
    </div>
  )
}

export default App