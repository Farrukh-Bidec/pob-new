// "use client"

// import { Facebook, MessageCircle, Instagram, Twitter, Linkedin } from "lucide-react"
// import Link from "next/link"
// import { BsWhatsapp } from "react-icons/bs"

// export default function Footer() {
//     return (
//         <footer className="bg-blue-900 text-white  " id="footer_elem" >
//             {/* Mission Statement & Donation Form Section */}
//             <div
//                 className="bg-white text-black rounded-b-3xl mx-4 md:mx-8 my-8 p-8 shadow-lg"
//             >
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//                     {/* Mission Statement Box */}
//                     <div className=" rounded-lg p-6 bg-transparent">
//                         <h2 className="text-2xl md:text-5xl mb-4 leading-tight text-black" >
//                             Together, We Can Bring Smiles to Those in Need.
//                         </h2>
//                         <p className="text-sm text-gray-700 leading-relaxed">
//                             Your Generosity Fuels Our Mission. Providing Aid, Hope, and Love to Communities in Need.
//                         </p>
//                     </div>

//                     {/* Donation Form */}
//                     <div>
//                         <h3 className="text-2xl font-bold mb-1 text-black" >Donate Online</h3>
//                         <p className="text-sm text-gray-600 mb-6">Help Us Help Them with Your Zakat/Donations/Sadqah</p>

//                         <div className="space-y-4">
//                             {/* Row 1: First Name & Last Name */}
//                             <div className="grid grid-cols-2 gap-3">
//                                 <input
//                                     type="text"
//                                     placeholder="First Name*"
//                                     className="px-4 py-2 rounded-lg border-2 border-gray-400 bg-white text-black placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 transition"
//                                 />
//                                 <input
//                                     type="text"
//                                     placeholder="Last Name*"
//                                     className="px-4 py-2 rounded-lg border-2 border-gray-400 bg-white text-black placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 transition"
//                                 />
//                             </div>

//                             {/* Row 2: Email & Age */}
//                             <div className="grid grid-cols-2 gap-3">
//                                 <input
//                                     type="email"
//                                     placeholder="Email"
//                                     className="px-4 py-2 rounded-lg border-2 border-gray-400 bg-white text-black placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 transition"
//                                 />
//                                 <input
//                                     type="text"
//                                     placeholder="Age"
//                                     className="px-4 py-2 rounded-lg border-2 border-gray-400 bg-white text-black placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 transition"
//                                 />
//                             </div>

//                             {/* Row 3: Zakat & Minimum Amount */}
//                             <div className="grid grid-cols-2 gap-3">
//                                 <select
//                                     defaultValue=""
//                                     className="px-4 py-2 rounded-lg border-2 border-gray-400 bg-white text-gray-500 text-sm focus:outline-none focus:border-blue-600 transition appearance-none cursor-pointer"
//                                 >
//                                     <option value="" disabled>
//                                         Zakat
//                                     </option>
//                                     <option value="yes">Yes</option>
//                                     <option value="no">No</option>
//                                 </select>
//                                 <input
//                                     type="text"
//                                     placeholder="Minimum 50 )"
//                                     className="px-4 py-2 rounded-lg border-2 border-gray-400 bg-white text-black placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 transition"
//                                 />
//                             </div>

//                             {/* Donation Button */}
//                             <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-full transition duration-300 mt-2">
//                                 Donation Now
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Footer Content */}
//             <div className="max-w-7xl mx-auto px-6 mb-12 text-center sm:text-left">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {/* About Us Section */}
//                     <div className="lg:col-span-1">
//                         <h3 className="text-lg font-bold mb-4">About us</h3>
//                         <p className="text-sm text-gray-200 mb-6 leading-relaxed">
//                             Prevention of Blindness Trust is a registered charity working for the prevention and treatment of avoidable causes of blindness focusing on the deprived and marginalized communities.
//                         </p>
//                         <div className="border-2 border-white rounded-lg p-4 text-center bg-indigo-800">
//                             <Link href={"https://pob-delta.vercel.app/donation"}><p className="text-sm font-semibold">Scan to Donate</p></Link>
//                         </div>
//                     </div>

