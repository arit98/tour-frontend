import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TestimonialCard from "./TestimonialCard";
import "../assets/styles/testimonialCarousel.css";

const TestimonialSection = ({ title, btn }) => {
  return (
    <div className="ml-0 md:m-auto items-center justify-between md:w-[73%] w-full select-none">
      <div className="flex items-start justify-center flex-col w-full">
        <p className="dancing-script px-2 bg-teal-400 rounded-xl">{btn}</p>
        <p className="mt-2 text-2xl">{title}</p>

       <TestimonialCard />
      </div>
    </div>
  );
};

export default TestimonialSection;
