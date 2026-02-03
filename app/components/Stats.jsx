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
    <div className="wfull mx-auto mt-14 bg-white text-black sm:mb-0 md:pb-0 ">
      <div className="mx-auto lg:pl-8 2xl:pl-0">
        <div className="flex flex-col xl:flex-row gap-10 items-center">

          {/* Left side - Stats */}
          <div className="flex-1 px-4 xl:pl-20 2xl:pl-60 text-center xl:text-left">

            {/* Heading: Added md:mb-16 for MacBook, lg:mb-8 to RESET for Laptop */}
            <h2 className={`m-0 !font-amaranth mb-3 text-[32px] md:text-[50px] font-normal leading-[1.1]`}>
              Prevention Of Blindness Impact
            </h2>

            {/* Paragraph: Added md:mb-16 for MacBook, lg:mb-8 to RESET for Laptop */}
            <p className="text-[#777777] mb-8 md:mb16 lg:mb8 text-sm md:text-[16px] font-inter leading-relaxed">
              POB’s legacy of charitable eye care in Karachi continues to grow, bringing hope and sight <br className="hidden md:block" />
              to communities across Sindh through its outreach programs.
            </p>

            {/* Stats Grid: Gap is managed to be consistent */}
            <div
              className="
                grid grid-cols-2 gap-x-6 gap-y-10 mb-10
                sm:grid-cols-2
                lg:grid-cols-3 xl:grid-cols-4 lg:gap-x-10 lg:gap-y-8
                2xl:gap-x-20 2xl:gap-y-6
                justify-items-center xl:justify-items-start
              "
            >

              {statsData.map((stat, index) => (
                //                 <div key={index} className="flex flex-col w-40 md:w-40 relative group">
                //   <div className="text-2xl md:text-4xl 2xl:text-[46px] font-antonio font-[550] pt-6 relative">
                //     <img
                //       src="circle.png"
                //       alt="labels"
                //       className="absolute 2xl:-ml-6 md:-ml-4 op  2xl:mt-2  left2 sm:left-0 w-6 h-6 md:w-[45.1px] md:h-[45.1px] 2xl:w-[45.1px] 2xl:h-[45.1px]"
                //     />
                //     {stat.number}
                //   </div>
                //   <div className="text-xs md:text-[17px] font-amiko text-gray-700 mt-4">
                //     {stat.label.split(" ").map((word, i) => (
                //       <span key={i}>
                //         {word}
                //         {i === 0 && <br />}
                //         {i !== 0 && " "}
                //       </span>
                //     ))}
                //   </div>
                // </div>
                // {statsData.map((stat, index) => (
                <div
  key={index}
  className={`
    flex flex-col w-40 relative group
    ${index >= 4 ? "lg:justify-self-start" : ""}
  `}
>
  {/* Number */}
  <div className="mt-6 text-4xl md:text-4xl 2xl:text-[46px] font-antonio font-[550] flex items-center">
    
    {/* Circle + first digit */}
    <span className="relative left-2 inline-flex items-center justify-center w-[45.1px] h-[45.1px]">
      <img
        src="circle.png"
        alt="circle"
        className="absolute inset-0 hdden top-2 -right-10 mdblock w-full h-full"
      />

      {/* First digit on top */}
      <span className="relative left-2 z-10">
        {stat.number.toString()[0]}
      </span>
    </span>

    {/* Remaining digits */}
    <span className="ml-[2px]">
      {stat.number.toString().slice(1)}
    </span>
  </div>

  {/* Label */}
  <div className="text-xs md:text-[17.53px] !font-Amiko text-[#777777] mt-4 text-center">
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

          {/* Right side - Image */}
          <div className="w-full xl:w-8/12 max-w-md xl:max-w-[500px] 2xl:w-[500px] mt-2 hidden xl:block">
            <div className="relative aspect[3/4] overflow-hidden rounded-lg">
              <img
                src="/blindWomen.png"
                alt="Prevention of Blindness - Woman with eye care"
                className="w-full h-auto object-cover scale110"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

// export default Stats
// import React from "react";
// import Image from "next/image";

// const Stats = () => {
//   const statsData = [
//     { number: "66", label: "Corneal Transplant" },
//     { number: "8,275", label: "Vitreo-Retinal Surgeries" },
//     { number: "23,695", label: "Laser Treatment" },
//     { number: "134,366", label: "Cataract Surgeries" },
//     { number: "1,549,341", label: "OPD" },
//     { number: "130,323", label: "Diagnostics" },
//   ];

//   return (
//     <section className="bg-white text-black">
//       <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
//           {/* LEFT */}
//           <div className="lg:col-span-7 text-center sm:text-left">
//             <h2 className="text-[34px] sm:text-[44px] lg:text-[56px] font-bold leading-tight">
//               Prevention Of Blindness Impact
//             </h2>

//             <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto sm:mx-0">
//               POB’s legacy of charitable eye care in Karachi continues to grow,
//               bringing hope and sight to communities across Sindh through its
//               outreach programs.
//             </p>

//             {/* STATS GRID — stable on zoom/screen */}
//             <div
//               className="
//                 mt-10
//                 grid
//                 grid-cols-2
//                 sm:grid-cols-3
//                 lg:grid-cols-4
//                 gap-x-[clamp(18px,2.4vw,44px)]
//                 gap-y-[clamp(28px,3.2vw,56px)]
//               "
//             >
//               {statsData.map((stat, index) => (
//                 <div key={index} className="text-left">
//                   {/* Number + circle */}
//                   <div className="relative inline-block">
//                     <span
//                       className="
//                         absolute
//                         -left-5
//                         top-1/2
//                         -translate-y-1/2
//                         w-12 h-12
//                         rounded-full
//                         bg-[#F3DCDC]
//                       "
//                     />
//                     <div className="relative text-[20px] sm:text-[46px] lg:text-[56px] font-bold leading-none">
//                       {stat.number}
//                     </div>
//                   </div>

//                   {/* Label (fixed height so rows align) */}
//                   <div className="mt-4 text-[15px] sm:text-[16px] text-gray-500 leading-snug min-h-[44px]">
//                     {stat.label.split(" ").map((w, i) => (
//                       <span key={i}>
//                         {w}
//                         {i === 0 && <br />}
//                         {i !== 0 && " "}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="hidden lg:block lg:col-span-5">
//             <div className="relative w-full min-h-[520px]">
//               <Image
//                 src="/blindWomen.png"
//                 alt="Prevention of Blindness"
//                 fill
//                 className="object-contain"
//                 priority={false}
//                 sizes="(min-width: 1024px) 40vw, 0vw"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

export default Stats;