//                     {/* Quick Links Section */}
//                     <div className="lg:col-span-1">
//                         <h3 className="text-lg font-bold mb-4">Quick Links</h3>
//                         <ul className="space-y-2 text-sm">
//                             <li>
//                                 <a href="#" className="hover:text-gray-300 transition">
//                                     Home
//                                 </a>
//                             </li>
//                             <li >
//                                 <a href="https://pob-delta.vercel.app/annual-reports" className="hover:text-gray-300 transition">
//                                     Annual reports
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="https://pob-delta.vercel.app/about-us" className="hover:text-gray-300 transition">
//                                     About Us
//                                 </a>
//                             </li>
//                             <li >
//                                 <a href="https://pob-delta.vercel.app/donate" className="hover:text-gray-300 transition">
//                                     Donate Now
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="https://pob-delta.vercel.app/contact-us" className="hover:text-gray-300 transition">
//                                     Contact Us
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Location Section */}
//                     <div className="lg:col-span-1">
//                         <h3 className="text-lg font-bold mb-4">Location</h3>
//                         <div className="space-y-4 text-sm">
//                             <div>
//                                 {/* <p className="font-semibold mb-1">Head Office Lahore</p> */}
//                                 <Link href="https://www.google.com/maps/place/POB+Eye+Hospital+Karachi/@24.9187418,67.1338246,17z/data=!4m6!3m5!1s0x3eb338fed0d43e33:0x8715f9b6ee6c6aa6!8m2!3d24.9169947!4d67.1384489!16s%2Fg%2F11bym_cxyg?coh=277533&entry=tts&g_ep=EgoyMDI2MDEwNy4wIPu8ASoKLDEwMDc5MjA2N0gBUAM%3D&skid=8ec8cf11-10b4-407f-a5c4-eb9fa3e41e1a"><p className="text-gray-200">C-15 Munawar Chowrangi Rd, Block 12 Gulistan-e-Johar, Karachi, 74500, Pakistan</p></Link>
//                                 {/* <p className="text-gray-200">Iqbal Town</p> */}
//                             </div>
//                             <h3 className="text-lg font-bold mb-4">Contact Us</h3>
//                             <div className="space-y-4 text-sm">
//                                 <div>
//                                     <p className="text-gray-300 mb-2">Karachi UAN</p>
//                                     <ul className="space-y-1 text-gray-200">
//                                         <Link href={"tel:+92-21-111-762-544"}> <li>• +92-21-111-762-544</li></Link>
//                                         <Link href={"tel:+92-21-34156597"}> <li>• +92-21-34156597</li></Link>
//                                     </ul>
//                                 </div>
//                                 {/* <div>
//                     <p className="text-gray-300 mb-2">Lahore:</p>
//                     <ul className="space-y-1 text-gray-200">
//                     <li>• +92 042 354 14 720</li>
//                     <li>• +92 347 999 777 20</li>
//                     </ul>
//                 </div> */}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Contact Us Section */}
//                     {/* <div className="lg:col-span-1">

//             </div> */}

//                     {/* Social Links & Email Section */}
//                     <div className="lg:col-span-1">
//                         <h3 className="text-lg font-bold mb-4">Social Links</h3>
//                         <div className="flex gap-3 mb-8 mx-auto">
//                             <a href="https://www.facebook.com/pobeyehospitalkarachi" className="bg-white text-indigo-900 p-2 rounded-full hover:bg-gray-200 transition">
//                                 <Facebook size={20} />
//                             </a>
//                             <a href="https://api.whatsapp.com/send/?phone=923479997772&text&type=phone_number&app_absent=0" className="bg-white text-indigo-900 p-2 rounded-full hover:bg-gray-200 transition">
//                                 {/* <MessageCircle size={20} /> */}
//                                 <BsWhatsapp size={20} />
//                             </a>
//                             <a href="https://www.instagram.com/pobeyehospitalkarachi/" className="bg-white text-indigo-900 p-2 rounded-full hover:bg-gray-200 transition">
//                                 <Instagram size={20} />
//                             </a>
//                             <a href="https://www.linkedin.com/company/pob-eyehospital-karachi/" className="bg-white text-indigo-900 p-2 rounded-full hover:bg-gray-200 transition">
//                                 <Linkedin size={20} />
//                             </a>
//                         </div>

