import React from 'react'

function Footer3() {
  return (
    <div className='container6'>
         <img className='offer' src="src/Components/Footer3/offer.png" />
         <div className="Footer3-box1">
            <h2>Never miss an offer</h2>
            Subscribe and be the first to receive our exclusive offers.<br></br><br></br>
            <input className='Footer3-emil' type="email" placeholder='Email address'/><input className='Footer3-search' type="search"placeholder='Preferred of departure' /><br></br><br/>
            <input  type="checkbox" />I would like to get offers and news from Qatar Airways.I have read and understood <br/>the <a href="#privacy-policy">Privacy Policy</a><br/>
            <button className="Footer3b1">Subscribe</button>
         </div>
    </div>
  )
}

export default Footer3