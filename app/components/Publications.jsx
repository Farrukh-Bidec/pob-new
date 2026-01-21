"use client";

import React, { useState, useEffect, useRef } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Publications = () => {
  const cards = [
    {
      image: "/publications.jpg",
      text: "Day 1 Highlights from the Healthcare Expo 2025!",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: "/publications2.jpg",
      text: "It is a long established fact that a reader will be distracted",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: "/publications.jpg",
      text: "Day 1 Highlights from the Healthcare Expo 2025!",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  const CARD_WIDTH = 520; // 500px card + 20px gap
  const sliderRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  // Calculate visible cards
  useEffect(() => {
    const updateVisibleCards = () => {
      if (sliderRef.current) {
        const width = sliderRef.current.offsetWidth;
        setVisibleCards(Math.floor(width / CARD_WIDTH));
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
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
    <div className=" pt-0 2xl:pt-30 sm:overflow-hidden overflow-auto md:ml-[44px]" >
      {/* Header */}
      <div className="  items-center py-10 px-5 sm:px-15 items-center">
        <div>
          <h4 className="text-[#C30001] text-xl uppercase sm:text-sm sm:text-left text-center">
            News
          </h4>
          <h2 className="text-black text-3xl sm:text-5xl   sm:text-left text-center">
            News & Publications
          </h2>
        </div>


        {/* Buttons */}
        <div className="flex gap-2 ">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="lg:flex hidden rounded-full text-black border bg-white size-10 items-center justify-center "
          >
            <MdArrowBackIos />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= cards.length - visibleCards}
            className="lg:flex hidden rounded-full bg-[#373895] text-white size-10 items-center justify-center disabled:opacity-40"
          >
            <MdArrowForwardIos />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="overflow-auto sm:overflow-hidden px-10 pb-40 sm:pb-0" ref={sliderRef}>
        <div
          className="flex gap-5 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * CARD_WIDTH}px)`,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-[500px] flex-shrink-0 bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src={card.image}
                alt={card.text}
                className="w-full h-auto object-cover rounded-md"
              />

              <h3 className="text-2xl mt-4 text-black line-clamp-1">
                {card.text}
              </h3>

              <p className="text-gray-600 mt-2">
                {card.description}
              </p>

              <button className="bg-[#373895] text-white rounded-full px-4 py-2 mt-4 w-full sm:w-auto">
                Read more
              </button>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Publications;
