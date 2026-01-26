"use client"; // ❗ Client-side component

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import { useState } from "react";

const LiteYouTubeEmbed = ({ videoId, index }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <iframe
        width="100%"
        height="230"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
        title={`YouTube video ${index + 1}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; compute-pressure"
        allowFullScreen
        className="rounded-lg w-full h-96 object-cover"
      ></iframe>
    );
  }

  return (
    <div
      className="relative w-full h-96 cursor-pointer group rounded-lg overflow-hidden"
      onClick={() => setIsPlaying(true)}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.webp`}
        alt={`YouTube video ${index + 1} thumbnail`}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-red-600 bg-opacity-90 w-16 h-12 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:bg-red-700 group-hover:scale-110 shadow-xl">
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
import "swiper/css";

SwiperCore.use([Autoplay]);

const VideoSection = () => {
  // Sample YouTube video IDs
  const youtubeVideos = [
    "fKrMxM_LncE",
    "yUuR_KSMDAo",
    "fKrMxM_LncE",
    "fKrMxM_LncE",
    "yUuR_KSMDAo",
    "fKrMxM_LncE",
    "fKrMxM_LncE",
    "yUuR_KSMDAo",
  ];

  return (
    <div className="w-full macbook:w-[1300px] pt-12 md:pt-24 px-4 md:px-0">
      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        breakpoints={{
          1024: { slidesPerView: 6, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 10 },
          0: { slidesPerView: 1, spaceBetween: 8 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        {youtubeVideos.map((videoId, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center">
              <LiteYouTubeEmbed videoId={videoId} index={index} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoSection;
