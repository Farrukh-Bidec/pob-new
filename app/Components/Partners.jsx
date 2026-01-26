// "use client";

// import React from "react";

// const Partners = () => {
//   const images = [
//     "/plogo.png",
//     "/plogo2.png",
//     "/plogo3.png",
//     "/plogo4.png",
//     "/plogo5.png",
//     "/plogo6.png",
//     "/plogo7.png",
//     "/plogo8.png",
//     "/plogo9.png",
//     "/plogo10.png",
//     "/plogo11.png",
//     "/plogo12.png",
//   ];

//   return (
//     <div className="py-10">
//       <h3 className="text-4xl text-center text-black py-3">POB Partners in Projects</h3>

//       {/* Slider container */}
//       <div className="relative overflow-hidden">
//         <div className="flex gap-20 animate-slide whitespace-nowrap">
//           {images.concat(images).map((src, index) => (
//             <div key={index} className="flex-shrink-0 w-28 py-10">
//               <img
//                 src={src}
//                 alt="Partners"
//                 className="object-contain object-center w-full"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CSS animation */}
//       <style jsx>{`
//         @keyframes slide {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }

//         .animate-slide {
//           animation: slide 30s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Partners;


"use client"; // ❗ This component runs only on the client

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

const Partners = ({ middleCarouselImages }) => {
  const Image_Url = "https://pob.datainovate.com/backend/"
  SwiperCore.use([Autoplay]);

  return (
    <div className="w-full mt-[25px] h-auto my-8 pb-14 pt-1 md:pt-15">
      <h2 className="text-3xl md:text-5xl text-center mb-8 font-Amaranth text-black">
        POB Partners in Projects
      </h2>

      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        breakpoints={{
          1024: { slidesPerView: 5, spaceBetween: 20 },
          768: { slidesPerView: 5, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 10 },
          0: { slidesPerView: 2, spaceBetween: 8 },
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        {middleCarouselImages?.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-cente py-5">
              <img
                src={`${Image_Url}/${review.image}`}
                alt={review?.alt_text || review?.platform || `Partner ${index + 1}`}
                className="w-28 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Partners;
