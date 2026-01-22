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
            align: "end"   // self-end
        },
        {
            image: "/3section2.png",
            title: "Increased mental health issues",
            text: "Increased risk of depression, isolation, and loss of dignity due to sudden dependence on others",
            align: "start" // self-start
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
            <div className="text-black text-center py-16 pb-0 px-4 sm:px-6 lg:px-8">
                <h4 className="uppercase text-[#C30001] text-xl sm:text-[22px] tracking-wide">
                    Current
                </h4>
                <h2 className="text-3xl sm:text-5xl lg:text-5xl  pb-10 pt-3">
                    Situation on Hepatitis in Pakistan
                </h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4 max-w-5xl mx-auto pb-20 ">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-80"
                        >
                            {/* Image aligned top-left */}
                            <div className="flex-none w-full">
                                <img
                                    src={card.image}
                                    alt={card.text}
                                    className="size-30 object-cover rounded-tl-xl"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-3xl md:text-5xl text-gray-400 mb-4 text-left line-clamp-2">
                                    {card.ratio}
                                </h3>
                                <p className="text-gray-500 text-left text-sm leading-relaxed md:text-base ">
                                    {card.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* ==================== Impact Blocks Section ==================== */}
            <div className="text-center text-black py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 pb-20 -mt-15">
                <h4 className="uppercase text-[#C30001] text-[22px] sm:text-xl tracking-wide">
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