"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Commitment = () => {
  const cards = [
    {
      image: "/card1.webp",
      text: "Free Treatment for All",
      description: "No one should suffer blindness due to financial constraints. We provide world-class eye care completely free of cost.",
    },
    {
      image: "/card2.webp",
      text: "Dignified Care",
      description: "Every patient is treated with respect, compassion, and humanity because vision is priceless.",
    },
    {
      image: "/card5.webp",
      text: "Impactful Change",
      description: "From preventing blindness to performing life-changing surgeries, our work transforms lives and communities.",
    },
    {
      image: "/card4.webp",
      text: "Restoring Hope",
      description: "We bring back the joy of sight, helping people reconnect with their loved ones and pursue their dreams.",
    },
    // {
    //   image: "/card3.webp",
    //   text: "A Vision for Everyone",
    //   description: "We believe everyone deserves the chance to see the world clearly, live fully, and experience life to its fullest.",
    // },
  ];

  const sliderRef = useRef(null);
  const cardRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [cardWidth, setCardWidth] = useState(0);

  // Swipe logic ke liye states
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    const calculateSizes = () => {
      if (!sliderRef.current || !cardRef.current) return;
      const sliderWidth = sliderRef.current.offsetWidth;
      const cardRect = cardRef.current.getBoundingClientRect();
      const gap = window.innerWidth >= 1512 ? 40 : (window.innerWidth < 768 ? 24 : 40);
      const fullCardWidth = cardRect.width + gap;
      setCardWidth(fullCardWidth);
      setVisibleCards(Math.max(1, Math.floor(sliderWidth / fullCardWidth)));
    };

    calculateSizes();
    window.addEventListener("resize", calculateSizes);
    return () => window.removeEventListener("resize", calculateSizes);
  }, []);

  const totalDots = cards.length - (visibleCards - 1);

  const nextSlide = () => {
    if (currentIndex < totalDots - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Swipe Handling Functions
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < totalDots - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="md:ml10 pt-10 max-w-6xl mx-auto  overflow-hidden mac:max-w-[1600px] mac:px-20 mac:mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end pt-10 px-6 md:px-10">
          <div>
        <h4 className={`m-0 !font-amaranth text-[15px]  text-[#C30001] uppercase font-normal leading-none`}>
              Commitment
            </h4>
            <h2 className={`m-0 !font-amaranth text-[32px] md:text-[50px] font-normal leading-[1.1]`}>
              Our Commitment at <br className="hidden md:block" /> POB Trust
            </h2>
          </div>

          {/* Navigation Arrows */}
            {/* <div className="md:flex hidden gap-3 mb-14">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-black bg-white text-black transition-all disabled:opacity-30 hover:bg-gray-50 shadow-sm"
              >
                <FaChevronLeft size={14} />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex >= totalDots - 1}
                className="w-10 h-10 rounded-full bg-blue flex items-center justify-center border border-black bg-white text-black transition-all disabled:opacity-30 hover:bg-gray-50 shadow-sm"
              >
                <FaChevronRight size={14} />
              </button>
            </div> */}
            <div className="md:flex hidden gap-3 mb-14">
  {/* Prev Button */}
  <button
    onClick={prevSlide}
    disabled={currentIndex === 0}
    className={`w-10 h-10 rounded-full flex items-center text-black justify-center border transition-all shadow-sm
      ${
        currentIndex === 0
          ? "bg-white text-black opacity30 cursor-not-allowed"
          : "bg-[#373895] text-white border-[#373895] hover:bg-[#373895]/80"
      }
    `}
  >
    <FaChevronLeft size={14} />
  </button>

  {/* Next Button */}
  <button
    onClick={nextSlide}
    disabled={currentIndex >= totalDots - 1}
    className={`w-10 h-10 rounded-full flex items-center text-black justify-center border transition-all shadow-sm
      ${
        currentIndex >= totalDots - 1
          ? "bg-white text-black opacity30 cursor-not-allowed"
          : "bg-[#373895] text-white border-[#373895] hover:bg-[#373895]/80"
      }
    `}
  >
    <FaChevronRight size={14} />
  </button>
</div>
        </div>

        {/* Slider Container with Touch Events */}
        <div
          className="overflow-hidden px-6 md:px-10 mt-10"
          ref={sliderRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex gap-6 md:gap-10 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * cardWidth}px)`,
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                ref={index === 0 ? cardRef : null}
                className="md:min-w-[55%] min-w-[95%] w-[1000px] md:min-w-[410px] mac:min-w-[650px]"
              >
                <img
                  src={card.image}
                  alt={card.text}
                  className="h-60 md:h-[303.51px] w-[1000px] md:w-[442px] ma[500px] wfull object-cover rounded-[8px]"
                />
                <h3 className="text-xl h-10 md:text-[22px] mt-4 text-black py-2 md:py-2 font-inter">
                  {card.text}
                </h3>
                <p className="text-gray-600 text-[14px] md:text-[14.5px] font-inter mt-2 mb-8">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dots - Hidden on mobile (hidden), shown on desktop (md:flex) */}
        {/* <div className="hidden md:flex justify-center gap-4 pb-10">
          {Array.from({ length: totalDots > 0 ? totalDots : 0 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="relative flex items-center justify-center w-6 h-6 transition-all duration-300 cursor-pointer"
            >
              {currentIndex === idx ? (
                <>
                  <div className="absolute w-6 h-6 border-2 border-[#373895] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#C30001] rounded-full"></div>
                </>
              ) : (
                <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors"></div>
              )}
            </button>
          ))}
        </div> */}
      </div>

      {/* Impact Section */}
<div className="relative maxw6xl md:w-[1,352.22px] md:h-[308.71px] mx-auto my-10 md:my-20 overflow-hidden roundedlg">

  <div className="absolute inset-0  w-[1,352.22px] h-[308.71px] bg-[url('/section4.png')] bg-cover bg-center" />

  <div className="relative z-10 flex justify-end px-6 md:px-24 2xl:px-[250px] py-12 md:py-20">
    
    {/* Text Block */}
    <div className="max-w-xl text-right">
      
      <h3 className="text-white font-amaranth text-4xl md:text-[60px] leading-tight text-center md:text-left">
        Rs. 2 Billion Disbursed
      </h3>

      <p className="mt-3 text-white text-base md:text-[17px]  text-center md:text-left">
        POB Helped Create PKR 10B Worth of Impact
      </p>

    </div>

  </div>
</div>

    </>
  );
};

export default Commitment;