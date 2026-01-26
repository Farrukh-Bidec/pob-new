"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Image_Url } from "./axios";

const Aboutus = () => {
  return (
    <div className="flex flex-col md:flex-row py-4 mt-10 md:-mt-24 sm:py-6 gap-6 md:gap-10 items-center relative px-4 sm:px-10 lg:px-16 xl:px-24 2xl:px-40 mac:max-w-[1600px] mac:px-20 mx-auto">

      {/* Image Section */}
      <div className="w-full md:w-[50%] lg:w-[55%] mx-auto">
        <Image
          src="/aboutus.webp"
          alt="About Us"
          width={800}
          height={800}
          className="w-full sm:w-[85%] md:w-full min-h-[300px] sm:min-h-[350px] md:min-h-[550px] lg:min-h-[580px] object-cover rounded-2xl mx-auto"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-[50%] lg:w-[55%] text-black py-4 sm:py-6 text-center sm:text-left">
        <h4 className="text-[12px] sm:text-[14px] mb-1 text-[#C30001] uppercase font-semibold">
          About Us
        </h4>

        <h2 className="text-2xl sm:text-2xl md:text-5xl font-bold py-1">
          Absolutely Free Eye Care
        </h2>

        <p className="text-sm mac:mt-10 mac:text-[40px] mt-2 sm:text-base md:text-[16px] mb-4 text-gray-500 leading-relaxed">
          Prevention of Blindness (POB) Trust was established in 2007
        
          with a singular mission: to eliminate preventable blindness by providing
        
          free, quality eye care to those in need. Operating under the patronage
        
          of the Pakistan Islamic Medical Association (PIMA), POB Trust is
        
          committed to serving underserved communities with compassion
          
          and excellence.
        </p>

        <p className="text-sm sm:text-base md:text-[16px] mb-4 text-gray-500 leading-relaxed">
          Through our flagship POB Eye Hospital in Gulistan-e-Johar and
          four campuses across Karachi, we deliver comprehensive eye care
          services completely free of cost.
        </p>

        <p className="text-sm sm:text-base md:text-[16px] text-gray-500 leading-relaxed">
          What began as a small cataract initiative has grown into a state-of-the-art
          charitable tertiary eye care center, offering advanced treatments including
          corneal transplants, vitreoretinal services, glaucoma care, and squint
          surgeries, restoring sight and transforming lives every day.
        </p>

        <div className="mt-6 sm:mt-8">
          <Link href="https://pob-delta.vercel.app/about-us">
            <button className="bg-[#373895] font-[400px]  text-[#FFFFFF] px-8 py-2 rounded-full hover:bg-[#2c2f6e] transition-colors">
              Read more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
