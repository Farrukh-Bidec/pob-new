"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useRef, useState } from "react";

const LiteYouTubeEmbed = ({ videoId, index, onOpen }) => {
  return (
    <div
      className="relative w-full h-96 cursor-pointer group rounded-lg overflow-hidden"
      onClick={() => onOpen(videoId)}
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

const VideoSection = () => {
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



  const [modalVideo, setModalVideo] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (modalVideo) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = prev);
    }
  }, [modalVideo]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setModalVideo(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="w-full macbook:w-[1300px] pt-12 md:pt-24 px-4 md:px-0 relative">
      <div className="absolute left-2 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
          className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg"
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="absolute right-2 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={() => swiperRef.current && swiperRef.current.slideNext()}
          className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg"
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        breakpoints={{
          1024: { slidesPerView: 6, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 10 },
          0: { slidesPerView: 1, spaceBetween: 8 },
        }}
        onSwiper={(s) => (swiperRef.current = s)}
        loop={true}
        grabCursor={true}
        simulateTouch={true}
        className="mySwiper"
      >
        {youtubeVideos.map((videoId, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center">
              <LiteYouTubeEmbed videoId={videoId} index={index} onOpen={(id) => setModalVideo(id)} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {modalVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative w-full max-w-5xl h-[80vh] bg-transparent">
            <button
              onClick={() => setModalVideo(null)}
              className="absolute -top-6 right-0 z-50 bg-white/90 p-2 rounded-full shadow-md"
              aria-label="Close video"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/${modalVideo}?autoplay=1`}
              title="YouTube modal video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
