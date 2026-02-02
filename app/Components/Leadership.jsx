// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
// import { SectionHeading, SectionLabel } from "./News";

// const LeaderShip = () => {
//   const sliderImages = [
//     { src: "/Aghosh_Hala/agos_hala.webp", category: "Agosh Hala" },
//     { src: "/Aghosh_Hala/agos_hala2.webp", category: "Agosh Hala" },
//     { src: "/Aghosh_Hala/agos_hala3.webp", category: "Agosh Hala" },
//     { src: "/Aghosh_Hala/agos_hala4.webp", category: "Agosh Hala" },
//     { src: "/Aghosh_Hala/agos_hala5.webp", category: "Agosh Hala" },

//     { src: "/Al_Fajr/alfajr.webp", category: "Al_Fajr Scientific Visit" },
//     { src: "/Al_Fajr/alfajr2.webp", category: "Al_Fajr Scientific Visit" },
//     { src: "/Al_Fajr/alfajr3.webp", category: "Al_Fajr Scientific Visit" },
//     { src: "/Al_Fajr/alfajr4.webp", category: "Al_Fajr Scientific Visit" },
//     { src: "/Al_Fajr/alfajr5.webp", category: "Al_Fajr Scientific Visit" },
//     { src: "/Al_Fajr/alfajr6.webp", category: "Al_Fajr Scientific Visit" },

//     { src: "/Baithak_School/school.webp", category: "Baithak School" },
//     { src: "/Baithak_School/school2.webp", category: "Baithak School" },
//     { src: "/Baithak_School/school3.webp", category: "Baithak School" },
//     { src: "/Baithak_School/school4.webp", category: "Baithak School" },

//     { src: "/School_Camps/school1.webp", category: "School Camps" },
//     { src: "/School_Camps/school2.webp", category: "School Camps" },

//     { src: "/Orangi_Town_Campus/orangi.webp", category: "Orangi Unit Campus" },
//     { src: "/Orangi_Town_Campus/orangi2.webp", category: "Orangi Unit Campus" },
//     { src: "/Orangi_Town_Campus/orangi3.webp", category: "Orangi Unit Campus" },
//     { src: "/Orangi_Town_Campus/orangi4.webp", category: "Orangi Unit Campus" },
//   ];

//   const categories = [
//     "Agosh Hala",
//     "Al_Fajr Scientific Visit",
//     "Baithak School",
//     "School Camps",
//     "Orangi Unit Campus",

//     "Donor Visits",
//   ];

//   const [activeCategory, setActiveCategory] = useState(categories[0]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [cardWidth, setCardWidth] = useState(288 + 24); // Default w-72 (288) + gap-6 (24)
//   const [visibleCount, setVisibleCount] = useState(1); // Default to 1
//   const sliderRef = useRef(null);

//   // Swipe logic states
//   const [touchStart, setTouchStart] = useState(null);
//   const [touchEnd, setTouchEnd] = useState(null);

//   useEffect(() => {
//     const updateSize = () => {
//       if (window.innerWidth >= 1512) {
//         setCardWidth(420 + 16); // Mac: w-[420px] + gap-4 (16)
//         setVisibleCount(4);
//       } else {
//         setCardWidth(288 + 24); // Default: w-72 (288) + gap-6 (24)
//         setVisibleCount(1);
//       }
//     };
//     updateSize();
//     window.addEventListener("resize", updateSize);
//     return () => window.removeEventListener("resize", updateSize);
//   }, []);

//   const filteredImages = sliderImages.filter(
//     (image) => image.category === activeCategory
//   );

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
//   };

//   const handleNext = () => {
//     // On Mac, we show 4 cards, so we can't scroll past the point where 4 cards are visible
//     const maxIndex = Math.max(0, filteredImages.length - visibleCount);
//     setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
//   };

//   const totalDots = Math.max(0, filteredImages.length - (visibleCount - 1));

//   // Swipe handlers
//   const onTouchStart = (e) => {
//     setTouchEnd(null);
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

//   const onTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;
//     const distance = touchStart - touchEnd;
//     const isLeftSwipe = distance > 50;
//     const isRightSwipe = distance < -50;

