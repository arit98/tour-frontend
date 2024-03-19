import React from 'react'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { IoArrowBackSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const ThankYouPage = () => {
    const navigate = useNavigate()
    return (
        <div className='flex items-center justify-center w-full h-screen flex-col'>
            <div className='flex items-center justify-center flex-col gap-2'>
                <IoIosCheckmarkCircleOutline className='text-5xl text-green-600' />
                <p className='text-5xl dancing-script'>Thank you!</p>
                <p className='text-xl font-semibold'>Your Tour is booked.</p>

                <a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out shadow-md rounded-full group w-full border border-gray-200 bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white active:to-white" onClick={() => {
                    navigate('/')
                }}>
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-[105%] bg-teal-500 group-hover:translate-x-0 ease">
                        <IoArrowBackSharp className='text-xl' />
                    </span>
                    <span class="absolute flex items-center justify-center w-full h-full text-teal-500 transition-all duration-300 transform group-hover:translate-x-full ease">Get Back</span>
                    <span class="relative invisible">Get back</span>


                </a>
            </div>
        </div>
    )
}

export default ThankYouPage