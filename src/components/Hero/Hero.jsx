import React from 'react'
import Slider from 'react-slick'
import headphone from '../../assets/hero/headphone.png'
import glasses from '../../assets/hero/glasses.png'
import laptop from '../../assets/hero/laptop.png'
import Button from '../Shared/Button'

const HeroData = [
  {
    id: 1,
    image:headphone,
    subtitle:"Beats Solo",
    title:"Wireless",
    title2:"Headphones",
  },
  {
    id: 2,
    image:glasses,
    subtitle:"Beats Solo",
    title:"Wireless",
    title2:"Virtual",
  },
  {
    id: 3,
    image:laptop,
    subtitle:"Beats Solo",
    title:"Branded",
    title2:"Laptops",
  },
]
const Hero = ({handleOrderPopup}) => {
  const settings = {
    dots:false,
    arrows:false,
    infinite:true,
    speed:800,
    slidesToScroll:1,
    autoplaySpeed:4000,
    cssEase:"ease-in-out",
    pauseOnHover:false,
    pauseOnFocus:true,
  };
  return (
    <div className='container hero' >
       <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[600px] hero-bg-color flex justify-center items-center'>
        <div className='container pb-8 sm:pb-0'>
          <Slider { ... settings}>
            { HeroData.map((data) =>(
                <div key={data.id}>
                  <div className='grid grid-cols-1 sm:grid-cols-2'>
                      <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm-pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                        <h1 data-aos="zoom-out" data-aos-duration = "500" data-aos-once ="true" className='text-2xl sm:text-6xl lg:text-2xl font-bold'>{data.subtitle}</h1>
                        <h1 data-aos="zoom-out" data-aos-duration = "500" data-aos-once ="true" className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                        <h1 data-aos="zoom-out"  data-aos-duration = "500" data-aos-once ="true" className='text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md-text-[100px] xl:text-[150px] font-bold'>{data.title2}</h1>
                        <div data-aos="fade-up" data-aos-offset="0" data-aos-duration = "500" data-aos-delay ="300">
                          <Button handler= {handleOrderPopup} textColor="text-white" text="Shop By Category" bgColor="bg-primary" />
                        </div>
                      </div>
                      <div className='order-1 sm:order-2'>
                        <div data-aos="zoom-in" data-aos-once ="true" className='relative z-10'>
                          <img src={data.image} className='w-[300px] sm-h-[450px] sm:w-[450px] sm:scale-105 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40 lg:scale-110' alt="" />
                        </div>
                      </div>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
       </div>
    </div>
  )
}

export default Hero
