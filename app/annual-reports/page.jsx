// import img19 from "/19.webp";
// import img20 from "../../public/20.webp";
// import img21 from "../../public/gallery1.webp";
// import img22 from "../../public/22.webp";
// import img23 from "../../public/gallery3.webp";
// import img24 from "../../public/24.webp";
import { donate } from "../Components/Actions/Donate"

export async function generateMetadata() {
  return {
    title: "Annual Reports - POB Trust",
    description: "View the annual reports of POB Trust to see our impact throughout the years and our commitment to transparency.",
    alternates: { canonical: `https://pobtrust.com/annual-reports` },
    openGraph: {
      title: "Annual Reports - POB Trust",
      description: "View the annual reports of POB Trust to see our impact throughout the years and our commitment to transparency.",
      type: "website",
      images: [
        {
          url: "https://pobtrust.com/ann.webp",
          width: 1200,
          height: 630,
          alt: "Annual Reports - POB Trust",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@pob-eye-hospital",
      title: "Annual Reports - POB Trust",
      description: "View the annual reports of POB Trust to see our impact throughout the years and our commitment to transparency.",
      images: ["https://pobtrust.com/ann.webp"],
    },
  };
}

const AnnualReports = () => {
  const handleDonateClick = () => {
    const footer = document.getElementById("footer-section");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };
  const reports = [
    { year: "2019", image: "/19.webp" },
    { year: "2020", image: "/20.webp" },
    { year: "2021", image: "/gallery1.webp" },
    { year: "2022", image: "/22.webp" },
    { year: "2023", image: "/gallery3.webp" },
    { year: "2024", image: "/24.webp" },
  ];

  return (
    <div className="bg-white">
      {/* Banner Section */}
      <div className="relative md:mt-0 w-full h-[230px] md:h-[450px] overflow-hidden">
        <img
          src="/ann.webp"
          alt="Annual Reports Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute left-6 md:left-20 md:top-1/2 -translate-y-1/2 z-10">
          <h1 className="md:text-6xl text-2xl text-white font-Amaranth">
            Annual Reports
          </h1>
        </div>
      </div>

      {/* First Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-28 py-10 md:py-20 flex flex-col md:flex-row items-center gap-6 md:gap-18">
        {/* Left Image */}
        <div className="flex-1 flex justify-center mb-6 md:mb-0">
          <img
            src="/ann2.webp"
            alt="Our Story"
            className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="flex-1 text-center md:text-left mt-0 md:-mt-20">
          <h2 className="text-2xl md:text-4xl font-Amaranth text-gray-900">
            Building Trust Through Transparency
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed text-sm md:text-base px-2 md:px-0">
            At POB Trust, we believe that trust is earned through openness.
            Our annual reports provide a comprehensive overview of our yearly
            activities, highlighting the progress we’ve achieved, lives we’ve
            impacted, and the generous contributions of our donors.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxed text-sm md:text-base px-2 md:px-0">
            From education and healthcare to empowerment and community
            development, each report reflects our continued commitment to
            serve humanity with integrity and compassion.
          </p>
        </div>
      </div>


      {/* Reports Section */}
      <div className="max-w-7xl mx-auto px-6 pb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-Amaranth text-gray-900 mb-6 font-Amaranth">
          Our Journey Through the Years
        </h2>
        <p className="text-gray-600 mb-10 max-w-[900px] mx-auto text-center">
          Each year tells a story of compassion, growth, and impact. Explore our
          annual reports to discover the steps POB Trust has taken to uplift
          communities, widen opportunities, and bring light to countless lives
          through dedication and transparency.
        </p>


        {/* Reports Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 px-32 justify-items-center">
          {reports.map((report) => (
            <div
              key={report.year}
              className="bg-gray-100 w-[250px] h-[280px] md:w-[280px] md:h-[280px] mt-5 rounded-2xl overflow-hidden hover:shadow-sm transition-all duration-300"
            >
              <img
                src={report.image}
                alt={`${report.year} Annual Report`}
                className="w-full h-[160px] object-cover rounded-2xl"
              />
              <div className="text-center mt-0">
                <h3 className="font-semibold text-gray-900 text-lg mt-7">
                  {report.year} Annual Report
                </h3>
                <form action={donate}>
                  <button
                    type="submit"
                    className="border border-black px-4 py-2 mt-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300"
                  >
                    Donate Now
                  </button>
                </form>

              </div>
            </div>
          ))}
        </div>


        <div className="text-center mt-8">
          <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-all duration-300">
            View more reports
          </button>
        </div>

      </div>



    </div>
  );
};

export default AnnualReports;
