import React from 'react'
import HeroSection from '../components/HeroSection'
import ServiceList from '../components/ServiceList'
import FeaturedContent from '../components/FeaturedContent'
import ExperienceSection from '../components/ExperienceSection'
import GallerySection from '../components/GallerySection'
import TestimoniSection from '../components/TestimoniSection'
import NewsLetter from '../components/NewsLetter'

const HomePage = () => {
    return (
        <div className='w-full'>
            <HeroSection />
            <div className='h-12'></div>
            <ServiceList />
            <div className='h-12'></div>
            <FeaturedContent title="Our Featured Tours" btn="Explore" />
            <div className='h-12'></div>
            <ExperienceSection title="With all experience we will serve you" btn="Experience" />
            <div className='h-12'></div>
            <GallerySection title="Visit our customers tour gallery" btn="Gallery" />
            <div className='h-12'></div>
            <TestimoniSection title="What our fan says about us" btn="Fans love" />
            <div className='h-12'></div>
            <NewsLetter title="Subscribe now to get useful travelling information" btn="Experience" />
        </div>
    )
}

export default HomePage