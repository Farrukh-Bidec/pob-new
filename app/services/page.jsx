// app/services/page.jsx

import Banner from "../Components/Service/Banner";
import AboutUs from "../Components/ServicesList/AboutUs";
import CataractSurgeries from "../Components/ServicesList/CataractSurgeries";
import Diagnostics from "../Components/ServicesList/Diagnostics";
import DonationSection from "../Components/ServicesList/DonationSection";
import EyeCareCTA from "../Components/ServicesList/EyeCareCTA";
import EyeExams from "../Components/ServicesList/EyeExams";
import GlaucomaCare from "../Components/ServicesList/GlaucomaCare";
import LaserTherapy from "../Components/ServicesList/LaserTherapy";
import LaserTreatment from "../Components/ServicesList/LaserTreatent";
import OrbitDisorder from "../Components/ServicesList/OrbitDisorder";
import Purpose from "../Components/ServicesList/Purpose";
import RetinaExcellence from "../Components/ServicesList/RetinaExcellence";
import Section2 from "../Components/ServicesList/Section2";
import Faqs from "../Components/Home/Faqs";
import fetchData from "../Components/fetchData";

// -------------------------------------------
// Server-side fetch function
// -------------------------------------------
const getServiceData = async () => {
  ("Fetching service data...");
  return await fetchData({
    url: "services-pages/detail/",
    slug: "services/",
  });
};

// -------------------------------------------
// App Router metadata function
// -------------------------------------------
export async function generateMetadata() {
  // const service = await getServiceData();
  const service = await fetchData({ url: "services-pages/detail/", slug: "services/" });

  ("service seo", service);


  return {
    title: service?.meta_title || "Free Eye Care Services | POB Trust - Prevent Blindness Services",
    description: service?.meta_description || "Explore POB Trust's free eye care services ,including eye exams ,surgical camps, screenings & treatment for underserved communities to prevent avoidable blindness.",
    keywords: service?.focus_keyword || undefined,
    alternates: {
      canonical: process.env.NEXT_PUBLIC_URL + '/services/' || '/services/',
    },
    openGraph: {
      title: service?.meta_title,
      description: service?.meta_description,
      type: "website",
      images: service?.meta_image
        ? [
          {
            url: `https://pobtrust.com${service.meta_image}`,
            width: 1200,
            height: 630,
            alt: service?.meta_title || "Services Image",
          },
        ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      site: "@pob-eye-hospital",
      title: service?.meta_title,
      description: service?.meta_description,
      images: service?.meta_image
        ? [`https://pobtrust.com${service.meta_image}`]
        : [],
    },
    other: service?.schema
      ? [
        {
          tagName: "script",
          type: "application/ld+json",
          innerHTML: service.schema,
        },
      ]
      : [],
  };
}

// -------------------------------------------
// ServiceList component (default export)
// -------------------------------------------
export default async function ServiceList() {

  const pages_faq_details = [
    {
      top_heading: "FAQs",
      main_heading: "Frequently Asked Questions",
      pages_faq_details: [
        {
          id: 7,
          question: "Do I need a referral to visit the clinic?",
          answer: "<p>No referral is needed. You can directly book an appointment.<br></p>",
        },
        {
          id: 8,
          question: "How often should I get my eyes checked?",
          answer: "<p>We recommend annual check-ups.</p>",
        },
        {
          id: 9,
          question: "What types of surgeries are performed?",
          answer: "<p>We offer cataract, glaucoma, oculoplastic & retina surgeries.</p>",
        },
        {
          id: 10,
          question: "Is laser treatment painful?",
          answer: "<p>It is quick and painless. Numbing drops are used.</p>",
        },
        {
          id: 11,
          question: "What payment options do you accept?",
          answer: "<p>We accept insurance and flexible payment options.</p>",
        },
      ],
    },
  ];

  return (
    <div className="pt-32">
      <Banner
        title="All-inclusive Eye Care Services at POB Eye Hospital"
        image="/servicebg.webp"
      />

      <EyeExams slug="general-ophthalmology-screening-clinic" />
      <CataractSurgeries slug="oculoplasty-and-orbit" />
      <GlaucomaCare slug="medical-surgical-retina" />
      <Purpose
        slug="optometry-care"
        yellowHead="Comprehensive Optometry Services"
        head="Everyday Eye Care You Can Trust"
        btnName="Donate Now"
      />
      <RetinaExcellence slug="diabetic-eye-care" />
      <DonationSection
        slug="diagnostic-services"
        yellowHead="Get Your Diagnosis Done on Time"
        head="Our Specialized Diagnostic Services for Eye Health"
        img="/donationAbout.webp"
      />
      <OrbitDisorder slug="pediatric-eye-care" />
      <LaserTreatment
        title="Neuro-Ophthalmology"
        subtitle="Specialized Care For Eye-Brain Connection"
        description="Neuro-ophthalmology deals with vision problems linked with the brain..."
        buttonText="/neuro-ophthalmology/"
        slug="neuro-ophthalmology"
        image="/service2.webp"
        alt="An elderly man undergoing an eye examination using a slit lamp, assisted by a female doctor."
      />
      <AboutUs
        slug="cataract-extractions"
        yellowHead="Glaucoma Care"
        head="Protecting Sight, Preserving Life"
        btnName="View service details"
      />
      <LaserTreatment
        title="Glaucoma"
        subtitle="Protecting Sight With Early Treatment"
        description="Glaucoma silently damages the optic nerve..."
        buttonText="/glaucoma/"
        slug="glaucoma"
        image="/service5.webp"
        alt="Doctor performing eye surgery using a microscope, wearing protective gear."
      />
      <Section2 slug="vitreoretina" />
      <Diagnostics
        slug="corneal-diseases"
        section_11_main_heading="Corneal Diseases & Grafts with Personalized Care"
        section_11_sub_heading="Restoring Clarity and Comfort"
      />
      <LaserTherapy slug="laser-treatments" />
      <EyeCareCTA />
      <Faqs faqs={pages_faq_details} />
    </div>
  );
}
