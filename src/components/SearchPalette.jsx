import React, { useRef, useState } from "react";
import { IoLocationOutline, IoPeopleOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import axios from "axios"; // Import axios
import { BASE_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";

const SearchPalette = () => {
  const navigate = useNavigate();
  const [isdistance, setIsDistance] = useState("");
  const [isMaxPeople, setIsMaxPeople] = useState("");

  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);

  const searchHandler = async () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === "" || distance === "" || maxGroupSize === "") {
      return alert("All field required!");
    }

    try {
      const res = await axios.get(
        `${BASE_URL}/tours/search/get`,
        {
          params: {
            city: location,
            distance: distance,
            maxGroupSize: maxGroupSize
          }
        }
      );

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
    <div className="w-[88%] m-auto flex items-center justify-center flex-col">
      <div className="flex items-center justify-evenly rounded-2xl px-4 py-2 shadow-lg border-[0.1px] mt-12">
        <div className="flex items-center justify-center flex-col">
          <p className="text-xs font-semibold">Location</p>
          <input
            className="text-xs outline-none text-center"
            placeholder="Where are you going?"
            ref={locationRef}
          />
        </div>
        <IoLocationOutline />
        <div className="flex items-center justify-center flex-col">
          <p className="text-xs font-semibold">Distance</p>
          <input
            type="number"
            value={isdistance || 0}
            onChange={handleChangeDis}
            className="text-xs outline-none text-center"
            placeholder="Distance k/m"
            ref={distanceRef}
          />
        </div>
        <IoPeopleOutline />
        <div className="flex items-center justify-center flex-col">
          <p className="text-xs font-semibold">Max People</p>
          <input
            type="number"
            value={isMaxPeople || 0}
            onChange={handleChangeMax}
            className="text-xs outline-none text-center"
            ref={maxGroupSizeRef}
          />
        </div>
        <button
          className="flex items-center justify-center flex-col bg-teal-400 p-2 rounded-xl"
          onClick={searchHandler}
        >
          <IoIosSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchPalette;
