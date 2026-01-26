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
                    <h4 className="uppercase text-[#C30001] text-xl sm:text-[22px] tracking-wide font-bold">
                        Current
                    </h4>
                    <h2 className="text-xl sm:text-5xl lg:text-5xl pb-10 pt-3 font-bold">
                        Situation on Hepatitis in Pakistan
                    </h2>

                    {/* Grid Cards Container */}
                    <div className="flex  flex-wrap justify-center md:grid md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto ">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="min-w-[250px] bg-white rounded-xl overflow-hidden hover:shadow-xl  duration-300 flex flex-col h-80 relative"
                            >
                                {/* Image aligned top-left */}
                                <div className="flex-none w-full flex justify-start items-start">
                                    <img
                                        src={card.image}
                                        alt={card.text}
                                        className="w-28 h-28 object-contain rounded-tl-xl rounded-br-[45px]"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="p-4 sm:p-6 flex flex-col flex-grow text-left">
                                    <h3 className="text-3xl md:text-5xl text-[#CBCBE3] mb-4 font-bold">
                                        {card.ratio}
                                    </h3>
                                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium">
                                        {card.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Half Gray Background Bar */}
                <div className="absolute bottom-0 left-0 w-full h-[180px] bg-gray-50 z-0 "></div>
            </div>

            {/* ==================== Impact Blocks Section ==================== */}
            <div className="text-center text-black py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 pb-20 ">
                <h4 className="uppercase text-[#C30001] text-[22px] sm:text-[22px] tracking-wide">
                    Every Eye
                </h4>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl pb-8 pt-3">
                    Deserves a Chance to See
                </h2>

                <p className="max-w-6xl mx-auto text-base sm:text-lg leading-relaxed text-gray-700 sm:mb-12 px-2">
                    At POB Trust, we stand by the belief that no man, woman, or child should suffer
                    the heartbreak of blindness just because they can't afford treatment. Vision is a gift
                    we often take for granted, but for many, it's a battle they face every day. We are here to change that.
                </p>

                {/* <div><img src="/main.png" alt="Main" className='mx-auto' /></div> */}
                    <div className='w-full ml-0 sm:ml-7 mx-auto h-auto flex sm:flex-row flex-col justify-center flex-wrap px-10 '>
                <div className='lg:w-[30%] w-full text-black pt-10 sm:pt-30'>
                    <picture>
                        <source media="(min-width: 768px)" srcSet="/33section.png" />
                        <img src="/3sectionResponsive.png" alt="help" className='mx-auto w-25 xl:w-40' />
                    </picture>
                    <h3 className='text-2xl sm:text-xl leading-tight text-center'>Loss of independence</h3>
                    <p className='text-gray-600'>Mobility, making daily activities like walking, cooking, or self-care difficult or impossible, and increased isolation and loneliness</p>
                </div>

                <div className='lg:w-[40%] w-full text-black py-10 sm:pt-0'>
                    <picture>
                        <source media="(min-width: 768px)" srcSet="/3section2.png" />
                        <img src="/3sectionResponsive2.png" alt="help" className='mx-auto pl-0 md:pl-10 w-25 xl:w-48' />
                    </picture>
                    <h3 className='text-2xl sm:text-xl leading-tight'>Increased mental health issues</h3>
                    <p className='text-gray-600'>Increased risk of depression, isolation, and loss of dignity due to sudden dependence on others</p>
                </div>

                <div className='lg:w-[30%] w-full text-black pt-4 md:pt-42'>
                    <img src="/3section3.png" alt="help" className='mx-auto w-25 sm:w-20' />
                    <h3 className='text-2xl sm:text-xl leading-tight'>Economical Burden</h3>
                    <p className='text-gray-600'>Inability to work or earn a livelihood, leaving families financially vulnerable. Greater exposure to poverty, as medical needs rise while income declines</p>
                </div>
            </div>

            </div>
        </>
    );
};

export default Help;
