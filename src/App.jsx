import React from 'react'
import Hero from './Components/Hero'
import Header from './Components/Header'
import Welcome from './Components/Welcome'
import AboutUS from './Components/AboutUS'
import JoinUs from './Components/JoinUs'
import Quote from './Components/Quote'
import ContactUs from './Components/ContactUs'
import { Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Donate from './Components/Donate'
import Donate_page from './Components/Donate_page'
import Footer from './Components/Footer'

const App = () => {
  return (
    
    <Routes>
      <Route path='/' element={<><Header/><Hero/><Welcome/><AboutUS/><JoinUs/><Quote/><ContactUs/><Footer/></>} />
      <Route path='/about' element={<About/>} />
      <Route path='/donate' element={<Donate/>} />
      <Route path='/donate_page' element={<Donate_page/>} />
    </Routes>
  )
}

export default App