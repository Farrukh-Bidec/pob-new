// "use client";

// import { useState, useEffect } from "react";
import "./globals.css";
// import Footer from "./Components/Footer";
import FloatingButtons from "./Components/FloatingButtons";
import LoaderWrapper from "./Components/LoaderWrapper";
import Navbar from "./new_components/Navbar";
import Footer from "./new_components/Footer"

export const metadata = {
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    images: [
      {
        url: "https://pob.datainovate.com/backend//storage/app/home_page_slider/924163_1752845154.webp",
        width: 1200,
        height: 630,
        alt: "POB",
      },
    ],
  },
};
export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className="antialiased relative">
        <>
          <Navbar />
          <FloatingButtons />
          <LoaderWrapper>
            <main>{children}</main>
          </LoaderWrapper>
          <Footer />
        </>
      </body>
    </html>
  );
}

