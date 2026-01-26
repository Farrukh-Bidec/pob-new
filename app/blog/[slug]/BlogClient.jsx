"use client";

import React, { useState, useEffect } from "react";
import axios from "../../../Utils/axios";
import { Image_Url } from "../../../Utils/const";
import { BlogBanner } from "../../Components/BlogBanner";
import CustomSeo from "../../Components/CustomSeo";
import * as DOMPurify from "isomorphic-dompurify";
import { useRouter, usePathname } from "next/navigation";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
import { RxCross2 } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function BlogClient() {
  const router = useRouter();
  const pathname = usePathname(); // Get current URL path
  const slug = pathname.split("/blog/")[1];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [featuredBlogs, setFeaturedBlogs] = useState(null);



  // Fetch Categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.public.post("blog-categories/index");
        setCategories(res.data.data);


      } catch (err) {
        console.error(err);
      }
    };

    fetchCategories();
  }, []);

  // Fetch Blog Details
  useEffect(() => {
    const fetchBlogDetails = async () => {
      setLoading(true);

      try {
        const response = await axios.public.post("blogs/detail", {
          blog_slug: slug,
        });
        setBlog(response.data.data);
        setFeaturedBlogs(response?.data?.featured_blogs)
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }

      setLoading(false);
    };

    fetchBlogDetails();
  }, [slug]);


  if (!loading && !blog) {
    return (
      <div className="py-20 md:py-52 text-center  text-white flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide uppercase text-yellow-400 drop-shadow-lg">
          No Content Found
        </h1>
        <p className="text-lg md:text-xl text-gray-900 max-w-md">
          Sorry, we couldn’t find any items matching your search. Try adjusting your filters or check back later.
        </p>
      </div>

    );
  }

  // Navigate to category page with query parameter
  const handleCategoryClick = (slug) => {
    router.push(`/blog`);
    localStorage.setItem("selectedCategory", slug);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const editorConfig = {
    readonly: true,
    toolbar: false,
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    showPoweredBy: false,
  };



  return (
    <div className="pt-20 md:pt-32">
      <CustomSeo
        title={blog?.meta_title}
        des={blog?.meta_description}
        focuskey={blog?.focus_keyword}
        canonicalUrl={blog?.canonical_url}
        schema={blog?.schema}
      />
      {/* <Banner image="/aboutBanner.webp" /> */}
      <BlogBanner
        title={blog?.blog_title}
        image={`${Image_Url}${blog?.main_image}`}
        status={true}
      />
      <div className="px-5 md:px-10 py-6 md:py-8">
        <div className="flex md:flex-row flex-col mt-4">
          {/* Sidebar */}
          <div
            className={`fixed lg:static lg:flex top-0 left-0 w-2/3 lg:w-[20%] flex-col gap-[20px] h-auto overflow-yscroll bg-white pr-4 lg:rounded-lg z-10 transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              } lg:translate-x-0`}
          >
            {/* Mobile Close */}
            <div className="lg:hidden flex justify-end">
              <button onClick={toggleSidebar} className="text-xl p-2">
                <RxCross2 />
              </button>
            </div>

            {/* Categories */}
            <div>
              <h2 className="text-lg font-normal md:text-[20px] font-montserrat text-black mb-4">
                Categories
              </h2>
              <div
                className={`grid gap-3 rounded-[10px] p-3 ${categories.length > 5 ? "max-h-[300px] overflow-y-auto" : ""
                  }`}
              >
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="relative cursor-pointer pb-2 md:pb-8 border-b border-[#D9D9D9]"
                    onClick={() => handleCategoryClick(category.slug)}
                  >
                    <span className="font-montserrat absolute inset-0 text-[15px] text-black flex items-center">
                      {category.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <div className="md:w-[65%] md:p-8">
            <h1 className="text-4xl font-newsLetter  text-center md:text-start mb-6">
              {blog?.blog_title}
            </h1>

            <div className="w-full md:w-[90%] text-center md:text-start jodit-editor"
              dangerouslySetInnerHTML={{ __html: blog?.blog_body }}>
            </div>


          </div>

          {/* Featured Blogs */}
          <div className="flex flex-col items-center md:w-[15%]">
            <h2 className="text-xl font-normal md:text-2xl font-montserrat text-black mb-4">
              Featured Blogs
            </h2>

            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={10}
              className="w-full"
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: true,
              }}
            >
              {Array.isArray(featuredBlogs) && featuredBlogs.length > 0 ? (
                featuredBlogs.map((blog, index) => (
                  <SwiperSlide key={blog.slug || index}>
                    <a href={`/blog/${blog.slug}`} className="block">
                      <div className="flex flex-col gap-3">
                        <img
                          src={`${Image_Url}${blog.main_image}`}
                          alt={blog.main_image_alt || blog.blog_title}
                          className="w-full h-auto md:h-70 rounded-lg object-cover"
                        />
                        <h3 className="text-lg font-montserrat font-semibold text-black line-clamp-2">
                          {blog.blog_title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-3">
                          {blog.meta_description}
                        </p>
                      </div>
                    </a>
                  </SwiperSlide>
                ))
              ) : (
                <SwiperSlide>
                  <div className="text-center text-gray-500">
                    No featured blogs available
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
