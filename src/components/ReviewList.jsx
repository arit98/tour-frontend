import React from 'react'
import ImgAvatar from "../assets/images/avatar.jpg"
import { FaStar } from 'react-icons/fa6'

const ReviewList = () => {
    return (
        <div className='h-12 flex items-start mt-12 mb-4'>
            <div className='w-12 h-12'>
                <img src={ImgAvatar} alt="" />
            </div>
            <span className='flex items-start justify-center flex-col w-full'>
                <p className='font-bold'>muhib</p>
                <span className='flex items-center justify-between w-full'>
                    <p className='font-light text-sm'>January 18, 2023</p>
                    <span className='flex items-center gap-[.5px]'>5<FaStar /></span>
                </span>
                <p className='mt-2'>Amazing Tour</p>
            </span>
        </div>
    )
}

export default ReviewList