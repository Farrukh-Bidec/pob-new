"use client";

import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import { GoArrowRight } from 'react-icons/go';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import axios from './axios.js';
import { Image_Url } from './axios.js';

const News = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const fallbackCards = [
    {
      title: "How to Spot Cataract Symptoms Early Before ..",
      description: "Cataracts are one of the most common causes of vision problems in Pakistan, especially among..",
      image: "News1.png",
      linkText: "Continue Reading",
      slug: "1"
    },
    {
      title: "Recognizing the Hidden Symptoms of Common Corneal ..",
      description: "Corneal infections are a serious eye problem that can affect anyone. In Pakistan, many people..",
      image: "News2.png",
      linkText: "Continue Reading",
      slug: "2"
    },
    {
      title: "When Tunnel Vision Isn’t Just Fatigue: Early ..",
      description: "Tunnel vision is often mistaken for fatigue or stress, but it may indicate early stages..",
      image: "News3.png",
      linkText: "Continue Reading",
      slug: "3"
    },
    {
      title: "When Tunnel Vision Isn’t Just Fatigue: Early ..",
      description: "Tunnel vision is often mistaken for fatigue or stress, but it may indicate early stages..",
      image: "News3.png",
      linkText: "Continue Reading",
      slug: "4"
    }
  ];

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      try {
        const response = await axios.public.post('blogs/index', {
          blog_category_slug: "",
          slug: "blogs/"
        });

        if (response.data?.success) {
          const blogsData = response.data.data.map(blog => ({
            title: blog.blog_title || blog.title,
            description: (blog.blog_body || blog.description).replace(/<[^>]+>/g, '').split(' ').slice(0, 20).join(' ') + '...',
            image: blog.main_image ? `${Image_Url}/${blog.main_image}` : '/fallback.png',
            linkText: "Read full article",
            slug: blog.slug || blog.id
          }));
          setCards(blogsData);
        } else {
          console.warn("API returned an error:", response.data?.message);
          setCards(fallbackCards);
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setCards(fallbackCards);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth / 3, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth / 3, behavior: 'smooth' });
  };


  return (
    <div className='mt-14 pb-20 mb-10 md:mb-20 mx-auto max-w-7xl py-10 px-4 sm:px-8 lg:px-12'>
      {/* Heading */}
      <div className="text-center pt12 md:pt70 xl:pt-10 px10">
        {/* <h4 className="text-[15px] mt-2 text[14px] mb1 text-[#C30001] uppercase !font-medium">
          Own Blogs
        </h4>
        <h2 className="textxl md:text-[50px]  pb-4 md:pb-6 macpb-12 pt2 text-black font-bold">
          Our Latest News and Articles
        </h2> */}
        <SectionLabel text="Own Blogs" />
        <SectionHeading text="Our Latest News and Articles" />
      </div>

      {/* Slider */}
      <div className="relative w-full py-10 -mt-10">
        <div className="relative w[95%] md:w[85%] mac:w-full mx-auto">
          {/* Left Button */}
          {/* <button
            onClick={scrollLeft}
            className="hidden md:flex absolute -left-2 md:-left-14 mac:scale-150 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-black text-black p-3 rounded-full shadow-md hover:bg-gray-50 transition items-center justify-center"
          >
            <FaChevronLeft />
          </button> */}

          {/* Cards */}
          <div
            ref={sliderRef}
            className="flex overflow-auto xl:overflow-hidden  no-scrollbar gap-6 lg:gap-12 scroll-smooth no-scrollbar"
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full max-w-[348px] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] flex flex-col"
              >
                {/* Image */}
                <div className="overflow-hidden w-full aspect-[4/3.5] rounded-t-lg">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-black w-full border border-black border-t-0 p-6 md:p-8 rounded-b-[18px] flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl md:text-[22px] mac:text-3xl font-bold font-poppins line-clamp-2">
                      {card.title}
                    </h2>

                    <p className="text-sm md:text-[14px] font-poppins mt-3 font-light leading-relaxed line-clamp-3">
                      {card.description}
                    </p>
                  </div>
                  <Link href={`/blog/${card.slug}`}>
                    <button className="mt-6 font-inter font-medium flex items-center gap-2 hover:translate-x-1 transition-transform">
                      Read full article <GoArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          {/* <button
            onClick={scrollRight}
            className="hidden md:flex absolute -right-2 md:-right-14 mac:scale-150 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-black text-black p-3 rounded-full shadow-md hover:bg-gray-50 transition items-center justify-center"
          >
            <FaChevronRight />
          </button> */}
        </div>
      </div>
    </div>

  );
};

export default News;



export const SectionLabel = ({ text, className = "" }) => {
  return (
    <p
      className={`m-0 !font-amaranth text-[15px] text-[#C30001] uppercase font-medium leading-none ${className}`}
    >
      {text}
    </p>
  );
};

export const SectionHeading = ({ text, className = "" }) => {
  return (
    <div
      role="heading"
      aria-level="2"
      className={`m-0 !font-amaranth mb-14 text-[32px] md:text-[50px] text-black fontbold leading-[1.1] ${className}`}
    >
      {text}
    </div>
  );
};

// export default SectionHeading;

// export default SectionLabel;