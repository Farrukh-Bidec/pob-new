// app/gallery/page.jsx

import Banner from "../Components/Banner/Banner";
import MediaGallery from "../Components/Gallerypage/MediaGallery";
import VideoSection from "../Components/Gallerypage/VideoSection";
import CustomSeo from "../Components/CustomSeo";
import { Image_Url } from "../../Utils/const";
import fetchData from "../Components/fetchData";
import GalleryClient from "./GalleryClient";

// -------------------------------------------
// Server-side fetch function
// -------------------------------------------
const getGalleryData = async () => {
  return await fetchData({
    url: "gallery-page/show-data",
    slug: "gallery/",
  });
};

// -------------------------------------------
// App Router metadata function
// -------------------------------------------
export async function generateMetadata() {
  const gallery = await getGalleryData();

  return {
    title: gallery?.galleryPageSeo?.meta_title || "POB Trust Karachi Gallery",
    description:
      gallery?.galleryPageSeo?.meta_description ||
      "Explore photos and videos of POB Trust Karachi",
    keywords: gallery?.galleryPageSeo?.focus_keyword || undefined,
    alternates: {
      canonical: `https://pobtrust.com${gallery?.galleryPageSeo?.canonical_url}` || gallery?.galleryPageSeo?.canonical_url || undefined,
    },
    openGraph: {
      title: gallery?.galleryPageSeo?.meta_title,
      description: gallery?.galleryPageSeo?.meta_description,
      type: "website",
      images: gallery?.galleryPageSeo?.meta_image
        ? [
          {
            url: `https://pobtrust.com${gallery.galleryPageSeo.meta_image}`,
            width: 1200,
            height: 630,
            alt: gallery?.galleryPageSeo?.meta_title || "Gallery Image",
          },
        ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      site: "@pob-eye-hospital",
      title: gallery?.galleryPageSeo?.meta_title,
      description: gallery?.galleryPageSeo?.meta_description,
      images: gallery?.galleryPageSeo?.meta_image
        ? [`https://pobtrust.com${gallery.galleryPageSeo.meta_image}`]
        : [],
    },
    other: gallery?.galleryPageSeo?.schema
      ? [
        {
          tagName: "script",
          type: "application/ld+json",
          innerHTML: gallery.galleryPageSeo.schema,
        },
      ]
      : [],
  };
}

// -------------------------------------------
// GalleryPage component (default export)
// -------------------------------------------
export default async function GalleryPage() {
  const gallery = await getGalleryData();

  const formattedGalleryImages =
    gallery?.gallery_images?.images?.map((img, index) => ({
      image: `${Image_Url}${img.images}`,
      alt_text: img.alt_name || img.atl_text || "Gallery Image",
      id: index,
    })) || [];


  console.log("formattedGalleryImages", formattedGalleryImages);
  console.log("gallery", gallery);

  return (
    <GalleryClient />
  );
}
// export default async function GalleryPage() {
//   const gallery = await getGalleryData();

//   const formattedGalleryImages =
//     gallery?.gallery_images?.images?.map((img, index) => ({
//       image: `${Image_Url}${img.images}`,
//       alt_text: img.alt_name || img.atl_text || "Gallery Image",
//       id: index,
//     })) || [];


//     console.log("formattedGalleryImages", formattedGalleryImages);
//     console.log("gallery", gallery);

//   return (
//     <div className="pt-20 md:pt-32">
//       {/* ---------------- SEO Rendering ---------------- */}
//       <CustomSeo
//         title={gallery?.galleryPageSeo?.meta_title}
//         des={gallery?.galleryPageSeo?.meta_description}
//         focuskey={gallery?.galleryPageSeo?.focus_keyword}
//         canonicalUrl={gallery?.galleryPageSeo?.canonical_url}
//         schema={gallery?.galleryPageSeo?.schema}
//       />
//       {/* ------------------------------------------------ */}

//       {/* Banner */}
//       <Banner
//         image={`${Image_Url}${gallery?.galleryBannerImage?.banner_image}`}
//       />

//       <h1 className="md:text-6xl text-2xl text-black text-center font-Amaranth px-4 pb-4 rounded-md py-4">
//         Gallery - POB Trust Karachi
//       </h1>

//       {/* Gallery Section */}
//       <MediaGallery
//         gallery_heading={gallery?.gallery_heading}
//         imageGalleryImages={formattedGalleryImages}
//       />

//       {/* Videos */}
//       <VideoSection />
//     </div>
//   );
// }
