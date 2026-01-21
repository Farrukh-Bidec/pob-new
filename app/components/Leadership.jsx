"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const LeaderShip = () => {
  const sliderImages = [
    { src: "/doctor.jpg", name: "Dr. Abdullah Muttaqi", position: "Chairman" },
    { src: "/doctor2.jpg", name: "Dr. Atif Hafeez", position: "Member" },
    { src: "/doctor3.jpg", name: "Dr. Misbah ul Aziz", position: "Director" },
    { src: "/doctor4.jpg", name: "Dr. Muhammad Azeemuddin", position: "Director Quality Assurance" },
  ];

  const categories = [
    "Outreach Program Schools",
    "Al_Fajr Scientific Visit",
    "Adamjee",
    "Sakina Noor Campus",
    "Orangi Unit Campus",
    "Donor Visits",
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="relative flex flex-col items-center justify-center text-center pt-12">
      {/* Header */}
      <div className="md:w-5/12 w-[90%] font-inter items-center text-center mb-4 flex flex-col gap-2">
        <h4 className="uppercase text-[#C30001] text-xl">Media Gallery</h4>
        <h2 className="text-3xl pb- pt-2 text-black">Capturing Moments, Sharing Stories</h2>
        <p className="text-[#777777] text-center text-[14px] pb-5">
          Explore impactful visuals that tell the reel stories behind the similar
        </p>
      </div>

      {/* Category Buttons Bar */}
     {/* Category Buttons Bar */}
<div className="w-full flex justify-center mb-6 px-2">
  <div className="flex overflow-x-auto whitespace-nowrap gap-2 md:gap-4 snap-x snap-mandatory py-2 px-2 md:px-4 bg-[#373895] rounded-md md:rounded-full scrollbar-hide">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => setActiveCategory(category)}
        className={`flex-shrink-0  cursor-pointer px-4 py-2 text-[13px] rounded-full transition-colors duration-200 snap-start ${
          activeCategory === category
            ? "bg-white text-black font-semibold"
            : "bg-transparent text-white"
        }`}
      >
        {category}
      </button>
    ))}
  </div>
</div>


      {/* Leadership Slider */}
    {/* Leadership Slider */}
<div className="w-full overflow-x-auto remove-scroll">
  <div className="flex gap-6 min-w-max px-4 justify-center ">
    {sliderImages.map((item, index) => (
      <div key={index} className="flex-shrink-0 w-72 flex flex-col items-center ">
        <img
          src={item.src}
          alt={item.name}
          className="w-[90%] h-78 object-cover rounded-lg"
        />
        <div className="text-center mt-2">
          {/* <h4 className="text-lg font-Amaranth text-black">{item.name}</h4> */}
          {/* <p className="text-sm text-gray-500 font-inter">{item.position}</p> */}
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default LeaderShip;
