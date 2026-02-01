import React from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi"; // Location Icon

const Footer = () => {
  return (
    <>
    <footer className="md:block hidden w-full bg-white pt20">
      <div className="relative">
        {/* Floating Donate Card - Half on white, half on blue */}
        <div className="md:max-w-6xl w-full mx-auto p6 relative z-20 -mb-24">
          <div className=
          "bg-white rounded-b-[20px] rounded-t-none shadow2xl p-8 md:p-14 flex flex-col md:flex-row gap-12 items-start">

            {/* Left Content */}
            <div className="hidden md:block md:w-1/2">
              <h2 className="text-[32px] md:text-[45px] w-[430px] font-bold text-[#00153D] leading-[1.1] mb-6">
                Together, We Can Bring Smiles to Those in Need.
              </h2>
              <p className="text-[#000000] font-poppins text-[18px] !font-medium leading-relaxed md:max-w-[400px]">
                Your Generosity Fuels Our Mission: Providing   
                 Aid, Hope, and Love to Communities in Need.
              </p>
            </div>

            {/* Vertical Divider */}
            {/* <div className="hidden md:block w-[1px] bg-black h-36 self-center"></div> */}

            <img
              src="./line.png"
              alt="divider"
              className="hidden -ml-24 md:block mt-14 h-44 w-auto selfcenter"
            />


            {/* Right Form */}
            <div className="hidden md:block md:w-1/2 w-full">
              <div className="mb-6">
                <h3 className="text-[36.78px] -mt-20 font-bold text-[#030A2E]">Donate Online</h3>
                <p className="text-[16.55px] !font-medium text-[#000000] !font-poppins mt-1">Help Us Help Them with Your Zakat/Donations/Sadqah</p>
              </div>

<div className="grid grid-cols-2 md:w-[440px] ml-4 md:grid-cols-2 gap-x-12 gap-y-6">                <input type="text" placeholder="First Name*" className="w-[214.78px]  h-[55.09px] border border-black rounded-[18.39px] px-4 py-3 bg[#FCFCFC] focus:outline-none focus:border-[#373895]" />
                <input type="text" placeholder="Last Name*" className="md:w-[214.78px] h-[55.09px] border border-black rounded-[18.39px] px-4 py-3 bg[#FCFCFC] focus:outline-none focus:border-[#373895]" />
                <input type="email" placeholder="Email" className="md:w-[214.78px] h-[55.09px] border border-black rounded-[18.39px] px-4 py-3 bg[#FCFCFC] focus:outline-none focus:border-[#373895]" />
                {/* <select className="w-[214.78px] h-[55.09px] border border-black rounded-[18.39px] px-4 py-3 bg[#FCFCFC] text-gray-400 focus:outline-none">
                  <option>PKR</option>
                </select>
                <select className="w-[214.78px]  h-[55.09px] border border-black rounded-[18.39px] px-4 py-3 b[#FCFCFC] text-gray-400 focus:outline-none">
                  <option>Zakat</option>
                </select> */}
                <select
  className="w-[214.78px] h-[55px] border border-black rounded-[18px] px-4 pr-10 text-gray-400 bg[#FCFCFC] focus:outline-none"
>
  <option>PKR</option>
</select>

<select
  className="w-[214.78px] h-[55px] border border-black rounded-[18px] px-4 pr-20 text-gray-400 bg[#FCFCFC] focus:outline-none"
>
  <option>Zakat</option>
</select>
                <input type="text" placeholder="(Minimum 50 )" className="w-[214.78px] h-[55.09px] border border-black rounded-[18.39px] px-4 py-3 bg#FCFCFC] focus:outline-none focus:border-[#373895]" />
              </div>

              <button className="md:w-[455.07px] w-[214.78px] mt-12 h-[39.41px] rounded-[66.2px]  ml-4 mt-6 bg-[#373895] text-[#FFFFFF] !font-light py4 rounded-full shadowlg hover:bg-[#2a2b7a] transition-all">
                Donation Now
              </button>
            </div>
          </div>
        </div>

        {/* Main Blue Footer */}


        <div className="bg-[#373895] text-white pt-40 pb-8 px-6 md:px20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16">

            {/* About us */}
            <div className="space-y-6">
              <p
                className="text-[27.26px] !font-semibold"
                style={{ fontFamily: "Poppins" }}
              >
                About us
              </p>              {/* <p className="text-white font-regular font text-[16.35px] leading-relaxed">
                A registered charity focused on preventing avoidable blindness in deprived and marginalized communities.
              </p> */}
              <p
                className="text-white font-normal w-[310px]"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "16.35px",
                  lineHeight: "162%",
                  letterSpacing: "0%",
                }}
              >
                A registered charity focused on preventing avoidable blindness in deprived and marginalized communities.
              </p>
              {/* <div className="mt-8">
                <p className="text-[27.26px] !font-semibold mb-4" style={{ fontFamily: "Poppins" }}
                >Scan to Donate</p>

              </div> */}
              <div className="mt-8 textcenter">
                <p
                  className="text-[27.26px] !font-semibold mb-4"
                  style={{ fontFamily: "Poppins" }}
                >
                  Scan to Donate
                </p>

                <div className="inline-block bg-white p-4 rounded-xl shadow-md">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=DonateNow"
                    alt="Scan to Donate QR"
                    className="w-[180px] h-[180px]"
                  />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6 md:ml-10">
              {/* <p className="text-2xl !font-bold">Quick Links</p> */}
              <p
                className="text-[27.26px] !font-semibold"
                style={{ fontFamily: "Poppins" }}
              >
                Quick Links
              </p>
              <ul className="space-y-2 text-[16.35px] text[#E0E0E0]">
                {["Home", "Core Values & Strategy", "Vision & Mission", "Brief profile", "Board of trustees", "Philosophy", "About Us", "Partners", "Donate Now", "Contact Us"].map((link) => (
                  <li key={link} className="hover:text-white cursor-pointer transition-colors">{link}</li>
                ))}
              </ul>
            </div>

            {/* Location Section with New Icons */}
            {/* <div className="space-y-6">
 <p
                className="text-[27.26px] !font-semibold"
                style={{ fontFamily: "Poppins" }}
              >
                 Location
              </p>                 <div className="space-y-5 text-[15px] text-[#E0E0E0]">
                <div className="flex gap-3">
                  <HiOutlineLocationMarker className="text-white text-2xl shrink-0 mt-0.5" />
                  <p><span className="font-semibold block text-white">Head Office Lahore:</span> 720 Kamran Block, Allama Iqbal Town.</p>
                </div>
                <div className="flex gap-3">
                  <HiOutlineLocationMarker className="text-white text-2xl shrink-0 mt-0.5" />
                  <p><span className="font-semibold block text-white">Karachi:</span> C-15, Block 12, Gulistan e Johar,</p>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-2xl !font-bold mb-4">Social Links</p>
                <div className="flex gap-3">
                  {[FaFacebookF, FaWhatsapp, FaInstagram, FaXTwitter].map((Icon, idx) => (
                    <div
                      key={idx}
                      className="bg-white text-red-600 p-2.5 rounded-lg hover:scale-110 transition-transform cursor-pointer shadow-sm"
                    >
                      <Icon size={22} />
                    </div>
                  ))}

                </div>
              </div>
            </div> */}
            {/* <div className="space-y-6">
 <p
                className="text-[27.26px] !font-semibold"
                style={{ fontFamily: "Poppins" }}
              >
                 Location
              </p>                 <div className="space-y-5 text-[15px] text-[#E0E0E0]">
                <div className="flex gap-3">
                  <HiOutlineLocationMarker className="text-white text-2xl shrink-0 mt-0.5" />
                  <p><span className="font-semibold block text-white">Head Office Lahore:</span> 720 Kamran Block, Allama Iqbal Town.</p>
                </div>
                <div className="flex gap-3">
                  <HiOutlineLocationMarker className="text-white text-2xl shrink-0 mt-0.5" />
                  <p><span className="font-semibold block text-white">Karachi:</span> C-15, Block 12, Gulistan e Johar,</p>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-2xl !font-bold mb-4">Social Links</p>
                <div className="flex gap-3">
                  {[FaFacebookF, FaWhatsapp, FaInstagram, FaXTwitter].map((Icon, idx) => (
                    <div
                      key={idx}
                      className="bg-white text-red-600 p-2.5 rounded-lg hover:scale-110 transition-transform cursor-pointer shadow-sm"
                    >
                      <Icon size={22} />
                    </div>
                  ))}

                </div>
              </div>
            </div> */}
            <div className="space-y-4">
              <p
                className="text-[27.26px] !font-semibold"
                style={{ fontFamily: "Poppins" }}
              >
                Location
              </p>

              <div className="space-y-5 text-[15px] text-[#E0E0E0]">
                <div className="flex gap-3 items-start">
                  <img
                    src="/loc.png"
                    alt="Location"
                    className="w-5 h-5 shrink-0 mt-1"
                  />
                  <p>
                    <span className="!font-medium text-[17px] block text-white" style={{ fontFamily: "Poppins" }}>
                      Head Office Lahore:
                    </span>
                    {/* <span>
        720 Kamran Block, Allama Iqbal Town.
        </span> */}
                    <span className="font-poppins mt-2 font-medium text-[17px] leading-[1.92]">
                      720 Kamran Block, Allama Iqbal Town.
                    </span>
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <img
                    src="/loc.png"
                    alt="Location"
                    className="w-5 h-5 shrink-0 mt-1"
                  />
                  <p>
                    <span className="!font-medium text-[17px] block text-white" style={{ fontFamily: "Poppins" }}>
                      Karachi:
                    </span>
                    <span className="font-poppins mt-2 font-medium text-[17px] leading-[1.92]">
                      C-15, Block 12, Gulistan e Johar

                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-1">
                {/* <p className="text-2xl font-bold mb-4">Social Links</p> */}
                <p
                  className="text-[27.26px] !font-semibold"
                  style={{ fontFamily: "Poppins" }}
                >
                  Social Links
                </p>
                {/* <div className="flex gap-3">
      {[FaFacebookF, FaWhatsapp, FaInstagram, FaXTwitter].map((Icon, idx) => (
        <div
          key={idx}
          className="bg-white text-red-600 p-2.5 rounded-lg hover:scale-110 transition-transform cursor-pointer shadow-sm"
        >
          <Icon size={22} />
        </div>
      ))}
    </div> */}
                <div className="flex gap-3 mt-3">
                  {[
                    { src: "/fac.png", alt: "Facebook" },
                    { src: "/whats.png", alt: "WhatsApp" },
                    { src: "/inst.png", alt: "Instagram" },
                    { src: "/twitt.png", alt: "Twitter" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white w-[38px] h-[43px] p-2.5 rounded-lg hover:scale-110 transition-transform cursor-pointer shadow-sm"
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-[24.2px] h-[24.2px]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Contact Us */}
            <div className="space-y-6 ml-20">
              <p
                className="text-[27.26px] !font-semibold"
                style={{ fontFamily: "Poppins" }}
              >
                Contact us
              </p>                 
              <div className="space-y-6 text[15px] text-[#E0E0E0]">
                <div> 
                  <p className="font-bold font-poppins  !font-medium text-[17px] text-white mb-4   decorationwhite/20  tracking-wide">Karachi UAN</p>
                  <p className="mb-3 text-[17px]" >• +92-21-111-762-544</p>
                  <p className="text-[17px]">• +92-21-34156597</p>
                </div>
                <div>
                  <p className="font-bold font-poppins !font-medium text-[17px] text-white mb-4 -offset-4 decorationwhite/20  tracking-wide">Lahore:</p>
                  <p className="mb-3 text-[17px]">• +92 042 354 14 720</p>
                  <p className="text-[17px]">• +92 347 999 777 20</p>
                </div>
                <div>
                  <p className="font-bold font-poppins !font-medium text-[17px] text-white mb-4 offset-4 decorationhite/20  tracking-wide">Email Address</p>
                  <p className="mb-3 text-[17px]">• info@pobtrust.org</p>
                  <p className="text-[17px]">• gs@pobtrust.org</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-[13px] text-[#CCCCCC]">
            <p>© Copyright 2026 @ POB TRUST</p>
            <div className="mt-4 md:mt-0 flex gap-6">
              <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
   {/* ================= MOBILE FOOTER ================= */}
<footer className="block md:hidden w-full bg-[#373895] text-white px-6 pt-12 pb-8">

  {/* Mobile Donate Form */}
  <div className="bg-white rounded-[20px] p-6 mx-2 mb-8 shadow-xl">
    <h3 className="text-[22px] font-bold text-[#030A2E] mb-2">Donate Online</h3>
    <p className="text-[14px] text-gray-600 mb-6">
      Help Us Help Them with Your Zakat / Donations / Sadqah
    </p>
    <div className="space-y-4">
      <input type="text" placeholder="First Name*" className="w-full h-[50px] border border-black rounded-[14px] px-4" />
      <input type="text" placeholder="Last Name*" className="w-full h-[50px] border border-black rounded-[14px] px-4" />
      <input type="email" placeholder="Email" className="w-full h-[50px] border border-black rounded-[14px] px-4" />
      <div className="flex gap-3">
        <select className="w-1/2 h-[50px] border border-black rounded-[14px] px-4">
          <option>PKR</option>
        </select>
        <select className="w-1/2 h-[50px] border border-black rounded-[14px] px-4">
          <option>Zakat</option>
        </select>
      </div>
      <input type="text" placeholder="Amount (Minimum 50)" className="w-full h-[50px] border border-black rounded-[14px] px-4" />
      <button className="w-full h-[45px] rounded-full bg-[#373895] text-white mt-4">
        Donate Now
      </button>
    </div>
  </div>

  {/* About Us */}
  <div className="mb-6">
    <p className="text-[20px] font-semibold font-poppins mb-2">About Us</p>
    <p className="text-[14px] text-[#E0E0E0] leading-[1.7]">
      A registered charity focused on preventing avoidable blindness in deprived and marginalized communities.
    </p>
  </div>

  {/* QR Code */}
  <div className="mb-6 text-center">
    <p className="text-[20px] font-semibold font-poppins mb-2">Scan to Donate</p>
    <div className="inline-block bg-white p-3 rounded-xl">
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=DonateNow" alt="Donate QR" className="w-[160px] h-[160px]" />
    </div>
  </div>

  {/* Location */}
  <div className="mb-6">
    <p className="text-[20px] font-semibold font-poppins mb-2">Location</p>
    <div className="space-y-3 text-[14px]">
      <div className="flex gap-2 items-start">
        <img src="/loc.png" className="w-5 h-5 mt-1" />
        <div>
          <span className="block text-white font-medium">Head Office Lahore:</span>
          720 Kamran Block, Allama Iqbal Town
        </div>
      </div>
      <div className="flex gap-2 items-start">
        <img src="/loc.png" className="w-5 h-5 mt-1" />
        <div>
          <span className="block text-white font-medium">Karachi:</span>
          C-15, Block 12, Gulistan-e-Johar
        </div>
      </div>
    </div>
  </div>

  {/* Contact */}
  <div className="mb-6">
    <p className="text-[20px] font-semibold font-poppins mb-2">Contact Us</p>
    <div className="space-y-3 text-[14px]">
      <div>
        <p className="text-white font-medium mb-1">Karachi UAN</p>
        <p>• +92-21-111-762-544</p>
        <p>• +92-21-34156597</p>
      </div>
      <div>
        <p className="text-white font-medium mb-1">Lahore</p>
        <p>• +92 042 354 14 720</p>
        <p>• +92 347 999 777 20</p>
      </div>
      <div>
        <p className="text-white font-medium mb-1">Email</p>
        <p>• info@pobtrust.org</p>
        <p>• gs@pobtrust.org</p>
      </div>
    </div>
  </div>

  {/* Social Links */}
  <div className="mb-6">
    <p className="text-[20px] font-semibold font-poppins mb-2">Social Links</p>
    <div className="flex gap-3">
      {["/fac.png","/whats.png","/inst.png","/twitt.png"].map((icon,i)=>(
        <div key={i} className="bg-white w-[38px] h-[38px] flex items-center justify-center rounded-lg cursor-pointer shadow-sm">
          <img src={icon} className="w-[22px] h-[22px]" />
        </div>
      ))}
    </div>
  </div>

  {/* Bottom */}
  <div className="border-t border-white/20 pt-4 text-center text-[12px] text-[#CCCCCC]">
    <p>© Copyright 2026 @ POB TRUST</p>
    <div className="flex justify-center gap-4 mt-2">
      <span>Terms & Conditions</span>
      <span>Privacy Policy</span>
    </div>
  </div>

</footer>
    </>
  );
};

export default Footer;