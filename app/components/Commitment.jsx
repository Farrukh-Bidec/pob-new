"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Commitment = () => {
  const cards = [
    {
      image: "/card1.png",
      text: "Free Treatment for All",
      description:
        "No one should suffer blindness due to financial constraints. We provide world-class eye care completely free of cost.",
    },
    {
      image: "/card2.png",
      text: "Dignified Care",
      description:
        "Every patient is treated with respect, compassion, and humanity because vision is priceless.",
    },
    {
      image: "/card5.png",
      text: "Impactful Change",
      description:
        "From preventing blindness to performing life-changing surgeries, our work transforms lives and communities.",
    },
    {
      image: "/card4.png",
      text: "Restoring Hope",
      description:
        "We bring back the joy of sight, helping people reconnect with their loved ones and pursue their dreams.",
    },
    {
      image: "/card3.png",
      text: "A Vision for Everyone",
      description:
        "We believe everyone deserves the chance to see the world clearly, live fully, and experience life to its fullest.",
    },
  ];

  const sliderRef = useRef(null);
  const cardRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const calculateSizes = () => {
      if (!sliderRef.current || !cardRef.current) return;

      const sliderWidth = sliderRef.current.offsetWidth;
      const cardRect = cardRef.current.getBoundingClientRect();
      const gap = 20; // gap-5 = 20px

      const fullCardWidth = cardRect.width + gap;

      setCardWidth(fullCardWidth);
      setVisibleCards(Math.max(1, Math.floor(sliderWidth / fullCardWidth)));
    };

    calculateSizes();
    window.addEventListener("resize", calculateSizes);
    return () => window.removeEventListener("resize", calculateSizes);
  }, []);

  const handleNext = () => {
    if (currentIndex < cards.length - visibleCards) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="md:ml-30 pt-10">
        {/* Header */}
        <div className="flex sm:justify-between flex-wrap pt-10 px-10 justify-center ">
          <div>
            <h4 className="text-[#C30001] text-sm uppercase mb-4 sm:text-left text-center">Commitment</h4>
            <h2 className="sm:text-5xl text-3xl mb-4 text-black  sm:text-left text-center">
              Our Commitment at <br /> POB Trust
            </h2>
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="hidden lg:flex rounded-full bg-[#373895] text-white size-10  items-center justify-center disabled:bg-white disabled:text-black disabled:border"
            >
              <MdArrowBackIos />
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex >= cards.length - visibleCards}
              className="hidden lg:flex rounded-full bg-[#373895] text-white size-10  items-center justify-center disabled:bg-white disabled:text-black disabled:border"
            >
              <MdArrowForwardIos />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-auto sm:overflow-hidden px-10 pb-10" ref={sliderRef}>
          <div
            className="flex gap-10 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * cardWidth}px)`,
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                ref={index === 0 ? cardRef : null}
                className="min-w-[290px] md:min-w-[490px] "
              >
                <img
                  src={card.image}
                  alt={card.text}
                  className="h-90 w-full object-cover rounded-2xl"
                />
                <h3 className="text-2xl mt-4 text-black py-3">
                  {card.text}
                </h3>
                <p className="text-gray-600 mt-2 mb-8 text-">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="relative bg-[url('/section4.png')] bg-no-repeat bg-cover py-25 px-10 md:text-right text-center overflow-hidden sm:my-14 md:mb-20">
        {/* Bluish Overlay */}
        <div className="sm:hidden absolute inset-0 bg-gradient-to-l from-[#1e3a8a]/80 via-[#1e3a8a]/50 to-transparent"></div>
        {/* Content */}
        <div className="relative md:pr-20 pt-5 flex flex-col items-center md:items-end text-center md:text-left ">
          <h3 className="text-4xl md:text-6xl pb-2 text-white mt-17 sm:mt-0">
            Rs. 2 Billion Disbursed
          </h3>
          <p className="text-white md:pr-58">
            POB Helped Create PKR 10B Worth of Impact
          </p>
        </div>

      </div>
    </>
  );
};

export default Commitment;
