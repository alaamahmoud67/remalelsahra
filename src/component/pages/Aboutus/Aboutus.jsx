import React from 'react'
import Aboutditels from './Aboutditels'
import Clients from '../Slider/Clients'

export default function Aboutus() {
  return (
    <>
      <section className="about-cover py-5  flex items-center justify-center p-6">
      <div className="container max-w-6xl py-10">
        <div className="py-6 px-14 text-center">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white py-4">

         من نحن 
          </h1>
        
        </div>
       
      </div>
    </section>
    <Aboutditels/>
    <Clients/>

    </>
  )
}
