import React, { useEffect, useRef, useState } from "react";
import { IoLocationOutline, IoPeopleOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import axios from "axios"; // Import axios
import { BASE_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";

const SearchPalette = () => {
  const navigate = useNavigate();
  const [isDistance, setIsDistance] = useState("");
  const [isMaxPeople, setIsMaxPeople] = useState("");

  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);

  const searchHandler = async () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === "" || distance === "" || maxGroupSize === "") {
      return alert("All fields required!");
    }

    try {
      const res = await axios.get(`${BASE_URL}/tours/search/get`, {
        params: {
          city: location,
          distance: distance,
          maxGroupSize: maxGroupSize,
        },
      });

      navigate(
        `/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
        { state: res.data.data }
      );
    } catch (error) {
      console.error("Error occurred:", error);
      alert("Something went wrong");
    }
  };

  const handleChangeMax = (event) => {
    const inputValue = event.target.value;
    if (inputValue >= 0 || inputValue === "") {
      setIsMaxPeople(inputValue);
    }
  };

  const handleChangeDis = (event) => {
    const inputValue = event.target.value;
    if (inputValue >= 0 || inputValue === "") {
      setIsDistance(inputValue);
    }
  };



  return (
    <div className="w-full md:max-w-screen-sm mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between rounded-2xl p-2 shadow-lg border border-gray-200 my-12">
        <div className="mb-4 md:mb-0">
          <p className="text-xs text-center font-semibold">Location</p>
          <input
            className="text-xs outline-none text-center w-full"
            placeholder="Where are you going?"
            ref={locationRef}
          />
        </div>
        <IoLocationOutline className="mb-4 md:mb-0" />
        <div className="mb-4 md:mb-0">
          <p className="text-xs text-center font-semibold md:mr-4">Distance</p>
          <input
            type="number"
            value={isDistance || 0}
            onChange={handleChangeDis}
            className="text-xs outline-none text-center w-full"
            placeholder="Distance (km)"
            ref={distanceRef}
          />
        </div>
        <IoPeopleOutline className="mb-4 md:mb-0" />
        <div className="mb-4 md:mb-0">
          <p className="text-xs font-semibold text-center md:mr-4">Max People</p>
          <input
            type="number"
            value={isMaxPeople || 0}
            onChange={handleChangeMax}
            className="text-xs outline-none text-center w-full"
            ref={maxGroupSizeRef}
          />
        </div>
        <button
          className="bg-teal-400 p-2 rounded-xl w-full md:w-auto flex items-center justify-center md:justify-start"
          onClick={searchHandler}
        >
          <IoIosSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchPalette;
