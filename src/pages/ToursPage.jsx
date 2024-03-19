import React, { useEffect, useState } from 'react'
import FeaturedContent from '../components/FeaturedContent'
import SearchPalette from '../components/SearchPalette'
import Banner from '../components/Banner'
import NewsLetter from "../components/NewsLetter"
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'
import CardContent from '../components/CardContent'
import CardContentSkeleton from '../components/CardContentSkeleton'

const ToursPage = () => {
  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)

  const {data: tours} = useFetch(`${BASE_URL}/tours?page=${page}`)
  const {data: tourCount, loading, error} = useFetch(`${BASE_URL}/tours/search/get-tour-count`)

  useEffect(() => {
    const pages = Math.ceil(tourCount / 8)
    setPageCount(pages)
    window.scrollTo(0,0)
  }, [page, tourCount])
  return (
    <div className='w-[87%] m-auto flex justify-center items-start flex-col'>
      <Banner title="All Tours" />
      <SearchPalette />
      <div className="flex w-[87%] m-auto items-start justify-center flex-wrap gap-2">
          {loading ? (
            Array.from({ length: 7 }).map((_, index) => (
              <div key={index}>
                <CardContentSkeleton />
              </div>
            ))
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            tours.map((tour) => (
              <div key={tour._id}>
                <CardContent tour={tour} />
              </div>
            ))
          )}
        </div>
      <div className='flex items-center justify-center w-full gap-4 mt-8'>
        {
          [...Array(pageCount).keys()].map(number => (
            <span className={`${page==!number ? 'border-2 border-teal-500': 'bg-teal-500 text-white'} px-4 font-bold rounded-full cursor-pointer border-2 border-teal-500`} key={number} onClick={()=>setPage(number)}>{number + 1}</span>
          ))
        }
      </div>
      <div className='h-12'></div>
      <NewsLetter />
    </div>
  )
}

export default ToursPage