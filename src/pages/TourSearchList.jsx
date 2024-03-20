import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import { useLocation } from "react-router-dom";
import NewsLetter from "../components/NewsLetter";
import CardContent from "../components/CardContent";
import SearchPalette from "../components/SearchPalette";

const TourSearchList = () => {
  const location = useLocation();

  const [data, setData] = useState(location.state || []);

  useEffect(() => {
    setData(location.state || []);
  }, [location.state]);

  return (
    <>
      <Banner title="Tour Search Result" />
      <div className="mb-16">
        <SearchPalette />
        {data.length === 0 ? (
          <div className="h-96 flex items-center justify-center">
            <h4 className="mt-16 dancing-script text-4xl text-red-500">No Tour Found</h4>
          </div>
        ) : (
          data?.map((tour) => (
            <div className="flex items-start justify-center flex-wrap gap-2" key={tour._id}>
              <CardContent tour={tour} />
            </div>
          ))
        )}
      </div>
      <NewsLetter />
    </>
  );
};

export default TourSearchList;
