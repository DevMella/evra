import React from 'react'
import earphones from '../../assets/hero/earphones.png'
import watch from '../../assets/hero/watch.png'
import laptop from '../../assets/hero/laptop.png'
import Button from '../Shared/Button'

const Category = () => {
  return (
    <div className='py-8' id='category'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex lg:items-end items-start'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-gray-400'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
                        <Button textColor="text-white" text="Browse" bgColor="bg-primary" />
                    </div>
                </div>
                <img src={earphones} className='lg:w-[220px] w-full right-0 absolute bottom-0' alt="" />
            </div>

            <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex lg:items-end items-start'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Gadget</p>
                        <Button textColor="text-brandYellow" text="Browse" bgColor="bg-white" />
                    </div>
                </div>
                <img src={watch} className='lg:w-[160px] w-full lg:right-12 absolute bottom-0 lg:top-[-20px]' alt="" />
            </div>

            <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Laptop</p>
                        <Button textColor="text-primary" text="Browse" bgColor="bg-white" />
                    </div>
                </div>
                <img src={laptop} className='w-[330px] top-1/2 absolute bottom-0 -translate-y-1/2 -right-0' alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Category
