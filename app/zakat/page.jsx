
import Banner from "../Components/Banner/Banner";
import ArabicVerse from "../Components/Donation/ArabicVerse";
import ImpactSection from "../Components/Zakat/ZakatImpact";
import ContactSection from "../Components/ContactSection";
import Pillar from "../Components/Zakat/Pillar";
import Hope from "../Components/Zakat/Hope";
import ZakatImpact from "../Components/ZakatImpact";
import Faqs from "../Components/Home/Faqs";
import { Image_Url } from "../../Utils/const";
import fetchData from "../Components/fetchData";
import CustomSeo from "../Components/CustomSeo";



// SEO metadata
export async function generateMetadata() {
  const zakatData = await fetchData({ url: "zakat-page/show-data", slug: "zakat/" });

  return {
    title: zakatData?.pagesSeoDetail?.meta_title || "Zakat Page",
    description: zakatData?.pagesSeoDetail?.meta_description || "Learn about Zakat with POB Trust",
    keywords: zakatData?.pagesSeoDetail?.focus_keyword || undefined,
    alternates: { canonical: `https://pobtrust.com${zakatData?.pagesSeoDetail?.canonical_url}` || zakatData?.pagesSeoDetail?.canonical_url },
    openGraph: {
      title: zakatData?.pagesSeoDetail?.meta_title,
      description: zakatData?.pagesSeoDetail?.meta_description,
      type: "website",
      images: zakatData?.pagesSeoDetail?.meta_image
        ? [
          {
            url: `https://pobtrust.com${zakatData.pagesSeoDetail.meta_image}`,
            width: 1200,
            height: 630,
            alt: zakatData?.pagesSeoDetail?.meta_title || "Zakat Image",
          },
        ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      site: "@pob-eye-hospital",
      title: zakatData?.pagesSeoDetail?.meta_title,
      description: zakatData?.pagesSeoDetail?.meta_description,
      images: zakatData?.pagesSeoDetail?.meta_image
        ? [`https://pobtrust.com${zakatData.pagesSeoDetail.meta_image}`]
        : [],
    },
    other: zakatData?.pagesSeoDetail?.schema
      ? [
        {
          tagName: "script",
          type: "application/ld+json",
          innerHTML: zakatData.pagesSeoDetail.schema,
        },
      ]
      : [],
  };
}

export default async function ZakatPage() {
  const zakat = await fetchData({ url: "zakat-page/show-data", slug: "zakat/" });

  const arabicVerseTranslation =
    "Zakat is only for the poor and for the needy and for those employed to collect [zakat] and for bringing hearts together [for Islam] and to free those in bondage [or slaves] and for those in debt and for the cause of Allah and for the [stranded] traveller - an obligation [imposed] by Allah. And Allah is Knowing and Wise.";

  return (
    <div className="pt-20 md:pt-32">
      {/* SEO */}
      <CustomSeo
        title={zakat?.pagesSeoDetail?.meta_title}
        des={zakat?.pagesSeoDetail?.meta_description}
        focuskey={zakat?.pagesSeoDetail?.focus_keyword}
        canonicalUrl={zakat?.pagesSeoDetail?.canonical_url}
        schema={zakat?.pagesSeoDetail?.schema}
      />

      <Banner
        title={zakat?.section_1?.image_banner_heading}
        image={`${Image_Url}/${zakat?.section_1?.image_banner}`}
      />
      <ArabicVerse
        img01="/zakatVerse.webp"
        img02="/zakatVerse.webp"
        text={arabicVerseTranslation}
        reference="Surah At-Tawbah (9:60)"
      />
      <div className="px-6 md:px-20">
        <ImpactSection section_2={zakat?.section_2} />
      </div>
      <ContactSection
        heading={zakat?.section_3?.middle_section_heading}
        para={zakat?.section_3?.middle_section_description}
        button={zakat?.section_3?.middle_section_button_text}
      />
      <Pillar section_4={zakat?.section_4} />
      <Hope section_5={zakat?.section_5} />
      <ZakatImpact section_6={zakat?.section_6} />
      <Faqs faqs={zakat?.zakatPageFaqs} />
    </div>
  );
}
