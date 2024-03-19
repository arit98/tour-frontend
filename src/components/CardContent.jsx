import React from "react";
import { FaStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";

const CardContent = ({ tour }) => {
  const { _id, city, reviews, title, price, featured } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);
  return (
    <div className="md:w-[255px] w-full h-auto pb-2 rounded-md border mt-8">
      <div className="relative">
        {" "}
        <img
          draggable="false"
          src={tour.photo}
          alt="Location"
          className="h-auto w-full rounded-md object-cover"
        />
        {featured === true ? (
          <p className="absolute bottom-0 right-0 w-max h-max z-10 bg-[#212121] p-2 text-xs rounded-sm text-white bg-opacity-80 cursor-default">
            Featured
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center text-sm gap-1">
            <IoLocationOutline />
            {city}
          </span>
          <span className="flex items-center text-sm gap-1">
            <FaStar className="text-amber-300" />
            {avgRating === 0 ? null : avgRating}
            {totalRating === 0 ? "Not Rated" : <span>({reviews.length})</span>}
          </span>
        </div>
        <h1 className="text-md font-semibold hover:text-teal-400 transition-all">
          <Link to={`/tours/${_id}`}>{title}</Link>
        </h1>
        <div className="flex items-center justify-between">
          <p className="mt-3 text-md font-medium text-gray-600">
            <span className="text-md text-teal-400 font-bold">₹{price}</span>{" "}
            per person
          </p>
          <button
            type="button"
            className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <Link to={`/tours/${_id}`}>Book Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
