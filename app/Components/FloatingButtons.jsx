"use client"
const FloatingButtons = () => {
  const handleDonateClick = () => {
    const footer = document.getElementById("footer-section");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="chatbot-container">
      <div
        onClick={handleDonateClick}
        className="fixed bottom-5 right-5 z-50 grou p cursor-pointer text-white font-bold bg-[#F39C12] px-2 py-2 flex items-center justify-start border-2 border-transparent rounded-[50px] outline-none w- [50px] hover: w-[160px] transition-all duration-300 overflow-hidden shadow-lg"
      >
        <div className="bg-white px-2 py-2 rounded-full">
          <img src="/hand.webp" alt="Ballot box with a ballot paper being inserted" />
        </div>

        <p className="mx-2 font-inter font-bold whitespace-nowrap hidde n group-hover:inline-block">
          Donate Now
        </p>
      </div>
    </div>
  );
};

export default FloatingButtons;
