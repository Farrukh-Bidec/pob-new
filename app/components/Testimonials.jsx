"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Testimonials = () => {
  const cards = [
    {
      id: 1,
      title: "General Zakat & Sadqa",
      description:
        "Zakat is one of the five pillars of Islam. Through Zakat, the Patients Behbud Society (PBS) for The Aga Khan University Hospital (AKUH) guarantees Zakat is used to treat patients in need.",
      image: "testimonial1.png",
    },
    {
      id: 2,
      title: "Breast Cancer",
      description:
        "Breast cancer is responsible for over 24% of all cancer-related deaths among women in Pakistan. The disease affects women of all socio-economic classes at The Aga Khan University Hospital.",
      image: "testimonial2.png",
    },
    {
      id: 3,
      title: "Hepatitis C",
      description:
        "The national figures for the prevalence of Hepatitis B and Hepatitis C virus (HCV) are significant. With a population of millions, this translates to a high number of patients requiring specialized care.",
      image: "testimonial3.png",
    },
  ];

  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <section className="bg-[#e7e5e51a] h-auto  px-4 md:px-0">


      {/* Heading */}
      {/* comment */}
      <div className="text-center pt-10 md:pt-30 gap-10  ">
        <div>
        <h4 className="uppercase text-[#C30001] text-xl md:text-xl">Testimonials</h4>
        <h2 className="text-3xl md:text-4xl pt-2 text-black ">
          From Darkness to Light: <br /> Patient Stories
        </h2>
          </div>  

         {/* Mobile Arrows – above slider, under heading */}
        {/* <div className="hidden flex gap-2 mt-4 justify-center">
          <button
            onClick={() => swiperRef?.slidePrev()}
            className="rounded-full text-black border bg-white p-2 flex items-center justify-center size-10"
          >
            <MdArrowBackIos />
          </button>
          <button
            onClick={() => swiperRef?.slideNext()}
            className="rounded-full bg-[#373895] text-white p-2 flex items-center justify-center size-10"
          >
            <MdArrowForwardIos />
          </button>
        </div> */}
        
     
       
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden mt-10 overflow-x-auto w-full">
  <div className="flex gap-5 px-4">
    {cards.map((card) => (
      <div
        key={card.id}
        className="min-w-[80%] bg-white rounded-lg shadow-lg p-4"
      >
        <img
          src={`/${card.image}`}
          alt={card.title}
          className="w-full rounded-md"
        />
        <h3 className="py-4 text-xl line-clamp-1 text-black">
          {card.title}
        </h3>
        <p className="text-gray-600 text-sm">
          {card.description.length < 200
            ? card.description
            : `${card.description.slice(0, 200)}...`}
        </p>
        <Link href="/feedback">
          <button className="bg-[#373895] text-white rounded-full px-4 py-2 mt-4 w-full">
            Read More
          </button>
        </Link>
      </div>
    ))}
  </div>
</div>


      {/* Desktop / default cards */}
      <div className="hidden md:flex justify-center flex-wrap gap-6 mt-2">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-90 shadow-lg p-6 bg-white rounded-lg"
          >
            <img
              src={`/${card.image}`}
              alt={card.title}
              className="w-full rounded-md"
            />
            <h3 className="py-4 text-xl line-clamp-1 text-black">{card.title}</h3>
            <p className="text-gray-600 text-base">
              {card.description.length < 200
                ? card.description
                : `${card.description.slice(0, 200)}...`}
            </p>
            <Link href="/feedback">
              <button className="bg-[#373895] text-white rounded-full px-4 py-2 mt-4 w-full">
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Desktop arrows image (unchanged) */}
      <img
        src="/testimonial5.png"
        alt="sliderIcon"
        className="hidden md:block mx-auto py-10"
      />
    </section>
  );
};

export default Testimonials;
