import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
function End() {
  return (
    <div className="container7">
       <img className='endpic' src="src/Components/End/end.png"/>
     <div className="qaterairways">
        <h3>Qatar Airways</h3>
        <a href='#'>About us</a>
        <a href='#'>Awards</a>
        <a href='#'>Careers</a>
        <a href='#'>Press releases</a>
        <a href='#'>Sponsorship</a>
        <a href='#'>Al darb qatarisation</a>
        <a href='#'>Environmental sustainability</a>
      </div>
      <div className="Groupcompanies">
        <h3>Group companies</h3>
        <a href='#'>Harnad International Airport</a>
        <a href='#'>Qatar Executive</a>
        <a href='#'>Qatar Duty Free</a>
        <a href='#'>Qatar Airways Cargo</a>
        <a href='#'>Internal Media Services</a>
        <a href='#'>Design Organisation</a>
        <a href='#'>Group Companies</a>
      </div>
      <div className="Businesssolutions">
        <h3>Business solutions</h3>
        <a href='#'>Corporate travel</a>
        <a href='#'>Beyond Business</a>
        <a href='#'>QMICE meetings and events</a>
        <a href='#'>Advertise with us</a>
       
      </div>
      <div className="Businesspartners">
        <h3>Business partners</h3>
        <a href='#'>After marketing</a>
        <a href='#'>e-Procurement</a>
        <a href='#'>Trade partners</a>
      </div>
      <div className="Help">
        <h3>Help</h3>
        <a href='#'>Contact us</a>
        <a href='#'>Travel alerts</a>
       
      </div>
      
      <div className="theqa">
        
        <img className='theqa1' src="src/Components/End/theqa1.png" />
       <div className="socialmedia">
       Let’s stay connected<br/>
       <CiFacebook />   <FaXTwitter />  <FaInstagram />  <FaYoutube />  <FaWhatsapp />

       
      </div>
      </div>
       <div className="certificate">
        <img className='cer1' src="src/Components/End/skytrax.png"/>World's Best Business Class
        <img className='cer1' src="src/Components/End/skytrax.png"/>World's Best Business Class Lounge
        <img className='cer1' src="src/Components/End/skytrax.png"/>Best Airline in the Middle East
      </div>
      <div className="end"><hr /><div className='endarrow'><IoIosArrowDown /></div></div>
      <div className="webpage-end">
      <div className="webpage-end1"><a href='#'>Cookie policy</a>
      <a href='#'>Legal</a>
      <a href='#'>Privacy</a>
      <a href='#'>Accessibility</a>
      <a href='#'>Combating human trafficking</a>
      <a href='#'>Sitemap</a>
      <a href='#'>Cookie Consent</a>
      <div className="webpage-end2">Qatar Airways. All rights reserved</div>
      </div>
      <div className="finish"><div className="qatarmail">---------qatarairway@gmail.com---------</div></div>
      </div>
    </div>
  );
}

export default End;
