import Link from "next/link";
import Header from './components/Header'
import Frontpage from "./components/Frontpage";
import Footer from "./components/Footer"

export default function Home() {

  return (
    <>
      <Header/>
      <Frontpage />
      <Footer/>
    </>
  );
}
