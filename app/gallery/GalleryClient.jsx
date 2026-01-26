'use client'
import React, { useEffect, useState } from 'react'
import CustomSeo from '../Components/CustomSeo';
import Banner from '../Components/Banner/Banner';
import MediaGallery from '../Components/Gallerypage/MediaGallery';
import VideoSection from '../Components/Gallerypage/VideoSection';
import { Image_Url } from '../components/axios';
import fetchData from '../Components/fetchData';

const getGalleryData = async () => {
    return await fetchData({
        url: "gallery-page/show-data",
        slug: "gallery/",
    });
};

const GalleryClient = () => {
    const [gallery, setGallery] = useState(null);

    useEffect(() => {
        const fetchGallery = async () => {
            const galleryData = await getGalleryData();
            setGallery(galleryData);
        };
        fetchGallery();
    }, []);

    const formattedGalleryImages =
        gallery?.gallery_images?.images?.map((img, index) => ({
            image: `${Image_Url}/${img.images}`,
            alt_text: img.alt_name || img.atl_text || "Gallery Image",
            id: index,
        })) || [];

    useEffect(() => {
        console.log("formattedGalleryImages", formattedGalleryImages);
        console.log("gallery", gallery);
    }, [gallery]);


    return (
        <div className="pt-20 md:pt-32">
            {/* ---------------- SEO Rendering ---------------- */}
            <CustomSeo
                title={gallery?.galleryPageSeo?.meta_title}
                des={gallery?.galleryPageSeo?.meta_description}
                focuskey={gallery?.galleryPageSeo?.focus_keyword}
                canonicalUrl={gallery?.galleryPageSeo?.canonical_url}
                schema={gallery?.galleryPageSeo?.schema}
            />
            {/* ------------------------------------------------ */}

            {/* Banner */}
            <Banner
                image={`${Image_Url}${gallery?.galleryBannerImage?.banner_image}`}
            />

            <h1 className="md:text-6xl text-2xl text-black text-center font-Amaranth px-4 pb-4 rounded-md py-4">
                Gallery - POB Trust Karachi
            </h1>

            {/* Gallery Section */}
            <MediaGallery
                gallery_heading={gallery?.gallery_heading}
                imageGalleryImages={formattedGalleryImages}
            />

            {/* Videos */}
            <VideoSection />
        </div>
    );
}

export default GalleryClient