//     if (isLeftSwipe) handleNext();
//     if (isRightSwipe) handlePrev();
//   };

//   useEffect(() => {
//     setCurrentIndex(0);
//   }, [activeCategory]);
// const arrowBtn =
//   "hidden md:flex absolute z-20 w-10 h-10 mac:w-14 mac:h-14 \
//    bg-white border border-black rounded-full shadow-md \
//    items-center justify-center \
//    hover:bg-gray-50 transition-all disabled:opacity-30";
//   return (
//     <div className="relative max-w-6xl mx-auto mt-14 md:mt-0 flex flex-col items-center justify-center text-center pt10 mac:max-w-[1728px] mac:mx-auto">
//       {/* Header */}
//       <div className="w-[90%] font-inter items-center text-center mb-4 flex flex-col gap-2">
//         {/* <h4 className="text-[12px]  sm:text-[14px] mb1 text-[#C30001] uppercase font-semibold">
//           Media Gallery
//         </h4> */}

//         {/* <h2 className="text-3xl sm:text-5xl mac:text-7xl pb- pt-2 text-black w-full">Capturing Moments, Sharing Stories</h2> */}
//          <SectionLabel text="Media Gallery" />
//                 <SectionHeading text="Capturing Moments, Sharing Stories" />
//         <p className="text-black -mt-14 font-bold font-inter text-center text-[15px] mactext-xl pb-2">
//           Explore impactful visuals that tell the real stories behind the scenes
//         </p>
//       </div>

//       {/* Category Buttons */}
//       <div className="flex justify-center  mb-6 px2">
//         <div className="flex overflow-x-auto w-[400px] md:w-auto h-[40.57px]  whitespace-nowrap gap-2 md:gap-1 mac:gap-8 snap-x snap-mandatory py-[2px] px-[2px] md:px4 mac:px10 bg-[#373895] rounded-md md:rounded-full scrollbar-hide">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`flex-shrink-0 h-[35.02px] w-[140.17px] font-inter cursor-pointer px2 py-2 text-[11.36px] mac:text-xl rounded-full transitioncolors duration-200 snap-start ${activeCategory === category
//                 ? "bg-white text-black "
//                 : "bg-transparent text-white"
//                 }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Slider Container */}
//       <div className="relative w-full px-4 md:px16 mac:px-4 flex items-center justify-center">

//         {/* Left Arrow - Hidden on Mobile, Shown on MD+ */}
//         {/* <button
//           onClick={handlePrev}
//           disabled={currentIndex === 0}
//           className="hidden md:flex absolute left-4 z-10 p-2 bg-white border border-black rounded-full shadow-md disabled:opacity-30 hover:bg-gray-50 transition-all mac:scale-150 items-center justify-center"
//         >
//           <MdArrowBackIos className="text-black text-xl ml-1" />
//         </button> */}
//         <button
//   onClick={handlePrev}
//   disabled={currentIndex === 0}
//   className={`${arrowBtn} -left-12`}
// >
//   <MdArrowBackIos className="text-black text-center ml-[6px] text-lg mac:text-2xl mlpx]" />
// </button>
//         {/* Slider Viewport with Swipe Events / Mobile Grid */}
//         <div
//           className="w-full overflow-hidden"
//           ref={sliderRef}
//           onTouchStart={onTouchStart}
//           onTouchMove={onTouchMove}
//           onTouchEnd={onTouchEnd}
//         >
//           {/* Mobile Grid (hidden on md) */}
//           <div className="grid grid-cols-2 gap-2 md:hidden">
//             {filteredImages.length > 0 ? (
//               filteredImages.map((item, index) => (
//                 <div key={index} className="w-full flex flex-col items-center">
//                   <img
//                     src={item.src}
//                     alt={item.category}
//                     className="w-[263.4px] h-[304.26px] objectcover rounded-[20px] shadow-sm"
//                   />
//                 </div>
//               ))
//             ) : (
//               <p className="text-blue-900 w-full col-span-2">No images available </p>
//             )}
//           </div>

