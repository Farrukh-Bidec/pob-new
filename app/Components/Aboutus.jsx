// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { Image_Url } from "./axios";

// const Aboutus = () => {
//   return (
//     <div className="flex flex-col  md:flex-row py-4 mt-10 md:-mt-24 sm:py-6 gap-6 md:gap-10 items-center relative px-4 sm:px-10 lg:px-16 xl:px-24 2xl:px-40 mac:max-w-[1600px] mac:px-20 mx-auto">

//       {/* Image Section */}
//       <div className="w-full md:w-[50%] lg:w-[55%] mx-auto">
//         <Image
//           src="/aboutus.webp"
//           alt="About Us"
//           width={800}
//           height={800}
//           className="w-full sm:w-[85%] md:w-full min-h-[300px] sm:min-h-[350px] md:min-h-[550px] lg:min-h-[580px] object-cover rounded-2xl mx-auto"
//           priority
//         />
//       </div>

//       {/* Content Section */}
//       <div className="w-full md:w-[50%] lg:w-[55%] text-black py-4 sm:py-6 text-center sm:text-left">
//         <h4 className="text-[12px]  sm:text-[14px] mb1 text-[#C30001] uppercase font-semibold">
//           About Us
//         </h4>

//         <h2 className="text-2xl sm:text-2xl md:text-5xl font-bold py-1">
//           Absolutely Free Eye Care
//         </h2>

//         <p className="text-sm mac:mt-10 mac:text-[40px] mt-2 sm:text-base md:text-[16px] mb-4 text-gray-500 leading-relaxed">
//           Prevention of Blindness (POB) Trust was established in 2007

//           with a singular mission: to eliminate preventable blindness by providing

//           free, quality eye care to those in need. Operating under the patronage

//           of the Pakistan Islamic Medical Association (PIMA), POB Trust is

//           committed to serving underserved communities with compassion

//           and excellence.
//         </p>

//         <p className="text-sm sm:text-base md:text-[16px] mb-4 text-gray-500 leading-relaxed">
//           Through our flagship POB Eye Hospital in Gulistan-e-Johar and
//           four campuses across Karachi, we deliver comprehensive eye care
//           services completely free of cost.
//         </p>

//         <p className="text-sm sm:text-base md:text-[16px] text-gray-500 leading-relaxed">
//           What began as a small cataract initiative has grown into a state-of-the-art
//           charitable tertiary eye care center, offering advanced treatments including
//           corneal transplants, vitreoretinal services, glaucoma care, and squint
//           surgeries, restoring sight and transforming lives every day.
//         </p>

//         <div className="mt-6 sm:mt-8">
//           <Link href="https://pob-delta.vercel.app/about-us">
//             <button className="bg-[#373895] font-[400px]  text-[#FFFFFF] px-8 py-2 rounded-full hover:bg-[#2c2f6e] transition-colors">
//               Read more
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//     //   <section className="py-40">
//     //   <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2 md:items-center">
//     //     <div className="rounded-2xl bg-black/5 aspect-[4/3]" />
//     //     <div>
//     //       <div className="flex items-center gap-2">
//     //         <span className="h-2 w-2 rounded-full bg-accent-600" />
//     //         <span className="text-sm font-semibold text-black/60">ABOUT</span>
//     //       </div>

//     //       <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
//     //         Absolutely Free Eye Care
//     //       </h2>

//     //       <p className="mt-4 text-black/60 leading-relaxed">
//     //         Replace this paragraph with your Figma content. Keep it 2–4 lines for a clean layout.
//     //       </p>

//     //       <button className="mt-6 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700">
//     //         Learn More
//     //       </button>
//     //     </div>
//     //   </div>
//     // </section>
//   );
// };

// export default Aboutus;
"use client";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading, SectionLabel } from "./News";

const Aboutus = () => {
  return (
    <section className="mx-auto md:max-w-6xl px-4 sm:px-6 lg:px-8 md:py16 sm:py20 lg:py24">
      <div
        className="
          flex flex-col
          md:flex-row
          gap-10 lg:gap-14
          items-stretch
        "
      >
        {/* IMAGE */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative h-full min-h-[320px] sm:min-h-[420px] md:min-h-[520px] rounded-2xl overflow-hidden">
            <Image
              src="/aboutus.webp"
              alt="About Us"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center">
          <p className={`m-0 !font-amaranth text-[15px] text-[#C30001] uppercase font-normal leading-none`}>
            About Us
          </p>

          <h2
      className={`m-0 !font-amaranth w-[600px] mb-6 text-[32px] md:text-[50px] text-black font-normal leading-[1.1]`}
    >
      Absolutely Free Eye Care
    </h2>
          {/* <SectionHeading
            text="Absolutely Free Eye Care"
            className="mb-0 mt-1 sm:mt-2 lg:mt-3"
          /> */}

          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            Prevention of Blindness (POB) Trust was established in 2007 with a
            singular mission: to eliminate preventable blindness by providing
            free, quality eye care to those in need. Operating under the
            patronage of the Pakistan Islamic Medical Association (PIMA), POB
            Trust is committed to serving underserved communities with
            compassion and excellence.
          </p>

          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            Through our flagship POB Eye Hospital in Gulistan-e-Johar and four
            campuses across Karachi, we deliver comprehensive eye care services
            completely free of cost.
          </p>

          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            What began as a small cataract initiative has grown into a
            state-of-the-art charitable tertiary eye care center, offering
            advanced treatments including corneal transplants, vitreoretinal
            services, glaucoma care, and squint surgeries.
          </p>

          <div className="mt-8">
            <Link href="/about-us">
              <button className="bg-[#373895] text-white px-8 py-3 rounded-full text-[13px] font-inter hover:bg-[#2c2f6e] transition">
                Read more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;