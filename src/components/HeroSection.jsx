import React from 'react'
import SearchPalette from './SearchPalette'

const HeroSection = () => {
    return (
        <section className='mt-20 overflow-x-hidden select-none md:w-full w-80 m-auto'>
            <div className="px-2 lg:flex lg:flex-row lg:items-center">
                <div className="w-full lg:w-1/2">
                    <div className="my-10 lg:my-0 lg:px-10">
                        <p className='dancing-script px-2 bg-teal-400 w-fit rounded-2xl text-lg mb-4'>Know Before You Go</p>
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl">
                            Travelling opens the door to create <span className='text-teal-400'>memories</span>
                        </h2>
                        <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
                            Embark on a journey of discovery and wonder with our curated travel experiences. Let us guide you to the most breathtaking destinations around the globe.
                        </p>
                        <SearchPalette />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex md:flex-row flex-col items-center justify-center gap-4">
                    <div className='md:pt-[2rem]'>
                    <iframe
                            className='rounded-xl'
                            width="220"
                            height="426"
                            src="https://www.youtube.com/embed/lJFPDZ-UYN0?modestbranding=1"
                            title="YouTube Shorts video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe> 
                    </div>
                    <div className='md:pt-[2rem] md:mt-12'>
                        <iframe
                            className='rounded-xl'
                            width="220"
                            height="426"
                            src="https://www.youtube.com/embed/SXAVHz9Vi8A?modestbranding=1"
                            title="YouTube Shorts video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    </div>
                    <div className='md:pt-[2rem] md:mt-24'>
                        <iframe
                            className='rounded-xl'
                            width="220"
                            height="426"
                            src="https://www.youtube.com/embed/d4epkF7ngak?modestbranding=1"
                            title="YouTube Shorts video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HeroSection