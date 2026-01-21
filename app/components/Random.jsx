"use client"

const Random = () => {
    const scrollToDonate = () => {
        const footer = document.getElementById('footer_elem')
        footer.scrollIntoView({ behavior: "smooth" })

    }
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 max-w-7xl mx-auto px-4 py-8 xl:pt-20">
            {/* Text Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h4 className="uppercase text-[#C30001] text-xl md:text-sm ">Donate now</h4>
                <h2 className="text-3xl md:text-5xl pb-4 md:pb-10 pt-2 text-black ">
                    Make a Difference <br />with Your Donation
                </h2>
                <p className="text-gray-500 text-sm md:text-base">
                    Each day, many children, adults, and elderly individuals live with vision loss that is
                    preventable or treatable but remains unaddressed due to financial hardship. Basic eye care,
                    timely diagnosis, and simple treatments can change lives, yet access is often out of reach for
                    those who need it most. Your donation helps bridge this gap by providing eye examinations,
                    medical care, corrective lenses, and sight-restoring procedures. Restoring vision does more
                    than improve health—it brings independence, confidence, and opportunity. Children can
                    learn, adults can work, and families can look forward to a brighter future. Together, we can
                    reduce avoidable blindness, uplift communities, and turn hope into lasting change through
                    the gift of sight.

                </p>
                <button className="py-2 px-6 bg-[#373895] mt-5 rounded-full text-white hover:bg-[#2b2e70] transition-colors" onClick={scrollToDonate}>
                    Donate Now
                </button>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-[40%] flex justify-center">
                <img
                    src="/new.webp"
                    alt="Random"
                    className="object-cover h-100 rounded-b-full"
                />
            </div>
        </div>
    )
}

export default Random
