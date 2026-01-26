"use client"
import React, { useState } from "react";



const MediaGallery = ({ imageGalleryImages = [], gallery_heading }) => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // preload images helper - resolves when all images in `urls` have fired load/error
  const preloadImages = (urls = []) => {
    const loaders = urls.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
        })
    );
    // fallback timeout in case some images hang
    const timeout = new Promise((resolve) => setTimeout(resolve, 1500));
    return Promise.race([Promise.all(loaders), timeout]);
  };

  const showMoreImages = async () => {
    // if already loading or nothing more to load, ignore
    if (isLoadingMore || visibleCount >= imageGalleryImages.length) return;

    setIsLoadingMore(true);

    const nextBatch = 6;
    const nextSlice = imageGalleryImages.slice(visibleCount, visibleCount + nextBatch);
    const urls = nextSlice.map((it) => it?.image).filter(Boolean);

    try {
      await preloadImages(urls);
    } catch (e) {
      // ignore preload errors — we'll still reveal the images
    }

    setVisibleCount((prev) => prev + nextBatch);
    setIsLoadingMore(false);
  };

  return (
    <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="w-full 3xl:max-w-[85%] mx-auto">
        {/* Header & Highlight Section */}
        <div className="flex flex-wrap md:flex-nowrap gap-6 items-center">
          {/* Left Side */}
          <div className="text-center md:text-left flex-1 min-w-[300px]">
            <div className="md:h-[250px]">
              <p className="text-yellow-500 uppercase tracking-wider text-lg font-Amaranth">
                Media Gallery
              </p>
              {/* <h2 className="text-3xl sm:text-4xl md:text-5xl mt-2 leading-tight font-Amaranth ">
                {gallery_heading?.gallery_heading
                  ?.match(/.{1,14}/g) // split string into chunks of 10 characters
                  .map((chunk, index) => (
                    <span key={index}>
                      {chunk}
                      <br />
                    </span>
                  ))}
              </h2> */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl mt-2 leading-tight font-Amaranth">
                {gallery_heading?.gallery_heading
                  ?.split(" ") // split into words
                  .map((word, index) => (
                    <React.Fragment key={index}>
                      {word} {word.toLowerCase() === "moments" && <br />}{" "}
                      {/* break after "moments" */}
                    </React.Fragment>
                  ))}
              </h2>
            </div>
            <div className="w-full h-[250px] sm:h-[280px] mt-12 mx-auto md:mx-0">
              {imageGalleryImages?.length > 0 && (
                <img
                  src={`${imageGalleryImages[0].image}`}
                  alt={imageGalleryImages[0].alt_text || "Gallery"}
                  className="w-full h-full object-cover rounded-xl"
                />
              )}
            </div>
          </div>

          {/* First 2 images */}
          <div className="flex flex-col gap-4 flex-1 min-w-[300px]">
            {imageGalleryImages?.slice(1, 3).map((image, index) => (
              <div key={image.id} className="w-full h-[250px] sm:h-[280px]">
                <img
                  src={`${image.image}`}
                  alt={image.alt_text || `Gallery ${index + 2}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>

          {/* Next 2 images */}
          <div className="hidden md:flex flex-col gap-4 flex-1 min-w-[300px]">
            {imageGalleryImages?.slice(3, 5).map((image, index) => (
              <div key={image.id} className="w-full h-[250px] sm:h-[280px]">
                <img
                  src={`${image.image}`}
                  alt={image.alt_text || `Gallery ${index + 4}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Grid of images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          {imageGalleryImages?.slice(5, visibleCount).map((image, index) => (
            <div key={image.id} className="w-full h-[220px]">
              <img
                src={`${image.image}`}
                alt={image.alt_text || `Gallery ${index + 6}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}

          {/* Skeleton placeholders shown while loading next batch */}
          {isLoadingMore &&
            Array.from({ length: Math.min(6, Math.max(0, imageGalleryImages.length - visibleCount)) }).map((_, i) => (
              <div key={`skeleton-${i}`} className="w-full h-[220px]">
                <div className="w-full h-full bg-gray-200 rounded-xl animate-pulse" aria-hidden="true" />
              </div>
            ))}
        </div>

        {/* Load More Button */}
        {visibleCount < imageGalleryImages.length && (
          <div className="text-center mt-10">
            <button
              onClick={showMoreImages}
              disabled={isLoadingMore}
              aria-busy={isLoadingMore}
              className={`cursor-pointer px-8 py-3 border border-black rounded-full transition ${isLoadingMore ? "opacity-70 cursor-wait" : "hover:bg-black hover:text-white"}`}
            >
              {isLoadingMore ? "Loading..." : "Load More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MediaGallery;
