"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Image_Url } from "../../Utils/const";
import { usePathname } from "next/navigation";

const BlogListClient = ({ blogPosts = [], linkPrefix = "/blog/", initialCount = 6, loading = false, selectedCategory  }) => {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [loadingMore, setLoadingMore] = useState(false);
  
const pathname = usePathname()
  
  const filteredBlogs = useMemo(() =>
    blogPosts.filter((blog) =>
      blog.blog_title.toLowerCase().includes(searchTerm.toLowerCase())
    ), [blogPosts, searchTerm]
  );

  const sorted = useMemo(() =>
    filteredBlogs.sort((a, b) => new Date(b.blog_date) - new Date(a.blog_date)),
    [filteredBlogs]
  );

  const visibleBlogs = sorted.slice(0, visibleCount);

  const handleLoadMore = () => {
    // show a small loading indicator when loading more
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((v) => Math.min(sorted.length, v + initialCount));
      setLoadingMore(false);
    }, 350);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col items-center w-full">
      <input
        type="text"
        placeholder="Search blogs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6 p-2 border rounded w-full max-w-md"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 text-center justify-center w-full">
        {loading ? (
          // Skeleton loaders while data is loading
          Array.from({ length: initialCount }).map((_, i) => (
            <div key={i} className="bg-white rounded shadow h-fit animate-pulse">
              <div className="w-full h-56 bg-gray-200 rounded-t" />
              <div className="p-4 space-y-2 text-center md:text-start">
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto md:mx-0" />
                <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto md:mx-0" />
                <div className="h-8 bg-gray-200 rounded w-24 mx-auto md:mx-0 mt-4" />
              </div>
            </div>
          ))
        ) : visibleBlogs.length === 0 ? (
          <p className="col-span-full flex justify-center text-yellow-500 py-6 font-semibold text-lg sm:text-2xl">
            No items found. 
            <p className=" text-sm">   <br />Try searching for something else  </p>
          </p>
        ) : (
          visibleBlogs.map((post, index) => (
            <div key={index} className="bg-white rounded shadow h-fit">
              <img
                src={`${Image_Url}/${post.main_image}`}
                alt={post.blog_title}
                className="w-full h-56 object-cover rounded-t"
              />
              <div className="p-4 space-y-2 text-center md:text-start">
                <h3 className="text-md font-semibold">{post.blog_title}</h3>
                <p className="text-[10px] text-gray-400 font-Amaranth">
                  {new Date(post.blog_date).toLocaleDateString()}
                </p>
                <Link
                  href={`${linkPrefix}${post?.slug}`}
                  className="text-xs text-white bg-[#F39C12] px-4 py-2 mt-4 rounded inline-block"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))
        )}
      </div>

      {visibleCount < sorted.length && (
        <button
          onClick={handleLoadMore}
          className="mt-8 px-6 py-3 bg-[#F39C12] text-white rounded flex items-center gap-3"
          disabled={loadingMore}
        >
          {loadingMore && (
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
          )}
          <span>{loadingMore ? "Loading..." : "Load More"}</span>
        </button>
      )}
    </div>
  );
};

export default BlogListClient;
