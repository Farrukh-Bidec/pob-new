"use client";
import { useEffect, useState } from "react";
import BlogListClient from "../Components/BlogListClient";
import CategoryFilter from "../Components/CategoryFilter";
import { Image_Url } from "../../Utils/const";
import Link from "next/link";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_URL_LIVE
    : process.env.NEXT_PUBLIC_API_URL_LOCAL;

export default function BlogsClient({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [blogPosts, setBlogPosts] = useState([]);

  // Fetch category from localStorage and load blogs
  useEffect(() => {
    const savedCategory = localStorage.getItem("selectedCategory") || "";
    setSelectedCategory(savedCategory);

    const fetchBlogs = async () => {
      const res = await fetch(`${BASE_URL}blogs/index`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ blog_category_slug: savedCategory, slug: "blogs/" }),
      });
      const data = await res.json();
      setBlogPosts(data.data || []);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
      {/* Sidebar */}
      <div className="hidden md:block md:col-span-1 space-y-10">
        <div className="relative">
          {/* <input
            type="text"
            placeholder="Search"
            className="w-full border px-4 py-2 rounded focus:outline-none"
          /> */}
          
        </div>

        <div>
          <CategoryFilter
  categories={categories}
  selectedCategory={selectedCategory}
  onCategoryChange={async (newCategory) => {
    setSelectedCategory(newCategory);

    // Refetch blogs for new category
    const res = await fetch(`${BASE_URL}blogs/index`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ blog_category_slug: newCategory, slug: "blogs/" }),
    });
    const data = await res.json();
    setBlogPosts(data.data || []);
  }}
/>

        </div>

        {/* Recent posts */}
        <div className="space-y-4">
          {blogPosts
            .sort((a, b) => new Date(b.blog_date) - new Date(a.blog_date))
            .slice(0, 5)
            .map((post, idx) => (
              <Link
                href={`/blog/${post?.slug}`}
                key={idx}
                className="flex items-center gap-3 border px-2 py-2 rounded hover:bg-gray-100"
              >
                <img
                  src={`${Image_Url}/${post.main_image}`}
                  alt={post.blog_title}
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="text-sm">
                  <p className="text-gray-700">{post.blog_title}</p>
                  <p className="text-gray-400 text-[10px] font-Amaranth">
                    {post.blog_date}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>

      {/* Blog Posts */}
      <div className="md:col-span-3">
        <BlogListClient
          blogPosts={blogPosts}
          linkPrefix={"/blog/"}
          initialCount={6}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
}
