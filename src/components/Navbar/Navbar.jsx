import React from 'react'
import { IoMdSearch } from 'react-icons/io'
import { FaCaretDown, FaCartArrowDown, FaCartShopping } from 'react-icons/fa6'
import { data } from 'autoprefixer';
import { Link } from 'react-scroll';

const MenuLinks = [
  {
    id:1,
    name:"Home",
    link : "/#nav",
  },
  {
    id:2,
    name:"Shop",
    link : "/#shop",
    smooth:true,
    offset:0,
  },
  {
    id:3,
    name:"About",
    link : "/#about",
  },
  {
    id:4,
    name:"Blogs",
    link : "/#blog",
  },
];

const DropdownLinks = [
   {
    id: 1,
    name:"Trending Prducts",
    link : "/#category",
  },
  {
    id:2,
    name:"Best Selling",
    link : "/#category2",
  },
  {
    id:2,
    name:"Top Rated",
    link : "/#banner",
  },
]

const Navbar = ({handleOrderPopup}) => {
  return (
    <div className='nav bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='py-4'>
        <div className="container flex justify-between items-center">
            <div className='flex gap-7 items-center'>
                <a href="#" className='text-primary font-semibold text-2xl uppercase  sm:text-3xl'>evra &trade;</a>
                <div className='hidden lg:block'>
                    <ul className='flex items-center gap-4'> 
                      {
                        MenuLinks.map((data,index) =>(
                            <li key={index}><a href={data.link} className='inline-block px-4 font-bold text-gray-600n hover:text-black  dark:hover:text-white duration-200'>
                            {" "}
                            {data.name}
                            </a></li>
                        ))
                      }
                      <li className='relative cursor-pointer group'>
                        <a href="" className='flex items-center gap-[2px] font-semibold text-gray-600 dark:hover:text-white py-2'>
                          Quick Links
                          <span><FaCaretDown className='group-hover:rotate-180 duration-300'/></span>
                         </a>
                         <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white'>
                          <ul className='space-y-2'>
                            {DropdownLinks.map((data,index)=>(
                              <li key={index}>
                                <a className='text-gray-500 hover:text-black duration-200 dark:hover:text-white p-2 hover:bg-primary/20 rounded-md font-semibold inline-block w-full ' href={data.link}>{data.name}</a>
                              </li>
                            ))}
                          </ul>
                         </div>
                      </li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-between items-center gap-7'>
              <div className='relative group hidden sm:block '>
                <input type="text" placeholder='Search' className='search-bar' name="" id="" />
                <IoMdSearch className='text-xl text-gray-600 group-hover:text-primary duration-200 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3'/> 
              </div>
              <button className='relative p-3' onClick={handleOrderPopup}>
                <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400'/>
                <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>4</div>
              </button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Navbar