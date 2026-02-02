"use client";
import Link from "next/link"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { SectionHeading, SectionLabel } from "./News";

const howData = [
    {
        name: "Donation",
        icon: "/hand2.png",
        bg: "/bg.webp",
        desc: "Contribute towards advanced treatments that help correct nearsightedness for those in need.",
        link: "/donation",
        btn: "Donate Now",
        offset: "md:mt-36 mac:mt-48"
    },
    {
        name: "Sadaqah",
        icon: "/mand.png",
        bg: "/bg2.webp",
        desc: "Make a meaningful impact by supporting vision correction treatments through voluntary charity.",
        link: "/sadaqah",
        btn: "Give Sadaqah",
        offset: ""
    },
    {
        name: "Zakat",
        icon: "/sand.png",
        bg: "/bg3.webp",
        desc: "Fulfill your Zakat obligation by funding LASIK treatments for those who can't afford it.",
        link: "/zakat",
        btn: "Pay Zakat",
        offset: "md:mt-36 mac:mt-48"
    }
];

const How = () => {
    return (
        <div className='text-center max-w-6xl mx-auto mt-6 text-black py-10 md:mt-14  md:pb-12 md:pt-10 px4 mx-auto -mt-15 m[1728px] m20'>
            {/* <h2 className='uppercase text-[#C30001] text-[14px] mac:text-[32px] mb-2'>donation</h2>
            <h2 className='text-3xl md:text-5xl mac:text-7xl pb-10 text-black font-bold'>How You Can Help & Donate</h2> */}
            <SectionLabel className="mb-2 trackingwidest"
                text="Donation" />
            <SectionHeading
                className="mt-3 mb-0 trackingwidest"
                text="How You Can Help & Donate" />
            {/* Desktop Layout (Static Grid) */}
            <div className='hidden xl:flex justify-center -mt-20 flex-wrap gap-6 md:gap-9 mac:gap-12 items-center max-w-7xl mac:max-w-full mx-auto '>
                {howData.map((item, idx) => (
                    <div
                        key={idx}
                        style={{ backgroundImage: `url('${item.bg}')` }}
                        className={`bg-cover bg-no-repeat h-[531.75px] mac[650px] w-[356.16px] m[350px] m[480px] flex flex-col rounded-xl ${item.offset}`}
                    >
                        <div className="m-5 size4 w-[61.8px] h-[61.8px] mac:size-20 bg-white rounded-full flex items-center justify-center">
                            <img src={item.icon} alt={item.name} className=' w-[42.74px] h-[42.74px] p-2 mac:p-4 object-contain' />
                        </div>
                        <h3 className='text-left pl-6 text-3xl md:text-4xl mac:text-5xl text-white font-bold'>{item.name}</h3>
                        <p className='text-left pl-6 py-5 text-white w-[350px] text-[16.72px] base mac:text-xl leading-relaxed'>
                            {item.desc}
                        </p>
                        <Link href={item.link}>
                            <div className='flex items-start pl-6'>
                                <button className='bg-white py-2 px-6 mac:py-3 mac:px-10 rounded-full font-medium mac:text-xl hover:bg-gray-100 transition-colors'>
                                    {item.btn}
                                </button>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Mobile/Tablet/Laptop Layout (Swiper Slider) */}
            <div className="block xl:hidden w-full mx-auto px-4 -mt-10">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    spaceBetween={20}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    className="w-full h-[550px] surgery-swiper"
                >
                    {howData.map((item, idx) => (
                        <SwiperSlide key={idx} className={`pb-10 ${idx !== 1 ? "mt-0 md:mt-10" : ""}`}>
                            <div
                                style={{ backgroundImage: `url('${item.bg}')` }}
                                className="bg-cover bg-no-repeat h-[500px] w-full flex flex-col rounded-xl mx-auto shadow-lg"
                            >
                                <div className="m-5 size-14 bg-white rounded-full flex items-center justify-center">
                                    <img src={item.icon} alt={item.name} className='p-2 object-contain' />
                                </div>
                                <h3 className='text-left pl-6 text-3xl text-white font-bold'>{item.name}</h3>
                                <p className='text-left pl-6 py-5 text-white text-sm leading-relaxed'>
                                    {item.desc}
                                </p>
                                <Link href={item.link}>
                                    <div className='flex items-start pl-6'>
                                        <button className='bg-white py-2 px-6 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors'>
                                            {item.btn}
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default How
