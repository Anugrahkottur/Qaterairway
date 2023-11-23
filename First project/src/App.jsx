import React from 'react'
import Header from './Components/Header/Header'
import './App.css'
import './Components/Header/Header.css'
import './Components/Center/Center.jsx'
import './Components/Center/Center.css'
import Center from './Components/Center/Center.jsx'
import Footer from './Components/Footer/Footer.jsx'
import './Components/Footer/Footer.css'
import Footer1 from './Components/Footer1/Footer1.jsx'
import './Components/Footer1/Footer1.css'
import Footer2 from './Components/Footer2/Footer2.jsx'
import './Components/Footer2/Footer2.css'
import Footer3 from './Components/Footer3/Footer3.jsx'
import "./Components/Footer3/Footer3.css"
import End from './Components/End/End.jsx'
import "./Components/End/End.css"
const App = () => {
  return (
    <div className='container'>
       
      <Header/>
      <Center/>

      <Footer/>
      <Footer1/>
      <Footer2/>
      <Footer3/>
      <End/>
      

    </div>
  )

}

export default App
