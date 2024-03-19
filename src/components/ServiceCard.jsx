import React from 'react'

const ServiceCard = ({title, icon: Icon}) => {
    return (
        <div className='w-[300px] flex items-start justify-center flex-col border-r-2 border-b-2 rounded-br-lg border-teal-400 p-6 gap-2'>
            <div className='h-10 w-10 bg-teal-400 flex items-center justify-center text-2xl rounded-full'>
                {Icon && <Icon />}
            </div>
            <p className='text-lg font-semibold'>{title}</p>
            <p className='text-sm'>Lorem ipsum dolor, deserunt odio repellendus excepturi odio repellendus excepturi</p>
        </div>
    )
}

export default ServiceCard