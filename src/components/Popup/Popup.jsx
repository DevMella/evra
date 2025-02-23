import React from 'react'
import Button from '../Shared/Button'
import { IoCloseOutline } from 'react-icons/io5'

const Popup = ({orderPopup, handleOrderPopup}) => {
  return (
    <> 
    {orderPopup && (
        <div>
            <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop:blur-sm'>
            <div className='w-[400px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-xl py-8 px-5'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-bold'>Order Now</h1>
                    <div>
                        <IoCloseOutline onClick={handleOrderPopup} className='text-2xl cursor-pointer'/>
                    </div>
                </div>
                <div className='mt-6'>
                    <form action="">
                        <input type="text" required placeholder='Name' className='form-input' name="" id="" />
                        <input type="email" required placeholder='Email' className='form-input' name="" id="" />
                        <input type="text" required placeholder='Address' className='form-input' name="" id="" />
                        <div className='flex justify-center'>
                            <Button text={"Order Now"} bgColor={"bg-primary"} textColor={"text-white"}/>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
        )
    }
    </>
  )
}

export default Popup
