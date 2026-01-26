"use client"; // ✅ required for client-side interactivity
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useEffect } from "react";
import { Navigation, Autoplay } from "swiper/modules";

const LeaderShip = () => {
  const images = {
    Executive: [
      {
        src: "/Executive/Abdullah_Muttaqi.webp",
        alt: "Executive 1",
        name: "Dr. Abdullah Muttaqi",
        position: "(Member of EMC POB Eye Hospital)",
      },
      {
        src: "/Executive/Atif_Hafeez.webp",
        alt: "Executive 2",
        name: "Dr. Atif Hafeez Siddique",
        position: "(Member of EMC POB Eye Hospital)",
      },
      {
        src: "/Executive/Misbah_ul_Aziz.webp",
        alt: "Executive 3",
        name: "Dr. Misbah ul Aziz",
        position: "(Chairman POB Trust)",
      },
      {
        src: "/Executive/Muhammad_Azeemuddin.webp",
        alt: "Executive 4",
        name: "Dr. Muhammad Azeemuddin",
        position: "(Director Quality Assurance)",
      },
      {
        src: "/Executive/Salman_Ahmad.webp",
        alt: "Executive 1",
        name: "Dr. Ahmed Salman ",
        position: "(Director of Finance)",
      },
      {
        src: "/Executive/Sarfaraz_Akhtar.webp",
        alt: "Executive 2",
        name: "Dr. Sarfaraz Akhtar",
        position:
          "(Director Hospital Administration & Head of Quality Assurance)",
      },
      {
        src: "/Executive/Shayan_Shadmani.webp",
        alt: "Executive 3",
        name: "Dr. Shayan Shadmani",
        position: "(Secretary)",
      },
      {
        src: "/Executive/Tabbassum_Jafri.webp",
        alt: "Executive 4",
        name: "Dr. Tabbassum Jafri",
        position: "(Director HR)",
      },
      {
        src: "/Executive/Zaki_uddin.webp",
        alt: "Executive 3",
        name: "Dr. Zaki uddin Ahmed",
        position: "(Director Research & Strategy)",
      },
      {
        src: "/Executive/Zakiuddin_Ahmad.webp",
        alt: "Executive 4",
        name: "Dr. Zakiuddin Ahmad Sabri",
        position: "(Medical Director)",
      },
    ],
    Doctor: [
      {
        src: "/Doctor/Abdul_Salam.webp",
        alt: "Doctor 1",
        name: "Dr. Abdul Salam Moosa",
        position: "",
      },
      {
        src: "/Doctor/Afifa_Shams.webp",
        alt: "Doctor 4",
        name: "Dr. Afifa Shams",
        position: "",
      },
      {
        src: "/Doctor/Alishbah_Anwar.webp",
        alt: "Doctor 3",
        name: "Dr. Alishbah Anwar",
        position: "",
      },
      {
        src: "/Doctor/Asad_Javed.webp",
        alt: "Doctor 4",
        name: "Dr. Asad Javed",
        position: "",
      },
      {
        src: "/Doctor/Asghar_Rajani.webp",
        alt: "Doctor 1",
        name: "Dr. Asghar Rajani",
        position: "",
      },
      {
        src: "/Doctor/Ayesha.webp",
        alt: "Doctor 2",
        name: "Dr. Ayesha",
        position: "",
      },
      {
        src: "/Doctor/Uzair.webp",
        alt: "Doctor 2",
        name: "Dr. Uzair Ahmed",
        position: "",
      },
      {
        src: "/Doctor/Burhan.webp",
        alt: "Doctor 2",
        name: "Dr. Burhan Abdul Majeed",
        position: "",
      },
      {
        src: "/Doctor/Faisal_Murtaza.webp",
        alt: "Doctor 2",
        name: "Dr. Faisal Murtaza",
        position: "",
      },
      {
        src: "/Doctor/Faiza.webp",
        alt: "Doctor 2",
        name: "Dr. Faiza Rameez",
        position: "",
      },
      {
        src: "/Doctor/Hanif.webp",
        alt: "Doctor 2",
        name: "Dr. Hanif Godail",
        position: "",
      },
      {
        src: "/Doctor/Hina.webp",
        alt: "Doctor 2",
        name: "Dr. Hina Nasreen Nawaz",
        position: "",
      },
      {
        src: "/Doctor/Huzaifa.webp",
        alt: "Doctor 2",
        name: "Dr. Huzaifa Baig",
        position: "",
      },
      {
        src: "/Doctor/Kauser.webp",
        alt: "Doctor 2",
        name: "Dr. Kauser Naz",
        position: "",
      },
      {
        src: "/Doctor/Mariam.webp",
        alt: "Doctor 2",
        name: "Dr. Mariam Khalil",
        position: "",
      },
      {
        src: "/Doctor/Mariam_Shamim.webp",
        alt: "Doctor 2",
        name: "Dr. Mariam Shamim Kashif",
        position: "",
      },
      {
        src: "/Doctor/Moiz_Uddin.webp",
        alt: "Doctor 2",
        name: "Dr. Moiz Uddin",
        position: "",
      },
      {
        src: "/Doctor/Mudassir_Hilal.webp",
        alt: "Doctor 2",
        name: "Dr. Mudassir Hilal",
        position: "",
      },
      {
        src: "/Doctor/Muhammad_Ahmed.webp",
        alt: "Doctor 2",
        name: "Dr. Muhammad Ahmed Khan",
        position: "",
      },
      {
        src: "/Doctor/Muhammad_Haseeb.webp",
        alt: "Doctor 2",
        name: "Dr. Muhammad Haseeb Qureshi",
        position: "",
      },
      {
        src: "/Doctor/Muhammad_Mohsin.webp",
        alt: "Doctor 2",
        name: "Dr. Muhammad Mohsin Afzal",
        position: "",
      },
      {
        src: "/Doctor/Muhammad_Zunair.webp",
        alt: "Doctor 2",
        name: "Dr. Muhammad Zunair Aziz",
        position: "",
      },
      {
        src: "/Doctor/Muzna.webp",
        alt: "Doctor 2",
        name: "Dr. Muzna",
        position: "",
      },
      {
        src: "/Doctor/Nadia_Junaid.webp",
        alt: "Doctor 2",
        name: "Dr. Nadia Junaid",
        position: "",
      },
      {
        src: "/Doctor/Nisar_Ahmad.webp.webp",
        alt: "Doctor 2",
        name: "Dr. Nisar Ahmad",
        position: "",
      },
      {
        src: "/Doctor/Rabia_Furqan.webp.webp",
        alt: "Doctor 2",
        name: "Dr. Rabia Furqan",
        position: "",
      },
      {
        src: "/Doctor/Riaz_Ahmad.webp",
        alt: "Doctor 2",
        name: "Dr. Riaz Ahmad",
        position: "",
      },
      {
        src: "/Doctor/Saeed_Iqbal.webp.webp",
        alt: "Doctor 2",
        name: "Dr. Saeed Iqbal",
        position: "",
      },
      {
        src: "/Doctor/Sameen_Fatima.webp",
        alt: "Doctor 2",
        name: "Dr. Sameen Fatima",
        position: "",
      },
      {
        src: "/Doctor/Sami.webp",
        alt: "Doctor 2",
        name: "Dr. Sami ur Rehman",
        position: "",
      },
      {
        src: "/Doctor/Sara.webp",
        alt: "Doctor 2",
        name: "Dr. Sara",
        position: "",
      },
      {
        src: "/Doctor/Shahid.webp",
        alt: "Doctor 2",
        name: "Dr. Shahid",
        position: "",
      },
      {
        src: "/Doctor/Syed.webp",
        alt: "Doctor 2",
        name: "Dr. Syed Muhammad Saad",
        position: "",
      },
    ],
    Team: [
      {
        src: "/l4.webp",
        alt: "Executive 4",
        name: "Dr. Intzar Hussain",
        position: "Chairman",
      },
      {
        src: "/l1.webp",
        alt: "Executive 1",
        name: "Dr. Muhammad Zahid Latif",
        position: "General Secretary",
      },
      {
        src: "/l2.webp",
        alt: "Executive 2",
        name: "Dr. Shafqat Javed",
        position: "Finance Secretary",
      },
      {
        src: "/l3.webp",
        alt: "Executive 3",
        name: "Dr. Tahir Farooq",
        position: "Member",
      },
    ],
    Management: [
      {
        src: "/Pictures/Abdullah_Muttaqi.webp",
        alt: "Executive 1",
        name: "Dr. Abdullah Muttaqi",
        position: "",
      },
      {
        src: "/Pictures/Misbah.webp",
        alt: "Executive 2",
        name: "Dr. Misbah ul Aziz",
        position: "",
      },
      {
        src: "/Pictures/Azeemuddin.webp",
        alt: "Executive 3",
        name: "Dr. Muhammad Azeemuddin",
        position: "",
      },
      {
        src: "/Pictures/Salman.webp",
        alt: "Executive 4",
        name: "Dr. Salman Ahmad Khan Ghauri",
        position: "",
      },
      {
        src: "/Pictures/Shayan.webp",
        alt: "Executive 1",
        name: "Dr. Shayan Shadmani",
        position: "",
      },
      {
        src: "/Pictures/Tabassum.webp",
        alt: "Executive 2",
        name: "Dr. Tabassum Jafri",
        position: "",
      },
      {
        src: "/Pictures/Zakiuddin.webp",
        alt: "Executive 2",
        name: "Dr. Zakiuddin Ahmad Sabri",
        position: "",
      },
    ],
  };
  const categories = ["Executive", "Doctors", "Team", "Management"];


  const [swiperKey, setSwiperKey] = useState(0); // Add a key to force re-render

  useEffect(() => {
    // Force re-render of Swiper when data is loaded
    setSwiperKey((prevKey) => prevKey + 1);
  }, []);

  const [activeCategory, setActiveCategory] = useState("Executive");
  const sliderImages = images[activeCategory.trim()]; // Trim the activeCategory

  return (
    <div className="  relative flex flex-col items-center justify-center text-center pt-12  ">
      <div className="  md:w-5/12 w-[90%] font-inter items-center text-center   mb-4  flex flex-col gap-2 ">
        {/* <p className="text-[#F39C12] font-Amaranth text-center   ">Board</p> */}
        <h2 className="text-3xl md:text-4xl  max-w-2xl font-Amaranth  text-center md:text-start ">
          Leadership Behind the Vision{" "}
        </h2>
        <p className=" text-[#777777] text-center    text-[14px] ">
          Our leadership is grounded in service, with a commitment to ethical
          care, long-term impact, and sustainable change. Their vision drives
          every effort to reach the underserved.
        </p>
      </div>

      <div className="flex justify-start overflow-x-auto   whitespace-nowrap max-w-full  bg-[#28A745] py-2 px-2 rounded-[72px] gap-2 md:gap-4 mb-6 scrollbar-hide">
        {categories?.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`cursor-pointer px-4 py-2 text-[13px] rounded-[72px] ${activeCategory === category
              ? "bg-white text-black"
              : "bg-transparent text-white"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="   w-[90%] md:w-[80%]  ">
        <Swiper
          key={swiperKey} // Force re-render with updated key
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            1524: { slidesPerView: 5, spaceBetween: 10 }, // Desktop
            1024: { slidesPerView: 5, spaceBetween: 20 },
            768: { slidesPerView: 5, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 5 },
            0: { slidesPerView: 2, spaceBetween: 8 },
          }}
          navigation={{
            nextEl: ".leader-custom-next",
            prevEl: ".leader-custom-prev",
          }}
          pagination={{ clickable: true, el: ".swiper-pagination" }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
        >
          {sliderImages.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center swiper-slide-custom"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="text-center mt-2">
                <p className="text-lg font-Amaranth">{item.name}</p>
                <p className="text-sm text-gray-500 font-inter">{item.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    
    </div>
  );
};

export default LeaderShip;
