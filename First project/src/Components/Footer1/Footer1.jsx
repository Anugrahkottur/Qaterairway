import React from 'react'
import { FaArrowRight } from "react-icons/fa";
const Footer1 = () => {
  return (
    <div className='container4'>
          <div className="trip-title"><h1>Start planning your next trip</h1>
          <h4>Thinking of travelling somewhere soon? Here are some options to help you get started.</h4></div>
         <div className="box3"><img className="trip1" src="src/Components/Footer1/trip1.png" />
         
         <div className="t1"><li className='text1'>Find great fares <div className='arrow1'>< FaArrowRight /></div></li></div>
         <h3 className='text1-5'>Explore our destinations</h3></div>

         <div className="box4"><img className="trip2" src="src/Components/Footer1/trip2.png"/>
         <div className="t2"><li className='text2'>Book a Package <div className='arrow2'>< FaArrowRight /></div></li></div>
         <h3 className='text2-5'>Your perfect holiday awaits</h3></div>

         <div className="box5"><img className="trip3" src="src/Components/Footer1/trip3.png"/>
         <div className="t3"><li className='text3'>Find out more <div className='arrow3'>< FaArrowRight /></div></li></div>
         <h3 className='text3-5'>Travel requirements</h3></div>


         <div className="box6"><img className="trip4" src="src/Components/Footer1/trip4.png"/>
         <div className="t4"><li className='text4'>Explore add-ons<div className='arrow4'>< FaArrowRight /></div></li></div>
         <h3 className='text4-5'>Elevate your experience</h3></div>

    </div>
  )
    
    
}

export default Footer1