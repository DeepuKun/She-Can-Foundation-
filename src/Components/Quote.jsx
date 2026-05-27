import React from 'react'
import '../Styles/quote.css'
const Quote = () => {
  return (
    <div>
        <div className='quote'>
        <div className='quote_left autoShow'>
               <img src="https://i.pinimg.com/1200x/16/49/bd/1649bd3ce9cf70c25ed7ace9e7ffb1e4.jpg"></img>
            

        </div>
        <div className='quote_right autoShow'>
         <p className='quote_text'>
                "Together, we can break down barriers and empower women. At She Can Foundation, we believe that if we all do our part, there is no challenge too great to overcome. Join us in our mission to create a world where every woman has the opportunity to thrive and succeed."
            </p>
            <h1 className='author autoShow'>- REETA MISHRA</h1>
            <h1 className='designation '>Founder & President, She Can Foundation</h1>
        </div>
        </div>
    </div>
  )
}

export default Quote