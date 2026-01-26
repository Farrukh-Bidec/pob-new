"use client";
import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../components/Hero'
import ClientFeedback from '../components/Clientfeedback'
import Footer from '../../components/Footer'
import { useParams } from 'next/navigation'


const page = () => {
     const params = useParams();
  const { id } = params;
  return (
  <>
  <Navbar/>
    <Hero/>
    <ClientFeedback id={id}/>
    <Footer/>
  </>
  )
}

export default page