//                         <div>
//                             <h4 className="text-sm font-semibold mb-2">Email Address</h4>
//                             <ul className="text-sm space-y-1 text-gray-200">
//                                 <Link href={"mailto:info@podtrust.org"}><li>• info@podtrust.org</li></Link>
//                                 <Link href={"mailto:info@pobkarachi.org"}><li>• info@pobkarachi.org</li></Link>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom Footer */}
//             <div className="border-t border-indigo-800 pt-6">
//                 <div className="max-w-7xl mx-auto px-6">
//                     <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-300 pb-6">
//                         <p>Copyright 2024 © POD TRUST</p>
//                         <div className="flex gap-6">
//                             <a href="#" className="hover:text-white transition">
//                                 Terms & Conditions
//                             </a>
//                             <a href="#" className="hover:text-white transition">
//                                 Privacy Policy
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     )
// }
"use client"
import { useState, useRef, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";


import {
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
    FaWhatsapp,
} from "react-icons/fa6";
import Link from "next/link";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";
// import axiosClient from "../axiosClient";
import axios from "./axios.js";
// import Loader from "./Loader"; // Import your loader component
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Swal from "sweetalert2";
import { usePathname } from "next/navigation";

const SmallLoader = () => (
    <div className="w-5 h-5 border-2 border-white border-dashed rounded-full animate-spin mx-auto"></div>
);

const Footer = () => {
    const quickLinks = [
        { name: "Home", url: "/" },
        { name: "Donation", url: "/donation/" },
        { name: "About Us", url: "/about-us/" },
    ];
    const pathname = usePathname();
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isContactOpen, setisContactOpen] = useState(false);
    const [isQuickLinksOpen, setQuickLinksOpen] = useState(false);
    const [isServicesOpen, setServicesOpen] = useState(false);
    const [isGetInvolvedOpen, setGetInvolvedOpen] = useState(false);
    const [isResourcesOpen, setResourcesOpen] = useState(false);
    const [isContactLegalOpen, setContactLegalOpen] = useState(false);

    const [amount, setAmount] = useState();
    const [errors, setErrors] = useState({});
    const firstNameRef = useRef("");
    const lastNameRef = useRef("");
    const emailRef = useRef("");
    const phoneRef = useRef("");
    const addressRef = useRef("");
    const donationTypeRef = useRef();
    const currencyTypeRef = useRef();
    const countryRef = useRef();

    const [loading, setLoading] = useState(false);
    const [loadingSub, setLoadingSub] = useState(false);
    const servicesLinks = [{
        "name": "Cataract Extractions",
        "url": "/cataract-extractions/"
    },
    {
        "name": "Vitroretina",
        "url": "/vitreoretina/"
    },
    {
        "name": "Laser Treatments",
        "url": "/laser-treatments/"
    },
    {
        "name": "Diabetic Eye Care",
        "url": "/diabetic-eye-care/"
    },
    {
        "name": "General Ophthalmology Screening Clinic",
        "url": "/general-ophthalmology-screening-clinic/"
    },
    {
        "name": "Neuro-Ophthalmology",
        "url": "/neuro-ophthalmology/"
    },
    {
        "name": "Pediatric Eye Care Service",
        "url": "/pediatric-eye-care/"
    }
    ];
    const servicesLinks2 = [
        {
            "name": "Corneal Diseases",
            "url": "/corneal-diseases/"
        },
        {
            "name": "Glaucoma",
            "url": "/glaucoma/"
        },
        {
            "name": "Oculoplasty & Orbit",
            "url": "/oculoplasty-and-orbit/"
        },
        {
            "name": "Diagnostic Services",
            "url": "/diagnostic-services/"
        },
        {
            "name": "Optometry Care",
            "url": "/optometry-care/"
        },
        {
            "name": "Medical Retina",
            "url": "/medical-surgical-retina/"
        }
    ]
    const contactLinks = [
        {
            name: "About Us",
            url: "/about-us/"
        },
        {
            name: "Contact Us",
            url: "/contact-us/"
        },
        {
            name: "Privacy Policy",
            url: "/privacy-policy/"
        },
        {
            name: "Terms & Conditions",
            url: "/terms-conditions/"
        }
    ];

    const contentData = {
        "/": {
            heading: "Together, We Can Bring Smiles to Those in Need",
            paragraph:
                "Your support fuels everything we do—spreading light, restoring sight, and changing lives.",
        },
        "/about-us/": {
            heading: "Together, We Can Bring Smiles to Those in Need",
            paragraph:
                "Your support fuels everything we do—spreading light, restoring sight, and changing lives.",
        },
        "/academics/": {
            heading: "Together, We Can Bring Smiles to Those in Need",
            paragraph: "Your generosity fuels our mission: Providing aid, hope,",
        },
        "/contact-us/": {
            heading: "Together, We Can Bring Smiles to Those in Need",
            paragraph:
                "Your kindness powers our purpose. Every action you take—whether it’s a donation, a message of support, or spreading awareness—helps us deliver care, compassion, and sight to those who need it most.",
        },
        "/zakat/": {
            heading: "Together, We’re Restoring Hope",
            paragraph:
                "Because of your compassion, we’re able to bring care and comfort to those in need. Every contribution counts—fueling our mission to heal, support, and uplift entire communities with dignity and love.",
        },
        "/donation/": {
            heading: "Together, We Can Bring Smiles to Those in Need",
            paragraph:
                "Your support fuels everything we do—spreading light, restoring sight, and changing lives.",
        },
        "/sadaqah/": {
            heading: "Together, We Can Bring Smiles to Those in Need",
            paragraph:
                "Your support makes a difference. With every donation, you help deliver care, compassion, and opportunity to those who need it most.",
        },
        "/kaffara/": {
            heading: "Together, We Can Bring Smiles to Those in Need",
            paragraph:
                "Your contribution plays a vital role in delivering love, care, and essential support to the underserved.",
        },
        "/outreach-programs": {
            heading: "Together, We Can Bring Smiles to Those in Need",
            paragraph:
                "Your support fuels everything we do—spreading light, restoring sight, and changing lives.",
        },
    };

    // Check if the path exists, otherwise show Services content (default for undefined pages)
    const { heading, paragraph } = contentData[pathname] || {
        heading: "Together, Let’s Light Up Lives with Sight",
        paragraph:
            "Your Contributions Make It Possible: Delivering Care, Support, and Hope to Communities in Need.",
    };

    // Email Validation Function
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Updated phone validation
    const handlePhoneChange = (e) => {
        const value = e.target.value.trim();

        // Validate that the number starts with '03' and is exactly 11 digits
        if (/^\d+$/.test(value)) {
            // 03 + 9 digits = 11 digits total
            setErrors((prev) => ({ ...prev, phone: undefined })); // Clear the error when valid
        } else {
            setErrors((prev) => ({
                ...prev,
                phone: "",
                // phone: "Phone Number must start with 03 and be exactly 11 digits",
            }));
        }
    };

    // Updated form validation
    const validateForm = () => {
        const newErrors = {};

        if (!firstNameRef.current.value)
            newErrors.firstName = "First Name is required";
        if (!lastNameRef.current.value)
            newErrors.lastName = "Last Name is required";

        // if (!emailRef.current.value) {
        // newErrors.email = "Email is required";
        // } else
        // if (!validateEmail(emailRef.current.value)) {
        // newErrors.email = "Please enter a valid email address";
        // }

        // const phoneValue = phoneRef.current.value.trim();
        // if (!phoneValue) {
        // newErrors.phone = "Phone Number is required";
        // }
        // else if (/^\d+$/.test(phoneValue)) {
        //   newErrors.phone = ''
        //   // "Phone Number must start with 03 and be exactly 10 digits";
        // }
        // if (!addressRef.current.value) newErrors.address = "Address is required";
        if (!donationTypeRef.current.value)
            newErrors.donationType = "Donation Type is required";
        if (!amount) {
            newErrors.amount = "Amount is required";
        } else if (amount < 50) {
            newErrors.amount = "Amount must b 50 or greater";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle Amount Change
    const handleAmountChange = (e) => {
        const value = e.target.value;
        setAmount(value);

        if (!value) {
            setErrors((prev) => ({ ...prev, amount: "Amount is required" }));
        } else if (value < 50) {
            setErrors((prev) => ({
                ...prev,
                amount: "Amount must be 50 or greater",
            }));
        } else {
            setErrors((prev) => {
                const { amount, ...rest } = prev;
                return rest;
            });
        }
    };

    const handleCountryChange = () => {
        const countryValue = countryRef.current.value; // Get selected value

        ("Selected Country:", countryValue);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        toast.info("Donation service is currently disabled.");
    };
    // Handle callback response
    const handlePaymentCallback = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const status = urlParams.get("status");
        const orderId = urlParams.get("ordId");
        const message = urlParams.get("msg");

        if (status && orderId && message) {
            if (status.toLowerCase() === "success") {
                try {
                    const paymentResponse = await axios.public.post(
                        "/admin/donateSuccess",
                        {
                            PayProId: orderId,
                            msg: message,
                            status: status,
                        }
                    );

                    ("Payment response:", paymentResponse.data);
                    Swal.fire({
                        title: "Success!",
                        text: "Payment was successful! Thank you for your donation.",
                        icon: "success",
                        confirmButtonText: "OK",
                    });
                } catch (error) {
                    console.error("Error sending payment response:", error);
                    Swal.fire({
                        title: "Oops...",
                        text: "Payment succeeded, but we encountered an issue finalizing the process.",
                        icon: "warning",
                        confirmButtonText: "OK",
                    });
                }
            } else {
                Swal.fire({
                    title: "Payment Failed",
                    text: "Payment not successful. Please try again or contact support.",
                    icon: "error",
                    confirmButtonText: "OK",
                });
            }

            // Clear URL parameters after showing the modal
            const newUrl = window.location.origin + window.location.pathname;
            window.history.replaceState({}, document.title, newUrl);
        }
    };

    // Mock showModal function
    const showModal = (message) => {
        // Replace with your actual modal implementation
        alert(message);
    };

    // Call this function on the callback page
    useEffect(() => {
        handlePaymentCallback();
    }, []);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email) {
            alert("Please enter a valid email");
            return;
        }

        try {
            setLoadingSub(true);
            setMessage("");
            const response = await axios.public.post("admin/subscribers/add", {
                email,
            });
            setEmail("");
            toast.success("Subscription successful!");
        } catch (error) {
            setEmail("");
            toast.error(error.response?.data?.message);
        } finally {
            setLoadingSub(false);
        }
    };

    return (
        <div id="footer_elem" className="md:bg-white relative pt-5 md:pt-25 bg-[#373895]">
            <ToastContainer autoClose={1000} />
            {/* Top Section */}
            <div className="relative flex justify-center z-30 -mt-20 md:mt-0">
                {/* Left colored bar – shorter height */}
                <div
                    className="absolute left-0 top-1/2 h-[40%] w-16 -translate-y-1/2 bg-[#373895] hidden md:block rounded-r-lg mt-40"
                />
                <div
                    className="absolute right-0 top-1/2 h-[40%] w-16 -translate-y-1/2 bg-[#373895] hidden md:block rounded-l-lg mt-40"
                />

                {/* Main content with white background */}
                <div className="flex flex-col md:flex-row gap-8 bg-white rounded-lg p-6 md:p-10 w-full max-w-6xl relative z-10">
                    {/* Left Content */}
                    <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center rounded-full">
                        <h2 className="text-3xl md:text-5xl font-Amaranth text-black leading-tight">
                            Together, We Can <br />Bring Smiles To Those In Need
                        </h2>
                        <p className="mt-4 text-gray-600 font-poppins">
                            Your Generosity Fuels Our Mission: Providing<br /> Aid, Hope, and Love to Communities in Need.
                        </p>
                    </div>

                    {/* Right Form */}
                    <div className=" text-black p-6 rounded-lg md:w-1/2">
                        <h3 className="text-3xl font-Amaranth sm:text-4xl text-center sm:text-left">Donate Online</h3>
                        <p className="text-gray-600  mb-4 font-inter text-center sm:text-left">
                            Help Us Help Them with Your Zakat/Donations/Sadqah
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-4 font-inter">
                            <div className="grid grid-cols-2 gap-2">
                                <input
                                    type="text"
                                    placeholder="First Name *"
                                    ref={firstNameRef}
                                    className="w-full border text-xs  border-black p-3 rounded-[18px] outline-non py-4"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name *"
                                    ref={lastNameRef}
                                    className="w-full border text-xs  border-black p-3 rounded-[18px] outline-none py-4"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    ref={emailRef}
                                    className="w-full border text-xs  border-black p-3 rounded-[18px] outline-none py-4"
                                />
                                <select
                                    ref={countryRef}
                                    className="w-full border text-xs  border-black p-3 rounded-[18px] outline-none py-4"
                                    onChange={handleCountryChange}
                                >
                                    <option value="">PKR</option>
                                    <option value="AED">AED</option>
                                    <option value="USD">USD</option>
                                    <option value="GBP">GBP</option>
                                    <option value="SAR">SAR</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                <select
                                    ref={donationTypeRef}
                                    aria-label="Donation Type"
                                    className="w-full border border-black p-3 rounded-[18px] outline-none"
                                >
                                    <option value="zakat">Zakat</option>
                                    <option value="sadqah">Sadqah</option>
                                </select>
                                <input
                                    type="number"
                                    placeholder="(Minimum 50)"
                                    value={amount}
                                    onChange={handleAmountChange}
                                    className="w-full border border-black p-3 rounded-[18px] outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-[#2658A5] text-white w-full py-3 font-bold rounded-[66px] shadow-md flex justify-center items-center"
                                disabled={loading}
                            >
                                {loading ? <SmallLoader /> : "Donate Now"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div
                className="h-[42rem] 2xl:h-[43rem] hidden  bg-[#373895] md:flex justify-end items-center  flex-col bg-cover bg-no-repeat  relative"
                // style={{
                //     backgroundImage: "url('/footer-bg.webp')",
                // }}
            >


                {/* Footer Section */}
                <div className="max-w-7xl md:max-w-[97%] mx-auto px-6 lg:px-20 py-20 text-white bg-[#373895]">
                    <div className="grid md:grid-cols-6 gap-7">
                        {/* About Us */}
                        <div className="">
                            <div >
                                {/* <img
                                className="w-42 h-30 object-cover  "
                                src="/poblogo.png"
                                alt="Company Logo"
                            /> */}
                            </div>
                            <h3 className="text-3xl font-inter ">About us</h3>
                            <p className="text-[#FFFFFF] font-inter mt-2 text-sm">
                                Prevention of Blindness Trust is a registered charity working
                                for the prevention and treatment of avoidable causes of
                                blindness focusing on the deprived and marginalized communities.
                            </p>
                            <div className="flex flex-col gap-3 mt-4">
                                {/* <h4 className="text-lg ">Social Links</h4> */}
                                <div className=" flex gap-4 pt-2 ">
                                    <a
                                        href="https://www.facebook.com/pobeyehospitalkarachi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Facebook"
                                    >
                                        <FaFacebookF className="text-white text-lg cursor-pointer hover:text-gray-400 transition duration-300" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/pobeyehospitalkarachi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram"
                                    >
                                        <FaInstagram className="text-white text-lg cursor-pointer hover:text-gray-400 transition duration-300" />
                                    </a>

                                    {/* <FaXTwitter className="text-white text-lg cursor-pointer hover:text-gray-400 transition duration-300" /> */}
                                    <a
                                        href="https://wa.me/923479997772"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Whatsapp"
                                    >
                                        <FaWhatsapp className="text-white text-lg cursor-pointer hover:text-gray-400 transition duration-300" />
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/company/pob-eyehospital-karachi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Linkedin"
                                    >
                                        <FaLinkedin className="text-white text-lg cursor-pointer hover:text-gray-400 transition duration-300" />
                                    </a>
                                </div>
                                <h3 className="text-2xl"  >Scan To  Donate </h3>
                                <div><img src="qr.png" alt="Qr code" /></div>
                            </div>
                        </div>
                        {/* Quick Links */}
                        <div className="ml-18">
                            <h4 className="text-lg font-poppins ">Quick Links</h4>
                            <div className="text-[#FFFFFF] flex flex-col justify-start mt-2 font-inter text-sm space-y-1">
                                {quickLinks.map((link, index) => (
                                    <Link href={link?.url} key={index}>
                                        {link?.name}
                                    </Link>
                                ))}

                            </div>
                        </div>
                        {/* Contact Us */}
                        <div className="ml-5">
                            <h4 className="text-lg text-white font-poppins ">Contact Us</h4>
                            {/* Location */}
                            <div className="text-[#FFFFFF] flex items-center gap-2 mt-2 text-sm">
                                <FaMapMarkerAlt className="text-white mt-1 size-10" />
                                <div>
                                    <strong className=" font-inter ">Location:</strong>
                                    <a href="https://maps.app.goo.gl/V4SWA2JriBDE9uYY8"><p className="text-[12px] font-inte hover:text-[#F39C12] " >
                                        C-15 Munawar Chowrangi Rd, Block 12 Gulistan-e-Johar,
                                        Karachi, 74500, Pakistan
                                    </p>
                                    </a>
                                </div>
                            </div>

                            {/* Phone Section */}
                            <div className="flex gap-4 mt-2">

                                <div className="text-[#FFFFFF] text-sm w-80 ">
                                    <div className="flex  gap-2">
                                        <FaPhoneAlt className="text-white" />
                                        <strong className=" font-inter ">Contact:</strong>
                                    </div>
                                    <p className="ml-6 mt-1 font-inter flex text-xs ">
                                        UAN :+92-21-111-762-544
                                    </p>
                                    <p className="ml-6 font-inter ">
                                        <a
                                            href="tel:+922134156597"
                                            className="flex items-center min-h-[18px] text-xs hover:text-[#F39C12]"
                                        >
                                            +92-21-34156597
                                        </a>
                                    </p>
                                </div>
                            </div>

                            {/* Email Section */}
                            <div className="text-[#FFFFFF] font-inter text-sm mt-2">
                                <div className="flex items-center gap-2">
                                    <FaEnvelope className="text-white" />
                                    <strong className=" ">Email Address:</strong>
                                </div>
                                <p className="ml-6 mt-1 ">
                                    <a
                                        href="mailto:info@pobkarachi.org"
                                        className="flex items-center min-h-[18px] hover:text-[#F39C12]"
                                    >
                                        info@pobkarachi.org
                                    </a>
                                </p>
                                <p className="ml-6">
                                    <a
                                        href="mailto:hr@pobtrust.org"
                                        className="flex items-center min-h-[18px] hover:text-[#F39C12]"
                                    >
                                        hr@pobtrust.org
                                    </a>
                                </p>
                            </div>

                            {/* Working Hours Section */}
                            <div className="text-[#FFFFFF] font-inter text-sm mt-4">
                                <div className="flex items-center gap-2">
                                    <svg
                                        className="w-5 h-5 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <strong className="">Working Hours:</strong>
                                </div>
                                <p className="ml-6 mt-1">8:30 AM to 3:30 PM</p>
                                <p className="ml-6">Monday to Saturday</p>
                                <p className="ml-6">Sunday: Closed</p>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="ml-14">
                            <h4 className="text-lg text-white font-poppins ">Services</h4>
                            {/* Diseases 1 */}
                            <div className="text-[#FFFFFF] flex items-center flex-col items-start gap-2 mt-2 text-sm">
                                <h3 className="">Treatments & Specialties</h3>
                                {servicesLinks.map((link) => (
                                    <Link key={link.name} href={link.url}>
                                        <div>
                                            <p className=" hover:text-[#F39C12] ">{link.name}:</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        

                        {/* Support , Resource , Contact */}
                        <div className="ml-14 mt-8">
                            {/* Diseases 2 */}
                            <div className="text-[#FFFFFF] flex items-center flex-col items-start gap-2 mt-2 text-sm">
                                <h3 className=" font-inter ">Conditions & Diagnostics </h3>
                                {servicesLinks2.map((link) => (
                                    <Link key={link.name} href={link.url}>
                                        <div>
                                            <p className="font-inter hover:text-[#F39C12] ">{link.name}:</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                        </div>
                        {/* Contact  */}
                        <div className="ml-14">
                            <h4 className=" text-white font-poppins mt-2">Contact / Legal</h4>
                            <div className="text-[#FFFFFF] flex items-center flex-col items-start gap-2 mt-2 text-sm">
                                {contactLinks.map((link) => (
                                    <Link key={link.name} href={link.url}>
                                        <div>
                                            <p className=" hover:text-[#F39C12] ">{link.name}:</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                        </div>
                        {/* Get involved and Support Us  */}
                        {/* <div> */}
                            {/* <h4 className="text-[16px] text-white font-poppins my-3 ">Get Involved / Support Us</h4> */}
                            {/* Support */}
                            {/* <div className="text-[#FFFFFF] flex items-center flex-col items-start gap-2 mt-2 text-sm"> */}
                                {/* <Link href={"https://pob-delta.vercel.app/donation/"} className=" hover:text-[#F39C12] ">Donate Now</Link>
                                <Link href={"https://pob-delta.vercel.app/volunteer/"} className=" hover:text-[#F39C12] ">Volunteer With Us </Link>
                                <Link href={"https://pob-delta.vercel.app/zakat/"} className=" hover:text-[#F39C12] ">Zakat / Charity Contributions </Link> */}
                            {/* </div> */}
                            {/* Resources / Awareness */}
                            {/* <h4 className="text-[17px] text-white font-poppins mt-2 my-3">Resources / Awareness</h4>
                            <div className="text-[#FFFFFF] flex items-center flex-col items-start gap-2 mt-2 text-sm">
                                <Link href={"https://pob-delta.vercel.app/blog/"} className=" hover:text-[#F39C12] ">Blogs</Link>
                                <Link href={"https://pob-delta.vercel.app/annual-reports/"} className=" hover:text-[#F39C12] ">Annual Reports / Impact Reports  </Link>
                            </div>
                        </div> */}
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-b w-[90%] border-gray-100"  />
                <div className="  w-full   flex justify-between px-20 font-inter  text-center py-2 text-white text-xs">
                    <div>Copyright 2026 © POB TRUST </div>
                    <div>
                        <Link href="/terms-conditions" className="text-white text-xs">
                            Terms & Conditions
                        </Link>{" "}
                        <Link href="/privacy-policy" className="text-white text-xs">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Footer  */}
            <div
                className="md:bg-[#222222] min-h-[60rem] block md:hidden"
            >

                <div
                    className="w-full min-h-full font-inter flex px-4 items-center flex-col md:bg-cover bg-no-repeat bg-center sm:bg-top pb-10"
                    //     backgroundPosition: "center",
                >

                    {/* Email Subscription */}
                    <section className=" pt-20">
                        <div className="flex md:flex-row  text-white  flex-col justify-between gap-10 py-10">
                            <div className="md:w-1/3  text-center md:text-start">
                                <p className="font-newsLetter font-poppins md:text-5xl text-3xl py-2">
                                    Join Our Newsletter
                                </p>
                                <p className="font-poppins">
                                    Stay updated with our latest offers, exclusive deals, and
                                    exciting news. Subscribe now!
                                </p>
                            </div>
                            <div
                                className="md:w-1/3 flex flex-row justify-center items-center"
                                onSubmit={handleSubscribe}
                            >
                                <form className="w-full relative ">
                                    <input
                                        type="text"
                                        placeholder="Enter Your Email "
                                        className="w-full font-inter  text-sm bg-transparent py-3 px-3 outline-none border border-white rounded-full"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <button
                                        className="absolute text-[12px] top-0 font-poppins right-0 h-full px-4 textcenter flex flex-row gap-5 items-center justify-center   text-xs bg-[#C30001] py-3 outline-none text-white font-bold rounded-full shadow-sm"
                                        type="submit"
                                    >
                                        {"SUBSCRIBE"}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>

                    <div className=" lg:border-r text-white border-white lg:w-1/4 lg:p-10 md:pl-0 py-10 flex flex-col justify-center items-center md:items-start gap-5">
                        <img
                            className="w-56 object-cover "
                            src="/poblogo.png"
                            alt="Company Logo"
                        />
                        <p className="text-[14px] text-center font-inter">
                            Prevention of Blindness Trust is a registered charity working for
                            the prevention and treatment of avoidable causes of blindness
                            focusing on the deprived and marginalized communities.
                        </p>

                        <ul className="py-2 flex flex-row gap-2 lg:justify-start justify-center list-none">
                            <li><a
                                href="https://wa.me/923479997772"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Whatsapp"
                            >
                                <FaWhatsapp className=" text-white" size={20} />
                            </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/pobeyehospitalkarachi/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                >
                                    <FaFacebookF className=" text-white" size={20} />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/pobeyehospitalkarachi/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram className="text-white" size={20} />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/pob-eyehospital-karachi/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Linkedin"
                                >
                                    <FaLinkedin className="text-white" size={20} />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:w-[70%] w-full min-h-[200px] md:h-[100%]">
                        <div className="md:hidden text-white">
                            <div
                                className="flex justify-between border-b border-[#555555] items-center py-3 cursor-pointer"
                                onClick={() => setQuickLinksOpen(!isQuickLinksOpen)}
                            >
                                <p className="text-[16px] ">Quick Links</p>
                                {isQuickLinksOpen ? (
                                    <MdOutlineExpandLess size={24} />
                                ) : (
                                    <MdOutlineExpandMore size={24} />
                                )}
                            </div>
                            {isQuickLinksOpen && (
                                <ul className="flex flex-col gap-1  ">
                                    {quickLinks.map((link, index) => (
                                        <Link href={link?.url} key={index}>{link?.name}</Link>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="md:hidden text-white">
                            <div
                                className="flex justify-between   items-center py-3 cursor-pointer"
                                onClick={() => setisContactOpen(!isContactOpen)}
                            >
                                <p className="text-lg text-white font-poppins ">Contact US</p>
                                {isContactOpen ? (
                                    <MdOutlineExpandLess size={24} />
                                ) : (
                                    <MdOutlineExpandMore size={24} />
                                )}
                            </div>
                            {isContactOpen && (
                                <div className=" ">

                                    <div className="text-[#FFFFFF] flex items-center gap-2 mt-2 text-sm">
                                        <FaMapMarkerAlt className="text-white mt-1" />
                                        <div>
                                            <strong className=" font-inter ">Karachi:</strong>
                                            <p className="text-[12px] font-inter ">
                                                C-16, Block 2, Gulistan e Johar, Munawar Chowrangi,
                                                Karachi
                                            </p>
                                        </div>
                                    </div>

                                    {/* Phone Section */}
                                    <div className="flex gap-4 mt-2">


                                        <div className="text-[#FFFFFF] text-sm">
                                            <div className="flex  gap-2">
                                                <FaPhoneAlt className="text-white" />
                                                <strong className=" font-inter ">Contact:</strong>
                                            </div>
                                            <p className="ml-6 mt-1 font-inter ">
                                                UAN <a href="tel:+9221111762544" className="inline-flex items-center min-h-[44px] hover:text-[#F39C12]">+92-21-111-762-544</a>
                                            </p>
                                            <p className="ml-6 font-inter ">
                                                <a href="tel:+922134156597" className="inline-flex items-center min-h-[44px] hover:text-[#F39C12]">+92-21-34156597</a>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Email Section */}
                                    <div className="text-[#FFFFFF] font-inter text-sm mt-2">
                                        <div className="flex items-center gap-2">
                                            <FaEnvelope className="text-white" />
                                            <strong className=" ">Email Address:</strong>
                                        </div>
                                        <p className="ml-6 mt-1">
                                            <a href="mailto:info@pobkarachi.org" className="inline-flex items-center min-h-[44px] hover:text-[#F39C12]">info@pobkarachi.org</a>
                                        </p>
                                        <p className="ml-6">
                                            <a href="mailto:hr@pobtrust.org" className="inline-flex items-center min-h-[44px] hover:text-[#F39C12]">hr@pobtrust.org</a>
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="md:hidden text-white">
                            <div
                                className="flex justify-between border-b border-[#555555] items-center py-3 cursor-pointer"
                                onClick={() => setServicesOpen(!isServicesOpen)}
                            >
                                <p className="text-[16px] ">Services</p>
                                {isServicesOpen ? (
                                    <MdOutlineExpandLess size={24} />
                                ) : (
                                    <MdOutlineExpandMore size={24} />
                                )}
                            </div>
                            {isServicesOpen && (
                                <div className="flex flex-col gap-3 py-3">
                                    {/* Treatments & Specialties */}
                                    <div className="text-[#FFFFFF] flex flex-col gap-2 text-sm">
                                        <strong className="font-inter">Treatments & Specialties</strong>
                                        {servicesLinks.map((link) => (
                                            <Link key={link.name} href={link.url} className="hover:text-[#F39C12]">
                                                {link.name}
                                            </Link>
                                        ))}
                                    </div>

                                    
                                    {/* Conditions & Diagnostics */}
                                    <div className="text-[#FFFFFF] flex flex-col gap-2 text-sm">
                                        <strong className="font-inter">Conditions & Diagnostics</strong>
                                        {servicesLinks2.map((link) => (
                                            <Link key={link.name} href={link.url} className="hover:text-[#F39C12]">
                                                {link.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="md:hidden text-white">
                            <div
                                className="flex justify-between border-b border-[#555555] items-center py-3 cursor-pointer"
                                onClick={() => setGetInvolvedOpen(!isGetInvolvedOpen)}
                            >
                                <p className="text-[16px] ">Get Involved / Support Us</p>
                                {isGetInvolvedOpen ? (
                                    <MdOutlineExpandLess size={24} />
                                ) : (
                                    <MdOutlineExpandMore size={24} />
                                )}
                            </div>
                            {isGetInvolvedOpen && (
                                <ul className="flex flex-col gap-2 py-3 text-sm">
                                    <Link href={"/donation/"} className="hover:text-[#F39C12]">
                                        Donate Now
                                    </Link>
                                    <Link href={"/volunteer/"} className="hover:text-[#F39C12]">
                                        Volunteer With Us
                                    </Link>
                                    <Link href={"/zakat/"} className="hover:text-[#F39C12]">
                                        Zakat / Charity Contributions
                                    </Link>
                                </ul>
                            )}
                        </div>

                        <div className="md:hidden text-white">
                            <div
                                className="flex justify-between border-b border-[#555555] items-center py-3 cursor-pointer"
                                onClick={() => setResourcesOpen(!isResourcesOpen)}
                            >
                                <p className="text-[16px] ">Resources / Awareness</p>
                                {isResourcesOpen ? (
                                    <MdOutlineExpandLess size={24} />
                                ) : (
                                    <MdOutlineExpandMore size={24} />
                                )}
                            </div>
                            {isResourcesOpen && (
                                <ul className="flex flex-col gap-2 py-3 text-sm">
                                    <Link href={"/blog/"} className="hover:text-[#F39C12]">
                                        Blogs
                                    </Link>
                                    <Link href={"/annual-reports/"} className="hover:text-[#F39C12]">
                                        Annual Reports / Impact Reports
                                    </Link>
                                </ul>
                            )}
                        </div>

                        <div className="md:hidden text-white">
                            <div
                                className="flex justify-between items-center py-3 cursor-pointer"
                                onClick={() => setContactLegalOpen(!isContactLegalOpen)}
                            >
                                <p className="text-[16px] ">Contact / Legal</p>
                                {isContactLegalOpen ? (
                                    <MdOutlineExpandLess size={24} />
                                ) : (
                                    <MdOutlineExpandMore size={24} />
                                )}
                            </div>
                            {isContactLegalOpen && (
                                <ul className="flex flex-col gap-2 py-3 text-sm">
                                    {contactLinks.map((link) => (
                                        <Link key={link.name} href={link.url} className="hover:text-[#F39C12]">
                                            {link.name}
                                        </Link>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="  w-full  bg-[#C30001] flex flex-col justify-around font-inter   text-center py-4 text-white text-sm">
                    <div>Copyright 2026 © POB TRUST |</div>
                    <div>
                        <a href="#" className="text-white">
                            Terms & Conditions
                        </a>{" "}
                        <a href="#" className="text-white">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
