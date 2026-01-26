"use client";
import React from 'react';

const Help = () => {
    const cards = [
        {
            image: "Secondcard.png",
            text: "Pakistan's global ranking in hepatitis prevalence and infections",
            ratio: "01"
        },
        {
            image: "Secondcard2.png",
            text: "10 million people suffering from hepatitis",
            ratio: "10M"
        },
        {
            image: "Secondcard3.png",
            text: "7.5% Prevalence of Hepatitis in Pakistan",
            ratio: "7.5%"
        },
        {
            image: "Secondcard4.png",
            text: "More than 100,000 new cases annually in Pakistan",
            ratio: "100,000"
        }
    ];

    const impactBlocks = [
        {
            image: "/3section.png",
            title: "Loss of independence",
            text: "Mobility, making daily activities like walking, cooking, or self-care difficult or impossible, and increased isolation and loneliness",
            align: "end"
        },
        {
            image: "/3section2.png",
            title: "Increased mental health issues",
            text: "Increased risk of depression, isolation, and loss of dignity due to sudden dependence on others",
            align: "start"
        },
        {
            image: "/3section3.png",
            title: "Economical Burden",
            text: "Inability to work or earn a livelihood, leaving families financially vulnerable. Greater exposure to poverty, as medical needs rise while income declines",
            align: "end"
        }
    ];

    return (
        <>
            {/* ==================== Hepatitis Statistics Cards ==================== */}
            <div className="relative w-full bg-white pt-16">
                <div className="text-black text-center relative z-10 px-4 sm:px-6 lg:px-8">
                    <h4 className="uppercase text-[#C30001] text-[12px] sm:text-[12px] tracking-wide font-bold">
                        Current
                    </h4>
                    <h2 className="text-xl sm:text-5xl lg:text-5xl pb-10 pt-3 font-bold">
                        Situation on Hepatitis in Pakistan
                    </h2>

                    {/* Grid Cards Container */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mac:max-w-[1400px] mx-auto px-2 sm:px-0">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="w-full bg-white rounded-xl overflow-hidden hover:shadow-xl duration-300 flex flex-col h-64 sm:h-80 mac:h-[420px] relative"
                            >
                                {/* Image aligned top-left */}
                                <div className="flex-none w-40  w-full flex justify-start items-start">
                                    <img
                                        src={card.image}
                                        alt={card.text}
                                        className=" sm:w-28 sm:h-28 mac:w-40 mac:h-40 object-contain rounded-tl-xl rounded-br-[35px] sm:rounded-br-[45px]"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="p-3 ml-6 md:ml-0 sm:p-6 mac:p-10 flex flex-col flex-grow text-left">
                                    <h3 className="text-2xl sm:text-5xl mac:text-8xl text-[#CBCBE3] mb-2 sm:mb-4 font-bold">
                                        {card.ratio}
                                    </h3>
                                    <p className="text-gray-500 text-[10px] sm:text-base mac:text-4xl leading-snug sm:leading-relaxed font-medium line-clamp-3">
                                        {card.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Half Gray Background Bar */}
                <div className="absolute bottom-0 left-0 w-full h-[180px] mac:h-[250px] bg-gray-50 z-0 "></div>
            </div>

            {/* ==================== Impact Blocks Section ==================== */}
            <div className="text-center bg-gray-50 py-20 mac:py-40 px-4 mac:px-20">

                {/* Headings */}
                <h2 className="uppercase text-[#C30001] text-[12px] mac:text-[30px] tracking-wide">
                    Every Eye
                </h2>

                <h2 className="text-5xl sm:text-4xl mac:text-7xl pt-2 pb-6">
                    Deserves a Chance to See
                </h2>

                <p className="max-w-3xl mx-auto text-base sm:text-lg mac:text-2xl text-gray-700 leading-relaxed mb-20">
                    At POB Trust, we stand by the belief that no man, woman, or child should suffer
                    the heartbreak of blindness just because they can't afford treatment.
                </p>

                {/* ONE MERGED IMAGE */}
                <div className="hidden md:flex justify-center mb-24">
                    <img
                        src="/merged.png"
                        alt="Impact of Vision Loss"
                        className="w-full max-w-3xl"
                    />
                </div>

                {/* TEXT BELOW IMAGE */}
                <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-12 mac:gap-20 max-w-7xl mx-auto">

                    {/* Left */}
                    <div className="-mt-20 ml-36 text-center">
                        <h3 className="text-xl mac:text-3xl font-semibold mb-3">
                            Loss of independence
                        </h3>
                        <p className="text-gray-600 text-center -ml-6 w-[280px] mac:text-2xl leading-relaxed">
                            Mobility, making daily activities like walking, cooking, or self-care difficult
                            or impossible, and increased isolation and loneliness.
                        </p>
                    </div>

                    {/* Middle (raised) */}
                    <div className="text-center ml-10 lg:-mt-56">
                        <h3 className="text-xl mac:text-3xl font-semibold mb-3">
                            Increased mental health issues
                        </h3>
                        <p className="text-gray-600 mac:text-2xl leading-relaxed">
                            Increased risk of depression, isolation, and loss of dignity due to sudden
                            dependence on others.
                        </p>
                    </div>

                    {/* Right */}
                    <div className="text-center -ml-36 -mt-20">
                        <h3 className="text-xl mac:text-3xl font-semibold mb-3">
                            Economical Burden
                        </h3>
                        <p className="text-gray-600 ml-20 w-[350px] mac:text-2xl leading-relaxed">
                            Inability to work or earn a livelihood, leaving families financially vulnerable.
                            Greater exposure to poverty as medical needs rise while income declines.
                        </p>
                    </div>

                </div>
                {/* MOBILE VERSION */}
<div className="block md:hidden px-6 space-y-16">

  {/* Item 1 */}
  <div className="text-center">
    <img
      src="./vector.png"
      alt="Loss of independence"
      className="mx-auto w-24 mb-6"
    />
    <h3 className="text-xl font-semibold mb-3">
      Loss of independence
    </h3>
    <p className="text-gray-600 leading-relaxed">
      Mobility, making daily activities like walking, cooking, or self-care difficult
      or impossible, and increased isolation and loneliness.
    </p>
  </div>

  {/* Item 2 */}
  <div className="text-center">
    <img
      src="./vector1.png"
      alt="Mental health issues"
      className="mx-auto w-24 mb-6"
    />
    <h3 className="text-xl font-semibold mb-3">
      Increased mental health issues
    </h3>
    <p className="text-gray-600 leading-relaxed">
      Increased risk of depression, isolation, and loss of dignity due to sudden
      dependence on others.
    </p>
  </div>

  {/* Item 3 */}
  <div className="text-center">
    <img
      src="./vector1.png"
      alt="Economical Burden"
      className="mx-auto w-24 mb-6"
    />
    <h3 className="text-xl font-semibold mb-3">
      Economical Burden
    </h3>
    <p className="text-gray-600 leading-relaxed">
      Inability to work or earn a livelihood, leaving families financially vulnerable.
      Greater exposure to poverty as medical needs rise while income declines.
    </p>
  </div>

</div>


            </div>

        </>
    );
};

export default Help;
