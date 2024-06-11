import React from 'react'
import pad from '../../assets/hero/pad.png'
import glasses from '../../assets/hero/glasses.png'
import speaker from '../../assets/hero/speaker.png'
import Button from '../Shared/Button'

const Category = () => {
  return (
    <div className='py-8' id='category2'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray/200 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Laptop</p>
                            <Button textColor="text-white" text="Browse" bgColor="bg-primary" />
                        </div>
                    </div>
                    <img src={pad} className='w-[280px] top-1/2 absolute bottom-0 -translate-y-1/2 -right-0' alt="" />
            </div>

            <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-start'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-gray-400'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Oculux</p>
                        <Button textColor="text-brandGreen" text="Browse" bgColor="bg-white" />
                    </div>
                </div>
                <img src={glasses} className='w-[220px] right-0 absolute bottom-0' alt="" />
            </div>

            <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-start'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Speakers</p>
                        <Button textColor="text-brandBlue" text="Browse" bgColor="bg-white" />
                    </div>
                </div>
                <img src={speaker} className='w-[260px] lg:left-14 absolute bottom-0 ' alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Category
