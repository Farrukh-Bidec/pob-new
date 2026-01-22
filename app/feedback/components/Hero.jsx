"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/child.jpg",
    alt_text: "Prevent Blindness - POB Trust",
    title: "",
    headline: "The Voices of Our Patient",
    description:
      "",
  },

];
const scrollToDonate = () => {
    const footer = document.getElementById('footer_elem')
    footer.scrollIntoView({behavior : "smooth"})
    
  }

const Hero = () => {
  return (
   <div className="relative w-full overflow-hidden">
  <Swiper
    direction="vertical"
    effect="fade"
    fadeEffect={{ crossFade: true }}
    loop={true}
    autoplay={{ delay: 5500, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    modules={[Autoplay, Pagination, EffectFade]}
    className="w-full h-[460px] md:h-[95vh] lg:h-[130vh]"
  >
    {slides.map((slide) => (
      <SwiperSlide key={slide.id} className="relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0">
  <Image
    src={slide.image}
    alt={slide.alt_text}
    fill
    priority
    sizes="100vw"
    className="object-cover object-center"
  />
</div>

        </div>

        {/* ─── Mobile Content (centered) ─── */}
        <div className="absolute inset-0 z-20 flex md:hidden items-center justify-center px-5">
          <div className="text-center max-w-lg text-white">
            <p className="text-xl text-shadow uppercase font-light">
              {slide.title.replace("\\n", " ")}
            </p>
            <h1 className="mt-3 text-xl sm:text-2xl leading-tight text-shadow">
              {slide.headline.replace("\\n", " ")}
            </h1>
            <p className="mt-4 text-xs sm:text-base line-clamp-3 text-shadow">
              {slide.description}
            </p>

          
          </div>
        </div>




        {/* ─── Desktop / Tablet Content (left aligned) ─── */}
    {/* ─── Desktop / Tablet Content (centered) ─── */}
<div className="hidden md:flex absolute inset-0 z-20 items-center justify-center px-6 lg:px-12 xl:px-24">
  <div className="text-center max-w-3xl text-white">
    <p className="text-xl lg:text-base">
      {slide.title.replace("\\n", " ")}
    </p>
    <h1 className="mt-4 lg:mt-6 text-4xl lg:text-5xl xl:text-5xl leading-tight w-full">
      {slide.headline}
    </h1>
    {/* Optional Description */}
    {/* <p className="mt-5 lg:mt-7 text-base lg:text-base">
      Bringing hope and clarity to lives with free eye care, restoring vision<br /> with love and compassion in Karachi.
    </p> */}
  </div>
</div>

      </SwiperSlide>
    ))}
  </Swiper>

  {/* ─── Text Shadow Styling ─── */}
  <style jsx global>{`
    .text-shadow {
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
    }
    .swiper-pagination {
      bottom: 1.5rem !important;
    }
    .swiper-pagination-bullet {
      background: white !important;
      opacity: 0.7;
    }
    .swiper-pagination-bullet-active {
      opacity: 1 !important;
      background: #ffffff !important;
    }
    @media (min-width: 768px) {
      .swiper-pagination {
        bottom: 2.5rem !important;
      }
    }
  `}</style>
</div>

  );
};

export default Hero;