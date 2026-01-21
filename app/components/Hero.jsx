"use client";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const slide = {
  id: 1,
  image: "/slide1.jpg",
  alt_text: "Prevent Blindness - POB Trust",
  title: "WELCOME TO POB TRUST\nPREVENTATION OF BLINDNESS",
  headline: "Leading Free Eye Care Hospital in Karachi: Restoring Vision with Compassion",
  description:
    "Bringing hope and clarity to lives with free eye care, restoring vision with love and compassion in Karachi.",
};

const scrollToDonate = () => {
  const footer = document.getElementById("footer_elem");
  footer.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden h-[535px] md:h-[130vh] ">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={slide.image}
          alt={slide.alt_text}
          fill
          priority
          sizes="100vw"
          className="object-cover h-full"
        />
      </div>

      {/* ─── Mobile Content (centered) ─── */}
      <div className="absolute inset-0 z-20 flex md:hidden items-center justify-center px-5">
        <div className="text-center max-w-lg text-white">
          <p className="text-[10px] text-shadow uppercase font-light">
            {slide.title.replace("\\n", " ")}
          </p>
          <h1 className="mt-3 text-lg sm:text-2xl leading-tight text-shadow">
            {slide.headline.replace("\\n", " ")}
          </h1>
          <p className="mt-6 text-[10px] sm:text-base line-clamp-3 text-shadow">
            {slide.description}
          </p>

          <Link href="" className="mt-6 inline-block">
            <button className="flex items-center gap-3 px-[8px] pl-4 sm:px-8 py-[2px] text-[12px] sm:py-3 my-2 bg-white text-black rounded-full shadow-lg hover:bg-gray-100 active:scale-95 transition">
              Donate Now
              <span className="flex items-center justify-center w-6 h-6 bg-black text-white rounded-full text-xl">
                <MdKeyboardDoubleArrowRight />
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* ─── Desktop / Tablet Content (left aligned) ─── */}
      <div className="hidden md:flex absolute inset-0 z-20 items-center pl-6 lg:pl-12 xl:pl-24 pr-6">
        <div className="max-w-2xl lg:max-w-3xl text-white">
          <p className="text-xl lg:text-base">{slide.title.replace("\\n", " ")}</p>
          <h1 className="mt-4 lg:mt-6 text-4xl lg:text-5xl xl:text-4xl leading-tight">
            {slide.headline}
          </h1>
          <p className="mt-5 lg:mt-7 text-base lg:text-base">
            Bringing hope and clarity to lives with free eye care, restoring vision
            <br /> with love and compassion in Karachi.
          </p>

          <Link
            href=""
            className="mt-8 lg:mt-10 inline-block"
            onClick={scrollToDonate}
          >
            <button className="flex items-center gap-3 px-2 py-4 sm:py-1 bg-white text-black rounded-full shadow-xl hover:bg-gray-100 transition text-base pl-4">
              Donate Now
              <span className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full text-2xl">
                <MdKeyboardDoubleArrowRight />
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* ─── Text Shadow Styling ─── */}
      <style jsx global>{`
        .text-shadow {
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
        }
      `}</style>
    </div>
  );
};

export default Hero;
