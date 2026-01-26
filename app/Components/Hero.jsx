"use client"
import { Link } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

const Hero = () => {
  const slides = [
    "/slide4.webp",
    "/slide2.webp",
    "/slide3.webp",
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
      className="relative text-white bg-cover mt-30 pt-[120px] bg-center bg-no-repeat h-[600px] md:h-[90vh] 2xl:h-[80vh] my- sm:mb-30  flex items-center text-center sm:text-left flex-wrap sm:justify-between transition-all duration-700"
      style={{ backgroundImage: `url(${slides[current]})` }}
    >
      {(current === 2 || current === 3 || current === 0) && (
        <div className="absolute inset-0 bg-linear-to-r from-black/70 to-transparent"></div>
      )}

      <div className="
  w-full max-w-[720px]
  mt-20 sm:mt-0
  px-5 sm:px-0
  2xl:w-200 sm:pl-30
  z-20
">

        <p className="text-[13px] sm:text-[15px] md:text-base lg:text-sm tracking-wider uppercase">
          WELCOME TO POB TRUST PREVENTATION OF BLINDNESS
        </p>

        <h1
          className="
    mt-3 sm:mt-4 lg:mt-2
    text-[24px] sm:text-[32px] md:text-4xl lg:text-5xl xl:text-4xl
    
  "
        >
          Leading Free Eye Care Hospital in Karachi:
          <span className="block">Restoring Vision with Compassion</span>
        </h1>

        <p className="mt-4 sm:mt-5 lg:mt-7 text-[14px] sm:text-[15px] md:text-base leading-relaxed">
          Bringing hope and clarity to lives with free eye care, restoring vision
          <br className="hidden sm:block" />
          with love and compassion in Karachi.
        </p>

        <div
          className="mt-6 sm:mt-8 lg:mt-10 flex justify-center sm:justify-start"
          onClick={scrollToDonate}
        >
          <button className="
      flex items-center gap-3
      px-3 py-2 sm:px-2 sm:py-1
      bg-white text-black rounded-full shadow-xl
      hover:bg-gray-100 transition text-sm sm:text-base pl-4
    ">
            Donate Now
            <span className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-black text-white rounded-full text-xl sm:text-2xl">
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