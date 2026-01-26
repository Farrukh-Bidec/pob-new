"use client";
import React, { useEffect, useState } from 'react';

// Ye wahi cards data jo OurClients me hai
const donationCards = [
  {
    id: 1,
    title: "Patient Hira Lal",
    description: "I came to POB Eye Hospital feeling very nervous about my surgery, but the warmth of the staff immediately put me at ease. From the receptionists to the surgeons, everyone treated me like family. My vision is now clear, and I cannot thank the team enough for their kindness and professional care.",
    videoUrl: "https://www.youtube.com/watch?v=oVt3CFIz6sk",
  },
  {
    id: 2,
    title: "Patient Ayesha",
    description: "Testimonial of the recently treated patient at our POB Eye Hospital Karachi, thanking for the excellent care that was given to her. She appreciated the entire staff for their kind and caring assistance.",
    videoUrl: "https://www.youtube.com/watch?v=sd3DMgDGw88",
  },
  {
    id: 3,
    title: "Patient Saniya",
    description: "I am so impressed by the seamless experience at POB. Even though the hospital is busy, the staff takes the time to listen and help with a smile. The doctors are thorough, and the assistants are incredibly gentle. Thank you for restoring my sight and for the excellent hospitality",
    videoUrl: "https://www.youtube.com/watch?v=4hcVpWQZiiE",
  },
];

// Default fallback card agar id na mile ya match na ho
const defaultCard = donationCards[0];

const ClientFeedback = ({ id }) => {
  const [card, setCard] = useState(defaultCard);

  useEffect(() => {
    if (!id) return; // agar id nahi hai, fallback hi render hoga
    const selectedCard = donationCards.find(item => item.id === parseInt(id));
    if (selectedCard) {
      setCard(selectedCard);
    } else {
      setCard(defaultCard); // agar id match na ho to default card
    }
  }, [id]);

  return (
    <section className="w-full -mt-5 md:-mt-20 bg-white py-12 md:py-20 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Title Section */}
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
          {card.title}
        </h2>

        {/* Description Paragraph */}
        <p className="text-[#888888] text-[15px] md:text-[16px] leading-relaxed mb-12">
          {card.description}
        </p>

        {/* Video Section */}
        <div className="relative group rounded-2xl overflow-hidden shadow-lg mb-20">
          <iframe
            className="w-full h-auto md:h-[500px] object-cover"
            src={`https://www.youtube.com/embed/${card.videoUrl.split("v=")[1]}`}
            title={card.title}
            allowFullScreen
          ></iframe>
        </div>

        {/* Replicated Section */}
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
          {card.title}
        </h2>

        <p className="text-[#888888] text-[15px] md:text-[16px] leading-relaxed mb-6">
          {card.description}
        </p>
      </div>
    </section>
  );
};

export default ClientFeedback;
