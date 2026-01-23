"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiPhone } from "react-icons/hi2";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import NextImage from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "https://pob-delta.vercel.app/about-us/" },
    { name: "Academics", link: "https://pob-delta.vercel.app/academics/" },
    { name: "Services", link: "https://pob-delta.vercel.app/services/" },
    { name: "Gallery", link: "https://pob-delta.vercel.app/gallery/" },
    { name: "Blogs", link: "https://pob-delta.vercel.app/blog/" },
    {
      name: "How You Can Help",
      submenu: [
        { name: "Zakat", link: "https://pob-delta.vercel.app/zakat/" },
        { name: "Sadaqah", link: "https://pob-delta.vercel.app//sadaqah/" },
        { name: "Waqf", link: "https://pob-delta.vercel.app//waqf/" },
        { name: "Kaffara", link: "https://pob-delta.vercel.app/kaffara/" },
        { name: "Volunteers", link: "https://pob-delta.vercel.app/volunteer/" },
        { name: "Sponser a Surgery", link: "https://pob-delta.vercel.app/sponser-surgery/" },
      ],
    },
    { name: "Contact Us", link: "/contact-us/" },
  ];
  const scrollToDonate = () => {
    const footer = document.getElementById('footer_elem')
    footer.scrollIntoView({ behavior: "smooth" })

  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* ─── Top Bar (Desktop only) ─── */}
      <section className="hidden lg:block bg-[#C30001] text-white w-300 2xl:w-320  mx-auto rounded-b-lg">
        <div className="pl-4 w-[96%] py-1.5">
          <div className="flex flex-wrap justify-between items-center text-xs">
            <div className="flex flex-wrap items-center ">
              <div className="flex items-center gap-1.5">
                <HiPhone className="text-base" />
                <span>Karachi :</span>
                <a href="tel:+9221111762544" className="hover:underline">
                  UAN +92-21-111-762-544
                </a>
                <span>|</span>
                <a href="tel:+922134156597" className="hover:underline">
                  +92-21-34156597
                  <span className="pr-2"> | </span>
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a href="mailto:info@pobkarachi.org" className="hover:underline">
                  info@pobkarachi.org
                </a>
                <span>|</span>
                <a href="mailto:hr@pobtrust.org" className="hover:underline">
                  hr@pobkarachi.org
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://www.facebook.com/pobeyehospitalkarachi/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={18} />
              </a>
              <a href="https://wa.me/923479997772" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={18} />
              </a>
              <a href="https://www.instagram.com/pobeyehospitalkarachi" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/pob-eyehospital-karachi" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Top Donate  */}
      <div className="lg:hidden w-full " onClick={scrollToDonate}>
        <button className="bg-[#373895] py-1 text-sm w-full  text-white">
          Donate Now
        </button>
      </div>


      {/* ─── Main Nav Bar ─── */}
      <nav className="bg-white ">
        <div className="mx-auto w-[90%] max-w-7xl flex items-center justify-between py-3 md:py-">
          {/* Logo - always visible */}
          <Link href="/">
            <div className="flex items-center">
              <NextImage
                src="/poblogo.png"
                alt="POB Eye Hospital Logo"
                width={160}
                height={64}
                className="w-16 md:w-24 h-auto object-contain mx-auto sm:ml-10"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[14px] font-medium text-black">
            {navItems.map((item, i) => (
              <div key={i} className="relative group">
                {item.submenu ? (
                  <>
                    <button className="hover:text-[#C30001] transition-colors flex items-center gap-1">
                      <p className="text-[12px]">  {item.name} <span className="text-xs">▼</span></p>
                    </button>
                    <div className="absolute top-full left-0 pt-2 hidden group-hover:block min-w-[220px] z-50">
                      <div className="bg-white shadow-xl rounded-md border border-gray-100 py-2">
                        {item.submenu.map((sub, si) => (
                          <Link
                            key={si}
                            href={sub.link}
                            className="block px-5 font- py-2.5 text-sm text-gray-800 hover:bg-[#C30001] hover:text-white transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.link}
                    className="hover:text-[#C30001] transition-colors text-black"
                  >
                    <p className="text-[12px]">{item.name}</p>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Donate Button */}
          <div className="hidden lg:block" onClick={scrollToDonate}>

            <Link
              href=""
              onClick={scrollToDonate}
              className="flex items-center gap-2 bg-[#373895] text-white pl-2 pr-4 py-1 rounded-full  hover:bg-[#2f316f] transition-colors text-sm mr-3 "
            >
              <div className="bg-white rounded-full p-1">
                <NextImage
                  src="/hand.png"
                  alt="Donate"
                  width={28}
                  height={28}
                  className="w-5 h-5"
                />
              </div>
              Donate Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          {/* and donate  */}

          <button
            className="lg:hidden text-3xl text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* ─── Mobile Menu Overlay ─── */}
      <div
        className={`lg:hidden fixed inset-0 backdrop-blur-sm transition-opacity duration-300 z-40  ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-4/5 max-w-xs bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out text-black ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b">
            <NextImage
              src="/poblogo.png"
              alt="Logo"
              width={140}
              height={56}
              className="w-42 h-auto"
            />
            <button
              className="text-3xl text-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaTimes />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto py-6 px-5 space-y-2">
            {navItems.map((item, i) => (
              <div key={i}>
                {item.submenu ? (
                  <details className="group">
                    <summary className="flex justify-between items-center py-3 px-4 rounded-lg hover:bg-gray-100 cursor-pointer font-medium">
                      {item.name}
                      <span className="transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <div className="pl-6 pt-1 pb-3 space-y-1">
                      {item.submenu.map((sub, si) => (
                        <Link
                          key={si}
                          href={sub.link}
                          className="block py-2.5 px-4 text-gray-700 hover:bg-gray-50 rounded-md"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={item.link}
                    className="block py-3 px-4 rounded-lg hover:bg-gray-100 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <p className='font-poppins'> {item.name}</p>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Donate Button at bottom */}
          <div className="p-5 border-t">
            <Link
              href="/donation/"
              className="flex items-center justify-center gap-3 bg-[#373895] text-white py-4 rounded-xl font-semibold hover:bg-[#2f316f] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <NextImage
                src="/hand.png"
                alt="Donate"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;