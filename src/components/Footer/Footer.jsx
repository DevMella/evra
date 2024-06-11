import React from 'react'
import { FaMobileAlt } from 'react-icons/fa'
import { FaFlag, FaInstagram, FaLocationArrow, FaTwitter, FaWhatsapp } from 'react-icons/fa6'

const FooterLinks =[
    {
        title:"Home",
        link:"/#"
    },
    {
        title:"About",
        link:"/#about"
    },
    {
        title:"Conatct",
        link:"/#contact"
    },
    {
        title:"Blog",
        link:"/#blog"
    },
]

const Footer = () => {
  return (
    <div className='dark:bg-gray-950 '>
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 ">
            <div className=' '>
                <a href="#" className='text-primary font-semibold text-2xl uppercase  sm:text-3xl'>evra &trade;</a>
                <p className='text-gray-600 lg:pr-24 pt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate perferendis facere eligendi?</p>
                <p className='text-gray-500 mt-4'>made with ❤ by mella &trade;</p>
            </div>
            <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                <div>
                    <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                    <ul className='space-y-3'>
                        {
                            FooterLinks.map((data,index) =>(
                                <li key={index}>
                                    <a href={data.link} className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-primary duration-300'>{data.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div>
                    <h1 className='text-xl font-bold sm:text-left mb-3'>Quick Links</h1>
                    <ul className='space-y-3'>
                        {
                            FooterLinks.map((data,index) =>(
                                <li key={index}>
                                    <a href={data.link} className='text-gray-600  dark:text-gray-400 hover:dark:text-white hover:text-primary duration-300'>{data.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className='col-span-2 sm:col-auto'>
                    <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
                    <div>
                        <div className='flex items-center gap-3'>
                            <FaLocationArrow/>
                            <p>Akale way, Abuja Road </p>
                        </div>
                        <div className='flex items-center gap-3 mt-6'>
                            <FaMobileAlt/>
                            <p>+234 915 181 0098</p>
                        </div>

                        <div className='flex items-center gap-6 mt-6'>
                            <a href="#"><FaInstagram className='text-3xl hover:text-primary duration-200'/></a>
                            <a href="https://web.whatsapp.com/"><FaWhatsapp className='text-3xl hover:text-primary duration-200'/></a>
                            <a href="#"><FaTwitter className='text-3xl hover:text-primary duration-200'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
