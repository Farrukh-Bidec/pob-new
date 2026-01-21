import React from 'react'
import Image from 'next/image'

const Stats = () => {
  const statsData = [
    { number: '1.7 M+', label: 'OPD consultations delivered' },
    { number: '156,257', label: 'life-changing eye surgeries ' },
    { number: '9,652 ', label: 'Vitreo-Retinal (VR) surgeries' },
    { number: '1040', label: 'Cornea procedures' },
    { number: '31,495 ', label: 'Laser treatments' },
    { number: '161,858', label: 'Diagnostic services' },
  ]

  const additionalStats = [
    // { number: '74,077', label: ' Other ophthalmic procedures' },
  ]

  return (
    <div className="w-full bg-white text-black sm:mb-0 md:pb-0">
      <div className="mx-auto lg:pl-8"> {/* ← added reasonable container */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Stats */}
          <div className="flex-1 px-4 sm:px-6 lg:pl-30 text-center sm:text-left">
            <h2 className="text-3xl md:text-5xl mb-8">
              Prevention Of Blindness Impact
            </h2>
            <p className="text-gray-600 mb-8 text-sm md:text-base">
              POB’s legacy of charitable eye care in Karachi continues to grow, bringing hope and sight to communities across Sindh through its outreach programs.
            </p>
            <div className="flex flex-wrap gap-5 mb-8 justify-center lg:justify-start lg:w-170">
              {statsData.map((stat, index) => (
                <div key={index} className="flex flex-col w-40 md:w-40 relative">
                  <div className="text-2xl md:text-4xl mb-2 font-antonio font-[550] py-6">
                    <img
                      src="circle.png"
                      alt="labels"
                      className="absolute  left-10 sm:-left-4 size-8 sm:size-10"
                    />
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-gray-700  ">
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

            {/* <div className="flex flex-wrap gap-8 ">
              {additionalStats.map((stat, index) => (
                <div key={index} className="flex flex-col w-40 md:w-48 relative">
                  <div className="text-2xl md:text-4xl mb-2 font-antonio font-[550]">
                    <img src="circle.png" alt="labels" className='absolute bottom-5 -left-[8px] sm:bottom-6 sm:-left-[15px] size-8 sm:size-10' />
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-gray-700  ">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div> */}

          </div>

          {/* Right side - Image with controlled aspect ratio */}
          <div className="w-full lg:w-5/12 max-w-md lg:max-w-90 mt-2   hidden lg:block"> {/* ← controls max size on large screens */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg "> {/* ← key part: aspect ratio */}
              <Image
                src="/blindWomen.png"
                alt="Prevention of Blindness - Woman with eye care"
                fill
                className="object-cover w-50" // or "object-contain" if you prefer no cropping
                // sizes="(max-width: 524px) 522px, 576px"
                priority={false} // optional: set true if above the fold
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats