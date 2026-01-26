import Navbar from './new_components/Navbar'
import Hero from './new_components/Hero'
import Aboutus from './new_components/Aboutus'
import Stats from './new_components/Stats'
import Surgerypricing from './new_components/Surgerypricing'
import Commitment from './new_components/Commitment'
import Help from './new_components/Help'
import Leadership from './new_components/Leadership'
import How from './new_components/How'
import Random from './new_components/Random'
import Footer from './new_components/Footer'
import Partners from './new_components/Partners'
import Testimonials from './new_components/Testimonials'
import News from './new_components/News'
import Publications from './new_components/Publications'
import  fetchData  from "./new_components/fetchData";
import { ToastContainer } from 'react-toastify'


const getHomeData = async () => {
  return await fetchData({ url: "home-page/show-data", slug: "home/" });
};
export async function generateMetadata() {
  const Image_Url = "https://pob.datainovate.com/backend/"
  const home = await getHomeData();
  const CANONICAL = "https://pobtrust.com";
  const BASE_URL = process.env.NEXT_PUBLIC_URL || CANONICAL;

  const featuredImage = home?.pagesSeoDetail?.meta_image
      ? `${Image_Url}/${home.pagesSeoDetail.meta_image}`
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
    <How />
    <Random />
    <Testimonials />
    <News />
    <Publications />
    {/* <Footer /> */}
    <ToastContainer />
    </div>
  )
}

export default Home