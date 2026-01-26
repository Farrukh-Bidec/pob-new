"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Navigation, Autoplay } from "swiper/modules";
import { FaInstagram } from "react-icons/fa";
import { Image_Url } from "../../../Utils/const";
import { BiLoader } from "react-icons/bi";

const OurStory = ({ ourStorySection, instagramLink }) => {
  if (!ourStorySection) return null;

  const {
    our_story_heading,
    our_story_sub_heading,
    gallery
  } = ourStorySection;

  const { instagram_link } = instagramLink || {};

  const categories = [
    ...new Set(gallery?.map((item) => item.image_location?.trim()))
  ] || [];

  const images = {};

  gallery?.forEach((item) => {
    const location = item.image_location?.trim();
    if (!images[location]) {
      images[location] = [];
    }
    images[location].push({
      src: item.images,
      alt: item.alt_name || "",
    });
  });

  const [activeCategory, setActiveCategory] = useState(categories[0] || "");
  const rawImages = images[activeCategory];
  const [loading , setLoading] = useState(false);
  const sliderImages = Array.isArray(rawImages) ? rawImages : [];

  const [visibleImages, setVisibleImages] = useState(8);
  const [imageLoading, setImageLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleImages((prev) => prev + 4)   
      setLoading(false);
     },1000)
  };

  return (
    <div className="relative flex flex-col items-center justify-center text-center pt-12">
      <div className="md:w-5/12 w-[90%] font-inter mb-4 flex flex-col gap-2 text-center">
        <p className="text-[#F39C12] font-Amaranth uppercase text-lg font-bold">
          {our_story_heading}
        </p>

        <h2 className="text-3xl md:text-4xl font-Amaranth text-center">
          {our_story_sub_heading}
        </h2>
      </div>

      {/* CATEGORY BUTTONS */}
      <div className="flex overflow-x-auto whitespace-nowrap max-w-full bg-[#28A745] py-2 px-2 rounded-[72px] gap-2 md:gap-4 mb-6 scrollbar-hide">
        {categories?.map((category) => (
          <button
            key={category}
            onClick={() => {
              if (category !== activeCategory) {
                setImageLoading(true);
                setActiveCategory(category);
                setVisibleImages(8); // Reset visible images when switching categories
              }
            }}
            className={`px-4 py-2 text-[12px] rounded-[72px] cursor-pointer transition-all ${activeCategory === category
              ? "bg-white text-black"
              : "bg-transparent text-white hover:bg-white/10"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* IMAGE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-[85%] min-h-[307px]">
        {imageLoading && (
          <div className="col-span-full flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-[#28A745] border-t-transparent"></div>
          </div>
        )}
        {sliderImages.slice(0, visibleImages).map((element, index) => (
          <img
            key={index}
            src={`${Image_Url}${element.src}`}
            alt={element?.alt_text || element?.alt || "Gallery Image"}
            className={`md:h-[307px] w-full md:w-[275px] object-cover ${imageLoading ? 'hidden' : ''}`}
            onLoad={() => {
              if (index === 0) setImageLoading(false);
            }}
            onError={() => {
              if (index === 0) setImageLoading(false);
            }}
          />
        ))}
      </div>

      {/* BUTTONS */}
      <div className="flex justify-center gap-2 mt-6">
       {loading ? (
         <div className="col-span-full flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-[#28A745] border-t-transparent"></div>
          </div>
       ) : ( 
        visibleImages < sliderImages.length && (
          <button
            className="px-8 py-2 text-[12px] border rounded-[37px] border-[#28A745] cursor-pointer"
            onClick={loadMore}
          >
            Load More
          </button>
        )
        )}

        <a
          href={instagram_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={`${loading && 'hidden'} flex gap-2 text-[12px] items-center rounded-[37px] bg-[#28A745] text-white font-bold px-4 py-2 shadow-sm`}>
            <FaInstagram size={12} />
            Follow On Instagram
          </button>
        </a>
      </div>
    </div>
  );
};

export default OurStory;
