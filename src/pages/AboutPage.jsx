import React from 'react'
import { MapPin } from 'lucide-react'

const locations = [
  {
    title: 'Bengaluru office',
    timings: 'Mon-Sat 9am to 5pm.',
    address: '100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN',
  },
  {
    title: 'Head office',
    timings: 'Mon-Sat 9am to 5pm.',
    address: '12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN',
  },
  {
    title: 'Karnataka office',
    timings: 'Mon-Sat 9am to 5pm.',
    address: '42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN',
  },
]

const AboutPage = () => {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
        <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
          <p className="text-xs font-semibold leading-normal md:text-sm">About the company</p>
        </div>
        <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
          Made with love, right here in India
        </p>
        <p className="max-w-4xl text-base text-gray-600 md:text-xl">
             
        </p>
      </div>
      <div className="w-full space-y-4">

      </div>
      {/* locations */}
      <div className="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around">
        {locations.map((location) => (
          <div key={location.title} className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
            <MapPin className="h-5 w-5" />
            <p className="w-full text-xl font-semibold  text-gray-900">{location.title}</p>
            <p className="w-full text-base text-gray-700">{location.timings}</p>
            <p className="text-sm font-medium">{location.address}</p>
          </div>
        ))}
      </div>
      <hr className="mt-20" />
    </div>
  )
}

export default AboutPage