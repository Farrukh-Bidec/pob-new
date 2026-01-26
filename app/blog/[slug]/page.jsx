import axios from "axios"; // Direct axios import to avoid client-side interceptors on server
import BlogClient from "./BlogClient";

// Define Base URL based on environment
const BASE_URL =
  process.env.NEXT_PUBLIC_API_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_URL_LIVE
    : process.env.NEXT_PUBLIC_API_URL_LOCAL;

// Fetch Blog Details Server-side
const getBlogSeoData = async (slug) => {
  try {
    const apiUrl = `${BASE_URL}blogs/detail`;

    const res = await axios.post(apiUrl, { blog_slug: `${slug}/` }, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });

    return res.data?.data || null;
  } catch (error) {
    console.error("Error fetching blog details:");
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Data:", error.response.data);
      console.error("Status:", error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error message:", error.message);
    }
    return null;
  }
};

// ------- SEO generation --------
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlogSeoData(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | POB Trust",
      description: "Requested blog does not exist."
    };
  }

  return {
    title: blog.meta_title || blog.blog_title,
    description: blog.meta_description,
    keywords: blog.focus_keyword,
    alternates: {
      canonical: blog.canonical_url
        ? `${process.env.NEXT_PUBLIC_URL}/blog/${blog.canonical_url}`
        : `${process.env.NEXT_PUBLIC_URL}/blog/${slug}`,
    },
    openGraph: {
      title: blog.meta_title || blog.blog_title,
      description: blog.meta_description,
      type: "article",
      images: blog.main_image
        ? [
            {
              url: `${process.env.NEXT_PUBLIC_IMAGE_URL}${blog.main_image}`,
              width: 1200,
              height: 630,
              alt: blog.meta_title || blog.blog_title || "Blog Image",
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      site: "@pob-eye-hospital",
      title: blog.meta_title,
      description: blog.meta_description,
      images: blog.main_image
        ? [`${process.env.NEXT_PUBLIC_IMAGE_URL}${blog.main_image}`]
        : [],
    }
  };
}

// ---------- Render Page (Client component loads full blog) ----------
export default async function Page({ params }) {
  const { slug } = await params;
  // We can fetch here if needed to pass initial data to client, 
  // but the current architecture seems to fetch again in client or just rely on client.
  // The user only complained about SEO (metadata) not working, which generateMetadata handles.
  // However, I'll keep the await params here to prevent runtime errors.

  return <BlogClient />;
}
