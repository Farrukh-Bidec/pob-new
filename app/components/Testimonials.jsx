"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper styles
import { useRouter } from "next/navigation";
import { SectionHeading, SectionLabel } from "./News";
import Scrol from "./Scrol";

 const Testimonials = () => {
  const router = useRouter();
  const [swiperRef, setSwiperRef] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    {
      id: 1,
      title: "Patient Hira Lal",
      description:
        "I came to POB Eye Hospital feeling very nervous about my surgery, but the warmth of the staff immediately put me at ease.",
      videoUrl: "https://www.youtube.com/watch?v=oVt3CFIz6sk",
    },
    {
      id: 2,
      title: "Patient Ayesha",
      description:
        "Testimonial of the recently treated patient at our POB Eye Hospital Karachi, thanking for the excellent care.",
      videoUrl: "https://www.youtube.com/watch?v=sd3DMgDGw88",
    },
    {
      id: 3,
      title: "Patient Saniya",
      description:
        "I am so impressed by the seamless experience at POB. Thank you for restoring my sight.",
      videoUrl: "https://www.youtube.com/watch?v=4hcVpWQZiiE",
    },
  ];

  return (
    // <section className="md:py-12 max-w-6xl mx-auto px-4 md:pt-10 pb-10 md:px-8 md:pb-20 lg:px-20 mb-10 md:mb-0 mt-5 md:mt-10 bg-[#F4F4F4]">
   <div className="mt-20">
   <section className="w-full bg-[#F4F4F4]">
      <div className="max-w-6xl mx-auto px4 md:px-8 lg:px20 py-10 md:py-20">

        <div className="text-center pt10 md:pt-16 mb-12 mac:max-w-[1728px] mx-auto mac:px-0">
          {/* <h4 className="text-[12px]  sm:text-[14px] mb1 text-[#C30001] uppercase font-semibold">
          Testimonials
        </h4>
        <h2 className="text-xl md:text-5xl mac:text-7xl pb- pt-2 text-black font-bold">
          From Darkness to Light
        </h2> */}
          <SectionLabel className="mb-2 trackingwidest"
            text="Testimonials" />
          <SectionHeading
            className="mt-3 trackingwidest"
            text="From Darkness to Light" />
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden mt-5">
          <Swiper
            onSwiper={setSwiperRef}
            spaceBetween={16}
            slidesPerView={1.1} // Slight peek for next slide
            className="mt-5"
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="bg-white rounded-[20px] overflow-hidden flex flex-col border border-gray-50 shadow-lg max-w-[400px] mx-auto">
                  <div className="h-60 overflow-hidden">
                    <iframe
                      className="w-full h-full object-cover"
                      src={card.videoUrl.replace("watch?v=", "embed/")}
                      title={card.title}
                      allowFullScreen
                    />
                  </div>

                  <div className="p-6 flex flex-col h-[250px]">
                    <h3 className="text-[#333333] text-lg font-bold mb-3 font-sans">
                      {card.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-snug mb-6 overflow-hidden">
                      {card.description}
                    </p>

                    <button
                      onClick={() => router.push(`/feedback/${card.id}`)}
                      className="mt-auto w-full bg-[#3F4095] hover:bg-[#2F3075] text-white py-2.5 px-6 rounded-full font-medium text-sm transition-colors duration-300"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-24 mac:gap-12 macmax-[1728px] mx-auto mac:px-0">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white   w-[345.12px] h-[517.49px] rounded-[20px] overflow-hidden flex flex-col border border-gray-50 shadowlg max-w-[400px] mac:max-w-[520px] mx-auto"
            >
              <div className="h-60 mac:h-96 overflow-hidden">
                <iframe
                  className="w-[345.12px] h-[225.86px] hfull object-cover"
                  src={card.videoUrl.replace("watch?v=", "embed/")}
                  title={card.title}
                  allowFullScreen
                />
              </div>

              <div className="p-7 mac:p-10 flex flex-col h-[250px] mac:h-[350px]">
                <h3 className="text[#333333] text-[22px] mactext-3xl font-bold mb-3 font-sans">
                  {card.title}
                </h3>

                <p className="text-[#777777] !font-Inter w-[300px] text-sm mac:text-xl leading-snug mb-6 overflow-hidden">
                  {card.description}
                </p>

                <button
                  onClick={() => router.push(`/feedback/${card.id}`)}
                  className="mt-auto w-full bg-[#3F4095] hover:bg-[#2F3075] text-white py-2.5 px-6 mac:py-4 mac:px-10 rounded-full font-medium text-sm mac:text-xl transition-colors duration-300"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* <Scrol/> */}
          {/* <Scrol
              total={cards.length}
              current={currentSlide}
              setCurrent={setCurrentSlide}
            /> */}
      </div>
    </section>
    </div>
  );
};

export default Testimonials;
