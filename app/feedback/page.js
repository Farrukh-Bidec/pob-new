import React from 'react'
import Clientfeedback from './components/Clientfeedback'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Hero from './components/Hero'

const page = () => {
  return (
  <>
  <Navbar/>
    <Hero/>
    <Clientfeedback/>
    <Footer/>
  </>
  )
}

export default page