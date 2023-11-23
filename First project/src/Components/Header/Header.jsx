import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
const Header = () => {
  
  return (
    
    <div className='conatiner1'>
     <div className='box1'><img className='qatar' src="src/qatar.png" />
      <div className='logobox'>
           <img className='logo' src="src/logo1.png" />
           <img className='world1' src="src/world1.png"/>
           <li className='l1'>Explore</li>
           <li className='l2'>Book</li>
           <li className='l3'>Experince</li>
           <li className='l4'>Privilege Club</li>
           <li className='l5'>Help</li>
           <div className="icon1"><FaSearch /></div>
           <div className="icon2"><FaEarthAfrica /> </div><li className='l6'>EN</li>
           <div className="iconbox"><div className='icon3'><CgProfile /></div><div className='l7'><li> Login|Sign up</li></div></div>
           
           
           </div>
           <div className="titlebox"><h1>Get complimentary access</h1>
           <h1>to Expo 2023 Doha</h1>
           <button className='b1'><h2>Find out more</h2></button>
           </div>
      </div>
    </div>
  )
}

export default Header
