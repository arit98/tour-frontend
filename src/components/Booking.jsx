import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../utils/config";
import { FaStar } from "react-icons/fa6";

const Booking = ({ tour, avgRating, totalRating }) => {
  const { title, price, reviews } = tour;

  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const serviceFee = 10;
  
  const [booking, setBooking] = useState({
      userId: user && user._id,
      userEmail: user && user.email,
      tourName: title,
      fullName: "",
      phone: "",
      guestSize: 1,
      bookAt: "",
    });
    
    const totalAmount =
      Number(price) * Number(booking.guestSize) + Number(serviceFee);

  const submitHandlerBookNow = async (e) => {
    e.preventDefault();

    try {
      if (!user || user === undefined || user === null) {
        return toast.warn("Please sign in", { position: "top-center" });
      }

      const res = await axios.post(`${BASE_URL}/booking`, booking);

      if (!res.statusText == "Ok") {
        toast.error("Check your internet connection")
      }else{
        navigate("/thank-you");
      }
    } catch (error) {
        console.log(error)
    }
  };

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <div className="w-1/2 h-fit border-2 rounded-lg">
      <form onSubmit={submitHandlerBookNow}>
        <div className="px-4 py-10 w-full">
          <span className="flex items-center justify-between">
            <p className="">
              <span className="text-2xl font-bold">${price}</span>/per person
            </p>
            <span className="flex items-center gap-1">
              <FaStar className="text-amber-400" />
              <span className="flex items-center justify-center gap-1">
                {avgRating === 0 ? null : avgRating}
                {totalRating === 0 ? (
                  "Not Rated"
                ) : (
                  <span>({reviews?.length})</span>
                )}
              </span>
            </span>
          </span>
          <hr className="mt-6" />
          <div className="w-full px-8 mt-4">
            <p className="text-xl font-semibold">Information</p>
            <div className="px-4 py-6 flex items-center justify-around flex-col gap-4 border-2 rounded-lg mt-2">
              <input
                onChange={handleChange}
                className="w-full px-2 outline-none border-b-2"
                type="text"
                placeholder="Full Name"
                id="fullName"
              />
              <input
                onChange={handleChange}
                className="w-full px-2 outline-none border-b-2"
                type="number"
                placeholder="Phone"
                id="phone"
              />
              <span className="flex items-center gap-2">
                <input
                  onChange={handleChange}
                  className="w-full px-2 outline-none border-b-2"
                  type="date"
                  id="bookAt"
                />
                <input
                  onChange={handleChange}
                  className="w-1/2 px-2 outline-none border-b-2"
                  type="number"
                  placeholder="Guest"
                  id="guestSize"
                />
              </span>
            </div>
          </div>

          <div className="px-3 mt-8 flex items-stretch justify-center flex-col gap-4">
            <span className="flex items-center justify-between">
              <p>$99 x 1 person</p>
              <p>$99</p>
            </span>
            <span className="flex items-center justify-between">
              <p>Service charge</p>
              <p>${serviceFee}</p>
            </span>
            <span className="flex items-center justify-between font-bold">
              <p>Total</p>
              <p>${totalAmount}</p>
            </span>
            <input
              type="submit"
              className="w-full bg-teal-400 rounded-full py-2 mt-4 text-white cursor-pointer outline-none"
              value="Book Now"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Booking;
