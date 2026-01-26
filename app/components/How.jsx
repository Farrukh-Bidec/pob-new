import Link from "next/link"

const How = () => {
    return (
        <div className='text-center text-black py-10 md:pb-12 md:pt-10 px-4 mx-auto -mt-15 mac:max-w-[1728px] mac:px-20'>
            <h4 className='uppercase text-[#C30001] text-[22px] mac:text-[32px] mb-2'>donation</h4>
            <h2 className='text-3xl md:text-5xl mac:text-7xl pb-10 text-black font-bold'>How You Can Help & Donate</h2>

            <div className='flex justify-center flex-wrap gap-6 md:gap-9 mac:gap-12 items-center max-w-7xl mac:max-w-full mx-auto  -mt-5 '>

                {/* Card 1 */}
                <div className="bg-[url('/bg.webp')] bg-cover bg-no-repeat h-[500px] mac:h-[650px] w-full max-w-[350px] mac:max-w-[480px] flex flex-col rounded-xl md:mt-36 mac:mt-48">
                    <div className="m-5 size-14 mac:size-20 bg-white rounded-full flex items-center justify-center">
                        <img src="/hand2.png" alt="image" className='p-2 mac:p-4 object-contain' />
                    </div>
                    <h3 className='text-left pl-6 text-3xl md:text-4xl mac:text-5xl text-white font-bold'>Donation</h3>
                    <p className='text-left pl-6 py-5 text-white text-sm md:text-base mac:text-xl leading-relaxed'>
                        Contribute towards advanced treatments that help correct nearsightedness for those in need.
                    </p>
                    <Link href={"https://pob-delta.vercel.app/donation"}>
                        <div className='flex items-start pl-6'>
                            <button className='bg-white py-2 px-6 mac:py-3 mac:px-10 rounded-full font-medium mac:text-xl hover:bg-gray-100 transition-colors'>Donate Now</button>
                        </div>
                    </Link>
                </div>

                {/* Card 2 */}
                <div className="bg-[url('/bg2.webp')] bg-cover bg-no-repeat h-[500px] mac:h-[650px] w-full max-w-[350px] mac:max-w-[480px] flex flex-col  rounded-xl">
                    <div className="m-5 size-14 mac:size-20 bg-white rounded-full flex items-center justify-center">
                        <img src="/mand.png" alt="image" className='p-2 mac:p-4 object-contain' />
                    </div>
                    <h3 className='text-left pl-6 text-3xl md:text-4xl mac:text-5xl text-white font-bold'>Sadaqah</h3>
                    <p className='text-left pl-6 py-5 text-white text-sm md:text-base mac:text-xl leading-relaxed'>
                        Make a meaningful impact by supporting vision correction treatments through voluntary charity.
                    </p>
                    <Link href={"https://pob-delta.vercel.app/sadaqah"}>
                        <div className='flex items-start pl-6'>
                            <button className='bg-white py-2 px-6 mac:py-3 mac:px-10 rounded-full font-medium mac:text-xl hover:bg-gray-100 transition-colors'>Give Sadaqah</button>
                        </div>
                    </Link>
                </div>

                {/* Card 3 */}
                <div className="bg-[url('/bg3.webp')] bg-cover bg-no-repeat h-[500px] mac:h-[650px] w-full max-w-[350px] mac:max-w-[480px] flex flex-col  rounded-xl md:mt-36 mac:mt-48">
                    <div className="m-5 size-14 mac:size-20 bg-white rounded-full flex items-center justify-center">
                        <img src="/sand.png" alt="image" className='p-2 mac:p-4 object-contain' />
                    </div>
                    <h3 className='text-left pl-6 text-3xl md:text-4xl mac:text-5xl text-white font-bold'>Zakat</h3>
                    <p className='text-left pl-6 py-5 text-white text-sm md:text-base mac:text-xl leading-relaxed'>
                        Fulfill your Zakat obligation by funding LASIK treatments for those who can't afford it.
                    </p>
                    <Link href={"https://pob-delta.vercel.app/zakat"}>
                        <div className='flex items-start pl-6'>
                            <button className='bg-white py-2 px-6 mac:py-3 mac:px-10 rounded-full font-medium mac:text-xl hover:bg-gray-100 transition-colors'>Pay Zakat</button>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default How