import React from 'react'
import trek from '../../assets/sec/trek.png'
import trek1 from '../../assets/sec/trek1.png'
import trek2 from '../../assets/sec/trek2.png'
import trek3 from '../../assets/sec/trek3.png'
import trek4 from '../../assets/sec/trek4.png'

const Partners = () => {
  return (
    <div data-aos="zoom-out" className='my-20 hidden md:block bg-gray-200 dark:bg-white/10'>
      <div className="container">
        <div className="grid grid-cols-5 place-items-center gap-3 opacity-50">
            <img src={trek} className='w-[80px] dark-invert' alt="" />
            <img src={trek1} className=' dark-invert' alt="" />
            <img src={trek2} className=' dark-invert' alt="" />
            <img src={trek3} className='w-[200px] dark-invert mt-[-20px]' alt="" />
            <img src={trek4} className='w-[150px] dark-invert' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Partners
