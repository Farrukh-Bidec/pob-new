"use client";

import React, { useState, useRef, useEffect } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const LeaderShip = () => {
  const sliderImages = [
    { src: "/Aghosh_Hala/agos_hala.webp", category: "Agosh Hala" },
    { src: "/Aghosh_Hala/agos_hala2.webp", category: "Agosh Hala" },
    { src: "/Aghosh_Hala/agos_hala3.webp", category: "Agosh Hala" },
    { src: "/Aghosh_Hala/agos_hala4.webp", category: "Agosh Hala" },
    { src: "/Aghosh_Hala/agos_hala5.webp", category: "Agosh Hala" },

    { src: "/Al_Fajr/alfajr.webp", category: "Al_Fajr Scientific Visit" },
    { src: "/Al_Fajr/alfajr2.webp", category: "Al_Fajr Scientific Visit" },
    { src: "/Al_Fajr/alfajr3.webp", category: "Al_Fajr Scientific Visit" },
    { src: "/Al_Fajr/alfajr4.webp", category: "Al_Fajr Scientific Visit" },
    { src: "/Al_Fajr/alfajr5.webp", category: "Al_Fajr Scientific Visit" },
    { src: "/Al_Fajr/alfajr6.webp", category: "Al_Fajr Scientific Visit" },

    { src: "/Baithak_School/school.webp", category: "Baithak School" },
    { src: "/Baithak_School/school2.webp", category: "Baithak School" },
    { src: "/Baithak_School/school3.webp", category: "Baithak School" },
    { src: "/Baithak_School/school4.webp", category: "Baithak School" },

    { src: "/School_Camps/school1.webp", category: "School Camps" },
    { src: "/School_Camps/school2.webp", category: "School Camps" },

    { src: "/Orangi_Town_Campus/orangi.webp", category: "Orangi Unit Campus" },
    { src: "/Orangi_Town_Campus/orangi2.webp", category: "Orangi Unit Campus" },
    { src: "/Orangi_Town_Campus/orangi3.webp", category: "Orangi Unit Campus" },
    { src: "/Orangi_Town_Campus/orangi4.webp", category: "Orangi Unit Campus" },
  ];

  const categories = [
    "Agosh Hala",
    "Al_Fajr Scientific Visit",
    "Baithak School",
    "School Camps",
    "Orangi Unit Campus",
    // "Donor Visits",
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(288 + 24); // Default w-72 (288) + gap-6 (24)
  const [visibleCount, setVisibleCount] = useState(1); // Default to 1
  const sliderRef = useRef(null);

  // Swipe logic states
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 1512) {
        setCardWidth(420 + 16); // Mac: w-[420px] + gap-4 (16)
        setVisibleCount(4);
      } else {
        setCardWidth(288 + 24); // Default: w-72 (288) + gap-6 (24)
        setVisibleCount(1);
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const filteredImages = sliderImages.filter(
    (image) => image.category === activeCategory
  );

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    // On Mac, we show 4 cards, so we can't scroll past the point where 4 cards are visible
    const maxIndex = Math.max(0, filteredImages.length - visibleCount);
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  // Swipe handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  return (
    <div className="relative flex flex-col items-center justify-center text-center pt-12 mac:max-w-[1728px] mac:mx-auto">
      {/* Header */}
      <div className="w-[90%] font-inter items-center text-center mb-4 flex flex-col gap-2">
        <h4 className="uppercase text-[#C30001] text-[22px] mac:text-[32px]">Media Gallery</h4>
        <h2 className="text-3xl sm:text-5xl mac:text-7xl pb- pt-2 text-black w-full">Capturing Moments, Sharing Stories</h2>
        <p className="text-[#777777] text-center text-[14px] mac:text-xl pb-5">
          Explore impactful visuals that tell the real stories behind the scenes
        </p>
      </div>

      {/* Category Buttons */}
      <div className="w-full flex justify-center mb-6 px-2">
        <div className="flex overflow-x-auto whitespace-nowrap gap-2 md:gap-4 mac:gap-8 snap-x snap-mandatory py-2 px-2 md:px-4 mac:px-10 bg-[#373895] rounded-md md:rounded-full scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex-shrink-0 cursor-pointer px-4 py-2 text-[13px] mac:text-xl rounded-full transition-colors duration-200 snap-start ${activeCategory === category
                ? "bg-white text-black font-semibold"
                : "bg-transparent text-white"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative w-full px-4 md:px-16 mac:px-4 flex items-center justify-center">

        {/* Left Arrow - Hidden on Mobile, Shown on MD+ */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="hidden md:flex absolute left-2 md:left-10 z-10 p-2 bg-white border border-gray-200 rounded-full shadow-md disabled:opacity-30 hover:bg-gray-50 transition-all mac:scale-150"
        >
          <MdArrowBackIos className="text-gray-600 text-lg ml-1" />
        </button>

        {/* Slider Viewport with Swipe Events / Mobile Grid */}
        <div
          className="w-full overflow-hidden"
          ref={sliderRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Mobile Grid (hidden on md) */}
          <div className="grid grid-cols-2 gap-3 md:hidden">
            {filteredImages.length > 0 ? (
              filteredImages.map((item, index) => (
                <div key={index} className="w-full flex flex-col items-center">
                  <img
                    src={item.src}
                    alt={item.category}
                    className="w-full h-48 object-cover rounded-xl shadow-sm"
                  />
                </div>
              ))
            ) : (
              <p className="text-blue-900 w-full col-span-2">No images available </p>
            )}
          </div>

          {/* Desktop Slider (hidden on mobile) */}
          <div
            className="hidden md:flex gap-6 mac:gap-2 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * cardWidth}px)`,
            }}
          >
            {filteredImages.length > 0 ? (
              filteredImages.map((item, index) => (
                <div key={index} className="shrink-0 w-72 mac:w-[390px] flex flex-col items-center">
                  <img
                    src={item.src}
                    alt={item.category}
                    className="w-[90%] h-78 mac:h-[410px] object-cover rounded-lg mac:rounded-2xl shadow-sm"
                  />
                </div>
              ))
            ) : (
              <p className="text-blue-900 w-full">No images available </p>
            )}
          </div>
        </div>

        {/* Right Arrow - Hidden on Mobile, Shown on MD+ */}
        <button
          onClick={handleNext}
          disabled={currentIndex >= filteredImages.length - visibleCount}
          className="hidden md:block absolute right-2 md:right-10 z-10 p-2 bg-white border border-gray-200 rounded-full shadow-md disabled:opacity-30 hover:bg-gray-50 transition-all mac:scale-150"
        >
          <MdArrowForwardIos className="text-gray-600 text-lg" />
        </button>
      </div>
    </div>
  );
};

export default LeaderShip;