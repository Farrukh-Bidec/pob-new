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
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mac:max-w-[1400px] mx-auto px-2 sm:px-0">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="w-full bg-white rounded-xl overflow-hidden hover:shadow-xl duration-300 flex flex-col h-64 sm:h-80 mac:h-[420px] relative"
                            >
                                {/* Image aligned top-left */}
                                <div className="flex-none w-full flex justify-start items-start">
                                    <img
                                        src={card.image}
                                        alt={card.text}
                                        className="w-20 h-20 sm:w-28 sm:h-28 mac:w-40 mac:h-40 object-contain rounded-tl-xl rounded-br-[35px] sm:rounded-br-[45px]"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="p-3 sm:p-6 mac:p-10 flex flex-col flex-grow text-left">
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
            <div className="text-center text-black py-12 mac:py-24 px-4 sm:px-6 lg:px-8 mac:px-20 bg-gray-50 pb-20 mac:pb-40">
                <h4 className="uppercase text-[#C30001] text-[22px] sm:text-[22px] mac:text-[30px] tracking-wide">
                    Every Eye
                </h4>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl mac:text-7xl pb-8 pt-3">
                    Deserves a Chance to See
                </h2>

                <p className="max-w-6xl mac:max-w-7xl mx-auto text-base sm:text-lg mac:text-2xl leading-relaxed text-gray-700 sm:mb-12 px-2">
                    At POB Trust, we stand by the belief that no man, woman, or child should suffer
                    the heartbreak of blindness just because they can't afford treatment. Vision is a gift
                    we often take for granted, but for many, it's a battle they face every day. We are here to change that.
                </p>

                {/* <div><img src="/main.png" alt="Main" className='mx-auto' /></div> */}
                <div className='w-full ml-0 sm:ml-7 mx-auto h-auto flex sm:flex-row flex-col justify-center flex-wrap px-10 mac:px-20'>
                    <div className='lg:w-[30%] w-full text-black pt-10 sm:pt-30 mac:pt-40'>
                        <picture>
                            <source media="(min-width: 768px)" srcSet="/33section.png" />
                            <img src="/3sectionResponsive.png" alt="help" className='mx-auto w-25 xl:w-40 mac:w-60' />
                        </picture>
                        <h3 className='text-2xl sm:text-xl mac:text-3xl leading-tight text-center'>Loss of independence</h3>
                        <p className='text-gray-600 mac:text-2xl'>Mobility, making daily activities like walking, cooking, or self-care difficult or impossible, and increased isolation and loneliness</p>
                    </div>

                    <div className='lg:w-[40%] w-full text-black py-10 sm:pt-0 mac:pt-10'>
                        <picture>
                            <source media="(min-width: 768px)" srcSet="/3section2.png" />
                            <img src="/3sectionResponsive2.png" alt="help" className='mx-auto pl-0 md:pl-10 w-25 xl:w-48 mac:w-72' />
                        </picture>
                        <h3 className='text-2xl sm:text-xl mac:text-3xl leading-tight'>Increased mental health issues</h3>
                        <p className='text-gray-600 mac:text-2xl ml-10 mac:w-[480px]'>Increased risk of depression, isolation, and loss of dignity due to sudden dependence on others</p>
                    </div>

                    <div className='lg:w-[30%] w-full text-black pt-4 md:pt-42 mac:pt-56'>
                        <img src="/3section3.png" alt="help" className='mx-auto w-25 sm:w-20 mac:w-32' />
                        <h3 className='text-2xl sm:text-xl mac:text-3xl leading-tight'>Economical Burden</h3>
                        <p className='text-gray-600 mac:text-2xl'>Inability to work or earn a livelihood, leaving families financially vulnerable. Greater exposure to poverty, as medical needs rise while income declines</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Help;
