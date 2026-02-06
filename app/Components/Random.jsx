"use client"

import Link from "next/link"

const Random = () => {
    const scrollToDonate = () => {
        const footer = document.getElementById('footer_elem')
        footer.scrollIntoView({ behavior: "smooth" })

    }
    return (
        <div className="flex flex-col-reverse md:flex-row pb-20 items-center justify-center gap-20 max-w-7xl macmax[1728px] mx-auto px10 md24 mac:px0 pt-16 md:pt-8 xl:pt-35 mac:pt-48 2xl:pb-20 mac:pb-40">
            {/* Text Section */}
            <div className="w-full lg:w-1/2 px-4 md:px-8 lg:px-0 text-center lg:text-left">
                <h4 className="text-[15px] mb1 text-[#C30001] uppercase font-semibold">
Donate Now                </h4>
                <h2 className="text-[32px] md:text-[50px] pb-4 md:pb-7 mac:pb-14 text-black font-bold">
                    Your Donation Restores  <br />Sight and Hope
                </h2>
                <p className="text-[#777777] lg:w-[550px] text-md md:text-[15px] mactext-2xl leading-relaxed">
                    Every day, children, adults, and the elderly struggle in silence with vision loss that could have been prevented or treated. Not because help doesn’t exist but because they cannot afford it. A simple eye check, timely diagnosis, or basic treatment can change a life, yet for many, these remain beyond reach.
                    <span className="inline-block mt-3">
Your donation becomes a lifeline. It brings eye examinations, essential treatment, corrective lenses, and sight-restoring care to those who need it most. When vision is restored, dignity returns. Children can read and dream again, adults can work with confidence, and families regain hope for a better tomorrow. </span>
              
              <span className="inline-block mt-3">Together, we can end avoidable blindness and replace darkness with possibility one life, one family, one future at a time.</span>
              
                </p>

                <Link
  href="/donation/"
  onClick={scrollToDonate}
  className="inline-flex items-center justify-center py-2 px-6 mac:py-4 mac:px-10 bg-[#373895] mt-5 mac:mt-10 rounded-full text-white mac:text-xl hover:bg-[#2b2e70] transition-colors"
>
  Donate Now
</Link>
            </div>

            {/* Image Section */}
            <div className="w-full lg:block hidden lg:w-[35%] flex justify-center">
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
