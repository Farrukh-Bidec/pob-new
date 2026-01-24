"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

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
    {
      image: "/card3.webp",
      text: "A Vision for Everyone",
      description: "We believe everyone deserves the chance to see the world clearly, live fully, and experience life to its fullest.",
    },
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
      const gap = window.innerWidth < 768 ? 24 : 40; 
      const fullCardWidth = cardRect.width + gap;
      setCardWidth(fullCardWidth);
      setVisibleCards(Math.max(1, Math.floor(sliderWidth / fullCardWidth)));
    };

    calculateSizes();
    window.addEventListener("resize", calculateSizes);
    return () => window.removeEventListener("resize", calculateSizes);
  }, []);

  const totalDots = cards.length - (visibleCards - 1);

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
      <div className="md:ml-10 pt-4 overflow-hidden">
        {/* Header */}
        <div className="flex sm:justify-between flex-wrap pt-10 px-6 md:px-10 justify-center">
          <div>
            <h4 className="text-[#C30001] text-lg md:text-[22px] uppercase mb-2 md:mb-4 sm:text-left text-center font-semibold">
              Commitment
            </h4>
            <h2 className="text-3xl md:text-[48px] mb-4 text-black sm:text-left text-center leading-tight">
              Our Commitment at <br className="hidden md:block" /> POB Trust
            </h2>
          </div>
        </div>

        {/* Slider Container with Touch Events */}
        <div 
          className="overflow-hidden px-6 md:px-10" 
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
                className="min-w-[85%] md:min-w-[490px]"
              >
                <img
                  src={card.image}
                  alt={card.text}
                  className="h-60 md:h-90 w-full object-cover rounded-2xl"
                />
                <h3 className="text-xl md:text-2xl mt-4 text-black py-2 md:py-3 font-medium">
                  {card.text}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mt-2 mb-8">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dots - Hidden on mobile (hidden), shown on desktop (md:flex) */}
        <div className="hidden md:flex justify-center gap-4 pb-10">
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
        </div>
      </div>

      {/* Impact Section */}
      <div className="relative bg-[url('/section4.png')] bg-no-repeat bg-cover py-25 px-10 md:text-right text-center overflow-hidden sm:my-14 md:mb-20">
        <div className="sm:hidden absolute inset-0 bg-gradient-to-l from-[#1e3a8a]/80 via-[#1e3a8a]/50 to-transparent"></div>
        <div className="relative md:pr-20 pt-5 flex flex-col items-center md:items-end text-center md:text-left">
          <h3 className="text-4xl md:text-6xl pb-2 text-white mt-17 sm:mt-0 font-bold">
            Rs. 2 Billion Disbursed
          </h3>
          <p className="text-white md:pr-48 text-lg">
            POB Helped Create PKR 10B Worth of Impact
          </p>
        </div>
      </div>
    </>
  );
};

export default Commitment;