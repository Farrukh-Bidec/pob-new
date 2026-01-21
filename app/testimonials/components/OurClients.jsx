
"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const donationCards = [
  {
    id : 1,
    title: "Patient Hira Lal",
    description: "I came to POB Eye Hospital feeling very nervous about my surgery, but the warmth of the staff immediately put me at ease. From the receptionists to the surgeons, everyone treated me like family. My vision is now clear, and I cannot thank the team enough for their kindness and professional care.",
    videoUrl: "https://www.youtube.com/watch?v=oVt3CFIz6sk",
  },
  {
    id : 2,
    title: "Patient Ayesha",
    description: "Testimonial of the recently treated patient at our POB Eye Hospital Karachi, thanking for the excellent care that was given to her. She appreciated the entire staff for their kind and caring assistance.",
    videoUrl: "https://www.youtube.com/watch?v=sd3DMgDGw88",
  },
  {
    id : 3,
    title: "Patient Saniya",
    description: "I am so impressed by the seamless experience at POB. Even though the hospital is busy, the staff takes the time to listen and help with a smile. The doctors are thorough, and the assistants are incredibly gentle. Thank you for restoring my sight and for the excellent hospitality",
    videoUrl: "https://www.youtube.com/watch?v=4hcVpWQZiiE",
  },
];

const OurClients = () => {
  // We double the array to match your 2-row layout in the image
  const allCards = [...donationCards, ...donationCards];
 const router = useRouter();
  return (
<section className="py-12 px-4 md:px-8 lg:px-20 mb-10 md:mb-0 -mt-12 last:mb-0">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
         Words From Our Clients
        </h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCards.map((card, index) => (
            <div 
              key={index} 
              // 'h-full' hata diya hai taake height content ke mutabiq adjust ho jaye
              className="bg-white rounded-[20px] overflow-hidden shadow-sm flex flex-col border border-gray-100 max-w-[400px] mx-auto"
            >
              
              <div className="h-60 overflow-hidden">
                 <iframe
                  className="w-full h-full object-cover"
                  
                  src={card.videoUrl.replace("watch?v=", "embed/")}
                  title={card.title}
                  allowFullScreen
                ></iframe>
               
              </div>

              {/* Content Container ki padding p-6 kar di hai */}
              <div className="p-6 flex flex-col h-[250px]"> {/* yahan height fix ki hai */}
  <h3 className="text-[#333333] text-lg font-bold mb-3 font-sans">
    {card.title}
  </h3>
  
  <p className="text-gray-500 text-sm leading-snug mb-6 overflow-hidden">
    {card.description}
  </p>

  <button onClick={() => router.push(`/feedback/${card.id}`)} className="mt-auto w-full bg-[#3F4095] hover:bg-[#2F3075] text-white py-2.5 px-6 rounded-full font-medium transition-colors duration-300 text-sm">
    Read More
  </button>
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;