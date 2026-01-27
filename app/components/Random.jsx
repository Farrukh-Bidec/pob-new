"use client"

const Random = () => {
    const scrollToDonate = () => {
        const footer = document.getElementById('footer_elem')
        footer.scrollIntoView({ behavior: "smooth" })

    }
    return (
        <div className="flex flex-col-reverse md:flex-row pb-10 items-center justify-center gap-20 max-w-7xl mac:max-w-[1728px] mx-auto px-10 md:px-24 mac:px-0 pt-16 md:pt-8 xl:pt-35 mac:pt-48 2xl:pb-20 mac:pb-40">
            {/* Text Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h4 className="uppercase text-[#C30001] text-[22px] md:text-[14px] mac:text-[32px] -mt-10 ">Donation now</h4>
                <h2 className="text-xl md:text-5xl mac:text-7xl pb-4 md:pb-7 mac:pb-14 text-black font-bold">
                    Make a Difference <br />with Your Donation
                </h2>
                <p className="text-gray-500 md:w-[470px] text-md md:text-[14px] mac:text-2xl leading-relaxed">
                    Each day, many children, adults, and elderly individuals live with vision loss that is
                    preventable or treatable but remains unaddressed due to financial hardship. Basic eye care,
                    timely diagnosis, and simple treatments can change lives, yet access is often out of reach for
                    those who need it most. Your donation helps bridge this gap by providing eye examinations,
                    medical care, corrective lenses, and sight-restoring procedures. Restoring vision does more
                    than improve health—it brings
                    <span className="inline-block mt-3">
                        independence, confidence, and opportunity. Children can learn, adults can work, and families can look forward to a brighter future. Together, we can reduce avoidable blindness, uplift communities, and turn hope into lasting change through the gift of sight.
                    </span>
                </p>

                <button className="py-2 px-6 mac:py-4 mac:px-10 bg-[#373895] mt-5 mac:mt-10 rounded-full text-white mac:text-xl hover:bg-[#2b2e70] transition-colors" onClick={scrollToDonate}>
                    Donate Now
                </button>
            </div>

            {/* Image Section */}
            <div className="w-full md:block hidden md:w-[35%] flex justify-center">
                <img
                    src="/new.webp"
                    alt="Random"
                    className="object-cover h-[480px] mac:h-[500px] w-full mac:w-auto rounded-b-full"
                />
            </div>
        </div>
    )
}

export default Random