//           {/* Desktop Slider (hidden on mobile) */}
//           <div
//             className="hidden ml6 md:flex gap-[4px] mac:gap-2 transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${currentIndex * cardWidth}px)`,
//             }}
//           >
//             {filteredImages.length > 0 ? (
//               filteredImages.map((item, index) => (
//                 <div key={index} className="shrink-0  w-[274px] mac:w-[390px] flex flex-col items-center">
//                   <img
//                     src={item.src}
//                     alt={item.category}
//                     className="w-[90%] h-78 mac:h-[410px] object-cover rounded-lg mac:rounded-2xl shadow-sm"
//                   />
//                 </div>
//               ))
//             ) : (
//               <p className="text-blue-900 w-full">No images available </p>
//             )}
//           </div>
//         </div>

//         {/* Right Arrow - Hidden on Mobile, Shown on MD+ */}
//         {/* <button
//           onClick={handleNext}
//           disabled={currentIndex >= filteredImages.length - visibleCount}
//           className="hidden md:flex absolute right-4 z-10 p-2 bg-white border border-black rounded-full shadow-md disabled:opacity-30 hover:bg-gray-50 transition-all mac:scale-150 items-center justify-center"
//         >
//           <MdArrowForwardIos className="text-black text-xl" />
//         </button> */}
//         <button
//   onClick={handleNext}
//   disabled={currentIndex >= filteredImages.length - visibleCount}
//   className={`${arrowBtn} -right-10`}
// >
//   <MdArrowForwardIos className="text-black  text-lg mac:text-2xl" />
// </button>
//       </div>

//       {/* Pagination Dots */}
//       {/* <div className="pob-dots-container mt-4">
//         {Array.from({ length: totalDots }).map((_, idx) => (
//           <div
//             key={idx}
//             onClick={() => setCurrentIndex(idx)}
//             className={`pob-dot ${currentIndex === idx ? "pob-dot-active" : ""}`}
//           />
//         ))}
//       </div> */}
//     </div>
//   );
// };

// export default LeaderShip;
// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
// import { SectionHeading, SectionLabel } from "./News";

// const LeaderShip = () => {
//   const sliderImages = [
//     { src: "/Aghosh_Hala/agos_hala.webp", category: "Agosh Hala" },
//     { src: "/Aghosh_Hala/agos_hala2.webp", category: "Agosh Hala" },
//     { src: "/Aghosh_Hala/agos_hala3.webp", category: "Agosh Hala" },
//     { src: "/Aghosh_Hala/agos_hala4.webp", category: "Agosh Hala" },
//     { src: "/Aghosh_Hala/agos_hala5.webp", category: "Agosh Hala" },

//     { src: "/Al_Fajr/alfajr.webp", category: "Al_Fajr Scientific Visit" },
//     { src: "/Al_Fajr/alfajr2.webp", category: "Al_Fajr Scientific Visit" },
//     { src: "/Al_Fajr/alfajr3.webp", category: "Al_Fajr Scientific Visit" },
//     { src: "/Al_Fajr/alfajr4.webp", category: "Al_Fajr Scientific Visit" },
//     { src: "/Al_Fajr/alfajr5.webp", category: "Al_Fajr Scientific Visit" },
//     { src: "/Al_Fajr/alfajr6.webp", category: "Al_Fajr Scientific Visit" },

//     { src: "/Baithak_School/school.webp", category: "Baithak School" },
//     { src: "/Baithak_School/school2.webp", category: "Baithak School" },
//     { src: "/Baithak_School/school3.webp", category: "Baithak School" },
//     { src: "/Baithak_School/school4.webp", category: "Baithak School" },

//     { src: "/School_Camps/school1.webp", category: "School Camps" },
//     { src: "/School_Camps/school2.webp", category: "School Camps" },

//     { src: "/Orangi_Town_Campus/orangi.webp", category: "Orangi Unit Campus" },
//     { src: "/Orangi_Town_Campus/orangi2.webp", category: "Orangi Unit Campus" },
//     { src: "/Orangi_Town_Campus/orangi3.webp", category: "Orangi Unit Campus" },
//     { src: "/Orangi_Town_Campus/orangi4.webp", category: "Orangi Unit Campus" },
//   ];

