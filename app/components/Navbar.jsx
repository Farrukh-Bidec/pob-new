// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { HiPhone } from "react-icons/hi2";
// import {
//   FaFacebookF,
//   FaWhatsapp,
//   FaInstagram,
//   FaLinkedin,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import NextImage from "next/image";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [isMobileMenuOpen]);

//   const navItems = [
//     { name: "Home", link: "/" },
//     { name: "About Us", link: "https://pob-delta.vercel.app/about-us/" },
//     { name: "Academics", link: "https://pob-delta.vercel.app/academics/" },
//     { name: "Services", link: "https://pob-delta.vercel.app/services/" },
//     { name: "Gallery", link: "https://pob-delta.vercel.app/gallery/" },
//     { name: "Blogs", link: "https://pob-delta.vercel.app/blog/" },
//     {
//       name: "How You Can Help",
//       submenu: [
//         { name: "Zakat", link: "https://pob-delta.vercel.app/zakat/" },
//         { name: "Sadaqah", link: "https://pob-delta.vercel.app//sadaqah/" },
//         { name: "Waqf", link: "https://pob-delta.vercel.app//waqf/" },
//         { name: "Kaffara", link: "https://pob-delta.vercel.app/kaffara/" },
//         { name: "Volunteers", link: "https://pob-delta.vercel.app/volunteer/" },
//         { name: "Sponser a Surgery", link: "https://pob-delta.vercel.app/sponser-surgery/" },
//       ],
//     },
//     { name: "Contact Us", link: "/contact-us/" },
//   ];
//   const scrollToDonate = () => {
//     const footer = document.getElementById('footer_elem')
//     footer.scrollIntoView({ behavior: "smooth" })

//   }

//   return (
//     <div className="fixed top-0 left-0 right-0 z-50 bg-white ">
//       {/* ─── Top Bar (Desktop only) ─── */}
//       <section className="hidden lg:block bg-[#C30001] text-white w-270 2xl:w-320 mr-19  mx-auto rounded-b-lg">
//         <div className="pl-4 w-[96%] py-1.5">
//           <div className="flex flex-wrap justify-between items-center text-xs">
//             <div className="flex flex-wrap items-center ">
//               <div className="flex items-center gap-1.5">
//                 <HiPhone className="text-base" />
//                 <span>Karachi :</span>
//                 <a href="tel:+9221111762544" className="hover:underline">
//                   UAN +92-21-111-762-544
//                 </a>
//                 <span>|</span>
//                 <a href="tel:+922134156597" className="hover:underline">
//                   +92-21-34156597
//                   <span className="pr-2"> | </span>
//                 </a>
//               </div>
//               <div className="flex items-center gap-4">
//                 <a href="mailto:info@pobkarachi.org" className="hover:underline">
//                   info@pobkarachi.org
//                 </a>
//                 <span>|</span>
//                 <a href="mailto:hr@pobtrust.org" className="hover:underline">
//                   hr@pobkarachi.org
//                 </a>
//               </div>
//             </div>

//             <div className="flex gap-4">
//               <a href="https://www.facebook.com/pobeyehospitalkarachi/" target="_blank" rel="noopener noreferrer">
//                 <FaFacebookF size={18} />
//               </a>
//               <a href="https://wa.me/923479997772" target="_blank" rel="noopener noreferrer">
//                 <FaWhatsapp size={18} />
//               </a>
//               <a href="https://www.instagram.com/pobeyehospitalkarachi" target="_blank" rel="noopener noreferrer">
//                 <FaInstagram size={18} />
//               </a>
//               <a href="https://www.linkedin.com/company/pob-eyehospital-karachi" target="_blank" rel="noopener noreferrer">
//                 <FaLinkedin size={18} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Top Donate  */}
//       <div className="lg:hidden w-full " onClick={scrollToDonate}>
//         <button className="bg-[#373895] py-1 text-sm w-full  text-white">
//           Donate Now
//         </button>
//       </div>


