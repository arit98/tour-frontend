import React from 'react'
import Tour from "../assets/images/tour.jpg"

const Banner = ({title}) => {
  return (
    <div className='w-full m-auto h-[365px] overflow-hidden flex items-center justify-center'>
        <img draggable="false" className='w-full h-full object-cover' src={Tour} alt="Tour" />
        <p className='absolute text-white text-3xl'>{title}</p>
      </div>
  )
}

export default Banner