//   const categories = [
//     "Agosh Hala",
//     "Al_Fajr Scientific Visit",
//     "Baithak School",
//     "School Camps",
//     "Orangi Unit Campus",
//     "Donor Visits",
//   ];

//   const [activeCategory, setActiveCategory] = useState(categories[0]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [cardWidth, setCardWidth] = useState(288 + 24); // Default mobile
//   const [visibleCount, setVisibleCount] = useState(1); // Default mobile
//   const sliderRef = useRef(null);

//   // Swipe states
//   const [touchStart, setTouchStart] = useState(null);
//   const [touchEnd, setTouchEnd] = useState(null);

//   // Responsive card width + visible count
//   useEffect(() => {
//     const updateSize = () => {
//       if (window.innerWidth >= 1512) {
//         setCardWidth(420 + 16); // Mac/2xl
//         setVisibleCount(4);
//       } else {
//         setCardWidth(288 + 24); // Mobile/Tablet
//         setVisibleCount(1);
//       }
//     };
//     updateSize();
//     window.addEventListener("resize", updateSize);
//     return () => window.removeEventListener("resize", updateSize);
//   }, []);

//   // Filter images by active category
//   const filteredImages = sliderImages.filter(
//     (image) => image.category === activeCategory
//   );

//   // Auto-scroll for mobile/tablet/LG
//   useEffect(() => {
//     const interval = () => {
//       if (window.innerWidth < 1512 && filteredImages.length > visibleCount) {
//         const maxIndex = filteredImages.length - visibleCount;
//         setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
//       }
//     };
//     const timer = setInterval(interval, 3000);
//     return () => clearInterval(timer);
//   }, [filteredImages, visibleCount]);

//   // Reset slider when category changes
//   useEffect(() => {
//     setCurrentIndex(0);
//   }, [activeCategory]);

//   // Navigation handlers
//   const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
//   const handleNext = () => {
//     const maxIndex = Math.max(0, filteredImages.length - visibleCount);
//     setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
//   };

//   // Swipe handlers
//   const onTouchStart = (e) => {
//     setTouchEnd(null);
//     setTouchStart(e.targetTouches[0].clientX);
//   };
//   const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
//   const onTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;
//     const distance = touchStart - touchEnd;
//     if (distance > 50) handleNext(); // left swipe
//     if (distance < -50) handlePrev(); // right swipe
//   };

//   const arrowBtn =
//     "hidden 2xl:flex mac:flex absolute z-20 w-10 h-10 mac:w-14 mac:h-14 \
//      bg-white border border-black rounded-full shadow-md \
//      items-center justify-center \
//      hover:bg-gray-50 transition-all disabled:opacity-30";

//   const canScroll = filteredImages.length > visibleCount;

//   return (
//     <div className="relative max-w-6xl mx-auto mt-14 md:mt-0 flex flex-col items-center justify-center text-center pt-10 mac:max-w-[1728px]">
//       {/* Header */}
//       <div className="w-[90%] font-inter text-center mb-4 flex flex-col gap-2">
//         <SectionLabel text="Media Gallery" />
//         <SectionHeading text="Capturing Moments, Sharing Stories" />
//         <p className="text-black -mt-14 font-bold font-inter text-center text-[15px] mac:text-xl pb-2">
//           Explore impactful visuals that tell the real stories behind the scenes
//         </p>
//       </div>

//       {/* Category Buttons */}
//       <div className="flex justify-center mb-6 px-2">
//         <div className="flex overflow-x-auto w-[400px] md:w-auto h-[40.57px] whitespace-nowrap gap-2 md:gap-1 mac:gap-8 snap-x snap-mandatory py-[2px] px-[2px] md:px-4 mac:px-10 bg-[#373895] rounded-md md:rounded-full scrollbar-hide">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`flex-shrink-0 h-[35.02px] w-[140.17px] font-inter cursor-pointer px-2 py-2 text-[11.36px] mac:text-xl rounded-full transition-colors duration-200 snap-start ${
//                 activeCategory === category
//                   ? "bg-white text-black"
//                   : "bg-transparent text-white"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Slider */}
//       <div className="relative w-full px-4 md:px-16 mac:px-4 flex items-center justify-center">
//         {/* Left Arrow */}
//         {canScroll && window.innerWidth >= 1512 && (
//           <button
//             onClick={handlePrev}
//             disabled={currentIndex === 0}
//             className={`${arrowBtn} -left-12`}
//           >
//             <MdArrowBackIos className="text-black ml-[6px] text-lg mac:text-2xl" />
//           </button>
//         )}

