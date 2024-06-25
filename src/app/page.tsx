import Header from './components/Header'
import Frontpage from "./components/Frontpage";
import Footer from "./components/Footer"
import axios from 'axios';

export async function generateMetadata(){

  const metadata = await axios.get(`${process.env.WP_SITE}wp-json/wp/v2/uts_seo_data`,
      { params: { type: 'page',slug:'home' } }
  )
  return {
      title: metadata.data.title,
      description:metadata.data.description,
      keywords:metadata.data.focus,
      robots: {
          index: metadata.data.robot_index,
          follow: metadata.data.robot_follow,
      },        
  }
}


export default function Home() {

  return (
    <>
      <Header/>
      <Frontpage />
      <Footer/>
    </>
  );
}
