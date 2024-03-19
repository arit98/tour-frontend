import React from 'react'
import MasonryImagesGallery from './MasonryImagesGallery'

function GallerySection({ title, btn }) {
    return (
        <div className='flex items-center justify-between w-[73%] m-auto select-none'>
            <div className='flex items-start justify-center flex-col w-full'>
                <p className='dancing-script px-2 bg-teal-400 rounded-xl'>{btn}</p>
                <p className='mt-2 text-2xl'>{title}</p>
                <MasonryImagesGallery />
            </div>
        </div>
    )
}

export default GallerySection