//         {/* Slider Viewport */}
//         <div
//           className="w-full overflow-hidden"
//           ref={sliderRef}
//           onTouchStart={onTouchStart}
//           onTouchMove={onTouchMove}
//           onTouchEnd={onTouchEnd}
//         >
//           {/* Mobile Grid */}
//           <div className="grid grid-cols-2 gap-2 md:hidden">
//             {filteredImages.length > 0 ? (
//               filteredImages.map((item, index) => (
//                 <div key={index} className="w-full flex flex-col items-center">
//                   <img
//                     src={item.src}
//                     alt={item.category}
//                     className="w-[263.4px] h-[304.26px] object-cover rounded-[20px] shadow-sm"
//                   />
//                 </div>
//               ))
//             ) : (
//               <p className="text-blue-900 w-full col-span-2">
//                 No images available
//               </p>
//             )}
//           </div>

//           {/* Desktop Slider */}
//           <div
//             className="hidden ml-6 md:flex gap-[4px] mac:gap-2 transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${currentIndex * cardWidth}px)`,
//             }}
//           >
//             {filteredImages.length > 0 ? (
//               filteredImages.map((item, index) => (
//                 <div
//                   key={index}
//                   className="shrink-0 w-[274px] mac:w-[390px] flex flex-col items-center"
//                 >
//                   <img
//                     src={item.src}
//                     alt={item.category}
//                     className="w-[90%] h-78 mac:h-[410px] object-cover rounded-lg mac:rounded-2xl shadow-sm"
//                   />
//                 </div>
//               ))
//             ) : (
//               <p className="text-blue-900 w-full">No images available</p>
//             )}
//           </div>
//         </div>

//         {/* Right Arrow */}
//         {canScroll && window.innerWidth >= 1512 && (
//           <button
//             onClick={handleNext}
//             disabled={currentIndex >= filteredImages.length - visibleCount}
//             className={`${arrowBtn} -right-10`}
//           >
//             <MdArrowForwardIos className="text-black text-lg mac:text-2xl" />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LeaderShip;
"use client";

import React, { useState, useRef, useEffect } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { SectionHeading, SectionLabel } from "./News";

