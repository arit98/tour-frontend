import React from "react";
import CardContent from "./CardContent";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import CardContentSkeleton from "./CardContentSkeleton";
import { motion } from "framer-motion";

const FeaturedContent = ({ title, btn }) => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/search/get-featured-tours`);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-start justify-center flex-col my-4 w-[87%] m-auto select-none"
      >
        <p className="dancing-script px-2 bg-teal-400 rounded-xl">{btn}</p>
        <p className="text-2xl">{title}</p>
        <div className="flex items-start justify-center w-full flex-wrap gap-2">
          {loading ? (
            Array.from({ length: 7 }).map((_, index) => (
              <div key={index}>
                <CardContentSkeleton />
              </div>
            ))
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            featuredTours.map((tour) => (
              <div key={tour._id}>
                <CardContent tour={tour} />
              </div>
            ))
          )}
        </div>
      </motion.div>
    </>
  );
};

export default FeaturedContent;
