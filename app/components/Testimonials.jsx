"use client";

import Link from "next/link";
import React, { useReducer, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useRouter } from 'next/navigation';



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
  const donationCards = [
    {
      id: 1,
      title: "Patient Hira Lal",
      description: "I came to POB Eye Hospital feeling very nervous about my surgery, but the warmth of the staff immediately put me at ease. From the receptionists to the surgeons, everyone treated me like family. My vision is now clear, and I cannot thank the team enough for their kindness and professional care.",
      videoUrl: "https://www.youtube.com/watch?v=oVt3CFIz6sk",
    },
    {
      id: 2,
      title: "Patient Ayesha",
      description: "Testimonial of the recently treated patient at our POB Eye Hospital Karachi, thanking for the excellent care that was given to her. She appreciated the entire staff for their kind and caring assistance.",
      videoUrl: "https://www.youtube.com/watch?v=sd3DMgDGw88",
    },
    {
      id: 3,
      title: "Patient Saniya",
      description: "I am so impressed by the seamless experience at POB. Even though the hospital is busy, the staff takes the time to listen and help with a smile. The doctors are thorough, and the assistants are incredibly gentle. Thank you for restoring my sight and for the excellent hospitality",
      videoUrl: "https://www.youtube.com/watch?v=4hcVpWQZiiE",
    },
  ];

  const [swiperRef, setSwiperRef] = useState(null);
  const allCards = [...donationCards, ...donationCards];
  const router = useRouter()


  return (
    <section className="bg-[#e7e5e51a] h-auto px-4 md:px-0">


      {/* Heading */}
      {/* comment */}
      <div className="text-center pt-10 md:pt-30 gap-10  ">
        <div>
          <h4 className="uppercase text-[#C30001] text-xl md:text-sm">Testimonials</h4>
          <h2 className="text-3xl md:text-5xl pt-2 text-black">
            From Darkness to Light:
            <span className="block md:inline"> Patient Stories</span>
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



      {/* <div className="hidden md:flex justify-center flex-wrap gap-6 mt-2">
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

    
      <img
        src="/testimonial5.png"
        alt="sliderIcon"
        className="hidden md:block mx-auto py-10"
      /> */}
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-20 justify-center pt-20">
          {allCards.slice(0, 3).map((card, index) => (
            <div
              key={index}
              // 'h-full' hata diya hai taake height content ke mutabiq adjust ho jaye
              className="bg-white rounded-[20px] overflow-hidden shadow-sm flex flex-col border border-gray-100 max-w-[300px] "
            >

              <div className="h-60 overflow-hidden">
                <iframe
                  className="w-full h-full object-cover"

                  src={card.videoUrl.replace("watch?v=", "embed/")}
                  title={card.title}
                  allowFullScreen
                ></iframe>

              </div>

              {/* Content Container ki padding p-6 kar di hai */}
              <div className="p-6 flex flex-col h-[250px]"> {/* yahan height fix ki hai */}
                <h3 className="text-[#333333] text-lg font-bold mb-3 font-sans">
                  {card.title}
                </h3>

                <p className="text-gray-500 text-sm leading-snug mb-6 overflow-hidden">
                  {card.description}
                </p>

                <button onClick={() => router.push(`/feedback/${card.id}`)} className="mt-auto w-full bg-[#3F4095] hover:bg-[#2F3075] text-white py-2.5 px-6 rounded-full font-medium transition-colors duration-300 text-sm">
                  Read More
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
