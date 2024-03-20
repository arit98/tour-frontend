import React from 'react'
import Img from "../assets/images/male-tourist.png"

const NewsLetter = ({ title }) => {
    return (
        <div className='w-full m-auto bg-[#c1dcee]'>
            <div className='flex md:flex-row flex-col items-center justify-between w-[73%] m-auto select-none'>
            <div className='flex items-start justify-center flex-col'>
                <p className='mt-2 text-3xl w-full font-semibold'>{title}</p>
                <div className='flex items-center justify-between gap-12 mt-8'>
                </div>
                <div className='w-full h-12 flex items-center justify-between pl-4 bg-white rounded-md'>
                    <input type="text" placeholder='Enter email' className='outline-none pl-2 bg-inherit w-full mr-4' />
                    <p className='bg-[#f8a33f] mr-[4px] p-2 rounded-md text-sm font-semibold'>Subscribe</p>
                </div>
                <p className='mt-8 w-full'>📸 Share and connect with fellow adventurers, share photos, and exchange tips and stories in our vibrant community.</p>
            </div>
            <img draggable="false" width="500" height="500" src={Img} alt="Experience" />
        </div>
        </div>
    )
}

export default NewsLetter