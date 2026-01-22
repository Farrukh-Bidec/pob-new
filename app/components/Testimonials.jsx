"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
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
  <section className="bg-[#e7e5e51a] px-4 py-10">
  {/* ================= HEADING + ARROWS ================= */}
  <div className="relative flex items-center justify-center mb-6">
    {/* Heading */}
    <div className="w-full flex justify-center items-center flex-col">
  <h4 className="uppercase text-[#C30001] text-lg text-center">
    Testimonials
  </h4>
  <h2 className="text-2xl sm:text-4xl text-black text-center">
    From Darkness to Light
  </h2>
</div>


    {/* Arrows (absolute to heading div, horizontally centered with flex gap) */}
    <div className="absolute right-0 flex gap-2 md:hidden">
      <button
        onClick={() => swiperRef?.slidePrev()}
        className="size-9 rounded-full border flex items-center justify-center bg-white"
      >
        <MdArrowBackIos size={14} />
      </button>

      <button
        onClick={() => swiperRef?.slideNext()}
        className="size-9 rounded-full border flex items-center justify-center bg-[#3F4095] text-white"
      >
        <MdArrowForwardIos size={14} />
      </button>
    </div>
  </div>

  {/* ================= MOBILE SLIDER ================= */}
  <div className="md:hidden">
    <Swiper
      onSwiper={setSwiperRef}
      modules={[Navigation]}
      spaceBetween={16}
      slidesPerView={1}
    >
      {cards.map((card) => (
        <SwiperSlide key={card.id}>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border">
            <div className="h-56">
              <iframe
                className="w-full h-full"
                src={card.videoUrl.replace("watch?v=", "embed/")}
                title={card.title}
                allowFullScreen
              />
            </div>
            <div className="p-5 flex flex-col">
              <h3 className="font-bold text-lg mb-2 text-black">{card.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{card.description}</p>
              <button
                onClick={() => router.push(`/feedback/${card.id}`)}
                className="mt-auto bg-[#3F4095] text-white py-2 rounded-full"
              >
                Read More
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  {/* ================= DESKTOP GRID ================= */}
  <div className="hidden md:flex justify-center gap-10 max-w-7xl mx-auto">
    {cards.map((card) => (
      <div
        key={card.id}
        className="bg-white rounded-2xl overflow-hidden shadow-sm border max-w-[300px]"
      >
        <div className="h-56">
          <iframe
            className="w-full h-full"
            src={card.videoUrl.replace("watch?v=", "embed/")}
            title={card.title}
            allowFullScreen
          />
        </div>
        <div className="p-6 flex flex-col h-[260px]">
          <h3 className="font-bold text-lg mb-2 text-black">{card.title}</h3>
          <p className="text-gray-500 text-sm mb-6">{card.description}</p>
          <button
            onClick={() => router.push(`/feedback/${card.id}`)}
            className="mt-auto bg-[#3F4095] text-white py-2 rounded-full"
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
