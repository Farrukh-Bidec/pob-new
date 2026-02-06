"use client";
import React, { useState } from 'react';
import { useEffect } from "react";
const Help = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            image: "Secondcard.png",
            text: "Services Delivered",
            ratio: "PKR 13.5B "
        },
        {
            image: "Secondcard2.png",
            text: "Funds to Patient Care",
            ratio: "90% "
        },
        {
            image: "Secondcard3.png",
            text: "Patients Served",
            ratio: "1.8M+"
        },
        {
            image: "Secondcard4.png",
            text: "Plus 1 Expanding",
            ratio: "4 Hospitals "
        },
           {
            image: "Secondcard4.png",
            text: "Sight-Restoring Surgeries",
            ratio: "166K "
        },

    ];

    const impactBlocks = [
        {
            image: "/3section.png",
            title: "Patient-First Approach",
            text: "Patient care comes first delivered with empathy, respect, and an unwavering commitment to restoring sight.",
            align: "end"   // self-end
        },
        {
            image: "/3section2.png",
            title: "Care Without Barriers",
            text: "No referrals, no delays, just compassionate eye care delivered seamlessly to those who need it most.",
            align: "start" // self-start
        },
        {
            image: "/3section3.png",
            title: "Protecting Visions",
            text: "Every treatment safeguards sight and dignity, because losing vision should never mean losing respect or self-worth.",
            align: "end"
        }

    ];
    const totalCards = cards.length;
    const loopCards = [...cards, ...cards];

    const showArrows = totalCards > 2;
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        if (currentIndex === totalCards) {
            setTimeout(() => {
                setCurrentIndex(0);
            }, 700); // transition duration ke baad
        }
    }, [currentIndex, totalCards]);
    return (
        <>
            {/* ==================== Hepatitis Statistics Cards ==================== */}
            {/* <div className="relative w-full bg-white pt-16">
                <div className="text-black text-center relative z-10 px-4 sm:px-6 lg:px-8">
                    <h4 className="text-[12px]  sm:text-[14px] mb1 text-[#C30001] uppercase font-semibold">
                        Current
                    </h4>
                    <h2 className="text-xl sm:text-5xl lg:text-5xl pb-10 pt-3 font-bold">
                        Situation on Hepatitis in Pakistan
                    </h2>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mac:max-w-[1400px] mx-auto px-2 sm:px-0">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="w-full bg-white rounded-xl overflow-hidden hover:shadow-xl duration-300 flex flex-col h-64 sm:h-80 mac:h-[420px] relative"
                            >
                                <div className="flex-none w-40  w-full flex justify-start items-start">
                                    <img
                                        src={card.image}
                                        alt={card.text}
                                        className=" sm:w-28 sm:h-28 mac:w-40 mac:h-40 object-contain rounded-tl-xl rounded-br-[35px] sm:rounded-br-[45px]"
                                    />
                                </div>

                                <div className="p-3 ml-6 md:ml-0 sm:p-6 mac:p-10 flex flex-col flex-grow text-left">
                                    <h3 className="text-2xl sm:text-5xl mac:text-8xl text-[#CBCBE3] mb-2 sm:mb-4 font-bold">
                                        {card.ratio}
                                    </h3>
                                    <p className="text-gray-500 text-[10px] sm:text-base mac:text-4xl leading-snug sm:leading-relaxed font-medium line-clamp-3">
                                        {card.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[180px] mac:h-[250px] bg-gray-50 z-0 "></div>
            </div> */}
            <div className="">
                <section className="relative overflow-x-hidden  w-full bgwhite pt-16">
                    {/* Content */}
                    <div className="relative z-10 mx-auto max-w-7xl px4 sm:px6 lg:px8 text-center">
                        <h4 className={`m-0 mt-10 !font-amaranth text-[15px]  text-[#C30001] uppercase font-normal leading-none`}>
                            Impact
                        </h4>

                        <h2 className={`m-0 !font-amaranth text-[32px] md:text-[50px] font-normal leading-[1.1]`}>
                            What Your Support Makes Possible
                        </h2>

                        {/* Cards */}
                        <div className="mt-10 md:flex hidden  items-center justify-center gap-6">

                            {/* LEFT ARROW */}
                            {/* <ArrowButton
                            direction="left"
                            disabled={currentIndex === 0}
                            onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
                        /> */}
                            {showArrows && (
                                <ArrowButton
                                    direction="left"
                                    disabled={currentIndex === 0}
                                    onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
                                />
                            )}

                            {/* CARDS */}
                            {/* <div className="overflow-hidden maxw6xl">

                            <div
                                className="
      flex gap-6 transition-transform duration-500
      gap-4 sm:gap-2 lg:gap-4 flex flex-wrap
      
    "
                                style={{
                                    transform: `translateX(-${currentIndex * 390}px)`
                                }}
                            > */}
                            <div className="overflow-x-hidden  max-w-6xl mx-auto">
                                <div
                                    className="
      flex flex-nowrap gap-6
      transition-transform duration-700 ease-in-out
    "
                                    style={{
                                        transform: `translateX(-${currentIndex * 320}px)`
                                    }}
                                >
                                    {loopCards.map((card, index) => (
                                        //                             <div
                                        //                                 key={index}
                                        //                                 className="
                                        //   bg-white rounded-2xl
                                        //   transition
                                        //   overflow-hidden
                                        //   mdh-[510px] md:w-[269.59px] sm:h-[290px] lg:h-[340.64px]
                                        //   flex flex-col 
                                        // "
                                        //                             >
                                        <div
                                            key={index}
                                            className="
    bg-white rounded-2xl overflow-hidden flex flex-col

    min-w-[260px]          /* md */
    lg:min-w-[320px]      /* lg → 2 cards */
    xl:min-w-[269px]      /* xl → 3 cards */

    sm:h-[290px]
    lg:h-[300px]
  "
                                        >
                                            <div className="relative h-[72px] sm:h-[82px] lg:h-[80px]">
                                                <img
                                                    src={card.image}
                                                    alt=""
                                                    className="absolute -left-10 -top-10 w-[167.74px] h-[167.74px] object-contain"
                                                />
                                            </div>

                                            <div className="px-5 mt-10 px-2 pt-3 pb-5 text-left flex-1">
                                                <div className="min-h-[44px] sm:min-h-[52px]">
                                                    <h3 className="text-[48px] sm:text-[40px] lg:text-[48px] font-amaranth text-[#CBCCE4] leading-none">
                                                        {card.ratio}
                                                    </h3>
                                                </div>

                                                <p className="mt-6 text-[18px]  sm:text-[18px] lg:text-[18px] text-[#777777] leading-snug line-clamp-3">
                                                    {card.text}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* RIGHT ARROW */}
                            {/* <ArrowButton
                            direction="right"
                            disabled={currentIndex === totalCards - 1}
                            onClick={() =>
                                setCurrentIndex((prev) => Math.min(prev + 1, totalCards - 1))
                            }
                        /> */}
                            {showArrows && (
                                <ArrowButton
                                    direction="right"
                                    disabled={currentIndex === totalCards - 1}
                                    onClick={() =>
                                        setCurrentIndex((prev) => Math.min(prev + 1, totalCards - 1))
                                    }
                                />
                            )}

                        </div>


                        {/* ================= MOBILE ONLY ================= */}
                        <div className="md:hidden mt-6 px-4">
                            <div className="flex gap-4 overflow-x-auto pb-4">
                                {cards.map((card, index) => (
                                    <div
                                        key={index}
                                        className="
          relative
          min-w-[260px]
          bg-white rounded-2xl
          overflow-hidden
          flex flex-col
        "
                                    >
                                        {/* TOP ICON */}
                                        <div className="relative h-[72px]">
                                            <img
                                                src={card.image}
                                                alt=""
                                                className="absolute -left-8 -top-8 w-[120px] h-[120px] object-contain"
                                            />
                                        </div>

                                        {/* CONTENT */}
                                        <div className="px-4 pt-6 pb-5 text-left flex-1">
                                            {/* RATIO */}
                                            <h3 className="text-[42px] font-amaranth text-[#CBCCE4] leading-none">
                                                {card.ratio}
                                            </h3>

                                            {/* TEXT */}
                                            <p className="mt-4 text-[14px] text-[#777777] leading-snug line-clamp-3">
                                                {card.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* ================= MOBILE ONLY END ================= */}

                    </div>

                    {/* Grey bottom bar like screenshot */}
                    <div className="absolute pb-10 bottom-0 left-0 w-full h-[190px] sm:h-[140px] lg:h-[160px] bg-[#F7F8FC] z-0" />
                </section>

                {/* ==================== Impact Blocks Section ==================== */}








                <div className="text-center bg-gradient-to-b from-[#F7F8FC] via[#F2F4FA] py-28 mac:py-40 px-4 mac:px-20">

                    {/* Headings */}
                    <h4 className={`m-0 !font-amaranth pb-2 text-[15px]  text-[#C30001] uppercase font-normal leading-none`}>
                        Every Eye
                    </h4>

                    <h2 className={`m-0 !font-amaranth pb-6 text-[32px] md:text-[50px] font-normal leading-[1.1]`}>
                        Deserves a Chance to See
                    </h2>

                    <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-[15px] font-inter leading-relaxed mb-20">
                        At POB Trust, we stand by the belief that no man, woman, or child should suffer
                        the heartbreak of blindness just because they can't afford treatment.
                    </p>

                    {/* ONE MERGED IMAGE (Large Desktop Only) */}
                    <div className="hidden xl:flex justify-center mb-24">
                        <img
                            src="/merged.png"
                            alt="Impact of Vision Loss"
                            className="w-full max-w-4xl"
                        />
                    </div>

                    {/* TEXT BELOW IMAGE (Large Desktop Only) */}
                    <div className="hidden xl:grid grid-cols-1 lg:grid-cols-3 gap-12 mac:gap-20 max-w-7xl mx-auto">

                        {/* Left */}
                        <div className="-mt-20 ml-28 text-center">
                            <h3 className="text-xl md:text-[22px] font-amaranth mb-3">
                                Patient-First Approach                        </h3>
                            <p className="text-gray-600 text-center -ml6 w-[280px] md:text-[14.5px] font-inter leading-relaxed">
                                Patient care comes first delivered with empathy, respect, and an unwavering commitment to restoring sight.
                            </p>
                        </div>

                        {/* Middle (raised) */}
                        <div className="text-center ml-10 lg:-mt-56">
                            <h3 className="text-xl md:text-[22px] font-amaranth mb-3">
                                Care Without Barriers                        </h3>
                            <p className="text-gray-600 md:text-[14.5px] font-inter leading-relaxed">
                                No referrals, no delays, just compassionate eye care delivered seamlessly to those who need it most.
                            </p>
                        </div>

                        {/* Right */}
                        <div className="text-center -ml-40 -mt-20">
                            <h3 className="text-xl md:text-[22px] font-amaranth mb-3 ml-10">
                                Protecting Visions                        </h3>
                            <p className="text-gray-600 ml-32 w-[350px] md:text-[14.5px] font-inter leading-relaxed">
                                Every treatment safeguards sight and dignity, because losing vision should never mean losing respect or self-worth.
                            </p>
                        </div>

                    </div>
                    {/* RESPONSIVE CARDS VERSION (XL and Below) */}
                    <div className="block xl:hidden mx-auto max-w-7xl px-4 sm:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
                            {/* Item 1 */}
                            <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                                <img
                                    src="/vector.png"
                                    alt="Loss of independence"
                                    className="w-16 h-16 mb-6 object-contain"
                                />
                                <h3 className="text-xl font-amaranth mb-3">
                                    Patient-First Approach
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Patient care comes first delivered with empathy, respect, and an unwavering commitment to restoring sight.
                                </p>
                            </div>

                            {/* Item 2 */}
                            <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                                <img
                                    src="/vector1.png"
                                    alt="Mental health issues"
                                    className="w-16 h-16 mb-6 object-contain"
                                />
                                <h3 className="text-xl font-amaranth mb-3">
                                    Care Without Barriers                            </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    No referrals, no delays, just compassionate eye care delivered seamlessly to those who need it most.
                                </p>
                            </div>

                            {/* Item 3 */}
                            <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                                <img
                                    src="/vector1.png"
                                    alt="Economical Burden"
                                    className="w-16 h-16 mb-6 object-contain"
                                />
                                <h3 className="text-xl font-amaranth mb-3">
                                    Protecting Visions                            </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Every treatment safeguards sight and dignity, because losing vision should never mean losing respect or self-worth.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Help;

const ArrowButton = ({ disabled, direction, onClick }) => {
    const isDisabled = disabled;

    return (
        <div className='md:hidden lg:block xl:block 2xl:block'>
            <button
                onClick={onClick}
                disabled={isDisabled}
                className={`
        w-[40px] h-[40px] mt-10  rounded-full  itemscenter justifycenter
        transition-all duration-300
        ${isDisabled
                        ? "bg-white border border-black"
                        : "bg-[#373895]"
                    }
      `}
            >
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={isDisabled ? "black" : "white"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={direction === "left" ? "" : "rotate-180"}
                >
                    <polyline points="15 18 9 12 15 6" />
                </svg>
            </button>
        </div>
    );
};