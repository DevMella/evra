import React from 'react'
import man from '../../assets/hero/man.jpg'
import gad from '../../assets/hero/gad.jpg'
import boy from '../../assets/hero/boy.jpg'
import Heading from '../Shared/Heading'


const BlogData =[
    {
        title:"How to choose perfect smartwatch",
        subtitle:"Choose the perfect smartwatch by focusing on compatibility, battery life, and fitness tracking. Make a smart choice to enhance your daily routine",
        published:"Dec 20, 2023 by Mella ",
        image:man,
        aosDelay:"0",
    },
    {
        title:"How to choose perfect gadget",
        subtitle:"To choose the perfect gadget, consider your needs, research features, and read reviews. Prioritize functionality and compatibility to ensure it seamlessly integrates into your lifestyle.",
        published:"Jan 2, 2024 by Mimi ",
        image:gad,
        aosDelay:"200",
    },
    {
        title:"How to choose perfect VR headset",
        subtitle:"For the perfect VR headset, prioritize comfort, display quality, and compatibility with your device. Research and compare options to find the ideal fit for your immersive experiences.",
        published:"May 20, 2024 by Riri ",
        image:boy ,
        aosDelay:"400",
    },
]
const Blogs = () => {
  return (
    <div className='my-12' id='blog'>
      <div className="container">
        <Heading title={"Recent News"} subtitle={"Explore Our Blogs"}/>
        <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
            {
                BlogData.map((data) =>(
                    <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.title} className='bg-white dark:bg-gray-900'>
                        <div className='overlay-hidden rounded-2xl mb-2'>
                            <img src={data.image} className='w-full h-[280px] object-cover hover:scale-105 duration-500 rounded-2xl' alt="" />
                        </div>
                        <div className='space-y-2'>
                            <p className='text-xs text-gray-500'>{data.published}</p>
                            <p className='font-bold line-clamp-1'>{data.title}</p>
                            <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Blogs
