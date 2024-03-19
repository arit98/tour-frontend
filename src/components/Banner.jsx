import React from 'react'
import Tour from "../assets/images/tour.jpg"

const Banner = ({title}) => {
  return (
    <div className='w-full h-80 overflow-hidden flex items-center justify-center pt-12'>
        <img className='w-full h-full object-cover' src={Tour} alt="Tour" />
        <p className='absolute text-white text-3xl'>{title}</p>
      </div>
  )
}

export default Banner