// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules"; // ← add Autoplay
// import "swiper/css";
// import "swiper/css/pagination";

// const donationData = [
//   {
//     title: "Donate for Diabetic Retinopathy Treatment",
//     price: "Contact for details",
//     description: "Supports laser treatment and medical care to prevent vision loss caused by diabetes",
//     image: "/RETINA.jpg"
//   },
//   {
//     title: "Donate a Cataract Surgery (Adult)",
//     price: "PKR: 12,000",
//     description: "Restores sight through a safe and effective cataract procedure",
//     image: "/CORNEAL.webp"
//   },
//   {
//     title: "Donate a Glaucoma Surgery",
//     price: "PKR: 12,000",
//     description: "Covers medical and/or laser treatment to prevent permanent blindness",
//     image: "/GLAUCOMA.webp"
//   },
//   {
//     title: "Donate a Cataract Surgery (Children)",
//     price: "PKR: 40,000",
//     description: "Provides specialized cataract surgery and post-operative care for children",
//     image: "/CATARACT.webp"
//   },
//   {
//     title: "Donate a Corneal Grafting Surgery",
//     price: "PKR: 150,000",
//     description: "Supports corneal transplant surgery (excluding cost of cornea)",
//     image: "/PHOTOCOAGULATION.webp"
//   },
//   {
//     title: "Donate a Vitreo-Retinal (VR) Surgery",
//     price: "PKR: 70,000",
//     description: "Covers advanced retinal surgery for severe eye conditions (per eye)",
//     image: "/CORNEALADULTS.webp"
//   }
// ];

// const SurgeryPricing = () => {
//   const handleDonateClick = () => {
//     const footer = document.getElementById("footer_elem");
//     console.log(document.getElementById("footer_elem"));


//     if (footer) {
//       footer.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="py-12 bg-[#373895] text-white">
//       <div className="max-w-7xl mac:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-15 mac:px-20">
//         <h2 className="uppercase text-smongo text-[14px] sm:text-[22px] tracking-wider text-center">
//           HELP US
//         </h2>
//         <h3 className="text-[20px] sm:text-[48px]  font-Amaranth mt-3 mb-2 text-center leading-tight">
//           HELP THEM WITH YOUR ZAKAT/DONATIONS
//         </h3>
//         <p className='text-[15px] mb-2  text-center'>
//           Through your Zakat and Sadaqah, you can support timely treatment and protect the gift of sight for those who cannot afford care.
//         </p>
//         <p className='text-[15px] text-center mb-14 '>
//           In Pakistan, over 40 million people are affected by eye diseases, with cataracts responsible for nearly half <br />
//           of all blindness, followed by glaucoma and diabetic retinopathy.
//         </p>

//         <Swiper
//           modules={[Pagination, Autoplay]} // ← add Autoplay module
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3000, disableOnInteraction: false }} // ← auto-slide every 3s
//           spaceBetween={16}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 2, spaceBetween: 20 },
//             1024: { slidesPerView: 3, spaceBetween: 24 },
//             1280: { slidesPerView: 4, spaceBetween: 30 },
//             1512: { slidesPerView: 4, spaceBetween: 50 },
//           }}
//           className="surgery-swiper !pb-12 md:!pb-16"
//         >
//           {donationData.map((item, idx) => (
//             <SwiperSlide key={idx}>
//               <div className="h-full flex flex-col rounded-xl overflow-hidden transition-transform hover:scale-[1.02] gap-6 translate-x-2 w-64 mac:w-[340px]  mx-auto">
//                 <div className="relative h-56 sm:h-64 md:h-80 overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="absolute inset-0 w-full h-full object-cover rounded-md"
//                     loading="lazy"
//                   />
//                 </div>

//                 <div className=" flex flex-col flex-grow">
//                   <h4 className="text-base sm:text-lg mb-3 line-clamp-2">
//                     {(() => {
//                       const words = item.title.split(" ");
//                       const lastIndex = words.length - 1;

//                       return words.map((word, i) => (
//                         <React.Fragment key={i}>
//                           {i === lastIndex ? <><br />{word}</> : word + " "}
//                         </React.Fragment>
//                       ));
//                     })()}
//                   </h4>


