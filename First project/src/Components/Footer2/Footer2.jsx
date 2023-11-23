import React from 'react'

function Footer2() {
  return (
    <div className="container5">
        <h1>Find great fares</h1>
        From<input className='input1' type='search'/>
        <div className="places">
            <img className="place1"src="src/Components/Footer2/place.png"/>
           <div className="placetext"> <h2>Zagreb</h2>  
            <h4>25 Jan 2024 - 30 Jan 2024</h4>
           
            <h4>Economy from</h4>  
            <h4>INR 60663</h4></div>
            <div className='buttonbox'><button className='placeb1'>Book now</button><br/><br/>
            <button className='placeb2'>Discover</button></div>
            <div className="places2">
                <div className="places3"><div className="places2-1"><img className='place2' src="src/Components/Footer2/place2.png"/>
                <div className="placetext"> <h3>Lyon</h3>  
            <h4>15 Nov 2024 - 20 Nov 2024</h4>
           
            <h4>Economy from</h4>  
            <h4>INR 40763</h4></div></div>
                <div className="places2-2"><img className='place3'  src="src/Components/Footer2/place3.png"/>
                <div className="placetext"> <h3>Brussels</h3>  
            <h4>12 Oct 2024 - 15 Oct 2024</h4>
           
            <h4>Economy from</h4>  
            <h4>INR 50000</h4></div></div></div>

                <div className="places4"><div className="places2-3"><img className='place4'  src="src/Components/Footer2/place4.png"/>
                <div className="placetext"> <h3>Trabzon</h3>  
            <h4>22 Jan 2024 - 27 Jan 2024</h4>
           
            <h4>Economy from</h4>  
            <h4>INR 30663</h4></div></div>
                <div className="places2-4"><img className='place5'  src="src/Components/Footer2/place5.png"/>
                <div className="placetext"> <h3>Milan</h3>  
            <h4>1 Dec 2024 - 10 Dec 2024</h4>
           
            <h4>Economy from</h4>  
            <h4>INR 50663</h4></div></div></div>
                </div>
        </div>
        <button className='placeb3'>View more fares</button>
    </div>
  )
}

export default Footer2