//       {/* ─── Main Nav Bar ─── */}
//       <nav className="">
//         <div className="mx-auto w-[90%] max-w-7xl flex items-center justify-between py-2 md:py-">
//           {/* Logo - always visible */}
//           <Link href="/">
//             <div className="flex items-center">
//               <NextImage
//                 src="/poblogo.png"
//                 alt="POB Eye Hospital Logo"
//                 width={160}
//                 height={64}
//                 className="w-16 md:w-24 h-auto object-contain mx-auto sm:ml-10"
//                 priority
//               />
//             </div>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[14px] font-medium text-black">
//             {navItems.map((item, i) => (
//               <div key={i} className="relative group">
//                 {item.submenu ? (
//                   <>
//                     <button className="hover:text-[#C30001] transition-colors flex items-center gap-1">
//                       <p className="text-[12px]">  {item.name} <span className="text-xs">▼</span></p>
//                     </button>
//                     <div className="absolute top-full left-0 pt-2 hidden group-hover:block min-w-[220px] z-50">
//                       <div className="bg-white shadow-xl rounded-md border border-gray-100 py-2">
//                         {item.submenu.map((sub, si) => (
//                           <Link
//                             key={si}
//                             href={sub.link}
//                             className="block px-5 font- py-2.5 text-sm text-gray-800 hover:bg-[#C30001] hover:text-white transition-colors"
//                           >
//                             {sub.name}
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   </>
//                 ) : (
//                   <Link
//                     href={item.link}
//                     className="hover:text-[#C30001] transition-colors text-black"
//                   >
//                     <p className="text-[12px]">{item.name}</p>
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Desktop Donate Button */}
//           <div className="hidden lg:block" onClick={scrollToDonate}>

//             <Link
//               href=""
//               onClick={scrollToDonate}
//               className="flex items-center gap-2 bg-[#373895] text-white pl-2 pr-4 py-1 rounded-full  hover:bg-[#2f316f] transition-colors text-sm mr-3 "
//             >
//               <div className="bg-white rounded-full p-1">
//                 <NextImage
//                   src="/hand.png"
//                   alt="Donate"
//                   width={28}
//                   height={28}
//                   className="w-5 h-5"
//                 />
//               </div>
//               Donate Now
//             </Link>
//           </div>

//           {/* Mobile Hamburger */}
//           {/* and donate  */}

//           <button
//             className="lg:hidden text-3xl text-gray-700 focus:outline-none"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             aria-label="Toggle mobile menu"
//           >
//             {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </nav>

//       {/* ─── Mobile Menu Overlay ─── */}
//       <div
//         className={`lg:hidden fixed inset-0 backdrop-blur-sm transition-opacity duration-300 z-40  ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//           }`}
//         onClick={() => setIsMobileMenuOpen(false)}
//       />

//       <div
//         className={`lg:hidden fixed top-0 right-0 bottom-0 w-4/5 max-w-xs bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out text-black ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//       >
//         <div className="flex flex-col h-full">
//           {/* Header */}
//           <div className="flex items-center justify-between p-5 border-b">
//             <NextImage
//               src="/poblogo.png"
//               alt="Logo"
//               width={140}
//               height={56}
//               className="w-42 h-auto"
//             />
//             <button
//               className="text-3xl text-gray-700"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <FaTimes />
//             </button>
//           </div>

//           {/* Links */}
//           <div className="flex-1 overflow-y-auto py-6 px-5 space-y-2">
//             {navItems.map((item, i) => (
//               <div key={i}>
//                 {item.submenu ? (
//                   <details className="group">
//                     <summary className="flex justify-between items-center py-3 px-4 rounded-lg hover:bg-gray-100 cursor-pointer font-medium">
//                       {item.name}
//                       <span className="transition-transform group-open:rotate-180">▼</span>
//                     </summary>
//                     <div className="pl-6 pt-1 pb-3 space-y-1">
//                       {item.submenu.map((sub, si) => (
//                         <Link
//                           key={si}
//                           href={sub.link}
//                           className="block py-2.5 px-4 text-gray-700 hover:bg-gray-50 rounded-md"
//                           onClick={() => setIsMobileMenuOpen(false)}
//                         >
//                           {sub.name}
//                         </Link>
//                       ))}
//                     </div>
//                   </details>
//                 ) : (
//                   <Link
//                     href={item.link}
//                     className="block py-3 px-4 rounded-lg hover:bg-gray-100 font-medium"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     <p className='font-poppins'> {item.name}</p>
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Mobile Donate Button at bottom */}
//           <div className="p-5 border-t">
//             <Link
//               href="/donation/"
//               className="flex items-center justify-center gap-3 bg-[#373895] text-white py-4 rounded-xl font-semibold hover:bg-[#2f316f] transition-colors"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <NextImage
//                 src="/hand.png"
//                 alt="Donate"
//                 width={32}
//                 height={32}
//                 className="w-8 h-8"
//               />
//               Donate Now
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose, IoMdMail } from "react-icons/io";
import { usePathname } from "next/navigation";
import { HiPhone } from "react-icons/hi2";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import fetchData from "./fetchData";
import axios, { Image_Url } from "./axios"
// import { Image_Url } from "./const";
import Image from "next/image";





