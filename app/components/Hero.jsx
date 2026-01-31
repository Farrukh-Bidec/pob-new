  "use client"
  import { Link } from 'lucide-react'
  import React, { useEffect, useState } from 'react'
  import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

  const Hero = () => {
    const slides = [
      "/slide1.jpg",
      "/slide3.webp",
      "/slide1.jpg",
      "/slide1.jpg",
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
  //     <div
  //       className="relative text-white bg-cover mt-0 md:mt-[120px] pt-[120px] md:pt-[120px] bg-center bg-no-repeat h-[600px] md:h-[130vh] 2xl:h-[80vh] my- sm:mb-30  flex items-start text-center sm:text-left flex-wrap sm:justify-between transition-all duration-700"
  //       style={{ backgroundImage: `url(${slides[current]})` }}
  //     >
  //       {/* {(current === 2 || current === 3 || current === 0) && (
  //           <div className="absolute inset-0 bg-linear-to-r from-black/70 to-transparent"></div>
  //         )} */}

  //       <div className="
  //   w-full md:max-w-[1200px]
  //   mt-4 sm:mt-0
  //   px-5 sm:px-0
  //   2xl:w-200 sm:pl-30
  //   z-10
  // ">

  //         <p className="text-[13px] sm:text-[15px] md:text-base lg:text-sm tracking-wider uppercase">
  //           WELCOME TO POB TRUST PREVENTATION OF BLINDNESS
  //         </p>

  //         <h1
  //           className="
  //     mt-3 sm:mt-4 lg:mt-2
  //     md:text-[24px] sm:text-[32px] md:text-4xl lg:text-5xl xl:text-4xl
      
  //   "
  //         >
  //           Leading Free Eye Care Hospital in Karachi:
  //           <span className="block">Restoring Vision with Compassion</span>
  //         </h1>

  //         <p className="mt-4 sm:mt-5 lg:mt-7 text-[14px] sm:text-[15px] md:text-base leading-relaxed">
  //           Bringing hope and clarity to lives with free eye care, restoring vision
  //           <br className="hidden sm:block" />
  //           with love and compassion in Karachi.
  //         </p>

  //         <div
  //           className="mt-6 sm:mt-8 lg:mt-10 flex justify-center sm:justify-start"
  //           onClick={scrollToDonate}
  //         >
  //           <button className="
  //       flex items-center gap-3
  //       px-3 py-2 sm:px-2 sm:py-1
  //       bg-white text-black !font-semibold rounded-full shadow-xl
  //       hover:bg-gray-100 transition text-sm sm:text-base pl-4 
  //     ">
  //             Donate Now
  //             <span className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-black text-white rounded-full text-xl sm:text-2xl">
  //               <MdKeyboardDoubleArrowRight />
  //             </span>
  //           </button>
  //         </div>

  //       </div>


  //       {/* Slider buttons */}
  //       {/* <div className="sm:pr-20 flex sm:flex-col flex-row gap-3 z-20 mx-auto sm:mx-0">
  //         {slides.map((_, i) => (
  //           <button
  //             key={i}
  //             onClick={() => setCurrent(i)}
  //             className={`flex items-center justify-center rounded-full border-2 transition-all duration-300
  //         ${current === i ? "border-white size-4" : "border-white/70 size-2"}
  //       `}
  //           >
  //             {current === i && (
  //               <span className="bg-white rounded-full size-[1px] "></span>
  //             )}
  //           </button>
  //         ))}
  //       </div> */}

  //     </div>
  // <div
  //   className="
  //     relative text-white bg-cover bg-center bg-no-repeat
  //     min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] xl:min-h-[80vh]
  //     pt-[100px] md:pt-[120px]
  //     flex items-start justify-center
  //   "
  //   style={{ backgroundImage: `url(${slides[current]})` }}
  // >
  //   <div className="
  //     w-full max-w-[1100px]
  //     px-5 sm:px-8
  //     z-10
  //   ">
  //     <p className="text-[13px] sm:text-[15px] tracking-wider uppercase">
  //       WELCOME TO POB TRUST PREVENTATION OF BLINDNESS
  //     </p>

  //     <h1 className="
  //       mt-4
  //       text-[22px] sm:text-[28px]
  //       md:text-[34px] lg:text-[44px] xl:text-[48px]
  //       leading-tight
  //     ">
  //       Leading Free Eye Care Hospital in Karachi:
  //       <span className="block">Restoring Vision with Compassion</span>
  //     </h1>

  //     <p className="mt-5 text-[14px] sm:text-[15px] md:text-base max-w-[700px]">
  //       Bringing hope and clarity to lives with free eye care,
  //       restoring vision with love and compassion in Karachi.
  //     </p>

  //     <div className="mt-8">
  //       <button className="
  //         flex items-center gap-3
  //         px-4 py-2
  //         bg-white text-black font-semibold rounded-full
  //         shadow-xl hover:bg-gray-100 transition
  //       ">
  //         Donate Now
  //         <span className="flex items-center justify-center w-9 h-9 bg-black text-white rounded-full text-xl">
  //           <MdKeyboardDoubleArrowRight />
  //         </span>
  //       </button>
  //     </div>
  //   </div>
  // </div>
//   <div
//   className="
//     relative text-white
//     bg-cover bg-center bg-no-repeat
//     min-h-screen
//     flex items-center
//     overflow-hidden
//   "
//   style={{ backgroundImage: `url(${slides[current]})` }}
// >
//   <div
//     className="
//       w-full max-w-[1100px]
//       px-5 sm:px-8
//       py-16 md:py-24
//       z-10
//     "
//   >
//     <p className="text-[13px] sm:text-[15px] tracking-wider uppercase">
//       WELCOME TO POB TRUST PREVENTATION OF BLINDNESS
//     </p>

//     <h1 className="
//       mt-4
//       text-[22px] sm:text-[28px]
//       md:text-[34px] lg:text-[44px] xl:text-[48px]
//       leading-tight
//     ">
//       Leading Free Eye Care Hospital in Karachi:
//       <span className="block">Restoring Vision with Compassion</span>
//     </h1>

//     <p className="mt-5 text-[14px] sm:text-[15px] md:text-base max-w-[700px]">
//       Bringing hope and clarity to lives with free eye care,
//       restoring vision with love and compassion in Karachi.
//     </p>

//     <div className="mt-8">
//       <button className="
//         flex items-center gap-3
//         px-4 py-2
//         bg-white text-black font-semibold rounded-full
//         shadow-xl hover:bg-gray-100 transition
//       ">
//         Donate Now
//         <span className="flex items-center justify-center w-9 h-9 bg-black text-white rounded-full text-xl">
//           <MdKeyboardDoubleArrowRight />
//         </span>
//       </button>
//     </div>
//   </div>
// // </div>
//  <div
//   className="
//     relative text-white
//     bg-cover bg-center bg-no-repeat
//     min-h-[100svh]
//     flex items-start justify-center
//     overflow-hidden
//   "
//   style={{ backgroundImage: `url(${slides[current]})` }}
// >
//   <div
//     className="
//       w-full max-w-[1100px]
//       px-5 sm:px-8
//       py-[clamp(4rem,8vh,7rem)]
//       z-10
//     "
//   >
//     <p className="text-[13px] sm:text-[15px] tracking-wider uppercase">
//       WELCOME TO POB TRUST PREVENTATION OF BLINDNESS
//     </p>

//     <h1 className="
//       mt-4
//       text-[22px] sm:text-[28px]
//       md:text-[34px] lg:text-[44px] xl:text-[48px]
//       leading-tight
//     ">
//       Leading Free Eye Care Hospital in Karachi:
//       <span className="block">Restoring Vision with Compassion</span>
//     </h1>

//     <p className="mt-5 text-[14px] sm:text-[15px] md:text-base max-w-[700px]">
//       Bringing hope and clarity to lives with free eye care,
//       restoring vision with love and compassion in Karachi.
//     </p>

//     <div className="mt-8">
//       <button className="
//         flex items-center gap-3
//         px-4 py-2
//         bg-white text-black font-semibold rounded-full
//         shadow-xl hover:bg-gray-100 transition
//       ">
//         Donate Now
//         <span className="flex items-center justify-center w-9 h-9 bg-black text-white rounded-full text-xl">
//           <MdKeyboardDoubleArrowRight />
//         </span>
//       </button>
//     </div>
//   </div>
// </div> 
  // <div
  //     className="
  //       relative
  //       min-h-screen 
  //       w-full 
  //       bg-cover 
  //       bg-center 
  //       flex 
  //       items-center 
  //       justify-start   /* 👈 align content to left */
  //       overflow-hidden
  //       px-4 md:px-16
  //     "
  //     style={{ backgroundImage: `url(${slides[current]})` }}
  //   >
  //     {/* Overlay */}
  //     {/* <div className="absolute inset-0 bg-black/50"></div> */}

  //     {/* Content */}
  //     <div className="relative z-10 max-w-[700px] text-left">
  //       <p className="text-white text-[12px] sm:text-[14px] tracking-wider uppercase">
  //         WELCOME TO POB TRUST PREVENTATION OF BLINDNESS
  //       </p>

  //       <h1 className="mt-3 font-semibold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[34px] leading-snug text-white">
  //         Leading Free Eye Care Hospital in Karachi
  //         <span className="block mt-1">
  //           Restoring Vision with Compassion
  //         </span>
  //       </h1>

  //       <p className="mt-4 text-white text-[13px] sm:text-[14px] md:text-[15px] max-w-[650px]">
  //         Bringing hope and clarity to lives with free eye care,
  //         restoring vision with love and compassion in Karachi.
  //       </p>

  //       <div className="mt-6">
  //         <button className="flex items-center gap-3 px-4 py-2 bg-white text-black font-semibold rounded-full shadow-xl hover:bg-gray-100 transition">
  //           Donate Now
  //           <span className="flex items-center justify-center w-9 h-9 bg-black text-white rounded-full text-xl">
  //             <MdKeyboardDoubleArrowRight />
  //           </span>
  //         </button>
  //       </div>
  //     </div>
  //   </div>
//   <div
//   className="
//     relative
//     h-[600px]
//     w-full
//     bg-cover
//     bg-center
//     flex
//     items-center
//     justify-start
//     overflow-hidden
//     px-4 md:px-16
//   "
//   style={{ backgroundImage: `url(${slides[current]})` }}
// >
//   <div className="absolute inset-0 bg-black/40"></div>

//   <div className="relative z-10 mt-10 max-w-[700px] text-left">
//     <p className="text-white text-[14px] tracking-wider uppercase">
//       WELCOME TO POB TRUST PREVENTATION OF BLINDNESS
//     </p>

//     <h1 className="mt-3 font-semibold text-[32px] leading-snug text-white">
//       Leading Free Eye Care Hospital in Karachi
//       <span className="block mt-1 text-[24px] font-normal">
//         Restoring Vision with Compassion
//       </span>
//     </h1>

//     <p className="mt-4 text-white text-[16px] max-w-[650px]">
//       Bringing hope and clarity to lives with free eye care,
//       restoring vision with love and compassion in Karachi.
//     </p>

//     <div className="mt-6">
//       <button className="flex items-center gap-3 px-5 py-3 bg-white text-black font-semibold rounded-full shadow-xl hover:bg-gray-100 transition text-[16px]">
//         Donate Now
//         <span className="flex items-center justify-center w-9 h-9 bg-black text-white rounded-full text-[18px]">
//           <MdKeyboardDoubleArrowRight />
//         </span>
//       </button>
//     </div>
//   </div>
// </div>
  //  <section className="relative overflow-hidden">
  //     {/* Background image */}
  //     <div className="relative h-[520px] md:h-[560px]">
  //       <div
  //         className="absolute inset-0 bg-center bg-cover"
  //       style={{ backgroundImage: `url(${slides[current]})` }}
  //       />
  //       {/* <div className="absolute inset-0 bg-black/40" /> */}

  //       <div className="relative mx-auto max-w-6xl px-4 pt-16 md:pt-24">
  //         <div className="max-w-xl text-white">
  //           <p className="text-sm font-medium text-white/80">DONATE NOW</p>
  //           <h1 className="mt-2 text-4xl md:text-5xl font-semibold leading-tight">
  //             Light Up a Life
  //           </h1>
  //           <p className="mt-4 text-white/80">
  //             Support free eye care and help restore sight for those in need.
  //           </p>

  //           <div className="mt-6 flex flex-wrap gap-3">
  //             <Link
  //               href="#donate"
  //               className="rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700"
  //             >
  //               Donate Now
  //             </Link>
  //             <Link
  //               href="#"
  //               className="rounded-xl bg-white/15 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-white/20"
  //             >
  //               Learn More
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Curved bottom using SVG */}
  //     {/* <div className="absolute bottom-0 left-0 right-0">
  //       <svg viewBox="0 0 1440 120" className="w-full h-[90px]">
  //         <path
  //           d="M0,30 C240,120 480,120 720,60 C960,0 1200,0 1440,60 L1440,120 L0,120 Z"
  //           fill="white"
  //         />
  //         <path
  //           d="M0,30 C240,120 480,120 720,60 C960,0 1200,0 1440,60"
  //           fill="none"
  //           stroke="#2B2E83"
  //           strokeWidth="2"
  //           opacity="0.7"
  //         />
  //       </svg>
  //     </div> */}
  //   </section>
//      <section className="relative bg-black overflow-hidden">
//       {/* Hero height – responsive */}
//       <div className="relative h-[520px] sm:h-[560px] bg-center bg-cover md:h-[740px] lg:h-[900px]" 
//               style={{ backgroundImage: `url(${slides[current]})` }}
// >
        
//         {/* Background image */}
//         {/* <img
//           src="/images/hero.png"
//           alt="Eye care hero"
//           fill
//           priority
//           sizes="100vw"
//           className="object-cover object-center"
//         /> */}

//         {/* Dark overlay (matches Figma) */}
//         {/* <div className="absolute inset-0 bg-black/35" /> */}

//         {/* Content */}
//         <div className="relative z-10 mx-auto max-w-6xl px-4 h-full">
//           <div
//             className="
//               max-w-[520px] text-white
//               pt-[95px]
//               sm:pt-[115px]
//               md:pt-[155px]
//               lg:pt-[175px]
//             "
//           >
//             <p className="text-xs sm:text-sm font-medium tracking-wide text-white/80">
//               DONATE NOW
//             </p>

//             <h1
//               className="
//                 mt-3 font-semibold leading-[1.12]
//                 text-[30px]
//                 sm:text-[36px]
//                 md:text-[52px]
//               "
//             >
//               Light Up a Life
//             </h1>

//             <p className="mt-4 text-sm sm:text-[15px] md:text-[17px] text-white/85 leading-relaxed">
//               Support free eye care and help restore sight for those in need.
//             </p>

//             <div className="mt-7 flex flex-wrap gap-3 sm:gap-4">
//               <Link
//                 href="#donate"
//                 className="rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700"
//               >
//                 Donate Now
//               </Link>

//               <Link
//                 href="#"
//                 className="rounded-xl px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/30 hover:bg-white/10"
//               >
//                 Learn More
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* MASK CURVE (this is the key part) */}
//         {/* <svg
//           className="absolute bottom-0 left-0 w-full h-[85px] sm:h-[95px] md:h-[110px]"
//           viewBox="0 0 1440 120"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M0,40 C240,120 480,120 720,60 C960,0 1200,0 1440,60 L1440,120 L0,120 Z"
//             fill="white"
//           />
//         </svg> */}

