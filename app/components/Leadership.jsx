"use client";

import React, { useState } from "react";

const LeaderShip = () => {
  const sliderImages = [
    { src: "/Aghosh_Hala/agos_hala.webp",  category: "Agosh Hala" },
    { src: "/Aghosh_Hala/agos_hala2.webp",  category: "Agosh Hala" },
    { src: "/Aghosh_Hala/agos_hala3.webp",  category: "Agosh Hala" },
    { src: "/Aghosh_Hala/agos_hala4.webp",  category: "Agosh Hala" },
    { src: "/Aghosh_Hala/agos_hala5.webp",  category: "Agosh Hala" },
    

    { src: "/Al_Fajr/alfajr.webp",  category: "Al_Fajr Scientific Visit" },
    { src: "/Al_Fajr/alfajr2.webp",  category: "Al_Fajr Scientific Visit" },
    { src: "/Al_Fajr/alfajr3.webp",  category: "Al_Fajr Scientific Visit" },
    { src: "/Al_Fajr/alfajr4.webp",  category: "Al_Fajr Scientific Visit" },
    { src: "/Al_Fajr/alfajr5.webp",  category: "Al_Fajr Scientific Visit" },
    { src: "/Al_Fajr/alfajr6.webp",  category: "Al_Fajr Scientific Visit" },


    { src: "/Baithak_School/school.webp",  category: "Baithak School" },
    { src: "/Baithak_School/school2.webp",  category: "Baithak School" },
    { src: "/Baithak_School/school3.webp",  category: "Baithak School" },
    { src: "/Baithak_School/school4.webp",  category: "Baithak School" },


    { src: "/School_Camps/school1.webp",  category: "School Camps" },
    { src: "/School_Camps/school2.webp",  category: "School Camps" },

    { src: "/Orangi_Town_Campus/orangi.webp",  category: "Orangi Unit Campus" },
    { src: "/Orangi_Town_Campus/orangi2.webp",  category: "Orangi Unit Campus" },
    { src: "/Orangi_Town_Campus/orangi3.webp",  category: "Orangi Unit Campus" },
    { src: "/Orangi_Town_Campus/orangi4.webp",  category: "Orangi Unit Campus" },
  ];

  const categories = [
    // "Outreach Program Schools",
    // "Adamjee",
    "Agosh Hala",
    "Al_Fajr Scientific Visit",
    "Baithak School",
    "School Camps",
    "Orangi Unit Campus",
    "Donor Visits",
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // Filter images based on the active category
  const filteredImages = sliderImages.filter(
    (image) => image.category === activeCategory
  );

  return (
    <div className="relative flex flex-col items-center justify-center text-center pt-12">
      {/* Header */}
      <div className="w-[90%] font-inter items-center text-center mb-4 flex flex-col gap-2">
        <h4 className="uppercase text-[#C30001] text-[22px]">Media Gallery</h4>
        <h2 className="text-3xl sm:text-5xl pb- pt-2 text-black w-full">Capturing Moments, Sharing Stories</h2>
        <p className="text-[#777777] text-center text-[14px] pb-5">
          Explore impactful visuals that tell the real stories behind the scenes
        </p>
      </div>

      {/* Category Buttons */}
      <div className="w-full flex justify-center mb-6 px-2">
        <div className="flex overflow-x-auto whitespace-nowrap gap-2 md:gap-4 snap-x snap-mandatory py-2 px-2 md:px-4 bg-[#373895] rounded-md md:rounded-full scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex-shrink-0 cursor-pointer px-4 py-2 text-[13px] rounded-full transition-colors duration-200 snap-start ${
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
      <div className="w-full overflow-x-auto remove-scroll px:10">
        <div className="flex gap-6 min-w-max px-4 justify-center">
          {filteredImages.length > 0 ? (
            filteredImages.map((item, index) => (
              <div key={index} className="shrink-0 w-72 flex flex-col items-center">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-[90%] h-78 object-cover rounded-lg"
                />
                {/* <div className="text-center mt-2">
                  <h4 className="text-lg font-Amaranth text-black">{item.name}</h4>
                  <p className="text-sm text-gray-500 font-inter">{item.position}</p>
                </div> */}
              </div>
            ))
          ) : (
            <p className="text-blue-900">No images available </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaderShip;
