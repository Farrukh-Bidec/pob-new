import Link from "next/link"

const How = () => {
    return (
       <div className='text-black text-center md:text-left md:pb-12 md:pt-10 mx-auto'>
    <h4 className='uppercase text-[#C30001] text-sm mb-2 text-center'>donation</h4>
    <h2 className='text-3xl sm:text-5xl pb-10 text-center'>How You Can Help & Donate</h2>

    <div className='flex justify-center flex-wrap mx-auto gap-10'>
        {/* Donation Card */}
        <div className="bg-[url('/bg.png')] bg-no-repeat bg-center bg-cover h-150 w-100 flex flex-col items-center p-6 md:items-start md:mt-36">
            <div className="mt-5 size-14 bg-white rounded-full flex items-center justify-center">
                <img src="/hand2.png" alt="image" className='bg-white rounded-full p-2 object-fill' />
            </div>
            <h3 className='text-4xl text-white mt-4'>Donation</h3>
            <p className='text-white py-5 text-center md:text-left'>
                Contribute towards advanced treatments <br /> that help correct nearsightedness for those <br /> in need.
            </p>
            <Link href={"https://pob-delta.vercel.app/donation"}>
                <button className='bg-white py-2 px-6 rounded-full'>Donate Now</button>
            </Link>
        </div>

        {/* Sadaqah Card */}
        <div className="bg-[url('/bg2.png')] bg-no-repeat bg-center bg-cover h-150 rounded-md w-100 flex flex-col items-center p-6 md:items-start">
            <div className="mt-5 size-14 bg-white rounded-full flex items-center justify-center">
                <img src="/mand.png" alt="image" className='bg-white rounded-full p-2 object-fill' />
            </div>
            <h3 className='text-4xl text-white mt-4'>Sadaqah</h3>
            <p className='text-white py-5 text-center md:text-left'>
                Make a meaningful impact by supporting <br /> vision correction treatments through <br /> voluntary charity.
            </p>
            <Link href={"https://pob-delta.vercel.app/sadaqah"}>
                <button className='bg-white py-2 px-6 rounded-full'>Give Sadaqah</button>
            </Link>
        </div>

        {/* Zakat Card */}
        <div className="bg-[url('/bg3.png')] bg-no-repeat bg-center bg-cover h-150 w-100 flex flex-col items-center p-6 md:items-start md:mt-36">
            <div className="mt-5 size-14 bg-white rounded-full flex items-center justify-center">
                <img src="/sand.png" alt="image" className='bg-white rounded-full p-2 object-fill' />
            </div>
            <h3 className='text-4xl text-white mt-4'>Zakat</h3>
            <p className='text-white py-5 text-center md:text-left'>
                Fulfill your Zakat obligation by funding <br /> LASIK treatments for those who <br /> can't afford it.
            </p>
            <Link href={"https://pob-delta.vercel.app/zakat"}>
                <button className='bg-white py-2 px-6 rounded-full'>Pay Zakat</button>
            </Link>
        </div>
    </div>
</div>



    )
}

export default How