//         {/* Thin blue stroke like Figma */}
//         {/* <svg
//           className="absolute bottom-0 left-0 w-full h-[85px] sm:h-[95px] md:h-[110px] pointer-events-none"
//           viewBox="0 0 1440 120"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M0,40 C240,120 480,120 720,60 C960,0 1200,0 1440,60"
//             fill="none"
//             stroke="#2B2E83"
//             strokeWidth="2"
//             opacity="0.85"
//           />
//         </svg> */}
//       </div>
//     </section>
<div
  className="
    relative text-white
    bg-cover bg-center bg-no-repeat
    h-[520px] sm:h-[560px] md:h-[640px] lg:h-[900px]
    flex items-start
    overflow-hidden
  "
  style={{
        backgroundImage: slides[current] ? `url(${slides[current]})` : "none",
      }}>
  {/* Dark overlay (important for text contrast) */}
  {/* <div className="absolute inset-0 bg-black/40" /> */}

  {/* Content */}
  <div
    className="
      relative z-10
      w-full max-w-[1100px]
      mx-auto
      px-5 sm:px-8
      pt-[clamp(4.5rem,10vh,7.5rem)]
    "
  >
    <p
      className="
        text-[12px] sm:text-[14px]
        tracking-[0.2em]
        uppercase text-white/80 mt-40
      "
    >
      Welcome to POB Trust – Prevention of Blindness
    </p>

    <h1
      className="
        mt-4
        font-semibold leading-tight
        text-[clamp(22px,5vw,48px)]
      "
    >
      Leading Free Eye Care Hospital in Karachi:
      <span className="block">
        Restoring Vision with Compassion
      </span>
    </h1>

    <p
      className="
        mt-5
        text-[14px] sm:text-[15px] md:text-[16px]
        max-w-[700px]
        text-white/90
      "
    >
      Bringing hope and clarity to lives with free eye care,
      restoring vision with love and compassion in Karachi.
    </p>

    <div className="mt-8">
      <button
        className="
          inline-flex items-center gap-3
          pl-5 pr-2 py-2
          bg-white text-black
          font-semibold rounded-full
          shadow-xl
          hover:bg-gray-100 transition
        "
      >
        Donate Now
        <span
          className="
            flex items-center justify-center
            w-9 h-9
            bg-black text-white
            rounded-full text-xl
          "
        >
          <MdKeyboardDoubleArrowRight />
        </span>
      </button>
    </div>
  </div>

  {/* Bottom curve (optional – matches your Figma hero) */}
  {/* <svg
    className="absolute bottom-0 left-0 w-full h-[80px] sm:h-[95px] md:h-[110px]"
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
  >
    <path
      d="M0,40 C240,120 480,120 720,60 C960,0 1200,0 1440,60 L1440,120 L0,120 Z"
      fill="white"
    />
  </svg> */}
</div>
    )
  }

  export default Hero