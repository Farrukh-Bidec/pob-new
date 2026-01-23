import Image from "next/image";
import Link from "next/link";
import React from "react";

const Aboutus = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center -mt-15 relative px-10 sm:px-4 pt-4 lg:pt-2 2xl:pb-15 pb-5 sm:pb-20">

      {/* Image Section */}
      <div className="w-full md:w-[55%] mx-auto">
        <Image
          src="/aboutus.webp"
          alt="About Us"
          width={800}
          height={800}
          className="w-full sm:w-[80%] h-[400px] md:h-[668px] object-cover rounded-lg mx-auto my-4"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-[55%] text-black py-10 text-center sm:text-left ">
        <h4 className="text-[22px]  mb-1 text-[#C30001] mt-5 uppercase">
          About Us
        </h4>

        <h2 className="text-3xl sm:text-5xl py-5">
          Absolutely Free Eye Care
        </h2>

        <p className="text-sm sm:text-base mb-4 text-gray-500">
          Prevention of Blindness (POB) Trust was established in 2007
          <span className="hidden sm:inline"><br /></span>
          with a singular mission: to eliminate preventable blindness by providing
          <span className="hidden sm:inline"><br /></span>
          free, quality eye care to those in need. Operating under the patronage
          <span className="hidden sm:inline"><br /></span>
          of the Pakistan Islamic Medical Association (PIMA), POB Trust is
          <span className="hidden sm:inline"><br /></span>
          committed to serving underserved communities with compassion
          <span className="hidden sm:inline"><br /></span>
          and excellence.
        </p>

        <p className="text-sm sm:text-base mb-4 text-gray-500">
          Through our flagship POB Eye Hospital in Gulistan-e-Johar and
          <span className="hidden sm:inline"><br /></span> four campuses across Karachi, we deliver comprehensive eye care
          <span className="hidden sm:inline"><br /></span> services completely free of cost.
        </p>

        <p className="text-sm sm:text-base text-gray-500">
          What began as a small cataract initiative has grown into a state-of-the-art
          <span className="hidden sm:inline"><br /></span> charitable tertiary eye care center, offering advanced treatments including
          <span className="hidden sm:inline"><br /></span> corneal transplants, vitreoretinal services, glaucoma care, and squint
          <span className="hidden sm:inline"><br /></span> surgeries, restoring sight and transforming lives every day.
        </p>

        <button className="bg-[#373895] text-white px-4 py-2 my-8 rounded-full hover:bg-[#2c2f6e]" >
          <Link href="https://pob-delta.vercel.app/about-us">
            Read more
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Aboutus;