const Navbar = () => {
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(false);
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [showHelpDropdown, setShowHelpDropdown] = useState(false);
  const [showMediaDropdown, setShowMediaDropdown] = useState(false);
  const [megaMenu, setMegaMenu] = useState(null);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const hideMenuTimeout = useRef(null);

  // useEffect(() => {
  //  const data = fetchData({
  //     url: "services-types/index",
  //     slug: "",
  //     setState: setMegaMenu,
  //     setLoading: () => {},
  //   });
  //   setMegaMenu(data)
  // }, []);

  useEffect(() => {
    const fetchMegaMenu = async () => {

      try {
        const res = await axios.public.post("services-types/index");
        console.log('das', res)
        setMegaMenu(res.data.data || []);
      } catch (error) {
        console.error("Error fetching mega menu:", error);
        setMegaMenu([]);
      }
      //  finally {
      //   setLoading(false);
      // }
    };

    fetchMegaMenu();
  }, []);
  const handleDonateClick = () => {
    const footer = document.getElementById("footer-section");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const desktopNavItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us/" },
    { name: "Academics", link: "/academics/" },
    { name: "Services", link: "/services/" },
    { name: "Gallery", link: "/gallery/" },
    // {
    //   name: "Media & Publications",
    //   link: "/media-publications",
    //   submenu: [{ name: "Annual Reports", link: "/annual-reports/" }],
    // },
    { name: "Blogs", link: "/blog/" },
    {
      name: "How You Can Help",
      submenu: [
        { name: "Zakat", link: "/zakat/" },
        { name: "Sadaqah", link: "/sadaqah/" },
        { name: "Waqf", link: "/waqf/" },
        { name: "Kaffara", link: "/kaffara/" },
        { name: "Volunteers", link: "/volunteer/" },
        { name: "Sponser a Surgery", link: "/sponser-surgery/" },
      ],
    },
    { name: "Contact Us", link: "/contact-us/" },
  ];

  const mobileNavItems = [...desktopNavItems];

  const toggleShowNavbar = () => setShowNav(!showNav);

  console.log('megaMenu?.servicesType', megaMenu?.servicesType)

  return (
    <div className="flex flex-col items-center gap-2 fixed top-0 left-0 w-full z-50 h-[115px] md:h-[120px] bg-white">
      {/* Top Nav */}
      <section className="hidden md:block relative w-[90%] py-1 px-4 rounded-b-[10px] bg-[#C30001] text-white">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
            <p className="flex gap-[2px] text-[11px]">
              <HiPhone className="mt-[1px] text-[14px]" />
              Karachi :
              <a href="tel:+9221111762544" className="hover:text-[#C30001]">
                {" "}
                UAN +92-21-111-762-544
              </a>{" "}
              :
              <a href="tel:+922134156597" className="hover:text-[#C30001]">
                +92-21-34156597
              </a>
            </p>
            <p className="flex gap-1 text-[11px]">
              <IoMdMail className="mt-[1px] text-[14px]" />
              <a
                href="mailto:info@pobkarachi.org"
                className="hover:text-[#C30001]"
              >
                info@pobkarachi.org
              </a>{" "}
              :
              <a href="mailto:careers@pobkarachi.org" className="hover:text-[#C30001]">
                careers@pobkarachi.org
              </a>
            </p>
          </div>
          <div className="flex space-x-4 text-white">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={12} />
            </a>
            <a
              href="https://wa.me/923479997772"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={12} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={12} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* Mobile Donate Button */}
      <section className="block md:hidden w-full flex">
        <Link href="/donation/" className="w-full border border-r-white">
          <div className="cursor-pointer text-white  bg-[#373895] px-2 py-1 gap-1  flex items-center  justify-center   border-2 border-transparent outline-none">
            <div className=" bg-white px-1 py-1 rounded-[50%] ">
              <Image src="/hand.png" alt="" width={24} height={24} className="w-6" />
            </div>

            <p className=" mx-1 font-inter text-md">Donate Now</p>
          </div>
        </Link>
      </section>

      {/* Navigation */}
      <nav className="w-[90%] md:w-[90%] flex justify-center items-center">
        <div className="hidden lg:flex h-full lg:justify-between w-[80%] lg:w-full items-center rounded-bl-[20px] rounded-br-[20px]">
          <Link href="/">
            <Image
              src="/poblogo.png"
              alt="logo"
              width={112}
              height={112}
              className="w-10 md:w-28 object-cover"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex w-full max-w-[1300px] mx-auto justify-center items-center gap-6 px-3">
            {desktopNavItems.map((item, index) => {
              const normalizePath = (path) => (path || "").replace(/\/$/, "");
              const isActive = normalizePath(pathname) === normalizePath(item.link || "");

              return (
                <div
                  key={index}
                  className="relative cursor-pointer font-inter text-[15px] group"
                >
                  {item.name === "Services" ? (
                    <div
                      className="relative"
                      onMouseEnter={() => {
                        clearTimeout(hideMenuTimeout.current);
                        setShowMegaMenu(true);
                      }}
                      onMouseLeave={() => {
                        hideMenuTimeout.current = setTimeout(
                          () => setShowMegaMenu(false),
                          300
                        );
                      }}
                    >
                      <Link
                        href={item.link || "#"}
                        className={`text-black hover:border-[#C30001] hover:border-b-2 transition duration-200 ${isActive ? "border-b-2 border-[#C30001]" : ""
                          }`}
                      >
                        {item.name}
                      </Link>
                    </div>
                  ) : item.submenu ? (
                    <div>
                      <Link
                        href={item.link || "#"}
                        className={`text-black hover:border-[#C30001] hover:border-b-2 transition duration-200 ${isActive ? "border-b-2 border-[#C30001]" : ""
                          }`}
                      >
                        {item.name}
                      </Link>

                      <div className="absolute bg-white shadow-lg rounded-md hidden group-hover:block z-50 w-56">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.link || "#"}
                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#C30001] hover:text-white"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.link || "#"}
                      className={`text-black hover:border-[#C30001] hover:border-b-2 transition duration-200 ${isActive ? "border-b-2 border-[#C30001]" : ""
                        }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}

          </div>

          {/* Mega Menu */}
          {showMegaMenu && (
            <div
              className="absolute border-t border-black top-full left-0 h-screen w-full bg-white shadow-lg overflow-y-auto max-h-[80vh]"
              onMouseEnter={() => {
                clearTimeout(hideMenuTimeout.current);
                setShowMegaMenu(true);
              }}
              onMouseLeave={() => {
                hideMenuTimeout.current = setTimeout(
                  () => setShowMegaMenu(false),
                  300
                );
              }}
            >
              <div className="flex gap-8 justify-between pl-10 py-8 px-20">
                <div className="w-2/3 grid grid-cols-2 gap-2">
                  {Array.isArray(megaMenu?.servicesType) &&
                    megaMenu.servicesType.map((service, index) => (
                      <Link
                        key={index}
                        href={`/${service.slug}`}
                        onClick={() => setShowMegaMenu(false)}
                        className="flex hover:bg-[#F6F6F6] py-3 px-2 items-start gap-2"
                      >
                        <div className="text-[#C30001] text-xl -mt-2">➢</div>
                        <div>
                          <h3 className="text-lg font-inter mt-[-2px] mb-0 p-0 leading-none">
                            {service.name}
                          </h3>
                        </div>
                      </Link>
                    ))}
                </div>

                {/* Blogs */}
                <div className="w-1/3 bg-[#F6F6F6] rounded-lg p-6">
                  <h3 className="text-lg  mb-4">New Blogs</h3>

                  {/* Mapping Blog Items */}
                  {megaMenu?.blogs?.map((blog) => (
                    <div key={blog.id} className="flex items-start gap-4 mb-4">
                      <Image
                        src={`${Image_Url}/${blog.main_image}`}
                        alt={blog.blog_title}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-md object-cover"
                      />
                      <div>
                        <h4 className="text-sm ">{blog.blog_title}</h4>
                        {/* <p className="text-black text-xs">{blog.description}</p> */}
                        <Link
                          href={`/blog/${blog.slug}`}
                          onClick={() => setShowMegaMenu(false)}
                          className="text-[#C30001] text-xs flex items-center gap-1 mt-1"
                        >
                          Read More <FaArrowRight />
                        </Link>
                      </div>
                    </div>
                  ))}

                  {/* Blog Buttons */}
                  <div className="flex gap-2 mt-4">
                    {["Donate Now", "Subscribe Now", "Join Now"].map(
                      (btn, i) => (
                        <button
                          key={i}
                          onClick={
                            btn === "Donate Now"
                              ? () => {
                                handleDonateClick();
                                setShowMegaMenu(false);
                              }
                              : undefined
                          }
                          className="border border-black text-[12px] px-3 py-2 font-inter rounded-[41px] hover:bg-gray-200 transition"
                        >
                          {btn}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Donate Button */}
          <div className="flex gap-2">
            <Link href="/donation/">
              <div className="w-[145px] cursor-pointer text-white bg-[#373895] px-2 py-1 gap-1 flex items-center justify-center border-2 border-transparent rounded-full">
                <div className="bg-white px-1 py-1 rounded-[50%]">
                  <Image src="/hand.png" alt="" width={24} height={24} className="w-6" />
                </div>
                <p className="mx-1 font-inter text-[14px]">Donate Now</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex justify-start w-full pl-2 items-center lg:hidden">
          <div
            className="lg:hidden text-black cursor-pointer right-[35px] absolute top-16"
            onClick={toggleShowNavbar}
          >
            <RxHamburgerMenu size={24} />
          </div>
          <Link href="/">
            <Image
              src="/poblogo.png"
              alt="logo"
              width={80}
              height={64}
              className="w-20 h-16 object-contain"
            />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black/30 h-screen z-50 bg-opacity-50 transition-transform transform ${showNav ? "translate-x-0" : "translate-x-full"
            }`}
          onClick={() => setShowNav(false)}
        >
          <div
            className="w-2/3 relative z-40 bg-white h-screen p-4 ml-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="text-black text-[12px]"
              onClick={() => setShowNav(false)}
            >
              <IoMdClose size={24} />
            </button>
            <div className="space-y-4 mt-8 flex flex-col gap-2">
              {mobileNavItems.map((item, index) => (
                <div
                  key={index}
                  className="text-black font-newsLetter border-b border-gray-500"
                >
                  {/* SERVICES */}
                  {item.name === "Services" ? (
                    <>
                      <div
                        onClick={() => setShowServiceDropdown(!showServiceDropdown)}
                        className="flex justify-between items-center py-1 cursor-pointer"
                      >
                        <span>Services</span>
                        {showServiceDropdown ? <FaChevronUp /> : <FaChevronDown />}
                      </div>

                      {showServiceDropdown && (
                        <ul className="pl-4 pt-2 space-y-2 h-36 overflow-auto">
                          {megaMenu?.servicesType?.map((service, sIndex) => (
                            <Link
                              key={sIndex}
                              href={`/${service.slug}`}
                              onClick={() => setShowNav(false)}
                              className="block text-sm text-gray-800"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : item.submenu ? (
                    /* HOW YOU CAN HELP */
                    <>
                      <div
                        onClick={() => setShowHelpDropdown(!showHelpDropdown)}
                        className="flex justify-between items-center py-1 cursor-pointer"
                      >
                        <span>{item.name}</span>
                        {showHelpDropdown ? <FaChevronUp /> : <FaChevronDown />}
                      </div>

                      {showHelpDropdown && (
                        <ul className="pl-4 pt-2 space-y-2">
                          {item.submenu.map((sub, subIndex) => (
                            <Link
                              key={subIndex}
                              href={sub.link}
                              onClick={() => setShowNav(false)}
                              className="block text-sm text-gray-800"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    /* NORMAL LINKS */
                    <Link
                      href={item.link}
                      onClick={() => setShowNav(false)}
                      className="block py-1"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
