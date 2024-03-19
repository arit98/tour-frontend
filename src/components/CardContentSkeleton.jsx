import React from 'react'

const CardContentSkeleton = () => {
  return (
    <div className="w-[255px] h-auto pb-2 rounded-md border mt-8 animate-pulse">
        <div className="h-44 bg-gray-200 rounded-md"></div>
        <div className="p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center text-sm gap-1">
            </span>
            <span className="flex items-center text-sm gap-1">
            </span>
          </div>
          <h1 className="text-md font-semibold bg-gray-200 h-6 w-4/5 mb-2"></h1>
          <div className="flex items-center justify-between">
            <p className="mt-3 text-md font-medium text-gray-600 bg-gray-200 h-5 w-20"></p>
            <button
              type="button"
              className="mt-4 rounded-sm bg-gray-400 px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm"
              disabled
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
  )
}

export default CardContentSkeleton