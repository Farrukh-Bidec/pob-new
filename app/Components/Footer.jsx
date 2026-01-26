import React from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi"; // Location Icon

const Footer = () => {
  return (
    <footer className="w-full bg-white pt20">
      <div className="relative">
        {/* Floating Donate Card - Half on white, half on blue */}
        <div className="max-w-[1200px] mx-auto px-6 relative z-20 -mb-24">
          <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-14 flex flex-col md:flex-row gap-12 items-start border border-gray-50">

            {/* Left Content */}
            <div className="md:w-1/2">
              <h2 className="text-[32px] md:text-[52px] font-bold text-[#00153D] leading-[1.1] mb-6">
                Together, We Can Bring Smiles to Those in Need.
              </h2>
              <p className="text-[#555555] text-lg leading-relaxed max-w-[450px]">
                Your Generosity Fuels Our Mission: Providing Aid, Hope, and Love to Communities in Need.
              </p>
            </div>

            {/* Vertical Divider */}
            {/* <div className="hidden md:block w-[1px] bg-black h-36 self-center"></div> */}

<img
  src="./line.png"
  alt="divider"
  className="hidden md:block h-72 w-auto self-center"
/>


            {/* Right Form */}
            <div className="md:w-1/2 w-full">
              <div className="mb-6">
                <h3 className="text-4xl font-bold text-[#00153D]">Donate Online</h3>
                <p className="text-sm mt-1">Help Us Help Them with Your Zakat/Donations/Sadqah</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name*" className="w-full border border-black rounded-xl px-4 py-3 bg-[#FCFCFC] focus:outline-none focus:border-[#373895]" />
                <input type="text" placeholder="Last Name*" className="w-full border border-black rounded-xl px-4 py-3 bg-[#FCFCFC] focus:outline-none focus:border-[#373895]" />
                <input type="email" placeholder="Email" className="w-full border border-black rounded-xl px-4 py-3 bg-[#FCFCFC] focus:outline-none focus:border-[#373895]" />
                <select className="w-full border border-black rounded-xl px-4 py-3 bg-[#FCFCFC] text-gray-400 focus:outline-none">
                  <option>PKR</option>
                </select>
                <select className="w-full border border-black rounded-xl px-4 py-3 bg-[#FCFCFC] text-gray-400 focus:outline-none">
                  <option>Zakat</option>
                </select>
                <input type="text" placeholder="(Minimum 50 )" className="w-full border border-black rounded-xl px-4 py-3 bg-[#FCFCFC] focus:outline-none focus:border-[#373895]" />
              </div>

              <button className="w-full mt-6 bg-[#373895] text-white font-semibold py-4 rounded-full shadow-lg hover:bg-[#2a2b7a] transition-all">
                Donation Now
              </button>
            </div>
          </div>
        </div>

        {/* Main Blue Footer */}
        <div className="bg-[#373895] text-white pt-40 pb-8 px-6 md:px-20">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16">

            {/* About us */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold">About us</h4>
              <p className="text-[#E0E0E0] text-[15px] leading-relaxed">
                A registered charity focused on preventing avoidable blindness in deprived and marginalized communities.
              </p>
              <div className="mt-8">
                <h4 className="text-2xl font-bold mb-4">Scan to Donate</h4>

              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6 md:ml-10">
              <h4 className="text-2xl font-bold">Quick Links</h4>
              <ul className="space-y-3 text-[15px] text-[#E0E0E0]">
                {["Home", "Core Values & Strategy", "Vision & Mission", "Brief profile", "Board of trustees", "Philosophy", "About Us", "Partners", "Donate Now", "Contact Us"].map((link) => (
                  <li key={link} className="hover:text-white cursor-pointer transition-colors">{link}</li>
                ))}
              </ul>
            </div>

            {/* Location Section with New Icons */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold">Location</h4>
              <div className="space-y-5 text-[15px] text-[#E0E0E0]">
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
                <h4 className="text-2xl font-bold mb-4">Social Links</h4>
                <div className="flex gap-3">
                  {[FaFacebookF, FaWhatsapp, FaInstagram, FaXTwitter].map((Icon, idx) => (
                    <div key={idx} className="bg-white text-[#373895] p-2.5 rounded-lg hover:scale-110 transition-transform cursor-pointer shadow-sm">
                      <Icon size={18} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Us */}
            <div className="space-y-8">
              <h4 className="text-2xl font-bold">Contact Us</h4>
              <div className="space-y-6 text-[15px] text-[#E0E0E0]">
                <div>
                  <p className="font-bold text-white mb-2 underline underline-offset-4 decoration-white/20 uppercase tracking-wide">Karachi UAN</p>
                  <p className="mb-1">• +92-21-111-762-544</p>
                  <p>• +92-21-34156597</p>
                </div>
                <div>
                  <p className="font-bold text-white mb-2 underline underline-offset-4 decoration-white/20 uppercase tracking-wide">Lahore:</p>
                  <p className="mb-1">• +92 042 354 14 720</p>
                  <p>• +92 347 999 777 20</p>
                </div>
                <div>
                  <p className="font-bold text-white mb-2 underline underline-offset-4 decoration-white/20 uppercase tracking-wide">Email Address</p>
                  <p className="mb-1">• info@pobtrust.org</p>
                  <p>• gs@pobtrust.org</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="max-w-[1400px] mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-[13px] text-[#CCCCCC]">
            <p>© Copyright 2024 @ POB TRUST</p>
            <div className="mt-4 md:mt-0 flex gap-6">
              <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;