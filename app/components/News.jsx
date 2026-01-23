"use client";

import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import { GoArrowRight } from 'react-icons/go';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import axios from './axios.js';

const News = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const Image_Url = "https://pob.datainovate.com/backend/";

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
            image: blog.main_image ? `${Image_Url}${blog.main_image}` : '/fallback.png',
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
    <div>
  {/* Heading */}
  <div className="text-center pt-12 md:pt-70 xl:pt-10 px-10">
    <h4 className="uppercase text-[#C30001] text-[22px] md:text-[22px] -mt-20">Own Blogs</h4>
    <h2 className="text-3xl md:text-5xl pb-4 md:pb-6 pt-2 text-black ">
      Our Latest News and Articles
    </h2>
  </div>

  {/* Slider */}
  <div className="relative w-full py-10">
    <div className="relative w-[95%] md:w-[85%] mx-auto">
      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="hidden md:block   absolute -left-2 md:-left-14 top-1/2 transform -translate-y-1/2 z-10  text-black p-3 rounded-full shadow-md hover:bg-gray-800 transition"
      >
        <FaChevronLeft />
      </button>

      {/* Cards */}
      <div
        ref={sliderRef}
        className="flex overflow-auto sm:overflow-hidden gap-4 scroll-smooth no-scrollbar"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[80%] sm:w-[230px] md:w-[30%] p-2 flex flex-col"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-t-lg h-48 md:h-60">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-black border border-t-0 p-4 rounded-b-lg flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl  line-clamp-3">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base line-clamp-3 mt-2 text-gray-600">
                  {card.description}
                </p>
              </div>
              <Link href={`/blog/${card.slug}`}>
                <button className="mt-4 text-blue-600 flex items-center gap-2">
                  Continue Reading <GoArrowRight />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="hidden md:block absolute  -right-2 md:-right-14 top-1/2 transform -translate-y-1/2 z-10 bg-[#373895] text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition"
      >
        <FaChevronRight />
      </button>
    </div>
  </div>
</div>

  );
};

export default News;
