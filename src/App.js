import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Myprojects from './Components/Myprojects/Myprojects'
import Condact from './Components/Condact/Condact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Myprojects />
      <Condact />
      <Footer />
    </div>
  )
}

export default App 