import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import headphone from '../src/assets/hero/headphone.png'
import Products from './components/Products/Products'
import wrist from '../src/assets/hero/wrist.png'
import Blogs from './components/Blogs/Blogs'
import Partners from './components/Partners/Partners'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'
import AOS from "aos";
import "aos/dist/aos.css";

const BannerData = {
  discount: "30% OFF",
  title:"Fine Smile",
  date:"10 Jan to 28 Jan",
  image:headphone,
  title2:"Air Solo Bass",
  title3:"Winter Sale",
  title4:"Experience the ultimate sound quality with our winter sale! For a limited time, enjoy a 30% discount on all headphones and elevate your listening experience this season. ",
  bgColor:"#f42c37",
}

const BannerData2 = {
  discount: "30% OFF",
  title:"Happy Hours",
  date:"10 Jan to 28 Jan",
  image:wrist,
  title2:"Smart Watch",
  title3:"Winter Sale",
  title4:" Experience the ultimate style and precision with our winter sale! For a limited time, enjoy a 30% discount on all wristwatches and elevate your timekeeping experience this season. ",
  bgColor:"#2dcc6f",
}

const App = () => {

  const [orderPopup, setOrderPopup] = React.useState(false);
  const handleOrderPopup = () =>{
    setOrderPopup(!orderPopup);
  };

  React.useEffect(()=>{
    AOS.init(
      {
        duration:800,
        easing: "ease-in-sine",
        delay:100,
        offset:100,
      }
    );
    AOS.refresh()
  },[])
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar handleOrderPopup = {handleOrderPopup}/>
      <Hero handleOrderPopup = {handleOrderPopup}/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner data={BannerData}/>
      <Products/>
      <Banner data={BannerData2}/>
      <Blogs/>
      <Partners/>
      <Footer/>
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup}/>
    </div>
  )
}

export default App
