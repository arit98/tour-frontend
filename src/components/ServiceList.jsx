import React from 'react'
import ServiceCard from './ServiceCard'
import { TiWeatherPartlySunny } from "react-icons/ti";
import { RiGuideLine } from "react-icons/ri";
import { MdOutlineDashboardCustomize } from "react-icons/md";

const data = [
  {
    title: "Calculate Weather",
    text: "Our advanced weather forecasting service utilizes state-of-the-art algorithms to accurately calculate and predict weather patterns, providing you with timely and reliable updates to plan your activities with confidence.",
    icon: TiWeatherPartlySunny
  },
  {
    title: "Best Tour Guide",
    text: "Embark on a journey of discovery with our comprehensive tour guide, expertly crafted to illuminate every step of your adventure and ensure an unforgettable experience",
    icon: RiGuideLine
  },
  {
    title: "Customization",
    text: "Embark on a journey tailored to your desires with our customizable tour options, where every detail is crafted to suit your preferences and interests.",
    icon: MdOutlineDashboardCustomize
  },
];

const ServiceList = () => {
  return (
    <div className='flex items-center md:flex-row flex-col justify-evenly w-[92%] m-auto mt-16 md:gap-0 gap-8 select-none'>
        <div className='flex items-start justify-center flex-col gap-6'>
            <p className='dancing-script text-red-500 text-xl'>What we serve</p>
            <p className='text-3xl'>We offer services</p>
        </div>
        {
          data && data.map((d)=>(
            <ServiceCard data={d} />
          ))
        }
    </div>
  )
}

export default ServiceList