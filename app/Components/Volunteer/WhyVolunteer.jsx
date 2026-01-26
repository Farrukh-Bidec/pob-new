"use client"; // ❗ Client-side component

import React, { useState } from "react";
import DOMPurify from "isomorphic-dompurify";
import axios from "axios";
import { toast } from "react-toastify";

const WhyVolunteer = ({ heading, para, handleDonateClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Loader state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    address: "",
    preffered_volunteer_role: "",
    availability: "",
    skills: "",
    emergence_contact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const Sendemail = async (formData) => {
    try {
      const {
        name,
        email,
        phone,
        message,
        address,
        preffered_volunteer_role,
        availability,
        skills,
        emergence_contact,
      } = formData;

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL_LIVE}volunteer_registration/submit`,
        {
          name,
          email,
          phone,
          message,
          address,
          preffered_volunteer_role,
          availability,
          skills,
          emergence_contact,
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error sending email:", error);
      return { status: "error" };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await Sendemail(formData);
    setLoading(false);

    if (response.status === "success") {
      toast.success("Volunteer registration submitted successfully!");
    } else {
      toast.error("Failed to submit volunteer registration.");
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      address: "",
      preffered_volunteer_role: "",
      availability: "",
      skills: "",
      emergence_contact: "",
    });
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row pt-8 pb-12 md:pb-24 gap-8 md:gap-4 items-center justify-center">
      <div className="md:w-7/12 w-[90%] font-inter items-center flex flex-col gap-2">
        <h1 className="text-4xl max-w-2xl font-Amaranth text-center">{heading}</h1>
        <div
          className="text-sm text-[#777777] text-center font-inter"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(para) }}
        ></div>

        <div
          onClick={() => setIsOpen(true)}
          className="mt-4 px-4 py-2 w-fit rounded-full text-[12px] font-inter text-white bg-[#28A745] group-hover:bg-white group-hover:text-[#28A745] transition-all duration-300 cursor-pointer"
        >
          Register Now
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white p-6 rounded-2xl shadow-lg w-[90%] max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold text-center mb-4">Volunteer Registration</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border rounded-lg p-2 w-full"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="border rounded-lg p-2 w-full"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="border rounded-lg p-2 w-full"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                required
                className="border rounded-lg p-2 w-full"
              ></textarea>

              {/* New Fields */}
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="border rounded-lg p-2 w-full"
              />

              <input
                type="text"
                name="preffered_volunteer_role"
                placeholder="Preferred Volunteer Role"
                value={formData.preffered_volunteer_role}
                onChange={handleChange}
                required
                className="border rounded-lg p-2 w-full"
              />

              <input
                type="text"
                name="availability"
                placeholder="Availability"
                value={formData.availability}
                onChange={handleChange}
                required
                className="border rounded-lg p-2 w-full"
              />

              <input
                type="text"
                name="skills"
                placeholder="Skills"
                value={formData.skills}
                onChange={handleChange}
                required
                className="border rounded-lg p-2 w-full"
              />

              <input
                type="tel"
                name="emergence_contact"
                placeholder="Emergency Contact"
                value={formData.emergence_contact}
                onChange={handleChange}
                required
                className="border rounded-lg p-2 w-full"
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-2 px-4 py-2 rounded-lg text-white bg-[#28A745] hover:bg-white hover:text-[#28A745] border border-[#28A745] transition-all flex justify-center items-center"
              >
                {loading ? (
                  <div className="loader border-2 border-white  border-t-transparent rounded-full w-5 h-5 animate-spin"></div>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhyVolunteer;
