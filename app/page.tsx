import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Aboutus from './components/Aboutus'
import Stats from './components/Stats'
import Surgerypricing from './components/Surgerypricing'
import Commitment from './components/Commitment'
import Help from './components/Help'
import Leadership from './components/Leadership'
import How from './components/How'
import Random from './components/Random'
import Fools from './components/Fools'
import Footer from './components/Footer'
import Partners from './components/Partners'
import Testimonials from './components/Testimonials'
import News from './components/News'
import Publications from './components/Publications'
import fetchData from "./components/fetchData";
import { ToastContainer } from 'react-toastify'
import { Image_Url } from './components/axios'


const getHomeData = async () => {
  return await fetchData({ url: "home-page/show-data", slug: "home/" });
};
export async function generateMetadata() {
  const home = await getHomeData();
  const CANONICAL = "https://pobtrust.com";
  const BASE_URL = process.env.NEXT_PUBLIC_URL || CANONICAL;

  const featuredImage = home?.pagesSeoDetail?.meta_image
    ? `${Image_Url}${home.pagesSeoDetail.meta_image}`
    : `${BASE_URL}/default-og-image.jpg`;
  return {
    title: home?.pagesSeoDetail?.meta_title || "POB Trust",
    description:
      home?.pagesSeoDetail?.meta_description || "Default description",

    alternates: {
      canonical:
        BASE_URL + home?.pagesSeoDetail?.canonical_url || CANONICAL,
    },

    openGraph: {
      title: home?.pagesSeoDetail?.meta_title || "Default Title",
      description:
        home?.pagesSeoDetail?.meta_description || "Default description",
      url: BASE_URL + home?.pagesSeoDetail?.canonical_url || CANONICAL,


      type: "website",
      images: [
        {
          url: featuredImage,
          width: 1200,
          height: 630,
          alt: home?.pagesSeoDetail?.meta_title || "Home Page Image",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@pob-eye-hospital",
      title: home?.pagesSeoDetail?.meta_title || "Default Title",
      description:
        home?.pagesSeoDetail?.meta_description || "Default description",
      images: [featuredImage],
    },

  };
}


const Home = async () => {
  const home = await getHomeData();

  return (
    <div className='bg-white '>
      {/* <Navbar /> */}
      <Hero />
      <Aboutus />
      <Stats />
      <Surgerypricing />
      <Help />
      <Commitment />
      <Leadership />
      <Partners middleCarouselImages={home?.middleCarouselImages} />
      <How   />
      <Random />
      <Testimonials />
      <News />
      {/* <Publications /> */}
      {/* <Footer />
    <ToastContainer /> */}
    </div>
  )
}

export default Home