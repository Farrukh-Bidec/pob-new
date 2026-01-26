import Banner from "../Components/Banner/Banner";
import CustomSeo from "../Components/CustomSeo";
import BlogsClient from "./BlogsClient";

export const dynamic = 'force-dynamic';

const BASE_URL =
  process.env.NEXT_PUBLIC_API_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_URL_LIVE
    : process.env.NEXT_PUBLIC_API_URL_LOCAL;

const getBlogs = async (categorySlug = "") => {
  try {
    const res = await fetch(`${BASE_URL}blogs/index`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ blog_category_slug: categorySlug, slug: "blogs/" }),
      cache: "no-store",
    });
    if (!res.ok) return { posts: [], seo: {} };
    const data = await res.json();
    return {
      posts: data.data || [],
      seo: data || {},
    };
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return { posts: [], seo: {} };
  }
};
export async function generateMetadata() {
  const { seo } = await getBlogs();
  return {
    title: seo?.blogSeoDetail?.meta_title || "Blogs",
    description: seo?.blogSeoDetail?.meta_description || "POB Trust Blogs",
    alternates: {
      canonical:
        process.env.NEXT_PUBLIC_URL + "/blog",
    },
    openGraph: {
      title: seo?.blogSeoDetail?.meta_title || "Blogs",
      description: seo?.blogSeoDetail?.meta_description || "POB Trust Blogs",
      url: process.env.NEXT_PUBLIC_URL + "/blogs",
      type: "website",
      images: seo?.blogSeoDetail?.meta_image
        ? [
          {
            url: `https://pobtrust.com${seo.blogSeoDetail.meta_image}`,
            width: 1200,
            height: 630,
            alt: seo?.blogSeoDetail?.meta_title || "Blogs Image",
          },
        ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      site: "@pob-eye-hospital",
      title: seo?.blogSeoDetail?.meta_title || "Blogs",
      description: seo?.blogSeoDetail?.meta_description || "POB Trust Blogs",
      images: seo?.blogSeoDetail?.meta_image
        ? [`https://pobtrust.com${seo.blogSeoDetail.meta_image}`]
        : [],
    },
  };
}
const getCategories = async () => {
  const res = await fetch(`${BASE_URL}blog-categories/index`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ slug: "", type: "1" }),
    cache: "no-store",
  });
  const data = await res.json();
  return data?.data || [];
};
export default async function BlogsPage() {
  const categories = await getCategories();

  return (
    <div className="pt-20 md:pt-32">
      <Banner image="/aboutBanner.webp" />
      <h1 className="md:text-6xl text-2xl text-black text-center font-Amaranth px-4 pb-4 rounded-md">
        Blogs by POB Trust
      </h1>

      <BlogsClient categories={categories} />
    </div>
  );
}