//                   <p className="text-xs sm:text-base text-gray-200 mb-4 flex-grow line-clamp-2">
//                     {item.description}
//                   </p>
//                   <p className="text-xl sm:text-2xl font-inter font-extralight mb-5">{item.price}</p>
//                   <button
//                     onClick={handleDonateClick}
//                     className="mt-auto bg-white text-black px-10 sm:py-2 py-2 rounded-full sm:text-base transition shadow-md w-fit text-sm"
//                   >
//                     Donate
//                   </button>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default SurgeryPricing;
// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const donationData = [
//   {
//     title: "Donate for Diabetic Retinopathy Treatment",
//     price: "Contact for details",
//     description:
//       "Supports laser treatment and medical care to prevent vision loss caused by diabetes",
//     image: "/RETINA.jpg",
//   },
//   {
//     title: "Donate a Cataract Surgery (Adult)",
//     price: "PKR: 12,000",
//     description: "Restores sight through a safe and effective cataract procedure",
//     image: "/CORNEAL.webp",
//   },
//   {
//     title: "Donate a Glaucoma Surgery",
//     price: "PKR: 12,000",
//     description: "Covers medical and/or laser treatment to prevent permanent blindness",
//     image: "/GLAUCOMA.webp",
//   },
//   {
//     title: "Donate a Cataract Surgery (Children)",
//     price: "PKR: 40,000",
//     description: "Provides specialized cataract surgery and post-operative care for children",
//     image: "/CATARACT.webp",
//   },
//   {
//     title: "Donate a Corneal Grafting Surgery",
//     price: "PKR: 150,000",
//     description: "Supports corneal transplant surgery (excluding cost of cornea)",
//     image: "/PHOTOCOAGULATION.webp",
//   },
//   {
//     title: "Donate a Vitreo-Retinal (VR) Surgery",
//     price: "PKR: 70,000",
//     description: "Covers advanced retinal surgery for severe eye conditions (per eye)",
//     image: "/CORNEALADULTS.webp",
//   },
// ];

// const SurgeryPricing = () => {
//   const handleDonateClick = () => {
//     document.getElementById("footer_elem")?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section className="py-16 bg-[#373895] text-white">
//       <div className="max-w-7xl mac:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mac:px-20">
//         {/* Headings */}
//         <h2 className="uppercase text-xs sm:text-sm tracking-widest text-center">
//           HELP US
//         </h2>

//         <h3 className="text-[22px] sm:text-[40px] lg:text-[48px] font-Amaranth mt-3 mb-3 text-center leading-tight">
//           HELP THEM WITH YOUR ZAKAT/DONATIONS
//         </h3>

//         <p className="text-sm sm:text-base text-center max-w-3xl mx-auto">
//           Through your Zakat and Sadaqah, you can support timely treatment and protect
//           the gift of sight for those who cannot afford care.
//         </p>

//         <p className="text-sm sm:text-base text-center max-w-4xl mx-auto mt-2 mb-14">
//           In Pakistan, over 40 million people are affected by eye diseases, with cataracts
//           responsible for nearly half of all blindness, followed by glaucoma and diabetic retinopathy.
//         </p>

//         {/* Swiper */}
//         <Swiper
//           modules={[Pagination, Autoplay]}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//             1280: { slidesPerView: 4 },
//             1512: { slidesPerView: 4 },
//           }}
//           className="!pb-14"
//         >
//           {donationData.map((item, idx) => (
//             <SwiperSlide key={idx} className="h-auto">
//               {/* Fixed-height card so no up/down jumping */}
//               <div className="h-[460px] sm:h-[500px] flex flex-col rounded-xl overflow-hidden transition-transform hover:scale-[1.02] max-w-[320px] mx-auto">
//                 {/* Fixed-height image */}
//                 <div className="relative h-[180px] sm:h-[200px] overflow-hidden rounded-md">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="absolute inset-0 w-full h-full object-cover"
//                     loading="lazy"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="flex flex-col flex-grow pt-5">
//                   {/* Bigger heading + fixed min height for equal cards */}
//                   <h4 className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold leading-snug mb-4 min-h-[56px]">
//                     {item.title}
//                   </h4>

//                   {/* Description fixed space */}
//                   <p className="text-xs sm:text-sm text-gray-200 mb-4 min-h-[40px] line-clamp-2">
//                     {item.description}
//                   </p>

//                   <p className="text-lg sm:text-xl font-inter font-extralight mb-4">
//                     {item.price}
//                   </p>

