import axios from "axios";
import Banner from "../Components/Banner/Banner";
import CustomSeo from "../Components/CustomSeo";
import Faqs from "../Components/Home/Faqs";
import ContactSection from "../Components/ContactSection";
import { Image_Url } from "../../Utils/const";
import ArabicVerse from "../Components/Donation/ArabicVerse";
import Vision2 from "../Components/Waqf/Vision2";
import WaqfSection from "../Components/Waqf/WaqfSection";
import ImpactSection from "../Components/Waqf/ImpactSection";
import WaqfBenefits from "../Components/Waqf/WaqfBenefits";
import DonationSection from "../Components/Waqf/DonationSection";

// export const dynamic = "force-dynamic";

// Define Base URL based on environment
const BASE_URL =
  process.env.NEXT_PUBLIC_API_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_URL_LIVE
    : process.env.NEXT_PUBLIC_API_URL_LOCAL;

// Robust fetch function matching Blog page fix
const getWaqfPageData = async () => {
  try {
    const apiUrl = `${BASE_URL}waqf-page/show-data`;
    // (`Fetching Waqf data from: ${apiUrl}`);

    const res = await axios.post(apiUrl, { slug: "waqf/" }, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });

    return res.data?.data || null;
  } catch (error) {
    console.error("Error fetching waqf data:");
    if (error.response) {
      console.error("Data:", error.response.data);
      console.error("Status:", error.response.status);
    } else if (error.request) {
      console.error("No response received", error.request);
    } else {
      console.error("Error message:", error.message);
    }
    return null;
  }
};

// SEO metadata
export async function generateMetadata() {
  const waqfData = await getWaqfPageData();

  if (!waqfData) {
    return {
      title: "Waqf - Error",
      description: "Unable to load Waqf data."
    };
  }

  return {
    title: waqfData?.pagesSeoDetail?.meta_title || "Waqf Page",
    description: waqfData?.pagesSeoDetail?.meta_description || "Learn about Waqf with POB Trust",
    keywords: waqfData?.pagesSeoDetail?.focus_keyword || undefined,
    alternates: { canonical: `https://pobtrust.com${waqfData?.pagesSeoDetail?.canonical_url}` },
    openGraph: {
      title: waqfData?.pagesSeoDetail?.meta_title,
      description: waqfData?.pagesSeoDetail?.meta_description,
      type: "website",
      images: waqfData?.pagesSeoDetail?.meta_image
        ? [
          {
            url: `https://pobtrust.com${waqfData.pagesSeoDetail.meta_image}`,
            width: 1200,
            height: 630,
            alt: waqfData?.pagesSeoDetail?.meta_title || "Waqf Image",
          },
        ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      site: "@pob-eye-hospital",
      title: waqfData?.pagesSeoDetail?.meta_title,
      description: waqfData?.pagesSeoDetail?.meta_description,
      images: waqfData?.pagesSeoDetail?.meta_image
        ? [`https://pobtrust.com${waqfData.pagesSeoDetail.meta_image}`]
        : [],
    },
    other: waqfData?.pagesSeoDetail?.schema
      ? [
        {
          tagName: "script",
          type: "application/ld+json",
          innerHTML: waqfData.pagesSeoDetail.schema,
        },
      ]
      : [],
  };
}

export default async function WaqfPage() {
  const arabicVerseTranslation =
    "Whatever Allah has bestowed upon His Messenger from the people of the towns—[it is] for Allah ... indeed, Allah is severe in penalty.";

  const waqf = await getWaqfPageData();

  if (!waqf) {
    return (
      <div className="pt-32 text-center text-gray-500 min-h-[50vh] flex items-center justify-center">
        <p>Unable to load page content. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="pt-20 md:pt-32">
      {/* SEO */}
      <CustomSeo
        title={waqf?.pagesSeoDetail?.meta_title}
        des={waqf?.pagesSeoDetail?.meta_description}
        focuskey={waqf?.pagesSeoDetail?.focus_keyword}
        canonicalUrl={waqf?.pagesSeoDetail?.canonical_url}
        schema={waqf?.pagesSeoDetail?.schema}
      />

      <Banner
        title={waqf?.section_1?.banner_heading}
        image={`${Image_Url}/${waqf?.section_1?.banner_image}`}
      />

      <ArabicVerse
        img01="/waqfVerse.webp"
        img02="/waqfVerse2.webp"
        text={arabicVerseTranslation}
      />

      <Vision2 section_2={waqf?.section_2} />
      <WaqfSection section_3={waqf?.section_3} />

      <div className="px-6 md:px-20">
        <ImpactSection section_4={waqf?.section_4} />
      </div>

      <ContactSection
        heading={waqf?.section_5?.section_5_heading}
        para={waqf?.section_5?.section_5_description}
        button="Contact Us"
      />

      <WaqfBenefits section_6={waqf?.section_6} />

      <DonationSection section_7={waqf?.section_7} />

      <Faqs faqs={waqf?.zakatPageFaqs} />
    </div>
  );
}
