"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper styles
import { useRouter } from "next/navigation";

const Testimonials = () => {
  const router = useRouter();
  const [swiperRef, setSwiperRef] = useState(null);

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
    <section className="py-12 px-4 md:px-8 lg:px-20 mb-10 md:mb-0 mt-5 md:mt-10">
      <div className="text-center mb-12">
        <h4 className="uppercase text-[#C30001] text-[22px] ">Testimonials</h4>
        <h2 className="text-[22px] sm:text-[48px]  text-black">
          From Darkness to Light
        </h2>
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden">
        <Swiper
          onSwiper={setSwiperRef}
          spaceBetween={16}
          slidesPerView={1.1} // Slight peek for next slide
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="bg-white rounded-[20px] overflow-hidden shadow-sm flex flex-col border border-gray-100 max-w-[400px] mx-auto">
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
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-[20px] overflow-hidden shadow-sm flex flex-col border border-gray-100 max-w-[400px] mx-auto"
          >
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
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