const LeaderShip = () => {
  const sliderImages = [
    { src: "/Aghosh_Hala/agos_hala.webp", category: "Agosh Hala" },
    { src: "/Aghosh_Hala/agos_hala2.webp", category: "Agosh Hala" },
    { src: "/Aghosh_Hala/agos_hala3.webp", category: "Agosh Hala" },
    { src: "/Aghosh_Hala/agos_hala4.webp", category: "Agosh Hala" },
    { src: "/Aghosh_Hala/agos_hala5.webp", category: "Agosh Hala" },

    { src: "/Al_Fajr/alfajr.webp", category: "Al_Fajr Scientific Visit" },
    { src: "/Al_Fajr/alfajr2.webp", category: "Al_Fajr Scientific Visit" },
    { src: "/Al_Fajr/alfajr3.webp", category: "Al_Fajr Scientific Visit" },
    { src: "/Al_Fajr/alfajr4.webp", category: "Al_Fajr Scientific Visit" },
    { src: "/Al_Fajr/alfajr5.webp", category: "Al_Fajr Scientific Visit" },
    { src: "/Al_Fajr/alfajr6.webp", category: "Al_Fajr Scientific Visit" },

    { src: "/Baithak_School/school.webp", category: "Baithak School" },
    { src: "/Baithak_School/school2.webp", category: "Baithak School" },
    { src: "/Baithak_School/school3.webp", category: "Baithak School" },
    { src: "/Baithak_School/school4.webp", category: "Baithak School" },

    { src: "/School_Camps/school1.webp", category: "School Camps" },
    { src: "/School_Camps/school2.webp", category: "School Camps" },

    { src: "/Orangi_Town_Campus/orangi.webp", category: "Orangi Unit Campus" },
    { src: "/Orangi_Town_Campus/orangi2.webp", category: "Orangi Unit Campus" },
    { src: "/Orangi_Town_Campus/orangi3.webp", category: "Orangi Unit Campus" },
    { src: "/Orangi_Town_Campus/orangi4.webp", category: "Orangi Unit Campus" },
  ];

  const categories = [
    "Agosh Hala",
    "Al_Fajr Scientific Visit",
    "Baithak School",
    "School Camps",
    "Orangi Unit Campus",
    // "Donor Visits",
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(288 + 24);
  const [visibleCount, setVisibleCount] = useState(2);
  const sliderRef = useRef(null);

  // Responsive card width + visible count
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 1512) {
        setCardWidth(420 + 16);
        setVisibleCount(4);
      } else if (window.innerWidth >= 768) {
        setCardWidth(288 + 16);
        setVisibleCount(2);
      } else {
        setCardWidth(288 + 16);
        setVisibleCount(2);
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Filter images
  const filteredImages = sliderImages.filter(
    (image) => image.category === activeCategory
  );

  // Duplicate images for infinite loop
  const loopedImages = [...filteredImages, ...filteredImages];

  // Auto-scroll infinite
  useEffect(() => {
    const interval = () => {
      setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
    };
    const timer = setInterval(interval, 3000);
    return () => clearInterval(timer);
  }, [filteredImages.length]);

  // Reset slider on category change
  useEffect(() => setCurrentIndex(0), [activeCategory]);

  // Navigation
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const canScroll = filteredImages.length > visibleCount;

  const arrowBtn =
    "hidden 2xl:flex absolute z-20 w-10 h-10 mac:w-14 mac:h-14 bg-white border border-black rounded-full shadow-md items-center justify-center hover:bg-gray-50 transition-all";

  return (
    <div className="relative max-w-6xl mx-auto mt-14 md:mt-0 flex flex-col items-center justify-center text-center pt-10 mac:max-w-[1728px]">
      {/* Header */}
      <div className="w-[90%] font-inter text-center mb-4 flex flex-col gap-2">
        <SectionLabel text="Media Gallery" />
        <SectionHeading text="Capturing Moments, Sharing Stories" />
        <p className="text-black -mt-14 font-bold font-inter text-center text-[15px] mac:text-xl pb-2">
          Explore impactful visuals that tell the real stories behind the scenes
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex justify-center mb-6 px-2">
        <div className="flex overflow-x-auto w-[390px] md:w-auto h-[40.57px] whitespace-nowrap gap-2 md:gap-1 mac:gap-8 snap-x snap-mandatory py-[2px] px-[0.5px] md:px-1 mac:px-10 bg-[#373895] rounded-md md:rounded-full scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex-shrink-0 h-[35.02px] w-[140.17px] font-inter cursor-pointer px-0.5 py-2 text-[11.36px] mac:text-xl rounded-full transition-colors duration-200 snap-start ${activeCategory === category
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Slider */}
      <div className="relative w-full px-4 md:px-16 mac:px-4 flex items-center justify-center">
        {/* Left Arrow */}
        {canScroll && window.innerWidth >= 1512 && (
          <button
            onClick={handlePrev}
            className={`${arrowBtn} -left-12`}
          >
            <MdArrowBackIos className="text-black ml-[6px] text-lg mac:text-2xl" />
          </button>
        )}

        {/* Slider Viewport */}
        <div className="w-full overflow-hidden flex">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * cardWidth}px)`,
            }}
          >
            {loopedImages.map((item, index) => (
              <div
                key={index}
                className="shrink-0 w-[274px] mac:w-[390px] flex flex-col items-center px-1"
              >
                <img
                  src={item.src}
                  alt={item.category}
                  className="w-[90%] h-78 mac:h-[410px] object-cover rounded-lg mac:rounded-2xl shadow-sm"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        {canScroll && window.innerWidth >= 1512 && (
          <button
            onClick={handleNext}
            className={`${arrowBtn} -right-12`}
          >
            <MdArrowForwardIos className="text-black text-lg mac:text-2xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default LeaderShip;