import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { galleryImages } from '../assets/data/galleryImageData';

const MasonryImagesGallery = () => {
    return (
        <div className='w-full mt-8'>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 3 }}>
                <Masonry gutter='1rem'>
                    {galleryImages.map((item, index) => (
                        <img src={item} key={index} alt={`Image ${index}`} className='w-full block rounded-lg transition-all hover:scale-90 cursor-pointer' />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
};

export default MasonryImagesGallery;
