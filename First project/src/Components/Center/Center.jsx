import React, { useState } from 'react'
import { LuArrowLeftRight } from "react-icons/lu";
import { MdOutlineFlight } from "react-icons/md";
import { RiFlightTakeoffLine } from "react-icons/ri";
import { CiCalendar } from "react-icons/ci";
import { GrStatusUnknown } from "react-icons/gr";
const Center = () => {
  return (
    <div className='container2'>
      <div className='headerbox'>
          <button className='li1'><MdOutlineFlight /> Book a flight </button>
          <button className='li2'><RiFlightTakeoffLine />  Qatar Stopover</button>
          <button className='li3'><CiCalendar />  Manage/Check In</button>
          <button className='li4'><GrStatusUnknown />  Flight Status</button>
      </div>
      <hr></hr>
     <div className="radio"><input type="radio" id="Return" name="qatar" value="Return"></input>
  <label for="Return">Return</label>
  <input type="radio" id="One" name="qatar" value="One"></input>
  <label for="One">One way</label>
  <input type="radio" id="Multi-city" name="qatar" value="Multi-city"></input>
  <label for="Multi-city">Multi-city</label></div> 
  <div className="booking1"><input type='text' placeholder='From' className='From'></input><LuArrowLeftRight />
  <input type='text' placeholder='To' className='To'></input>


<input type="date" className="Departure" name="Departure"></input>
<input type="date" className="Returndate" name="Returndate"></input>
<input type='text' className='passengers'></input>
<div className="date">

<h4>Departure</h4>
  <h4>Return</h4>
</div>
<div className="class">
<h4>Passengers/Class</h4>
</div>
<div className="promo">
<h4>+ Add promo code</h4>
<button className='b2'>Search flight</button>
</div>
  </div>

    </div>
  )
}

export default Center