"use client"
import { Link } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

const Hero = () => {
  const slides = [
    "/slide2.webp",
    "/slide3.webp",
    "/slide4.webp",
    "/slide.png",
  ];
  const [current, setCurrent] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % slides.length)
  //   }, 4000) // change slide every 4 sec

  //   return () => clearInterval(interval)
  // }, [])

  const scrollToDonate = () => {
    const footer = document.getElementById('footer_elem')
    footer.scrollIntoView({ behavior: "smooth" })

  }
  return (
    <div
 className="relative text-white bg-cover bg-center bg-no-repeat h-[600px] md:h-[90vh] 2xl:h-[80vh] my-23 sm:my-30 flex items-center text-center sm:text-left flex-wrap sm:justify-between transition-all duration-700"
      style={{ backgroundImage: `url(${slides[current]})` }}
    >
      {(current === 2 || current === 3) && (
        <div className="absolute inset-0 bg-linear-to-r from-black/70 to-transparent"></div>
      )}

      <div className="w-180 2xl:w-200 sm:pl-30 z-20">
        <p className="text-xl lg:text-base  ">
          WELCOME TO POB TRUST PREVENTATION OF BLINDNESS
        </p>
        <h1 className="mt-4 lg:mt-6 text-4xl lg:text-5xl xl:text-4xl leading-tight ">
          Leading Free Eye Care Hospital in Karachi:Restoring Vision with Compassion
        </h1>
        <p className="mt-5 lg:mt-7 text-base lg:text-base ">
          Bringing hope and clarity to lives with free eye care, restoring vision<br /> with love and compassion in Karachi.
        </p>

        <div className="mt-8 lg:mt-10 flex justify-center sm:justify-start " onClick={scrollToDonate}>
          <button className="flex items-center gap-3 px-2 py-1 sm:py-1 bg-white text-black rounded-full shadow-xl hover:bg-gray-100 transition text-base pl-4">
            Donate Now
            <span className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full text-2xl">
              <MdKeyboardDoubleArrowRight />
            </span>
          </button>
        </div>
      </div>

      {/* Slider buttons */}
      <div className="sm:pr-20 flex sm:flex-col flex-row gap-3 z-20 mx-auto sm:mx-0">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`flex items-center justify-center rounded-full border-2 transition-all duration-300
        ${current === i ? "border-white size-4" : "border-white/70 size-2"}
      `}
          >
            {/* Inner dot (only active) */}
            {current === i && (
              <span className="bg-white rounded-full size-[1px] "></span>
            )}
          </button>
        ))}
      </div>

    </div>
  )
}

export default Hero