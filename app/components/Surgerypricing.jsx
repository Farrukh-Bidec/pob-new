"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // ← add Autoplay
import "swiper/css";
import "swiper/css/pagination";

const donationData = [
  {
    title: "Donate for Diabetic Retinopathy Treatment",
    price: "Contact for details",
    description: "Supports laser treatment and medical care to prevent vision loss caused by diabetes",
    image: "/RETINA.jpg"
  },
  {
    title: "Donate a Cataract Surgery (Adult)",
    price: "PKR: 12,000",
    description: "Restores sight through a safe and effective cataract procedure",
    image: "/CORNEAL.webp"
  },
  {
    title: "Donate a Glaucoma Surgery",
    price: "PKR: 12,000",
    description: "Covers medical and/or laser treatment to prevent permanent blindness",
    image: "/GLAUCOMA.webp"
  },
  {
    title: "Donate a Cataract Surgery (Children)",
    price: "PKR: 40,000",
    description: "Provides specialized cataract surgery and post-operative care for children",
    image: "/CATARACT.webp"
  },
  {
    title: "Donate a Corneal Grafting Surgery",
    price: "PKR: 150,000",
    description: "Supports corneal transplant surgery (excluding cost of cornea)",
    image: "/PHOTOCOAGULATION.webp"
  },
  {
    title: "Donate a Vitreo-Retinal (VR) Surgery",
    price: "PKR: 70,000",
    description: "Covers advanced retinal surgery for severe eye conditions (per eye)",
    image: "/CORNEALADULTS.webp"
  }
];

const SurgeryPricing = () => {
  const handleDonateClick = () => {
    const footer = document.getElementById("footer_elem");
    console.log(document.getElementById("footer_elem"));

    
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-[#373895] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="uppercase text-smongo text-sm sm:text-sm tracking-wider text-center">
          HELP US
        </h2>
        <h3 className="text-xl sm:text-5xl  font-Amaranth mt-3 mb-4 text-center leading-tight">
          HELP THEM WITH YOUR ZAKAT/DONATIONS
        </h3>
        <p className='text-xs  text-center'>
          Through your Zakat and Sadaqah, you can support timely treatment and protect the gift of sight for those who cannot afford care.
        </p>
        <p className='text-xs text-center mb-14 mt-5'>
          In Pakistan, over 40 million people are affected by eye diseases, with cataracts responsible for nearly half <br />
          of all blindness, followed by glaucoma and diabetic retinopathy.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]} // ← add Autoplay module
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // ← auto-slide every 3s
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 4, spaceBetween: 30 },
          }}
          className="!pb-12 md:!pb-16"
        >
          {donationData.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="h-full flex flex-col rounded-xl overflow-hidden transition-transform hover:scale-[1.02] gap-8 w-70 mx-auto">
                <div className="relative h-56 sm:h-64 md:h-80 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-md"
                    loading="lazy"
                  />
                </div>

                <div className=" flex flex-col flex-grow">
                  <h4 className="text-base sm:text-lg mb-3 line-clamp-2">
                    {(() => {
                      const words = item.title.split(" ");
                      const lastIndex = words.length - 1;

                      return words.map((word, i) => (
                        <React.Fragment key={i}>
                          {i === lastIndex ? <><br />{word}</> : word + " "}
                        </React.Fragment>
                      ));
                    })()}
                  </h4>


                  <p className="text-xs sm:text-base text-gray-200 mb-4 flex-grow line-clamp-2">
                    {item.description}
                  </p>
                  <p className="text-xl sm:text-2xl font-inter font-extralight mb-5">{item.price}</p>
                  <button
                    onClick={handleDonateClick}
                    className="mt-auto bg-white text-black px-8 sm:py-3 py-1 rounded-full sm:text-base transition shadow-md w-fit text-sm"
                  >
                    Donate
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SurgeryPricing;
