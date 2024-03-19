import React from 'react'
import ServiceCard from './ServiceCard'
import { TiWeatherPartlySunny } from "react-icons/ti";
import { RiGuideLine } from "react-icons/ri";
import { MdOutlineDashboardCustomize } from "react-icons/md";

const ServiceList = () => {
    const card1 = "Calculate Weather"
    const card2 = "Best Tour Guide"
    const card3 = "Customization"
  return (
    <div className='flex items-center justify-evenly w-[92%] m-auto mt-16 select-none'>
        <div className='flex items-start justify-center flex-col gap-6'>
            <p className='dancing-script text-red-500 text-xl'>What we serve</p>
            <p className='text-3xl'>We offer services</p>
        </div>
        <ServiceCard title={card1} icon={ TiWeatherPartlySunny } />
        <ServiceCard title={card2} icon={ RiGuideLine } />
        <ServiceCard title={card3} icon={ MdOutlineDashboardCustomize } />
    </div>
  )
}

export default ServiceList