//                   {/* Button always at bottom */}
//                   <button
//                     onClick={handleDonateClick}
//                     className="mt-auto bg-white text-black px-8 py-2 rounded-full text-sm sm:text-base transition shadow-md w-fit hover:bg-gray-100"
//                   >
//                     Donate
//                   </button>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default SurgeryPricing;
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const donationData = [
  {
    title: "Donate for Diabetic Retinopathy Treatment",
    price: "Contact for details",
    description:
      "Supports laser treatment and medical care to prevent vision loss caused by diabetes",
    image: "/RETINA.jpg",
  },
  {
    title: "Donate a Cataract Surgery (Adult)",
    price: "PKR: 12,000",
    description: "Restores sight through a safe and effective cataract procedure",
    image: "/CORNEAL.webp",
  },
  {
    title: "Donate a Glaucoma Surgery",
    price: "PKR: 12,000",
    description: "Covers medical and/or laser treatment to prevent permanent blindness",
    image: "/GLAUCOMA.webp",
  },
  {
    title: "Donate a Cataract Surgery (Children)",
    price: "PKR: 40,000",
    description: "Provides specialized cataract surgery and post-operative care for children",
    image: "/CATARACT.webp",
  },
  {
    title: "Donate a Corneal Grafting Surgery",
    price: "PKR: 150,000",
    description: "Supports corneal transplant surgery (excluding cost of cornea)",
    image: "/PHOTOCOAGULATION.webp",
  },
  {
    title: "Donate a Vitreo-Retinal (VR) Surgery",
    price: "PKR: 70,000",
    description: "Covers advanced retinal surgery for severe eye conditions (per eye)",
    image: "/CORNEALADULTS.webp",
  },
];

const SurgeryPricing = () => {
  const handleDonateClick = () => {
    document.getElementById("footer_elem")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#373895] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-16">
        {/* Headings (same centered spacing) */}
        <div className="text-center">
          <p className={`m-0 !font-amaranth mb-4 text-[15px] text-[#FFFFFF] uppercase font-normal leading-none`}>
            HELP US
          </p>

          <h3 className={`m-0 !font-amaranth text-[32px] md:text-[50px] text-[#FFFFFF] font-normal leading-[1.1]`}>
            HELP THEM WITH YOUR ZAKAT/DONATIONS
          </h3>

          <p className="font-inter mt-3 text-[12px] sm:text-[15px] text-white/80 max-w-4xl mx-auto leading-relaxed">
            Through your Zakat and Sadaqah, you can support timely treatment and protect the gift of sight
            for those who cannot afford care.
          </p>

          <p className="font-inter mt-2 text-[12px] sm:text-[15px] text-white/80 max-w-4xl mx-auto leading-relaxed">
            In Pakistan, over 40 million people are affected by eye diseases, with cataracts responsible for
            nearly half of all blindness, followed by glaucoma and diabetic retinopathy.
          </p>
        </div>

        {/* Swiper */}
        <div className="mt-12 md:px-10">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            // IMPORTANT: fixed spacing like screenshot
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
              1280: { slidesPerView: 4, spaceBetween: 32 },
            }}
            className="!pb-12 surgery-swiper"
          >
            {donationData.map((item, idx) => (
              <SwiperSlide key={idx} className="h-auto rounded-[9px]">
                {/* Card: FIXED width + FIXED height => zoom stable */}
                <div className="mx-auto w-[320px] sm:w-[273px] h-[540px] rounded-[9px] flex flex-col">
                  {/* image */}
                  <div className="relative h-[550px] max-h-[550px] rounded-[9px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover rounded-[9px]"
                      loading="lazy"
                    />
                  </div>

                  {/* content */}
                  <div className="pt-4 flex flex-col flex-grow">
                    {/* Title: same as screenshot (2 lines) */}
                    <h4 className="text-[21px] !font-amaranth font-semibold leading-snug min-h-[48px] line-clamp-2">
                      {item.title.split(" ").slice(0, 4).join(" ")}
                      <br />
                      {item.title.split(" ").slice(4).join(" ")}
                    </h4>

                    <p className="mt-2 text-[11.44px] !font-inter text-white/75 leading-relaxed min-h-[44px] line-clamp-3">
                      {item.description}
                    </p>

                    <p className="mt-3 text-[19px] font-inter text-white/90">
                      {item.price}
                    </p>

                    {/* button: pill centered */}
                    <Link
  href="/donation/"
  className="mt-4 w-[128.07px] h-[34.85px] rounded-full bg-white text-black py-[6px] text-[12.91px] !font-inter hover:bg-white/90 flex items-center justify-center"
>
  Donate
</Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination dot styling (like screenshot) */}
          <style jsx global>{`
            .surgery-swiper .swiper-pagination-bullet {
              width: 6px;
              height: 6px;
              background: rgba(255, 255, 255, 0.55);
              opacity: 1;
            }
            .surgery-swiper .swiper-pagination-bullet-active {
              background: #ffffff;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default SurgeryPricing;