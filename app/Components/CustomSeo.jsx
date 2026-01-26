import Head from "next/head";

const CustomSeo = ({ title, des, focuskey, canonicalUrl, schema }) => {
  const mainUrl = typeof window !== "undefined" ? window.location.origin : "";

  // Build full canonical URL
  const fullCanonicalUrl = canonicalUrl
    ? canonicalUrl.startsWith("http")
      ? canonicalUrl
      : `${mainUrl}${canonicalUrl}`
    : null;
  return (
    <Head>
      {/* Title */}
      <title>{title}</title>

      {/* Meta Description */}
      {des && <meta name="description" content={des} />}

      {/* Focus Keyword */}
      {focuskey && <meta name="keywords" content={focuskey} />}

      {/* Canonical URL */}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}

      {/* Open Graph Image */}
      <meta property="og:image" content="https://pob.datainovate.com/backend//storage/app/home_page_slider/924163_1752845154.webp" />

      {/* Schema markup */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      )}
    </Head>
  );
};

export default CustomSeo;
