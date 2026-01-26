







import React from 'react';
import Banner from '../Components/Banner/Banner';
import ZakatDonations from '../Components/Home/ZakatDonations';
import SecondCount from '../Components/SecondCount';
import CustomSeo from '../Components/CustomSeo';
import fetchData from '../Components/fetchData';

// const getSponserSurgeriesSeo = async () => {
//   const res = await fetchData({ url: "sponser-surgeries-page/show-data", slug: "sponser-surgeries/" });
//   return { seoData: res || null };
// };

// ===== SEO metadata =====
export async function generateMetadata() {
  // const { seoData } = await getSponserSurgeriesSeo();
  const seoData = await fetchData({ url: "sponser-surgeries-page/show-data", slug: "sponser-surgery/" });
  ("seoData ", seoData)

  return {
    title: seoData?.pagesSeoDetail?.meta_title || " Sponsor a Surgery - Prevention of Blindness Trust (POB)",
    description: seoData?.pagesSeoDetail?.meta_description || " Restore sight and change a life. Donate your Zakat or Sadaqah to POB Trust to sponsor a cataract surgery for those in need. Give the gift of vision today.",
    keywords: seoData?.pagesSeoDetail?.focus_keyword || undefined,
    alternates: { canonical: `https://pobtrust.com/sponser-surgery` },
    openGraph: {
      title: seoData?.pagesSeoDetail?.meta_title,
      description: seoData?.pagesSeoDetail?.meta_description,
      type: "website",
      images: seoData?.pagesSeoDetail?.meta_image
        ? [
          {
            url: `https://pobtrust.com${seoData.pagesSeoDetail.meta_image}`,
            width: 1200,
            height: 630,
            alt: seoData?.pagesSeoDetail?.meta_title || "Sponsor Surgery Image",
          },
        ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      site: "@pob-eye-hospital",
      title: seoData?.pagesSeoDetail?.meta_title,
      description: seoData?.pagesSeoDetail?.meta_description,
      images: seoData?.pagesSeoDetail?.meta_image
        ? [`https://pobtrust.com${seoData.pagesSeoDetail.meta_image}`]
        : [],
    },
    other: seoData?.pagesSeoDetail?.schema
      ? [
        {
          tagName: "script",
          type: "application/ld+json",
          innerHTML: seoData.pagesSeoDetail.schema,
        },
      ]
      : [],
  };
}

// ===== Page Component =====
const SponserSurgeries = () => {
  return (
    <div className='pt-32'>
      <CustomSeo
        title={"Sponser Surgeries"}
        des={"Join us to sponser surgeries and save lives"}
        focuskey={undefined}
        canonicalUrl={undefined}
        schema={undefined}
      />

      <Banner
        title={"Sponser Surgeries"}
        image={`/aboutBanner.webp`}
      />
      <ZakatDonations />
      <SecondCount />
    </div>
  );
}

export default SponserSurgeries;

