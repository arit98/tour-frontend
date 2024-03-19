import React from 'react'
import ExperienceImg from "../assets/images/traveler.webp"

const ExperienceSection = ({ title, btn }) => {
  return (
    <div className='flex items-center justify-between my-4 w-[73%] m-auto select-none'>
      <div className='flex items-start justify-center flex-col'>
      <p className='dancing-script px-2 bg-teal-400 rounded-xl'>{btn}</p>
      <p className='mt-2 text-2xl w-64'>{title}</p>
      <p className='mt-4 w-64'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className='flex items-center justify-between gap-12 mt-16'>
      </div>
        <div className='flex items-center justify-center gap-12'>
        <div className='flex items-center justify-center flex-col gap-2'>
          <p className='bg-teal-400 w-16 h-16 flex items-center justify-center rounded-lg text-xl text-white'>12k+</p>
          <p className='text-md'>Success trip</p>
        </div>
        <div className='flex items-center justify-center flex-col gap-2'>
          <p className='bg-teal-400 w-16 h-16 flex items-center justify-center rounded-lg text-xl text-white'>2k+</p>
          <p className='text-md'>Regular clients</p>
        </div>
        <div className='flex items-center justify-center flex-col gap-2'>
          <p className='bg-teal-400 w-16 h-16 flex items-center justify-center rounded-lg text-xl text-white'>15</p>
          <p className='text-md'>Years experience</p>
        </div>
        </div>
    </div>
      <img width="500" height="500" draggable="false" src={ExperienceImg} alt="Experience" />
    </div>
  )
}

export default ExperienceSection