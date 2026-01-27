import React from 'react'
import Image from 'next/image'

const Stats = () => {
  const statsData = [
    { number: '1.7 M+', label: 'OPD consultations delivered' },
    { number: '156,257', label: 'Life-Changing Eye Surgeries ' },
    { number: '9,652 ', label: 'Vitreo-Retinal (VR) surgeries' },
    { number: '1040', label: 'Cornea procedures' },
    { number: '31,495 ', label: 'Laser treatments' },
    { number: '161,858', label: 'Diagnostic services' },
  ]

  return (
    <div className="w-full mt-10 bg-white text-black sm:mb-0 md:pb-0 ">
      <div className="mx-auto lg:pl-8 2xl:pl-0">
        <div className="flex flex-col lg:flex-row gap-10  items-center">
          
          {/* Left side - Stats */}
          <div className="flex-1 px-4 sm:px-16 lg:pl-20 2xl:pl-30 text-center sm:text-left">
            
            {/* Heading: Added md:mb-16 for MacBook, lg:mb-8 to RESET for Laptop */}
            <h2 className="text-3xl md:text-5xl 2xl:text-6xl mb6 md:mb16 lg:mb-3 font-bold leading-tight">
              Prevention Of Blindness Impact
            </h2>

            {/* Paragraph: Added md:mb-16 for MacBook, lg:mb-8 to RESET for Laptop */}
            <p className="text-gray-600 mb-8 md:mb16 lg:mb8 text-sm md:text-base leading-relaxed">
              POB’s legacy of charitable eye care in Karachi continues to grow, bringing hope and sight <br className="hidden md:block" />
              to communities across Sindh through its outreach programs.
            </p>

            {/* Stats Grid: Gap is managed to be consistent */}
<div className="
  grid grid-cols-2 gap-x-6 gap-y-10 mb-10
  sm:grid-cols-2
  lg:flex lg:flex-wrap lg:gap-5 lg:justify-start lg:w-170
  2xl:gap-20
">
              {statsData.map((stat, index) => (
                <div key={index} className="flex flex-col md:grid-cols-2 w-40 md:w-40 relative group">
                  <div className="text-2xl md:text-4xl 2xl:text-[60px] font-antonio font-[550] pt-6">
                    <img
                      src="circle.png"
                      alt="labels"
                      className="absolute left-10 sm:-left-4 size-8 sm:size-10"
                    />
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-[16px] text-gray-700 mt-4">
                    {stat.label.split(" ").map((word, i) => (
                      <span key={i}>
                        {word}
                        {i === 0 && <br />}
                        {i !== 0 && " "}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image (UNTOUCHED as per request) */}
          <div className="w-full lg:w-8/12 max-w-md lg:max-w-[700px] 2xl:w-[500px] mt-2 hidden lg:block">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src="/blindWomen.png"
                alt="Prevention of Blindness - Woman with eye care"
                fill
                className="object-cover"
                priority={false}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Stats