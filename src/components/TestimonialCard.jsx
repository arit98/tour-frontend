import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const TestimonialCard = () => {
  const {
    data: fansComments,
    loading,
    error,
  } = useFetch(`${BASE_URL}/get-all-fans`);

  const settings = {
    className: "-ml-12 w-full",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          vertical: true,
          verticalSwiping: true,
        },
      },
    ],
  };
  return (
    <div className="w-full md:w-5/6 md:mx-auto ml-1">
      <div className="mt-10 md:ml-0 pl-24">
        <Slider {...settings}>
          {loading ? (
            Array.from({ length: 8 }).map((_, index) => <div key={index}></div>)
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            fansComments.map((comment) => (
              <div
                key={comment.name}
                className="bg-white h-[450px] w-full text-black rounded-xl"
              >
                <div className="h-36 flex justify-center items-center rounded-t-xl">
                  <img draggable="false"
                    src={comment.photo}
                    alt=""
                    className="h-24 w-24 rounded-full"
                  />
                </div>

                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-xl font-semibold">{comment.name}</p>
                  <p className="text-center">{comment.review}</p>
                </div>
              </div>
            ))
          )}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCard;
