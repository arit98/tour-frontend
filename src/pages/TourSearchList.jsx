import React, { useState } from "react";
import Banner from "../components/Banner";
import { useLocation } from "react-router-dom";
import NewsLetter from "../components/NewsLetter";
import CardContent from "../components/CardContent";

const TourSearchList = () => {
  const location = useLocation();

  const [data] = useState(location.state);
  return (
    <>
      <Banner title="Tour Search Result" />
      <div className="mb-16">
        {data.length === 0 ? (
          <div className="h-96 flex items-center justify-center">
            <h4 className="mt-16 dancing-script text-4xl text-red-500">No Tour Found</h4>
          </div>
        ) : (
          data?.map((tour) => (
            <div className="flex items-start justify-center flex-wrap gap-2">
                <div key={tour._id}>
                  <CardContent tour={tour} />
                </div>
            </div>
          ))
        )}
      </div>
      <NewsLetter />
    </>
  );
};

export default TourSearchList;
