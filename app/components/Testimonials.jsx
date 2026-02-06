"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useRouter } from "next/navigation";
import { SectionHeading, SectionLabel } from "./News";

const Testimonials = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    {
      id: 1,
      title: "Sadia Bibi",
      description:
        " After five years of blindness, Sadia Bibi can see again. A homemaker and mother of two, her life was transformed as she returned to light, independence, and hope…",
      image: "/testimonial1.png",
    },
    {
      id: 2,
      title: "Shahid Hussain & His Daughter",
      description:
        " Shahid Hussain traveled from Quetta with his daughter Sameera, suffering from severe vision loss. At POB Eye Hospital, both received free treatment and timely surgery…",
      image: "/testimonial2.png",
    },
    {
      id: 3,
      title: "Muhammad Akhtar Arain",
      description:
" A retired chemical engineer facing near-total blindness, Muhammad Akhtar lost his independence. Timely vitreoretinal treatment at POB Eye Hospital helped restore his quality of life…",      image: "/testimonial3.png",
    },
    {
      id: 4,
     title: "Sadia Bibi",
      description:
        " After five years of blindness, Sadia Bibi can see again. A homemaker and mother of two, her life was transformed as she returned to light, independence, and hope…",
      image: "/testimonial1.png",
    },
    {
      id: 5,
     title: "Shahid Hussain & His Daughter",
      description:
        " Shahid Hussain traveled from Quetta with his daughter Sameera, suffering from severe vision loss. At POB Eye Hospital, both received free treatment and timely surgery…",
      image: "/testimonial2.png",
    },
  ];

  return (
    <div className="mt-8">
      <section
        className="
          w-full
          bg-gradient-to-b
          from-[#F7F8FC]
          via-[#F2F4FA]
          to-[#FFFFFF]
          py-16
          md:pt-32 
        "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <SectionLabel
              className="mb-2 tracking[0.2em] fontbold"
              text="TESTIMONIAL"
            />
            <SectionHeading
              className="mt-3 !mb-0 fontbold"
              text="From Darkness to Light: Patient Stories"
            />
          </div>

          {/* Slider for both Desktop and Mobile */}
          <div className="testimonials-slider relative">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: ".testimonials-pagination",
                bulletClass: "pob-dot",
                bulletActiveClass: "pob-dot-active",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
              className="pb-16"
            >
              {cards.map((card) => (
                <SwiperSlide key={card.id}>
                  <div className="bg-white rounded-[30px] overflow-hidden flex flex-col h-full border border-gray-100/50">
                    <div className="h-64 sm:h-72 w-full overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-[#333333] text-2xl font-bold mb-4 font-sans line-clamp-1">
                        {card.title}
                      </h3>

                      <p className="text-[#777777] font-inter text-base leading-relaxed mb-8 flex-grow line-clamp-4">
                        {card.description}
                      </p>

                      <button
                        onClick={() => router.push(`/feedback/${card.id}`)}
                        className="w-full bg-[#3F4095] hover:bg-[#2F3075] text-white py-4 px-6 rounded-full font-bold text-base transition-all duration-300 transform active:scale-[0.98] shadow-md hover:shadow-lg"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination Container */}
            <div className="testimonials-pagination pob-dots-container mt-12 flex justify-center items-center gap-2"></div>

            {/* Custom Styles for Red Dots */}
            <style dangerouslySetInnerHTML={{
              __html: `
              .testimonials-pagination .pob-dot-active {
                background-color: #C30001 !important;
                border-color: #C30001 !important;
              }
            `}} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
